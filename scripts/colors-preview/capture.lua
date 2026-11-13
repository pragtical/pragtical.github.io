-- Run inside an isolated sample Git project with SCM, LSP and LuaLS enabled.
local core = require "core"
local config = require "core.config"
local style = require "core.style"
local json = require "core.json"
local lsp = require "plugins.lsp"
local scm = require "plugins.scm"
local autocomplete = require "plugins.autocomplete"
local output = assert(os.getenv("PRAGTICAL_PREVIEW_OUTPUT"))

local function settle(seconds)
  local deadline = system.get_time() + (seconds or 0.5)
  repeat
    core.redraw = true
    coroutine.yield(0.03)
  until system.get_time() >= deadline
  core.root_view:update()
  core.redraw = true
  core.step(0)
end

core.add_thread(function()
  local ok, err = xpcall(function()
    core.fps = 60
    system.set_window_mode(core.window, "normal")
    system.set_window_size(core.window, 1920, 1080, 0, 0)
    settle(2)
    core.root_view:open_doc(core.open_doc("catalog.lua"))
    local view = core.root_view:open_doc(core.open_doc("main.lua"))
    view.doc:set_selection(8, 23)
    local deadline = system.get_time() + 30
    while not view.doc.lsp_open or #lsp.get_active_servers(view.doc.filename, true) == 0 do
      assert(system.get_time() < deadline, "LuaLS did not initialize")
      settle(0.1)
    end
    settle(5)
    assert(next(scm.get_stats()), "SCM did not detect the sample repository")
    -- A real edit requests real language-server member completions.
    view.doc:remove(8, 23, 8, #view.doc.lines[8])
    view.doc:set_selection(8, 23)
    autocomplete.close()
    lsp.request_completion(view.doc, 8, 23, true)
    deadline = system.get_time() + 15
    while not autocomplete.is_open() do
      assert(system.get_time() < deadline, "No LSP completion results")
      settle(0.1)
    end
    assert(autocomplete.map_manually["lua-language-server"], "Expected real LuaLS completions")
    settle()

    local names = {}
    for name, value in pairs(style) do
      if type(value) == "table" and type(value[1]) == "number" then names[value] = name end
    end
    for name, value in pairs(style.syntax) do names[value] = "syntax." .. name end
    for _, name in ipairs({"normal", "symbol", "comment", "keyword", "keyword2", "number", "literal", "string", "operator", "function"}) do
      names[style.syntax[name]] = "syntax." .. name
    end
    local function color(value)
      return {role = names[value], rgba = {value[1], value[2], value[3], value[4] or 255}}
    end
    local operations, originals = {}, {}
    local function wrap(name, callback)
      originals[name] = renderer[name]
      renderer[name] = function(...)
        callback(...)
        return originals[name](...)
      end
    end
    wrap("set_clip_rect", function(x, y, w, h)
      operations[#operations + 1] = {kind = "clip", x = x, y = y, w = w, h = h}
    end)
    wrap("draw_rect", function(x, y, w, h, fill)
      operations[#operations + 1] = {kind = "rect", x = x, y = y, w = w, h = h, color = color(fill)}
    end)
    wrap("draw_poly", function(points, fill)
      operations[#operations + 1] = {kind = "poly", points = points, color = color(fill)}
    end)
    wrap("draw_text", function(font, text, x, y, fill, tab)
      text = tostring(text)
      local glyphs = {}
      for index, codepoint in utf8.codes(text) do
        glyphs[#glyphs + 1] = {codepoint, font:get_width(text:sub(1, index - 1), tab)}
      end
      operations[#operations + 1] = {
        kind = "text", font = font:get_path(), size = font:get_size(),
        text = text, glyphs = glyphs, x = x, y = y, color = color(fill)
      }
    end)
    wrap("draw_canvas", function() error("Unexpected raster canvas in SVG capture") end)
    wrap("draw_pixels", function() error("Unexpected raster pixels in SVG capture") end)
    core.redraw = true
    core.step(0)
    for name, original in pairs(originals) do renderer[name] = original end
    local width, height = core.window:get_size()
    assert(width == 1920 and height == 1080 and SCALE == 2)
    assert(renderer.to_canvas(core.window, 0, 0, width, height):save_image(output .. "/reference.png"))
    local file = assert(io.open(output .. "/draw-list.json", "wb"))
    file:write(json.encode({width = width, height = height, operations = operations}))
    file:close()
    print("Captured " .. #operations .. " real renderer operations")
    lsp.stop_servers()
  end, debug.traceback)
  if not ok then print(err); pcall(lsp.stop_servers) end
  core.quit(true, ok and 0 or 1)
end)
