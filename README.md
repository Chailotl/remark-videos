# remark-videos

A **[remark][]** plugin to embed videos the same way as images.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
*   [Security](#security)
*   [License](#license)


## What is this?

This package is a [unified][] ([remark][]) plugin to embed videos the same way as images.

## When should I use this?

This

## Install

This package is [ESM only][esm]. In Node.js (version 16+), install with [npm][]:

```
npm install @chailotl/remark-videos
```

## Use

Say we have the following file `example.md`.

```md
# Image

![](image.png)

# Video

![](video.mp4)
```

...and a module `example.js`:

```js
import {remark} from 'remark'
import remarkVideos from '@chailotl/remark-videos'
import {read} from 'to-vfile'

const file = await remark()
  .use(remarkVideos)
  .process(await read('example.md'))

console.log(String(file))
```

...then running `node example.js` yields:

```html
<h1>Image</h1>
<p><img src="image.png" alt=""></p>
<h1>Video</h1>
<p><video src="video.mp4" controls=""></video></p>
```

## API

This package exports no identifiers. The default export is [`remarkVideos`][api-remark-videos].

#### `unified().use(remarkVideos)`

Embeds video links using the `![](video.mp4)` syntax

###### Parameters

There are no parameters.

###### Returns

Transform ([`Transformer`][unified-transformer]).

## Security

Use of `remark-videos` does not involve **[rehype][]** (**[hast][]**) or user
content so there are no openings for [cross-site scripting (XSS)][wiki-xss]
attacks.

## License

[MIT][license] © Chai

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[license]: license

[hast]: https://github.com/syntax-tree/hast

[rehype]: https://github.com/rehypejs/rehype

[remark]: https://github.com/remarkjs/remark

[unified]: https://github.com/unifiedjs/unified

[unified-transformer]: https://github.com/unifiedjs/unified#transformer

[wiki-xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[api-remark-unlink]: #unifieduseremarkvideos