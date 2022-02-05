# Jsdiff CRLF vs LF

This is a example to show that there is no good way to `diff` files with
different file endings with [`jsdiff`](npmjs.com/diff).

> If you clone this repo on windows (with git autocrlf)
> you will probably not be able to reproduce the examples below.
>
> On unix
> Run 
> ```bash
> file -k crlf.txt lf.txt
> ```
> And make sure you see 
> ```
> crlf.txt: ASCII text, with CRLF line terminators
> lf.txt:   ASCII text
> ```

## GNU diff

Using the
[`--strip-trailing-cr` option](https://www.gnu.org/software/diffutils/manual/html_node/diff-Options.html).

```bash
diff --strip-trailing-cr lf.txt crlf.txt
# Returns nothing
```

## git diff

Using the 
[`--ignore-cr-at-eol` option](https://git-scm.com/docs/git-diff#_options).

```bash
git diff --no-index --ignore-cr-at-eol crlf.txt lf.txt
# Returns nothing
```

## JSDiff

```bash
npm test
# node index.js
```
