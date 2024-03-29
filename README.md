# vue-logically
Logical components for increasing the readability of template conditionals and loops.

## Problem 
You find the use of `v-if` and `v-for` attributes to indicate control flow in templates is obscure and unreadable. This is quite understandable - all other languages and frameworks you've grown up with have clearly visible block boundaries and familiar indentation.

Example: in [EmberJS](http://emberjs.com) the logical flow can be seen from a distance, even if you squint your eyes:

```handlebars
{{#if this.isReady}}
    <p class="paragraph my-theme" data-test="content-paragraph-test">Ipsum lorem ... </p>
{{else}}
    <span>Sorry, not ready.</span>
{{/if}}
```
It doesn't matter how many attributes are on the `<p>` tag - it's far from the logical flow of the `{{#if`.
Compared to VueJS:

```html
<p v-if="isReady" class="paragraph my-theme" data-test="content-paragraph-test"></p>
<span v-else>Sorry, not ready.</span>
```

Problems with this:
 * The first thing you see are the html elements, before you even know if they're relevant under the condition, not the logic.
 * If you have many attributes, the `v-if` can get lost among them. Even worse if you list each attribute on new lines, they're indented! Imagine inverting your `if` block indentation in any other language!:
   * ```javascript
     const isThisIsABadIdea = true;
     console.log('Yep, bad idea.')
        if (isThisIsABadIdea);            // Wait, what??
     ```
 * For multiple elements, you have to use awkward `<template v-if>` to block it out, using two different styles for one-vs-multiple. So lines for `if`, `if else`, `else` and `for` loops all start with the word "template" visually.

## Possible Solution

Enforce a style policy to _always_ use `<template v-if` and `<template v-for` (one element or otherwise) so that at least your indentation and control flow make sense.

## This Solution 

Go a step further and use the words you actually want to use at the beginning of those lines:

```html
<If v-if="isReady">
    <p class="paragraph my-theme" data-test="content-paragraph-test">Ipsum lorem ... </p>
</If>
<Else v-else>
    <span>Sorry, not ready.</span>
</Else>
```

 * Indentation is right 
 * Immediate reading of control flow 
 * You don't have to use `<template>` elements for 5 different purposes.
 * You don't have to search for directives among lists of other similar-looking html attributes.

## Usage

### Install (Vue 3)
```bash
yarn add vue-logically
```

### Install (Vue 2)
```bash
yarn add vue-logically@0.0.2
```

### Include Globally 
```javascript
import VueLogically from 'vue-logically';

//...const app = createApp(...)
app.use(VueLogically);
```

### The Components 

These are the dumbest components around. Nothing prevents you from misusing them and mixing directives up. 
They are literally just a way to use a different label for `<template>`.

```html
<If v-if="condition"></If>

<ElseIf v-else-if="condition"></ElseIf>

<Else v-else></Else>

<For v-for="item of list"></For>
```

Run `yarn serve` to see each one in use (`./dev/serve.vue`).

### Development 

```bash 
yarn build
```

Serve the test application (`dev/serve.js`) on localhost:
```bash 
yarn serve
```
