---
sidebar_position: 4
---

<!-- DO NOT EDIT: file generated with `pragtical gendocs` -->

# encoding

Utilities for encoding detection and conversion.

## encoding.convert_options

### handle_from_bom

```lua
(field) handle_from_bom: boolean?
```

If applicable strips the byte order marks.

---

### handle_to_bom

```lua
(field) handle_to_bom: boolean?
```

If applicable adds the byte order marks.

---

### strict

```lua
(field) strict: boolean?
```

When true fail if errors found.

---

## convert

```lua
function encoding.convert(tocharset: "ARMSCII-8"|"BIG5"|"BIG5-HKSCS"|"CP866"|"CP932"...(+57), fromcharset: "ARMSCII-8"|"BIG5"|"BIG5-HKSCS"|"CP866"|"CP932"...(+57), text: string, options?: encoding.convert_options)
  -> converted_text: string?
  2. errmsg: string?
```

Converts the given text from one encoding into another.

```lua
tocharset:
   -\> "ARMSCII-8"
    | "BIG5"
    | "BIG5-HKSCS"
    | "CP866"
    | "CP932"
    | "EUC-JP"
    | "EUC-KR"
    | "EUC-TW"
    | "GB18030"
    | "GB2312"
    | "GBK"
    | "GEORGIAN-ACADEMY"
    | "HZ"
    | "IBM850"
    | "IBM852"
    | "IBM855"
    | "IBM857"
    | "IBM862"
    | "IBM864"
    | "ISO-2022-JP"
    | "ISO-2022-KR"
    | "ISO-8859-1"
    | "ISO-8859-2"
    | "ISO-8859-3"
    | "ISO-8859-4"
    | "ISO-8859-5"
    | "ISO-8859-6"
    | "ISO-8859-7"
    | "ISO-8859-8"
    | "ISO-8859-8-I"
    | "ISO-8859-9"
    | "ISO-8859-10"
    | "ISO-8859-13"
    | "ISO-8859-14"
    | "ISO-8859-15"
    | "ISO-8859-16"
    | "ISO-IR-111"
    | "JOHAB"
    | "KOI8-R"
    | "KOI8-U"
    | "SHIFT_JIS"
    | "TCVN"
    | "TIS-620"
    | "UCS-2BE"
    | "UCS-2LE"
    | "UHC"
    | "UTF-16BE"
    | "UTF-16LE"
    | "UTF-32BE"
    | "UTF-32LE"
    | "UTF-7"
    | "UTF-8"
    | "VISCII"
    | "WINDOWS-1250"
    | "WINDOWS-1251"
    | "WINDOWS-1252"
    | "WINDOWS-1253"
    | "WINDOWS-1254"
    | "WINDOWS-1255"
    | "WINDOWS-1256"
    | "WINDOWS-1257"
    | "WINDOWS-1258"

fromcharset:
   -\> "ARMSCII-8"
    | "BIG5"
    | "BIG5-HKSCS"
    | "CP866"
    | "CP932"
    | "EUC-JP"
    | "EUC-KR"
    | "EUC-TW"
    | "GB18030"
    | "GB2312"
    | "GBK"
    | "GEORGIAN-ACADEMY"
    | "HZ"
    | "IBM850"
    | "IBM852"
    | "IBM855"
    | "IBM857"
    | "IBM862"
    | "IBM864"
    | "ISO-2022-JP"
    | "ISO-2022-KR"
    | "ISO-8859-1"
    | "ISO-8859-2"
    | "ISO-8859-3"
    | "ISO-8859-4"
    | "ISO-8859-5"
    | "ISO-8859-6"
    | "ISO-8859-7"
    | "ISO-8859-8"
    | "ISO-8859-8-I"
    | "ISO-8859-9"
    | "ISO-8859-10"
    | "ISO-8859-13"
    | "ISO-8859-14"
    | "ISO-8859-15"
    | "ISO-8859-16"
    | "ISO-IR-111"
    | "JOHAB"
    | "KOI8-R"
    | "KOI8-U"
    | "SHIFT_JIS"
    | "TCVN"
    | "TIS-620"
    | "UCS-2BE"
    | "UCS-2LE"
    | "UHC"
    | "UTF-16BE"
    | "UTF-16LE"
    | "UTF-32BE"
    | "UTF-32LE"
    | "UTF-7"
    | "UTF-8"
    | "VISCII"
    | "WINDOWS-1250"
    | "WINDOWS-1251"
    | "WINDOWS-1252"
    | "WINDOWS-1253"
    | "WINDOWS-1254"
    | "WINDOWS-1255"
    | "WINDOWS-1256"
    | "WINDOWS-1257"
    | "WINDOWS-1258"
```

---

## detect

```lua
function encoding.detect(filename: string)
  -> charset: string?
  2. bom: string?
  3. errmsg: string?
```

Try and detect the encoding to best of capabilities for given file given or
returns nil and error message on failure.

---

## detect_string

```lua
function encoding.detect_string(text: string)
  -> charset: string?
  2. bom: string?
  3. errmsg: string?
```

Same as encoding.detect() but for strings.

---

## get_charset_bom

```lua
function encoding.get_charset_bom(charset: "ARMSCII-8"|"BIG5"|"BIG5-HKSCS"|"CP866"|"CP932"...(+57))
  -> bom: string?
```

Get the byte order marks for the given charset if applicable.

```lua
charset:
   -\> "ARMSCII-8"
    | "BIG5"
    | "BIG5-HKSCS"
    | "CP866"
    | "CP932"
    | "EUC-JP"
    | "EUC-KR"
    | "EUC-TW"
    | "GB18030"
    | "GB2312"
    | "GBK"
    | "GEORGIAN-ACADEMY"
    | "HZ"
    | "IBM850"
    | "IBM852"
    | "IBM855"
    | "IBM857"
    | "IBM862"
    | "IBM864"
    | "ISO-2022-JP"
    | "ISO-2022-KR"
    | "ISO-8859-1"
    | "ISO-8859-2"
    | "ISO-8859-3"
    | "ISO-8859-4"
    | "ISO-8859-5"
    | "ISO-8859-6"
    | "ISO-8859-7"
    | "ISO-8859-8"
    | "ISO-8859-8-I"
    | "ISO-8859-9"
    | "ISO-8859-10"
    | "ISO-8859-13"
    | "ISO-8859-14"
    | "ISO-8859-15"
    | "ISO-8859-16"
    | "ISO-IR-111"
    | "JOHAB"
    | "KOI8-R"
    | "KOI8-U"
    | "SHIFT_JIS"
    | "TCVN"
    | "TIS-620"
    | "UCS-2BE"
    | "UCS-2LE"
    | "UHC"
    | "UTF-16BE"
    | "UTF-16LE"
    | "UTF-32BE"
    | "UTF-32LE"
    | "UTF-7"
    | "UTF-8"
    | "VISCII"
    | "WINDOWS-1250"
    | "WINDOWS-1251"
    | "WINDOWS-1252"
    | "WINDOWS-1253"
    | "WINDOWS-1254"
    | "WINDOWS-1255"
    | "WINDOWS-1256"
    | "WINDOWS-1257"
    | "WINDOWS-1258"
```

---

## strip_bom

```lua
function encoding.strip_bom(text: string, charset?: "ARMSCII-8"|"BIG5"|"BIG5-HKSCS"|"CP866"|"CP932"...(+57))
  -> cleaned_text: string
  2. bom: string?
```

Remove the byte order marks from the given text.

@*param* `text` — A string that may contain a byte order marks.

@*param* `charset` — Charset to scan, if nil scan all charsets with bom.

@*return* `cleaned_text`

@*return* `bom` — The stripped bytes order mark.

```lua
charset:
   -\> "ARMSCII-8"
    | "BIG5"
    | "BIG5-HKSCS"
    | "CP866"
    | "CP932"
    | "EUC-JP"
    | "EUC-KR"
    | "EUC-TW"
    | "GB18030"
    | "GB2312"
    | "GBK"
    | "GEORGIAN-ACADEMY"
    | "HZ"
    | "IBM850"
    | "IBM852"
    | "IBM855"
    | "IBM857"
    | "IBM862"
    | "IBM864"
    | "ISO-2022-JP"
    | "ISO-2022-KR"
    | "ISO-8859-1"
    | "ISO-8859-2"
    | "ISO-8859-3"
    | "ISO-8859-4"
    | "ISO-8859-5"
    | "ISO-8859-6"
    | "ISO-8859-7"
    | "ISO-8859-8"
    | "ISO-8859-8-I"
    | "ISO-8859-9"
    | "ISO-8859-10"
    | "ISO-8859-13"
    | "ISO-8859-14"
    | "ISO-8859-15"
    | "ISO-8859-16"
    | "ISO-IR-111"
    | "JOHAB"
    | "KOI8-R"
    | "KOI8-U"
    | "SHIFT_JIS"
    | "TCVN"
    | "TIS-620"
    | "UCS-2BE"
    | "UCS-2LE"
    | "UHC"
    | "UTF-16BE"
    | "UTF-16LE"
    | "UTF-32BE"
    | "UTF-32LE"
    | "UTF-7"
    | "UTF-8"
    | "VISCII"
    | "WINDOWS-1250"
    | "WINDOWS-1251"
    | "WINDOWS-1252"
    | "WINDOWS-1253"
    | "WINDOWS-1254"
    | "WINDOWS-1255"
    | "WINDOWS-1256"
    | "WINDOWS-1257"
    | "WINDOWS-1258"
```

---

