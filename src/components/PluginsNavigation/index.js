import React, { useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import showdown from 'showdown';
import hljs from 'highlight.js';

import './plugins.css';
import './highlight.css';
import './markdown.css';

/*
 * Manifest based plugins browser.
 * @license MIT Pragtical Team
 */

/**
 * A plugin details.
 * @typedef {Object} PluginInfo
 * @property {string} id
 * @property {(string|null)} name
 * @property {string} description
 * @property {(string|null)} icon
 * @property {string} version
 * @property {string} mod_version
 * @property {(string|null)} path
 * @property {(string|null)} remote
 * @property {number} search_score
 */

/**
 * The list of plugins.
 * @typedef {Object} PluginsList
 * @property {PluginInfo[]} addons
 */

class Plugins {
  /**
   * @param {Object} options
   */
  constructor(options) {
    /** @type {PluginsList} */
    this.plugins = [];

    this.plugins_icon = "/img/plugin.svg";

    /** @type {string[]} */
    this.featured_plugins = [
      "autoinsert",
      "bracketmatch",
      "editorconfig",
      "ephemeral_tabs",
      "lsp",
      "selectionhighlight"
    ];

    /** @type {HTMLElement} */
    this.page_plugins = document.querySelector(options.page_plugins);
    /** @type {HTMLElement} */
    this.page_info = document.querySelector(options.page_info);
    /** @type {HTMLElement} */
    this.query = document.querySelector(options.query);
    /** @type {HTMLElement} */
    this.submit = document.querySelector(options.submit);
    /** @type {HTMLElement} */
    this.results = document.querySelector(options.results);
    /** @type {NodeListOf<HTMLElement>} */
    this.category_buttons = document.querySelectorAll(options.category_buttons);

    /** @type {string} */
    this.currentCategory = "any";

    /** @type {number} */
    this.currentPage = 0;

    /** @type {{title: string, getItems: function}|null} */
    this.currentSection = null;

    this.text = options.text;

    var that = this;
    this.query.addEventListener("keypress", function(event){
      if(event.key == "Enter") {
        that.search();
      }
    });
    this.submit.addEventListener("click", function(){
      that.search();
    });

    for (var i = 0; i < this.category_buttons.length; i++) {
      this.category_buttons[i].addEventListener("click", function(){
        var category = this.getAttribute("data-category");
        that.selectCategory(category);
      });
    }

    fetch("https://raw.githubusercontent.com/pragtical/plugins/master/manifest.json")
      .then((response) => response.json())
      .then((json) => this.plugins = json)
      .then(() => {
        if(window.location.search) {
          this.loadPath(window.location.search);
        } else {
          this.render()
        }
      })
    ;

    showdown.setOption('openLinksInNewWindow', true);
    showdown.setFlavor('github');
    this.md_converter = new showdown.Converter();

    /** @type {HTMLElement} */
    this.shown_plugin = null;

    window.addEventListener("popstate", function() {
      that.loadPath(window.location.search);
    });
  }

  /**
   * Set a list of plugin id's to be listed as featured.
   * @param {string[]} list
   */
  set featured(list) {
    this.featured_plugins = list;
  }

  /**
   * @param {string} icon
   */
  set defaultPluginIcon(icon) {
    this.plugins_icon = icon;
  }

  render() {
    if (!this.query || !this.submit || !this.results) {
      return false;
    }

    if (this.currentCategory !== "any") {
      this.renderCategory(this.currentCategory);
      return;
    }

    this.renderFeatured();
    this.renderRandom();
    this.renderLanguages();
  }

  /**
   * @param {PluginInfo} plugin
   * @return {HTMLElement}
   */
  renderPlugin(plugin) {
    var box = document.createElement("div");
    box.className = "plugin";

    var icon_path = plugin.icon || this.plugins_icon;

    var author = "pragtical";
    if (plugin.remote) {
      var ele = document.createElement("a");
      ele.href = plugin.remote;

      var results = ele.pathname.match("/([^\\/]+)/");
      if (results && results.length > 0) {
        author = results[1];
      }
    }

    var version = "v" + plugin.version;

    box.innerHTML = '<div class="icon">'
      + '<img src="'+icon_path+'" />'
      + '</div>'
      + '<div class="title">'
      + (plugin.name || plugin.id)
      + '</div>'
      + '<div class="info">'
      + '<div class="author">' + author + '</div>'
      + '<div class="version">' + version + '</div>'
      + '</div>'
    ;

    var that = this;
    box.addEventListener("click", function(){
      that.showPluginInfo(plugin);
    })

    return box;
  }

  renderSection(title, items_callback) {
    this.currentSection = {title: title, getItems: items_callback};

    var heading = document.createElement("h2");
    heading.innerText = title;
    this.results.append(heading);

    var container = document.createElement("div");
    container.className = "container";

    var plugins = items_callback();
    var pageSize = 42;
    var total = plugins.length;
    var page = this.currentPage;
    var start = page * pageSize;
    var slice = total > pageSize ? plugins.slice(start, start + pageSize) : plugins;

    for (var index in slice) {
      container.append(this.renderPlugin(slice[index]));
    }

    this.results.append(container);

    if (total > pageSize) {
      this.renderPagination(total, pageSize);
    }
  }

  renderPagination(total, pageSize) {
    var that = this;
    var page = this.currentPage;
    var totalPages = Math.ceil(total / pageSize);

    var nav = document.createElement("div");
    nav.className = "pagination";

    var prev = document.createElement("button");
    prev.innerHTML = "&#8592;";
    prev.className = "page-nav" + (page === 0 ? " disabled" : "");
    prev.addEventListener("click", function() {
      if (that.currentPage > 0) {
        that.currentPage--;
        that.rerenderSection();
      }
    });
    nav.append(prev);

    var pages = [];
    var seen = {};
    var addPage = function(p) {
      if (p >= 0 && p < totalPages && !seen[p]) {
        pages.push(p);
        seen[p] = true;
      }
    };
    addPage(0);
    for (var i = Math.max(0, page - 2); i <= Math.min(totalPages - 1, page + 2); i++) {
      addPage(i);
    }
    addPage(totalPages - 1);
    pages.sort(function(a, b) { return a - b; });

    var prevPage = -1;
    for (var j = 0; j < pages.length; j++) {
      var p = pages[j];
      if (prevPage !== -1 && p > prevPage + 1) {
        var ellipsis = document.createElement("span");
        ellipsis.className = "page-ellipsis";
        ellipsis.innerText = "…";
        nav.append(ellipsis);
      }
      (function(pageNum) {
        var btn = document.createElement("button");
        btn.className = "page-num" + (pageNum === page ? " active" : "");
        btn.innerText = pageNum + 1;
        btn.addEventListener("click", function() {
          that.currentPage = pageNum;
          that.rerenderSection();
        });
        nav.append(btn);
      })(p);
      prevPage = p;
    }

    var next = document.createElement("button");
    next.innerHTML = "&#8594;";
    next.className = "page-nav" + (page === totalPages - 1 ? " disabled" : "");
    next.addEventListener("click", function() {
      if (that.currentPage < totalPages - 1) {
        that.currentPage++;
        that.rerenderSection();
      }
    });
    nav.append(next);

    this.results.append(nav);
  }

  rerenderSection() {
    if (!this.currentSection) return;
    this.results.innerHTML = "";
    this.renderSection(this.currentSection.title, this.currentSection.getItems);
    this.results.scrollIntoView({behavior: "smooth", block: "start"});
  }

  renderFeatured() {
    var that = this;
    this.renderSection(this.text.featured, function(){
      var plugins = [];
      for (var index in that.featured_plugins) {
        var plugin = that.getItem(that.featured_plugins[index]);
        if (plugin) {
          if (!plugin.name)
            that.setPluginName(plugin);
          plugins.push(plugin);
        }
      }
      return plugins;
    });
  }

  renderRandom() {
    var that = this;
    this.renderSection(this.text.fortune, function(){
      return that.getRandom(that.plugins.addons, null, /^language_/);
    });
  }

  renderLanguages() {
    var that = this;
    this.renderSection(this.text.languages, function(){
      var languages = [];
      for (var index in that.plugins.addons) {
        var plugin = that.plugins.addons[index];
        if (plugin.id.match(/^language_/)) {
          plugin = Object.assign({}, that.plugins.addons[index]);
          plugin.name = plugin.id.split(/[_\-]/).splice(1);
          languages.push(plugin);
        }
      }
      return that.getRandom(languages);
    });
  }

  /**
   * Select a category and render its plugins.
   * @param {string} category
   */
  syncCategoryButtons() {
    for (var i = 0; i < this.category_buttons.length; i++) {
      var btn = this.category_buttons[i];
      if (btn.getAttribute("data-category") === this.currentCategory) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    }
  }

  selectCategory(category) {
    this.currentPage = 0;
    this.currentCategory = category;
    this.changePath({category: category});
    this.results.innerHTML = "";
    this.syncCategoryButtons();
    this.renderCategory(category);
  }

  /**
   * Get plugins matching a category.
   * @param {string} category
   * @return {PluginInfo[]}
   */
  getByCategory(category) {
    var plugins = [];
    for (var index in this.plugins.addons) {
      var plugin = this.plugins.addons[index];
      var match = false;
      switch (category) {
        case "languages":
          match = /^language_/.test(plugin.id);
          break;
        case "lsp":
          match = /^lsp/.test(plugin.id);
          break;
        case "ide":
          match = /^ide/.test(plugin.id);
          break;
        default:
          match = true;
          break;
      }
      if (match) {
        if (!plugin.name)
          this.setPluginName(plugin);
        plugins.push(plugin);
      }
    }
    return plugins;
  }

  /**
   * Render all plugins in a category.
   * @param {string} category
   */
  renderCategory(category) {
    var that = this;
    var title = this.text[category] || category;
    this.renderSection(title, function(){
      return that.getByCategory(category);
    });
  }

  /**
   * Retrieve the raw resource url for github or gitlab.
   */
  getRawURL(repo, path, branch, hoster) {
    if (hoster == "github")
      return "https://raw.githubusercontent.com"+repo+"/"+branch+"/"+path;
    else if (hoster == "gitlab")
      return "https://gitlab.com"+repo+"/-/raw/"+branch+"/"+path;
    return "";
  }

  /**
   * Retrieve a blob resource url for github or gitlab.
   */
  getURL(repo, path, branch, hoster) {
    if (hoster == "github")
      return "https://github.com"+repo+"/blob/"+branch+"/"+path;
    else if (hoster == "gitlab")
      return "https://gitlab.com"+repo+"/-/blob/"+branch+"/"+path;
    return "";
  }

  /**
   * Retrieve a blob resource url for github or gitlab.
   */
  getTreeURL(repo, branch, hoster) {
    if (hoster == "github")
      return "https://github.com"+repo+"/tree/"+branch;
    else if (hoster == "gitlab")
      return "https://gitlab.com"+repo+"/-/tree/"+branch;
    return "";
  }

  changePath(query) {
    var path = window.location.pathname;
    var params = "?";
    for (var param in query) {
      params += param + "=" + encodeURI(query[param]) + "&";
    }
    params = params.replace(/&$/, "");

    if (window.location.search != params) {
      window.history.pushState(
        null, null, path + params
      );
    }
  }

  loadPath(search) {
    this.currentPage = 0;
    this.hidePluginInfo();
    if (search && search != "") {
      var search = search.substring(1);
      var params = JSON.parse(
        '{"' + search.replace(/&/g, '","').replace(/\=/g,'":"') + '"}',
        function(key, value) {
          return key === "" ? value : decodeURIComponent(value)
      });

      if (params.plugin) {
        this.showPluginInfo(this.getItem(params.plugin));
      } else if (params.q) {
        this.query.value = params.q;
        this.search();
      } else if (params.category) {
        this.currentCategory = params.category;
        this.syncCategoryButtons();
        this.results.innerHTML = "";
        this.render();
      }
    } else {
      this.query.value = "";
      this.currentCategory = "any";
      for (var i = 0; i < this.category_buttons.length; i++) {
        this.category_buttons[i].classList.remove("active");
      }
      this.search();
    }
  }

  /**
   * @param {string} path
   * @param {HTMLElement} readme
   * @param {string} hoster
   * @param {string} subpath
   */
  fetchReadme(path, readme, hoster, branch, subpath) {
    var that = this;
    setTimeout(async function(){
      var branches = [
        "master",
        "main"
      ];

      if (branch) branches = [branch];

      var readme_files = [
        "README.md",
        "readme.md"
      ];

      for (var b in branches) {
        var found = false;
        for (var i in readme_files) {
          var url = that.getRawURL(
            path, subpath + readme_files[i], branches[b], hoster
          );
          var response = await fetch(url);
          if (response.ok) {
            var text = await response.text();
            text = that.md_converter.makeHtml(text)
            text = text.replace(/<\s*script[^>]*>[\w\s\d\p]*<\s*\/\s*script\s*>/gi, "")
              // just in case the above failed for some instances...
              .replace(/<\s*script[^>]*>/gi, "")
              // naively try to clean all event attributes
              .replace(/on[\w]+\s*=\s*"[^"]*"/gi, "")
            ;
            readme.innerHTML = text
            var images = readme.querySelectorAll("img");
            for (var index in images) {
              /** @type {HTMLImageElement} */
              var image = images[index];
              if (image.getAttribute && !image.getAttribute("src").match(/https?:/))
                image.src = that.getRawURL(
                  path, subpath + image.getAttribute("src"), branches[b], hoster
                );
            }
            var links = readme.querySelectorAll("a");
            for (var index in links) {
              /** @type {HTMLAnchorElement} */
              var link = links[index];
              if (link.getAttribute && !link.getAttribute("href").match(/https?:/))
                link.href = that.getURL(
                  path, subpath + link.getAttribute("href"), branches[b], hoster
                );
            }
            hljs.highlightAll();
            found = true;
            break;
          }
        }
        if (found) break;
      }
    }, 0);
  }

  /**
   * @param {string} path
   * @param {HTMLElement} readme
   * @param {string} hoster
   * @param {string} subpath
   */
  fetchPluginAsReadme(path, readme, hoster, branch, subpath) {
    var that = this;
    setTimeout(async function(){
      var branches = [
        "master",
        "main"
      ];

      if (branch) branches = [branch];

      for (var b in branches) {
        var url = that.getRawURL(
          path, subpath, branches[b], hoster
        );
        var response = await fetch(url);
        if (response.ok) {
          var text = await response.text();
          text = that.md_converter.makeHtml("```lua\n"+text+"\n```");
          readme.innerHTML = text
          var download = document.createElement("div");
          download.className = "download button";
          var download_link = document.createElement("a");
          download_link.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24">'
            + '<path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />'
            + '</svg>'
            + that.text.download
          ;
          download_link.href = that.getRawURL(
            path, subpath, branches[b], hoster
          );
          download.append(download_link);
          var plugin_details = document.querySelector(".plugin-details");
          plugin_details.append(download);
          plugin_details.insertBefore(download, readme);
          hljs.highlightAll();
          break;
        }
      }
    }, 0);
  }

  /**
   * @param {HTMLElement} plugin_info
   */
  hidePluginInfo(plugin_info) {
    if (plugin_info) {
      plugin_info.remove();
    } else if (this.shown_plugin) {
      this.shown_plugin.remove();
      this.shown_plugin = null;
    }
    document.title = "Pragtical - " + this.text.plugins;
    this.page_plugins.style.display = "block";
  }

  showPluginInfo(plugin) {
    var icon_path = plugin.icon || this.plugins_icon;

    var author = "pragtical";
    var repo = "";
    var url = "";
    var url_text = "";
    var hoster = "";
    var subpath = "";
    var branch = null;
    if (plugin.remote) {
      var ele = document.createElement("a");
      ele.href = plugin.remote;
      repo = ele.pathname.replace(/:.+$/, "");

      var branch_result = ele.pathname.match(/:(.+)$/);
      if (branch_result) {
        branch = branch_result[1];
      }

      url = ele.protocol + "//" + ele.host + repo;
      url_text = url.replace(/^https?:\/\//, "");

      var results = ele.pathname.match("/([^\/]+)/");
      if (results && results.length > 0) {
        author = results[1];
      }

      results = ele.host.match(/(github|gitlab)\.com/);
      if (results)
        hoster = results[1];
    } else if(plugin.path) {
      url = this.getURL("/pragtical/plugins", plugin.path, "master", "github")
      url_text = "plugins/"+plugin.path;
      if (!plugin.path.match(/\.lua$/)) {
        hoster = "github"
        repo = "/pragtical/plugins";
        subpath = plugin.path + "/";
      }
    }

    var version = "v" + plugin.version;
    var version_url = "";

    var infobox = document.createElement("div");
    infobox.className = "plugin-details";

    var readme = document.createElement("div");
    readme.className = "readme markdown-body";

    if (hoster != "") {
      this.fetchReadme(repo, readme, hoster, branch, subpath);
      if (plugin.remote) {
        version_url = 'href="'+this.getTreeURL(repo, branch, hoster)+'"';
      }
    }
    else if(plugin.path && !plugin.remote) {
      branch = branch || "master";
      this.fetchPluginAsReadme("/pragtical/plugins", readme, "github", branch, plugin.path);
      version_url = 'href="'
        + this.getURL("/pragtical/plugins", plugin.path, branch, "github")
        + '"'
      ;
    }

    infobox.innerHTML = '<div class="details">'
      + '<div class="icon">'+'<img src="'+icon_path+'" />'+'</div>'
      + '<div class="info">'
      + '<div class="title">'+(plugin.name || plugin.id)+'</div>'
      + '<div class="subinfo">'
      + '<div class="author">'+author+'</div>'
      + '<div class="version"><a target="_blank" '+version_url+'>'+version+'</a></div>'
      + '<div class="url"><a target="_blank" href="'+url+'">'+url_text+'</a></div>'
      + '</div>'
      + '<div class="description">'
      + this.md_converter.makeHtml(plugin.description)
      + '</div>'
      + '<div><strong>'+this.text.installation+':</strong></div>'
      + '<div class="install">'
      + '<div class="command">pragtical pm install '+plugin.id+'</div>'
      + '</div>'
      + '</div>'
      + '</div>'
    ;

    var copy = document.createElement("button");
    copy.className = "copy";
    copy.innerText = this.text.copy;
    copy.addEventListener("click", function(){
      navigator.clipboard.writeText(
        document.querySelector(".plugin-details .command").textContent
      );
    });
    infobox.querySelector(".plugin-details .install").append(copy);

    infobox.append(readme);

    this.hidePluginInfo();

    this.shown_plugin = infobox;

    this.page_plugins.style.display = "none";
    this.page_info.append(infobox);

    document.title = "Pragtical - "
      + (plugin.name || plugin.id)
      + " " + this.text.plugin
    ;

    this.changePath({plugin: plugin.id});
  }

  /**
   * @param {string} haystack
   * @param {string[]} needles
   * @return {number}
   */
  match(haystack, needles) {
    haystack = haystack.toLowerCase();
    var found = 0;
    for (var index in needles) {
      var results = haystack.match(needles[index]);
      if (results) {
        found += results.length;
      }
    }
    return found;
  }

  search() {
    this.currentPage = 0;
    if (this.query.value.trim() != "") {
      /** @type {string} */
      var query = this.query.value.trim();

      var pathParams = {q: query};
      if (this.currentCategory !== "any") pathParams.category = this.currentCategory;
      this.changePath(pathParams);

      query = query.toLowerCase();

      var needles = query.split(/\s+/);

      /** @type {PluginInfo[]} */
      var found_plugins = [];

      var pool = this.currentCategory !== "any"
        ? this.getByCategory(this.currentCategory)
        : this.plugins.addons;

      for (var index in pool) {
        var plugin = pool[index];
        plugin.search_score = 0;
        var found = false;
        var matches = 0;
        if (plugin.name) {
          matches = this.match(plugin.name, needles);
          plugin.search_score += matches * 50;
        } else {
          matches = this.match(plugin.id, needles);
          plugin.search_score += matches * 50;
        }

        if (matches > needles.length - 1) {
          found = true;
        }

        if (plugin.description) {
          matches = this.match(plugin.description, needles);
          plugin.search_score += matches * 10;

          if (!found && matches > needles.length - 1) {
            found = true;
          }
        }

        if (found) {
          if(!plugin.name)
            this.setPluginName(plugin);
          found_plugins.push(plugin);
        }
      }

      this.results.innerHTML = "";
      this.renderSection(this.text.results + ": " + found_plugins.length, function(){
        return found_plugins.sort(function(a, b) {
          if (a.search_score == b.search_score) return 0;
          return a.search_score > b.search_score ? -1 : 1;
        });
      });
    } else {
      this.results.innerHTML = "";
      if (this.currentCategory !== "any") {
        this.changePath({category: this.currentCategory});
        this.renderCategory(this.currentCategory);
      } else {
        this.render();
      }
    }
  }

  /**
   * Retrieve a random list of plugins.
   * @param {PluginInfo[]} list
   * @param {number} amount
   * @param {RegExp} filter_regex
   * @return {PluginInfo[]}
   */
  getRandom(list, amount, filter_regex) {
    amount = amount || 12;
    var plugins_len = list.length;
    var plugins = {};
    for (var i=0; i<amount; i++) {
      var position = Math.floor(Math.random() * plugins_len) + 1;
      position--;
      while(
        plugins[position]
        ||
        !list[position]
        ||
        (
          filter_regex
          &&
          list[position].id.match(filter_regex)
        )
      ) {
        position = Math.floor(Math.random() * plugins_len) + 1;
      }
      plugins[position] = list[position];
      if (!plugins[position].name)
        this.setPluginName(plugins[position]);
    }
    return plugins;
  }

  /**
   * @param {PluginInfo} plugin
   */
  setPluginName(plugin) {
    if (!plugin.name)
      plugin.name = plugin.id.replace(/[_\-]/g, " ");
  }

  /**
   * @param {string} id_name
   * @return {(PluginInfo|null)}
   */
  getItem(id_name) {
    for (var index in this.plugins.addons) {
      if (
        this.plugins.addons[index].id == id_name
        ||
        this.plugins.addons[index].name == id_name
      ) {
        return this.plugins.addons[index];
      }
    }

    return null;
  }
}

export default function PluginsNavigation() {
  const pluginsRef = useRef(null);
  const isMounted = useRef(false);
  const location = useLocation();

  // Load the Plugin class after rendering the required html components
  useEffect(() => {
    pluginsRef.current = new Plugins({
      page_plugins: "#page-plugins",
      page_info: "#page-plugin-info",
      query: "#plugins .query",
      submit: "#plugins .submit",
      results: "#plugins .results",
      category_buttons: "#plugins .categories button",
      text: {
        featured: "Featured",
        fortune: "Wheel of Fortune",
        languages: "Languages",
        lsp: "LSP",
        ide: "IDE",
        any: "All Plugins",
        installation: "Installation",
        copy: "COPY",
        plugin: "plugin",
        plugins: "plugins",
        results: "Results Found",
        download: "Download",
      }
    });
  }, []); // <-- empty array means 'run once'

  // Re-sync view when Docusaurus client-side navigation changes the URL.
  // We watch location.key (changes on every React Router navigation) rather than
  // location.search, because changePath uses window.history.pushState directly
  // which bypasses React Router — so location.search never reflects those changes.
  // We read window.location.search directly for the same reason.
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (pluginsRef.current) {
      pluginsRef.current.loadPath(window.location.search);
    }
  }, [location.key]);

  return (
    <div className="container">
      <page id="page-plugins">
        <div id="plugins">
          <div className="search">
            <input className="query" type="text" placeholder="Search Pragtical Plugins" autofocus />
            <button className="submit">Search</button>
          </div>
          <div className="categories">
            <button data-category="any">All</button>
            <button data-category="languages">Languages</button>
            <button data-category="lsp">LSP</button>
            <button data-category="ide">IDE</button>
          </div>
          <div className="results"></div>
        </div>
      </page>
      <page id='page-plugin-info'></page>
    </div>
  );
}
