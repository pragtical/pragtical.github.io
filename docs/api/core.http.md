---
sidebar_position: 33
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# core.http

Coroutine-based HTTP client for Pragtical Code Editor.
Supports streaming responses line-by-line or binary, chunked transfer encoding,
Content-Length, connection-close streams, automatic redirects,
proper port handling, global user agent, and file downloads.

```lua
local http = require "core.http"
```

## user_agent

```lua
(field) user_agent: string
```

Default user agent used on all requests.

---

## http.download.options

### directory

```lua
(field) directory: string?
```

Path to save the downloaded file

---

### filename

```lua
(field) filename: string?
```

---

### headers

```lua
(field) headers: table<string, string>?
```

---

### is_cancelled

```lua
(field) is_cancelled: (fun():boolean)?
```

---

### on_done

```lua
(field) on_done: fun(ok?: boolean, err?: string, filename?: string, info?: http.response_info)
```

---

### on_progress

```lua
(field) on_progress: fun(downloaded: integer, total?: integer)?
```

---

### timeout

```lua
(field) timeout: number?
```

---

## http.header_value

## http.method

```lua
http.method:
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "PATCH"
    | "HEAD"
    | "OPTIONS"
```

## http.on_chunk

## http.on_done

## http.on_done_download

## http.on_header

## http.on_progress

## http.on_sse_done

## http.on_sse_event

## http.request.fileparam

### content_type

```lua
(field) content_type: string
```

---

### data

```lua
(field) data: string?
```

---

### filename

```lua
(field) filename: string
```

---

### path

```lua
(field) path: string?
```

---

## http.request.options

### body

```lua
(field) body: string?
```

---

### decode_json

```lua
(field) decode_json: boolean?
```

(default: true)

---

### headers

```lua
(field) headers: table<string, string>?
```

---

### is_cancelled

```lua
(field) is_cancelled: (fun():boolean)?
```

---

### on_chunk

```lua
(field) on_chunk: fun(chunk: string)?
```

---

### on_done

```lua
(field) on_done: fun(ok?: boolean, err?: string, result: string|table|nil, info?: http.response_info)
```

---

### on_header

```lua
(field) on_header: fun(info: http.response_info)?
```

---

### on_redirect

```lua
(field) on_redirect: fun(info: http.response_info)?
```

---

### redirect_count

```lua
(field) redirect_count: integer?
```

---

### timeout

```lua
(field) timeout: number?
```

---

## http.request.param

## http.request.submittype

```lua
http.request.submittype:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "application/json"
    | "text/plain"
```

## http.response_info

### headers

```lua
(field) headers: table<string, string|string[]>
```

---

### status

```lua
(field) status: integer
```

---

### url

```lua
(field) url: string
```

---

## http.sse.event

### data

```lua
(field) data: string
```

---

### event

```lua
(field) event: string
```

---

### id

```lua
(field) id: string?
```

---

### retry

```lua
(field) retry: integer?
```

---

## http.sse.options

### body

```lua
(field) body: string?
```

---

### headers

```lua
(field) headers: table<string, string>?
```

---

### is_cancelled

```lua
(field) is_cancelled: (fun():boolean)?
```

---

### last_event_id

```lua
(field) last_event_id: string?
```

---

### method

```lua
(field) method: ("DELETE"|"GET"|"HEAD"|"OPTIONS"|"PATCH"...(+2))?
```

---

### on_done

```lua
(field) on_done: fun(ok?: boolean, err?: string, info?: http.response_info)
```

---

### on_event

```lua
(field) on_event: fun(event: http.sse.event, info?: http.response_info)
```

---

### on_header

```lua
(field) on_header: fun(info: http.response_info)?
```

---

### on_redirect

```lua
(field) on_redirect: fun(info: http.response_info)?
```

---

### params

```lua
(field) params: table<string, string|http.request.fileparam>?
```

---

### submit_type

```lua
(field) submit_type: ("application/json"|"application/x-www-form-urlencoded"|"multipart/form-data"|"text/plain")?
```

---

### timeout

```lua
(field) timeout: number?
```

---

## delete

```lua
function core.http.delete(url: string, submit_type: "application/json"|"application/x-www-form-urlencoded"|"multipart/form-data"|"text/plain", params?: table<string, string>, options: http.request.options)
```

HTTP DELETE

```lua
submit_type:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "application/json"
    | "text/plain"
```

---

## download

```lua
function core.http.download(url: string, options: http.download.options)
```

Download a file asynchronously with optional progress tracking.

@*param* `url` — File URL

---

## get

```lua
function core.http.get(url: string, params?: table<string, string>, options: http.request.options)
```

HTTP GET

---

## head

```lua
function core.http.head(url: string, params?: table<string, string>, options: http.request.options)
```

HTTP HEAD

---

## options

```lua
function core.http.options(url: string, params?: table<string, string>, options: http.request.options)
```

HTTP OPTIONS

---

## patch

```lua
function core.http.patch(url: string, submit_type: "application/json"|"application/x-www-form-urlencoded"|"multipart/form-data"|"text/plain", params?: table<string, string>, options: http.request.options)
```

HTTP PATCH

```lua
submit_type:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "application/json"
    | "text/plain"
```

---

## post

```lua
function core.http.post(url: string, submit_type: "application/json"|"application/x-www-form-urlencoded"|"multipart/form-data"|"text/plain", params?: table<string, string>, options: http.request.options)
```

HTTP POST

```lua
submit_type:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "application/json"
    | "text/plain"
```

---

## put

```lua
function core.http.put(url: string, submit_type: "application/json"|"application/x-www-form-urlencoded"|"multipart/form-data"|"text/plain", params?: table<string, string>, options: http.request.options)
```

HTTP PUT

```lua
submit_type:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "application/json"
    | "text/plain"
```

---

## request

```lua
function core.http.request(method: "DELETE"|"GET"|"HEAD"|"OPTIONS"|"PATCH"...(+2), url: string, options: http.request.options)
```

Perform an HTTP request asynchronously.

```lua
method:
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "PATCH"
    | "HEAD"
    | "OPTIONS"
```

---

## sse

```lua
function core.http.sse(url: string, options: http.sse.options)
```

Open a Server-Sent Events stream.
Supports normal SSE GET requests as well as POST-based SSE APIs.

---

