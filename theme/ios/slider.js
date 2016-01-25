import Theme from '..';

function layout(rect) {
  const handleSize = Math.min(rect.width, rect.height);
  console.log('whoop');
  rect.subtract(this._padding);
  const sliderSize = this._direction ? rect.height : rect.width;

  this._background.rect = rect;
  this._background.style.backgroundColor = this._backgroundColor;
  if (this._borderRadius === 'auto') this._background.style.borderRadius = Math.min(rect.width, rect.height) / 2;

  rect.inFront();
  if (!this._direction) {
    rect.width = (sliderSize * this._value);
  } else {
    rect.height = (sliderSize * this._value);
  }
  this._inside.rect = rect;
  this._inside.style.backgroundColor = this._color;
  if (this._borderRadius === 'auto') this._inside.style.borderRadius = Math.min(rect.width, rect.height) / 2;

  rect.inFront();
  rect.width = handleSize;
  rect.height = handleSize;
  if (!this._direction) {
    rect.centerY();
    rect.x += (sliderSize * this._value) - (handleSize / 2);
  } else {
    rect.centerX();
    rect.y += (sliderSize * this._value) - (handleSize / 2);
  }
  this._handle.rect = rect;
}

const measureResult = {};
function measure(rect) {
  measureResult.width = this._direction ? 34 : rect.parent.width;
  measureResult.height = this._direction ? rect.parent.height : 34;
  return measureResult;
}

export default {
  layout: layout,
  size: measure,
  color: Theme.color,
  backgroundColor: Theme.neutralColor,
  padding: [15, 15],
  borderRadius: 'auto'
};