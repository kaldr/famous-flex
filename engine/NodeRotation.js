import Animation from '../animation/Animation';

export default class NodeRotation {
  constructor(node) {
    this._node = node;
    this._x = 0;
    this._y = 0;
    this._z = 0;
  }

  getParent() {
    return this._node.getParent();
  }

  get identity() {
    return NodeRotation.identity;
  }

  set(values) {
    this.x = values.x;
    this.y = values.y;
    this.z = values.z;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (!Animation.collect(this, 'x', value)) {
      this._x = value;
      this._node.setRotation(value, undefined, undefined);
    }
  }

  get y() {
    return this._y;
  }

  set y(value) {
    if (!Animation.collect(this, 'y', value)) {
      this._y = value;
      this._node.setRotation(undefined, value, undefined);
    }
  }

  get z() {
    return this._z;
  }

  set z(value) {
    if (!Animation.collect(this, 'z', value)) {
      this._z = value;
      this._node.setRotation(undefined, undefined, value);
    }
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }

  toJSON() {
    return {
      x: this.x,
      y: this.y,
      z: this.z
    };
  }
}
NodeRotation.identity = {x: 0, y: 0, z: 0};