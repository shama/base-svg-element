# base-svg-element
A layer on [base-element](https://github.com/shama/base-element) for SVG elements.

## example

Create a SVG element:

```js
var BaseElement = require('base-svg-element')
var inherits = require('inherits')

function Square (attach) {
  if (!(this instanceof Square)) return new Square(attach)
  BaseElement.call(this, attach)
  this.tagName = 'svg'
  this.className = 'square'
  this.viewBox = '0 0 100 100'
}
inherits(Square, BaseElement)

Square.prototype.render = function () {
  var h = this.html
  var vtree = h(this.tagName, this, [
    h('rect', { x: 10, y: 10, width: 80, height: 80 })
  ])
  return this.afterRender(vtree)
}
```

Use the SVG element:

```js
var square = new Square(document.body)
square.render()
```

This will generate the following HTML:

```html
<svg viewBox="0 0 100 100" class="square">
  <rect x="10" y="10" width="80" height="80"></rect>
</svg>
```

# license
(c) 2015 Kyle Robinson Young. MIT License
