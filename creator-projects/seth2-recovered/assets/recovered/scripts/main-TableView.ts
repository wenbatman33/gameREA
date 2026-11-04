// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-TableView.ts.js
// SHA256: 282dcf8d30427f13c9bc9d619ec8066e7e735ce4a58f58b7bc8e03f8517fd6c6
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-LayoutDefines";
import * as __dependency_3 from "./main-TableViewCell";
var __export_0;
export { __export_0 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0, void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
var y, C, T, b, S, m, w, x, D, A, L, R, z, U, N, P, B;
__dependency_1.cclegacy._RF.push({}, "c1f55MBNyFBBpES2blsDr0B", "TableView", void 0);
var E,
  V,
  H = __dependency_1._decorator.ccclass,
  Z = __dependency_1._decorator.property,
  k = __dependency_1._decorator.menu;
!function (t) {
  t[t.HORIZONTAL = 0] = "HORIZONTAL", t[t.VERTICAL = 1] = "VERTICAL";
}(E || (E = {})), function (t) {
  t[t.TOP_DOWN = 0] = "TOP_DOWN", t[t.BOTTOM_UP = 1] = "BOTTOM_UP";
}(V || (V = {}));
var F = function () {
  function t(t, e, i, s) {
    this._view = null, this._templete = null, this._offset = null, this.index = 0, this.left = 0, this.right = 0, this.top = 0, this.bottom = 0, this.position = (0, __dependency_1.v3)(0, 0, 0), this._templete = t, this._view = e, this.index = s, this.init(i);
  }
  var e = t.prototype;
  return e.init = function (t) {
    var e = this.node.getComponent(__dependency_1.UITransform);
    this.left = e.width * e.anchorX, this.right = e.width * (1 - e.anchorX), this.top = e.height * (1 - e.anchorY), this.bottom = e.height * e.anchorY, this.isHorizontal ? this._offset = (0, __dependency_1.v2)(t, 0) : this._offset = (0, __dependency_1.v2)(0, t);
  }, e.calculatePosition = function () {
    var t = this._align(this.node, this._view.content, this._offset);
    return this.position.x = t.x, this.position.y = t.y, this.position;
  }, e.clone = function () {
    var e = new t(this._templete, this._view, this.offset, this.index);
    return e.position.x = this.position.x, e.position.y = this.position.y, e;
  }, e._align = function (t, e, i) {
    var s = new __dependency_2.LayoutParam();
    return s.node = t, s.target = e, this.isHorizontal ? this.fillOrder == V.TOP_DOWN ? (s.alignFlags = __dependency_2.LayoutType.MID_LETF, s.left = i.x) : (s.alignFlags = __dependency_2.LayoutType.MID_RIGHT, s.right = i.x) : this.fillOrder == V.TOP_DOWN ? (s.alignFlags = __dependency_2.LayoutType.CENTER_TOP, s.top = i.y) : (s.alignFlags = __dependency_2.LayoutType.CENTER_BOT, s.bottom = i.y), App.layout.align(s), s.result.position;
  }, e.debug = function (t, e) {
    var i = "[" + this.index + "] 位置 : (" + this.position.x + "," + this.position.y + ") , 偏移 : " + this.offset + " , 左 : " + this.left + " , 右 : " + this.right + " , 上 : " + this.top + " , 下 : " + this.bottom + " ";
    t && (i = t + i), e && (i += e), Log.d(i);
  }, e.calculateSight = function (t, e, i, s) {
    var l = {
        isInSight: !1,
        offset: 0
      },
      n = this.node.getComponent(__dependency_1.UITransform);
    if (e) {
      if (t == V.TOP_DOWN) {
        var o = this.node.scale.x,
          r = this.position.x;
        o < 0 && (r -= this.right);
        var h = i.x + r - this.left;
        if (h >= 0) h < s.width && (l.isInSight = !0);else n.width + h > 0 && (l.isInSight = !0);
        l.offset = h;
      } else {
        var a = this.node.scale.x,
          d = this.position.x;
        a < 0 && (d += this.left);
        var f = i.x + d - this.left;
        if (f > 0) f < s.width && (l.isInSight = !0);else n.width + f > 0 && (l.isInSight = !0);
        l.offset = f;
      }
    } else if (t == V.TOP_DOWN) {
      var u = this.node.scale.y,
        _ = this.position.y;
      u < 0 && (_ += this.bottom);
      var g = i.y + _ + this.top;
      g > 0 ? g > n.height || (l.isInSight = !0) : s.height + g < 0 || (l.isInSight = !0), l.offset = g;
    } else {
      var p = this.node.scale.y,
        v = this.position.y;
      p < 0 && (v -= this.top);
      var O = -(i.y + v + this.top);
      if (O >= 0) s.height - O < 0 || (l.isInSight = !0);else -O > n.height || (l.isInSight = !0);
      l.offset = O;
    }
    return l;
  }, (0, __dependency_0.createClass)(t, [{
    key: "isHorizontal",
    get: function () {
      return this._view.direction == E.HORIZONTAL;
    }
  }, {
    key: "fillOrder",
    get: function () {
      return this._view.fillOrder;
    }
  }, {
    key: "node",
    get: function () {
      return this._templete.node;
    }
  }, {
    key: "offset",
    get: function () {
      return this.isHorizontal ? this._offset.x : this._offset.y;
    }
  }]), t;
}();
__publish("default", (y = H("TableView"), C = k("QuickUI元件/TableView"), T = Z({
  override: !0,
  displayOrder: 20,
  visible: function () {
    return this.direction == E.HORIZONTAL;
  }
}), b = Z({
  override: !0,
  displayOrder: 21,
  visible: function () {
    return this.direction == E.VERTICAL;
  }
}), S = Z({
  tooltip: "滾動方向 \nHORIZONTAL 水平方向 \nVERTICAL 垂直方向",
  displayName: "Direction",
  type: (0, __dependency_1.Enum)(E),
  visible: !0,
  displayOrder: 22
}), m = Z({
  visible: !1,
  override: !0
}), w = Z({
  visible: !1,
  override: !0
}), x = Z({
  tooltip: "Cell項模板",
  displayName: "Template",
  type: __dependency_3.TableViewCell,
  visible: !0,
  displayOrder: 23
}), D = Z({
  displayOrder: 24,
  tooltip: "填充方式 \nTOP_DOWN 水平方向時，從左到右填充，垂直方向時，從上到下填充 \nBOTTOM_UP 水平方向時，從右到左填充，垂直方向時，從下到上填充",
  type: (0, __dependency_1.Enum)(V)
}), y(A = C(((B = function (t) {
  function e() {
    for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(n).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "_direction", R, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "horizontal", z, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "vertical", U, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_template", N, (0, __dependency_0.assertThisInitialized)(e)), e._templateSize = new Map(), (0, __dependency_0.initializerDefineProperty)(e, "fillOrder", P, (0, __dependency_0.assertThisInitialized)(e)), e._delegate = null, e._cellsUsed = [], e._cellsFreed = [], e._cellsInfos = [], e._indices = new Set(), e._isUsedCellsDirty = !1, e._oldDirection = null, e._isDoing = !1, e._isShowAllCell = !1, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var o = e.prototype;
  return o.scrollToIndex = function (t, e, i) {
    if (void 0 === e && (e = 0), void 0 === i && (i = !0), this.content) if (t >= 0 && t < this.delegate.numberOfCellsInTableView(this)) {
      var s = this.getScrollOffset(),
        l = this._cellsInfos[t];
      if (this.fillOrder == V.TOP_DOWN) this.direction == E.HORIZONTAL ? s.x = l.offset : s.y = l.offset;else {
        var n = this._cellsInfos[t + 1];
        this.direction == E.HORIZONTAL ? s.x = this.contentSize.width - n.offset : s.y = this.contentSize.height - n.offset;
      }
      this.scrollToOffset(s, e, i);
    } else Log.e("錯誤的index : " + t);
  }, o.updateCellAtIndex = function (t) {
    var e = this.delegate.numberOfCellsInTableView(this);
    if (e > 0 && t < e && t >= 0) {
      var i = this.cellAtIndex(t);
      i && this._moveCellOutOfSight(i);
      var s = this.delegate.tableCellTypeAtIndex(this, t);
      if (!(i = this._dequeueCell(s))) {
        var l = this._getTemplete(s);
        if (!l) return;
        i = (0, __dependency_1.instantiate)(l.node).getComponent(__dependency_3.TableViewCell);
      }
      i && (this._setIndexForCell(t, i), this._addCellIfNecessary(i), i.init(), this._updateCellData(i));
    }
  }, o.insertCellAtIndex = function (t) {
    var e = this.delegate.numberOfCellsInTableView(this);
    if (0 != e && (null != t && null != t || (t = e - 1), !(t > e - 1))) {
      this._isDoing = !0;
      var i = this.getScrollOffset();
      this._updateCellOffsets(), this._updateContentSize();
      var s = this.cellAtIndex(t);
      if (s) {
        Log.d("插入的Cell[" + t + "]在顯示區域內");
        var l = this._getCellIndex(s);
        this._moveCellIndex(l);
      } else Log.d("插入的Cell" + t + "不在顯示區域內,更新顯示區域內的索引"), this._moveCellIndex(t);
      var n = this.delegate.tableCellTypeAtIndex(this, t),
        o = this._dequeueCell(n);
      if (!o) {
        var r = this._getTemplete(n);
        if (!r) return;
        o = (0, __dependency_1.instantiate)(r.node).getComponent(__dependency_3.TableViewCell);
      }
      o && (this._setIndexForCell(t, o), this._addCellIfNecessary(o), o.init(), this._updateCellData(o), this._isDoing = !1, this._calculateSightArea(), this.scrollToOffset(i));
    }
  }, o.removeCellAtIndex = function (t, e) {
    var i = this.delegate.numberOfCellsInTableView(this);
    if (i > 0 && t >= 0 && t < i) {
      var s = this.getScrollOffset();
      e(t), this._isDoing = !0, this._updateCellOffsets(), this._updateContentSize(), this._moveCellIndex(t, !0), this._isDoing = !1, this._calculateSightArea(), this.scrollToOffset(s);
    }
  }, o.reloadData = function (t) {
    void 0 === t && (t = !0), this._oldDirection = t ? null : this.direction;
    for (var e = 0; e < this._cellsUsed.length; e++) {
      var i,
        s = this._cellsUsed[e];
      if (this.delegate.tableCellWillRecycle && this.delegate.tableCellWillRecycle(this, s), this._cellsFreed.push(s), s.reset(), s.node.parent == this.content) null == (i = this.content) || i.removeChild(s.node);
    }
    this._indices.clear(), this._cellsUsed = [], this._isDoing = !0, this._updateCellOffsets(), this._updateContentSize(), this._isDoing = !1, this._calculateSightArea(), this._oldDirection != this.direction && (this.delegate.numberOfCellsInTableView(this) > 0 && (this.direction == E.HORIZONTAL ? this.scrollToLeft() : this.scrollToTop()), this._oldDirection = this.direction);
  }, o.cellAtIndex = function (t) {
    if (this._indices.has(t)) for (var e = 0; e < this._cellsUsed.length; e++) if (this._cellsUsed[e].index == t) return this._cellsUsed[e];
    return null;
  }, o._updateCellIndices = function (t) {
    var e = this,
      i = [];
    if (this._indices.forEach(function (t, e, s) {
      i.push(t);
    }), !(i.length <= 0)) {
      this._indices.clear();
      for (var s = function (s) {
          var l = t.find(function (t) {
            return t.from == i[s];
          });
          l && (i[s] = l.to), e._indices.add(i[s]);
        }, l = 0; l < i.length; l++) s(l);
    }
  }, o._moveCellIndex = function (t, e) {
    void 0 === e && (e = !1);
    var i = [],
      s = e ? -1 : 1;
    if (e) {
      var l = this._cellsUsed.findIndex(function (e, i, s) {
        return e.index == t;
      });
      -1 != l && this._moveCellOutOfSight(this._cellsUsed[l]);
    }
    for (var n = 0; n < this._cellsUsed.length; n++) {
      var o = this._cellsUsed[n];
      if (o.index >= t) {
        if (e && o.index == t) continue;
        var r = o.index,
          h = o.index + s;
        this._setIndexForCell(h, o), this._updateCellData(o), i.push({
          from: r,
          to: h
        });
      } else this._updateCellPosition(o);
    }
    this._updateCellIndices(i);
  }, o._sortCell = function () {
    this._cellsUsed = this._cellsUsed.sort(function (t, e) {
      return t.index - e.index;
    });
  }, o._debugCellInfos = function (t) {
    Log.d("--------------------- " + t + " ---------------------"), this._cellsInfos.forEach(function (t) {
      t.debug();
    });
  }, o._debugCell = function (t) {
    Log.d("--------------------- " + t + " ---------------------"), Log.d("當前顯示節點 :", this._indices), this._cellsUsed.forEach(function (t, e, i) {
      Log.d("[" + e + "] , type : " + t.type + " ,index : " + t.index + " , " + t.string + " , position : (" + t.node.position.x + "," + t.node.position.y + ")");
    });
  }, o._getCellIndex = function (t) {
    for (var e = 0; e < this._cellsUsed.length; e++) if (this._cellsUsed[e] === t) return this._cellsUsed[e].index;
    return -1;
  }, o._debugData = function () {
    this.delegate && this.delegate.tableDebug && this.delegate.tableDebug(this);
  }, o._updateCellData = function (t) {
    this.delegate.updateCellData(this, t);
  }, o._updateCellPosition = function (t) {
    var e = this._cellsInfos[t.index];
    t.node.setPosition(e.position);
  }, o._addCellIfNecessary = function (t) {
    var e;
    t.node.parent != this.content ? null == (e = this.content) || e.addChild(t.node) : Log.e("新增的Cell 已經有父節點");
    this._cellsUsed.push(t), this._indices.add(t.index), this._isUsedCellsDirty = !0;
  }, o._setIndexForCell = function (t, e) {
    e.view = this, e.index = t, e.node.active = !0;
    var i = this._cellsInfos[t];
    e.node.setPosition(i.position);
  }, o._dequeueCell = function (t) {
    if (this._cellsFreed.length <= 0) return null;
    for (var e = 0; e < this._cellsFreed.length; e++) {
      var i = this._cellsFreed[e];
      if (i.type == t) return this._cellsFreed.splice(e, 1), i;
    }
    return null;
  }, o._updateCellOffsets = function () {
    var t = this.delegate.numberOfCellsInTableView(this);
    if (this._cellsInfos = [], t > 0) {
      var e,
        i = 0,
        s = {
          width: 0,
          height: 0
        },
        l = 0,
        n = null;
      for (l = 0; l < t; l++) {
        e = this.delegate.tableCellTypeAtIndex(this, l), n = this._getTemplete(e);
        var o = new F(n, this, i, l);
        this._cellsInfos.push(o);
        var r = n.node.getComponent(__dependency_1.UITransform);
        s.width = r.width, s.height = r.height, this.direction == E.HORIZONTAL ? i += s.width : i += s.height;
      }
      var h = new F(n, this, i, l);
      this._cellsInfos.push(h);
    }
  }, o._updateCellPositions = function () {
    this._cellsInfos.forEach(function (t) {
      t.calculatePosition();
    });
  }, o._updateContentSize = function () {
    var t = new __dependency_1.Size(0, 0),
      e = this.delegate.numberOfCellsInTableView(this);
    if (e > 0) {
      var i = this._cellsInfos[e].offset;
      t = this.direction == E.HORIZONTAL ? new __dependency_1.Size(i, this.viewSize.height) : new __dependency_1.Size(this.viewSize.width, i);
    }
    this.content && this.content.getComponent(__dependency_1.UITransform).setContentSize(t);
    this._updateCellPositions();
  }, o._calculateSightArea = function () {
    if (this.content && !this._isDoing) {
      var t = this.content.position,
        e = new __dependency_1.Vec2(t.x, t.y),
        i = this.contentSize,
        s = this.contentAnchor,
        l = this.viewSize,
        n = this.viewAnchor,
        o = -s.y * i.height,
        r = -n.y * l.height,
        h = n.x * l.width;
      o = e.y + o;
      var a = null;
      a = this.direction == E.HORIZONTAL ? (0, __dependency_1.v2)(h, e.y).add(e) : (0, __dependency_1.v2)(e.x, r).add(e), this._isUsedCellsDirty && this._sortCell();
      var c = Math.max(this.delegate.numberOfCellsInTableView(this) - 1, 0),
        d = this._calculateInInSight(a);
      if (d) {
        if (this._cellsUsed.length > 0) for (var _ = this._cellsUsed[0], g = _.index; g < d.start && (this._moveCellOutOfSight(_), this._cellsUsed.length > 0);) g = (_ = this._cellsUsed[0]).index;
        if (this._cellsUsed.length > 0) for (var p = this._cellsUsed[this._cellsUsed.length - 1], v = p.index; v <= c && v > d.end && (this._moveCellOutOfSight(p), this._cellsUsed.length > 0);) v = (p = this._cellsUsed[this._cellsUsed.length - 1]).index;
        for (var O = d.start; O <= d.end; O++) this._indices.has(O) || this.updateCellAtIndex(O);
      }
    }
  }, o._getTemplete = function (t) {
    for (var e = 0; e < this.template.length; e++) {
      if (this.template[e].type == t) return this.template[e];
    }
    return null;
  }, o._moveCellOutOfSight = function (t) {
    this.delegate && this.delegate.tableCellWillRecycle && this.delegate.tableCellWillRecycle(this, t), this._cellsFreed.push(t);
    var e,
      i = this._cellsUsed.indexOf(t);
    (-1 != i && this._cellsUsed.splice(i, 1), this._indices.delete(t.index), t.reset(), t.node.parent == this.content) && (null == (e = this.content) || e.removeChild(t.node));
    this._isUsedCellsDirty = !0;
  }, o._calculateInInSight = function (t) {
    var e = null;
    if (this._cellsInfos.length <= 0) return e;
    var i = this.delegate.numberOfCellsInTableView(this);
    if (i <= 0) return e;
    if (e = {
      start: 0,
      end: 0,
      count: i
    }, this._isShowAllCell) return e.start = 0, e.end = i - 1, e;
    if (1 == i) return e;
    for (var s = 0, l = i, n = this.viewSize, o = -1, r = 0; l >= s;) {
      if ((r = Math.floor(s + (l - s) / 2)) < 0 || r >= this._cellsInfos.length) return null;
      var h = this._cellsInfos[r].calculateSight(this.fillOrder, this.direction == E.HORIZONTAL, t, n);
      if (h.isInSight) {
        o = r;
        break;
      }
      if (r + 1 < 0 || r + 1 >= this._cellsInfos.length) return null;
      var a = this._cellsInfos[r + 1].calculateSight(this.fillOrder, this.direction == E.HORIZONTAL, t, n);
      if (a.isInSight) {
        o = r;
        break;
      }
      Math.abs(h.offset) < Math.abs(a.offset) ? l = r - 1 : s = r + 1;
    }
    if (o < 0) return null;
    e.start = o, e.end = o;
    for (var c = o - 1; c >= 0; c--) {
      if (!this._cellsInfos[c].calculateSight(this.fillOrder, this.direction == E.HORIZONTAL, t, n).isInSight) break;
      e.start = c;
    }
    for (var d = o + 1; d < i; d++) {
      if (!this._cellsInfos[d].calculateSight(this.fillOrder, this.direction == E.HORIZONTAL, t, n).isInSight) break;
      e.end = d;
    }
    return e;
  }, o.scrollToTopLeft = function (t, e) {
    Log.w("不支援該方法");
  }, o.scrollToTopRight = function (t, e) {
    Log.w("不支援該方法");
  }, o.scrollToBottomLeft = function (t, e) {
    Log.w("不支援該方法");
  }, o.scrollToBottomRight = function (t, e) {
    Log.w("不支援該方法");
  }, o._onMouseWheel = function (t, e) {
    if (this.enabledInHierarchy && !this._hasNestedViewGroup(t, e)) {
      var i = new __dependency_1.Vec3(),
        s = t.getScrollY();
      this.direction == E.VERTICAL ? i.set(0, -.1 * s, 0) : i.set(-.1 * s, 0, 0), this._mouseWheelEventElapsedTime = 0, this._processDeltaMove(i), this._stopMouseWheel || (this._handlePressLogic(), this.schedule(this._checkMouseWheel, 1 / 60, NaN, 0), this._stopMouseWheel = !0), this._stopPropagationIfTargetIsMe(t);
    }
  }, o._flattenVectorByDirection = function (t) {
    var e = t;
    return e.x = this.direction == E.HORIZONTAL ? e.x : 0, e.y = this.direction == E.VERTICAL ? e.y : 0, e;
  }, o._setContentPosition = function (t) {
    var e;
    if (this._content) {
      var i = null == (e = this.content) ? void 0 : e.getPosition();
      Math.abs(t.x - i.x) < this.getScrollEndedEventTiming() && Math.abs(t.y - i.y) < this.getScrollEndedEventTiming() || (this._content.setPosition(t), this._calculateSightArea(), this._outOfBoundaryAmountDirty = !0);
    }
  }, (0, __dependency_0.createClass)(e, [{
    key: "horizontalScrollBar",
    get: function () {
      return this._horizontalScrollBar;
    },
    set: function (t) {
      this._horizontalScrollBar !== t && (this._horizontalScrollBar = t, this._horizontalScrollBar && (this._horizontalScrollBar.setScrollView(this), this._updateScrollBar(__dependency_1.Vec2.ZERO)));
    }
  }, {
    key: "verticalScrollBar",
    get: function () {
      return this._verticalScrollBar;
    },
    set: function (t) {
      this._verticalScrollBar !== t && (this._verticalScrollBar = t, this._verticalScrollBar && (this._verticalScrollBar.setScrollView(this), this._updateScrollBar(__dependency_1.Vec2.ZERO)));
    }
  }, {
    key: "direction",
    get: function () {
      return this._direction;
    },
    set: function (t) {
      this._direction != t && (this._direction = t);
    }
  }, {
    key: "template",
    get: function () {
      return this._template;
    },
    set: function (t) {
      this._template = t;
    }
  }, {
    key: "delegate",
    get: function () {
      return this._delegate || Log.e("【" + this.name + "】致命錯誤 : 未設定TableView代理"), this._delegate;
    },
    set: function (t) {
      this._delegate !== t && (this._delegate = t);
    }
  }, {
    key: "viewSize",
    get: function () {
      var t,
        e = null == (t = this.view) ? void 0 : t.getComponent(__dependency_1.UITransform);
      return e ? e.contentSize : __dependency_1.Size.ZERO;
    }
  }, {
    key: "viewAnchor",
    get: function () {
      var t,
        e = null == (t = this.view) ? void 0 : t.anchorPoint;
      return e || __dependency_1.Vec2.ZERO;
    }
  }, {
    key: "contentSize",
    get: function () {
      var t,
        e = null == (t = this.content) ? void 0 : t.getComponent(__dependency_1.UITransform);
      return e ? e.contentSize : __dependency_1.Size.ZERO;
    }
  }, {
    key: "contentAnchor",
    get: function () {
      var t,
        e = null == (t = this.content) ? void 0 : t.getComponent(__dependency_1.UITransform);
      return e ? e.anchorPoint : __dependency_1.Vec2.ZERO;
    }
  }]), e;
}(__dependency_1.ScrollView)).Direction = E, B.FillOrder = V, (0, __dependency_0.applyDecoratedDescriptor)((L = B).prototype, "horizontalScrollBar", [T], Object.getOwnPropertyDescriptor(L.prototype, "horizontalScrollBar"), L.prototype), (0, __dependency_0.applyDecoratedDescriptor)(L.prototype, "verticalScrollBar", [b], Object.getOwnPropertyDescriptor(L.prototype, "verticalScrollBar"), L.prototype), R = (0, __dependency_0.applyDecoratedDescriptor)(L.prototype, "_direction", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return E.HORIZONTAL;
  }
}), z = (0, __dependency_0.applyDecoratedDescriptor)(L.prototype, "horizontal", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), U = (0, __dependency_0.applyDecoratedDescriptor)(L.prototype, "vertical", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), N = (0, __dependency_0.applyDecoratedDescriptor)(L.prototype, "_template", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), P = (0, __dependency_0.applyDecoratedDescriptor)(L.prototype, "fillOrder", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return V.TOP_DOWN;
  }
}), A = L)) || A) || A));
__dependency_1.cclegacy._RF.pop();
