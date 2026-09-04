---
sidebar_position: 8
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# net

Core functionality that allows non-blocking network communication with
encryption support (SSL) on TCP connections.

## net.address

A network address.

### __tostring

```lua
(method) net.address:__tostring()
  -> hostname: string
```

String representation of the address (same as get_hostname).

@*return* `hostname`: `string`

---

### get_hostname

```lua
(method) net.address:get_hostname()
  -> hostname: string
```

Get initial hostname or ip address if hostname not available.

@*return* `hostname`: `string`

---

### get_ip

```lua
(method) net.address:get_ip()
  -> ip: string?
```

Get ip address of resolved address.

@*return* `ip`: `string?`

---

### get_status

```lua
(method) net.address:get_status()
  -> status: "failure"|"success"|"waiting"
  2. errmsg: string?
```

Get the current resolve status of the address without waiting.


```lua
status:
    | "success"
    | "waiting"
    | "failure"
```

@*return* `status`: `"failure"|"success"|"waiting"`

@*return* `errmsg`: `string?` — Error message on case of 'failure'.

---

### wait_until_resolved

```lua
(method) net.address:wait_until_resolved(timeout?: integer)
  -> status: "failure"|"success"|"waiting"
  2. errmsg: string?
```

Wait the specified amount of milliseconds for the address to resolve.

If the specified timeout is -1 it will wait until it resolves, if
0 will not wait and just return current status, any value longer than 0
will be the maximum wait time in milliseconds.


```lua
status:
    | "success"
    | "waiting"
    | "failure"
```

@*param* `timeout?`: `integer` — Timeout in milliseconds. Default: 0

@*return* `status`: `"failure"|"success"|"waiting"`

@*return* `errmsg`: `string?` — Error message on case of 'failure'.

---

## net.datagram

A UDP datagram.

### get_address

```lua
(method) net.datagram:get_address()
  -> address: net.address
```

Get the address associated to a UDP datagram.

@*return* `address`: [`net.address`](/docs/api/net#netaddress)

---

### get_data

```lua
(method) net.datagram:get_data()
  -> data: string
```

Get the data associated to a UDP datagram.

@*return* `data`: `string`

---

### get_port

```lua
(method) net.datagram:get_port()
  -> port: integer
```

Get the port associated to a UDP datagram.

@*return* `port`: `integer`

---

## net.server

A network server that can accept connections.

### accept

```lua
(method) net.server:accept()
  -> client: (net.tcp)?
  2. errmsg: string?
```

Check for new client connections and if found return it.

@*return* `client`: `(`[`net.tcp`](/docs/api/net#nettcp)`)?`

@*return* `errmsg`: `string?`

---

### get_port

```lua
(method) net.server:get_port()
  -> port: integer
```

Get the listening port of the server.

@*return* `port`: `integer`

---

## net.status

```lua
net.status:
    | "success"
    | "waiting"
    | "failure"
```

## net.tcp

A TCP network connection.

### close

```lua
(method) net.tcp:close()
```

Close the TCP connection by destroying it.

---

### get_address

```lua
(method) net.tcp:get_address()
  -> address: (net.address)?
  2. errmsg: string?
```

Get the associated address for the connection.

If the specified timeout is -1 it will wait until connected, if
0 will not wait and just return current status, any value longer than 0
will be the maximum wait time in milliseconds.

@*return* `address`: `(`[`net.address`](/docs/api/net#netaddress)`)?`

@*return* `errmsg`: `string?`

---

### get_pending_writes

```lua
(method) net.tcp:get_pending_writes(data: string)
  -> bytes: integer?
  2. errmsg: string?
```

Get total amount of bytes that haven't been written yet.

@*return* `bytes`: `integer?`

@*return* `errmsg`: `string?` — Error message on error.

---

### get_status

```lua
(method) net.tcp:get_status()
  -> address: "failure"|"success"|"waiting"
  2. errmsg: string?
```

Get the current connection status without waiting.


```lua
address:
    | "success"
    | "waiting"
    | "failure"
```

@*return* `address`: `"failure"|"success"|"waiting"`

@*return* `errmsg`: `string?` — Error message on case of 'failure'.

---

### read

```lua
(method) net.tcp:read(amount: integer)
  -> data: string?
  2. errmsg: string?
```

Read the specified amount of bytes from the connection.

Note: This function will usually return empty string if no data is
available yet and nil if conneciton is closed or an error occurred,
if an error occurred it will also return an error message string.

@*param* `amount`: `integer` — Total amount of bytes to read.

@*return* `data`: `string?`

@*return* `errmsg`: `string?` — Error message on error.

---

### wait_until_connected

```lua
(method) net.tcp:wait_until_connected(timeout?: integer)
  -> status: "failure"|"success"|"waiting"
  2. errmsg: string?
```

Get the listening port of the server.

If the specified timeout is -1 it will wait until connected, if
0 will not wait and just return current status, any value longer than 0
will be the maximum wait time in milliseconds.


```lua
status:
    | "success"
    | "waiting"
    | "failure"
```

@*param* `timeout?`: `integer` — Timeout in milliseconds. Default: 0

@*return* `status`: `"failure"|"success"|"waiting"`

@*return* `errmsg`: `string?` — Error message on case of 'failure'.

---

### wait_until_drained

```lua
(method) net.tcp:wait_until_drained(timeout?: integer)
  -> pending_bytes: integer?
  2. errmsg: string?
```

Waits the specified amount of time until all sent data is written.

If the specified timeout is -1 it will wait until all is written, if
0 will not wait and just return pending bytes, any value longer than 0
will be the maximum wait time in milliseconds.

@*param* `timeout?`: `integer` — Timeout in milliseconds. Default: 0

@*return* `pending_bytes`: `integer?`

@*return* `errmsg`: `string?` — Error message on error.

---

### write

```lua
(method) net.tcp:write(data: string)
  -> bytes_written: integer?
  2. errmsg: string?
```

Write bytes to the connection.

This may write only part of the provided data. A return value of 0 means the
connection is not ready to accept more bytes yet; retry later. On error this
returns nil and an error message.

@*return* `bytes_written`: `integer?`

@*return* `errmsg`: `string?` — Error message on error.

---

## net.udp

A UDP network connection.

### close

```lua
(method) net.udp:close()
```

Close the UDP connection by destroying it.

---

### receive

```lua
(method) net.udp:receive()
  -> datagram: (net.datagram)?
  2. errmsg: string?
```

Receive data on a UDP connection.

Note: This function will usually return nil if no data is available yet
and nil also if an error occurred which will be accompanied of the error
message string.

@*return* `datagram`: `(`[`net.datagram`](/docs/api/net#netdatagram)`)?`

@*return* `errmsg`: `string?` — Error message on error.

---

### send

```lua
(method) net.udp:send(address: net.address, port: integer, data: string)
  -> sent: boolean
  2. errmsg: string?
```

Send data on a UDP connection.

@*param* `address`: [`net.address`](/docs/api/net#netaddress) — A network address.

@*return* `sent`: `boolean`

@*return* `errmsg`: `string?`

---

## create_server

```lua
function net.create_server(address: net.address, port: integer)
  -> connection: (net.server)?
  2. errmsg: string?
```

Creates a new network server that listen for connections on the specified
port. If the address is not specified it will listen on all interfaces.

@*param* `address`: [`net.address`](/docs/api/net#netaddress) — A network address.

@*return* `connection`: `(`[`net.server`](/docs/api/net#netserver)`)?`

@*return* `errmsg`: `string?`

---

## get_cacert_path

```lua
function net.get_cacert_path()
  -> cacert_bundle_path: string?
```

Get the currently set CA bundle use for validation on ssl connections.

Note: on linux, freebsd and other unix based operating systems the
default system bundle will be returned if found. On windows and macOS
this will always return nil so you will need to set a CA bundle manually,
transmission of data thru a ssl connection will still work but, validation
of certificates authenticity will not be performed.

@*return* `cacert_bundle_path`: `string?`

---

## get_local_addresses

```lua
function net.get_local_addresses()
  -> addresses: net.address[]?
  2. errmsg: string?
```

Get a list of available local addresses.

@*return* `addresses`: [`net.address`](/docs/api/net#netaddress)`[]?`

@*return* `errmsg`: `string?`

---

## open_tcp

```lua
function net.open_tcp(address: net.address, port: integer, ssl?: boolean)
  -> connection: (net.tcp)?
  2. errmsg: string?
```

Opens a new TCP connection.

@*param* `address`: [`net.address`](/docs/api/net#netaddress) — A network address.

@*return* `connection`: `(`[`net.tcp`](/docs/api/net#nettcp)`)?`

@*return* `errmsg`: `string?`

---

## open_udp

```lua
function net.open_udp(address: net.address, port: integer)
  -> connection: (net.udp)?
  2. errmsg: string?
```

Opens a new UDP connection.

@*param* `address`: [`net.address`](/docs/api/net#netaddress) — A network address.

@*return* `connection`: `(`[`net.udp`](/docs/api/net#netudp)`)?`

@*return* `errmsg`: `string?`

---

## resolve_address

```lua
function net.resolve_address(address: string)
  -> address: (net.address)?
  2. errmsg: string?
```

Solve a domain or ip to a valid network address.

@*param* `address`: `string` — Can be a domain or ip.

@*return* `address`: `(`[`net.address`](/docs/api/net#netaddress)`)?`

@*return* `errmsg`: `string?`

---

## set_cacert_path

```lua
function net.set_cacert_path(path: string)
```

Set the path of CA bundle to use for validation on ssl connections.

Note: on linux, freebsd and other unix based operating systems the
default system bundle will be use if found. On windows and macOS
you will need to set a CA bundle manually, if not set, transmission of data
thru a ssl connection will still work but, validation of certificates
authenticity will not be performed.

---

