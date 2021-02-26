---
layout: post
title: 'Property lookup on booleans'
comments: false
categories: [programing]
link: https://github.com/babel/babel/commit/1c0a8eb14b69cca00aa96db65b69d0848013c680
---

> Performs a lot of dynamic lookups on the `Boolean.prototype`, as the _ToBoolean_ operation let's `true` pass for `obj` (which might itself be concerning that this can be a boolean). Instead of the coercion, the code should properly check for valid objects via `typeof` and strict equality with `null` comparison.

#### Example:

Use below

```js
if (typeof obj === 'object' && obj !== null) {
    return obj[key] || 0
}

return 0
```

Instead of

```js
return (obj && obj[key]) || 0
```
