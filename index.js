module.exports = BaseSVGElement

var svg = require('virtual-dom/virtual-hyperscript/svg')
var BaseElement = require('base-element')
var inherits = require('inherits')

function BaseSVGElement (attach) {
  if (!(this instanceof BaseSVGElement)) return new BaseSVGElement(attach)
  var self = this
  BaseElement.call(self, attach)
  self.addEventListener('load', function (node) {
    if (self.className) node.setAttribute('class', self.className)
  })
}
inherits(BaseSVGElement, BaseElement)

BaseSVGElement.prototype.html = function BaseSVGElement_html () {
  return svg.apply(this, arguments)
}
