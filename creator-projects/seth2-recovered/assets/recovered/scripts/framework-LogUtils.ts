// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-LogUtils.ts.js
// SHA256: cc2c3180fc4fd99272a98e9f8cdc04b7d249e97f2f652dcfb12fc8831cdac2d7
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as KeyStyle };
var __export_1;
export { __export_1 as ShieldKey };
var __export_2;
export { __export_2 as getKeyStyle };
var __export_3;
export { __export_3 as getShieldSub };
var __export_4;
export { __export_4 as getShieldTitle };
var __export_5;
export { __export_5 as getStyle };
var __export_6;
export { __export_6 as red };
var __export_7;
export { __export_7 as red_dark };
var __export_8;
export { __export_8 as orange };
var __export_9;
export { __export_9 as orange_dark };
var __export_10;
export { __export_10 as yellow };
var __export_11;
export { __export_11 as yellow_light };
var __export_12;
export { __export_12 as yellow_medium };
var __export_13;
export { __export_13 as yellow_dark };
var __export_14;
export { __export_14 as green };
var __export_15;
export { __export_15 as green_light };
var __export_16;
export { __export_16 as green_medium };
var __export_17;
export { __export_17 as green_dark };
var __export_18;
export { __export_18 as blue };
var __export_19;
export { __export_19 as blue_light };
var __export_20;
export { __export_20 as blue_medium };
var __export_21;
export { __export_21 as blue_dark };
var __export_22;
export { __export_22 as purple };
var __export_23;
export { __export_23 as purple_light };
var __export_24;
export { __export_24 as purple_medium };
var __export_25;
export { __export_25 as purple_dark };
var __export_26;
export { __export_26 as pink };
var __export_27;
export { __export_27 as pink_light };
var __export_28;
export { __export_28 as pink_dark };
var __export_29;
export { __export_29 as grey };
var __export_30;
export { __export_30 as grey_light };
var __export_31;
export { __export_31 as grey_medium };
var __export_32;
export { __export_32 as grey_dark };
var __export_33;
export { __export_33 as class_color };
var __export_34;
export { __export_34 as function_color };
var __export_35;
export { __export_35 as arg_color };
var __export_36;
export { __export_36 as warn_color };
var __export_37;
export { __export_37 as error_color };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "KeyStyle":
      __export_0 = value;
      break;
    case "ShieldKey":
      __export_1 = value;
      break;
    case "getKeyStyle":
      __export_2 = value;
      break;
    case "getShieldSub":
      __export_3 = value;
      break;
    case "getShieldTitle":
      __export_4 = value;
      break;
    case "getStyle":
      __export_5 = value;
      break;
    case "red":
      __export_6 = value;
      break;
    case "red_dark":
      __export_7 = value;
      break;
    case "orange":
      __export_8 = value;
      break;
    case "orange_dark":
      __export_9 = value;
      break;
    case "yellow":
      __export_10 = value;
      break;
    case "yellow_light":
      __export_11 = value;
      break;
    case "yellow_medium":
      __export_12 = value;
      break;
    case "yellow_dark":
      __export_13 = value;
      break;
    case "green":
      __export_14 = value;
      break;
    case "green_light":
      __export_15 = value;
      break;
    case "green_medium":
      __export_16 = value;
      break;
    case "green_dark":
      __export_17 = value;
      break;
    case "blue":
      __export_18 = value;
      break;
    case "blue_light":
      __export_19 = value;
      break;
    case "blue_medium":
      __export_20 = value;
      break;
    case "blue_dark":
      __export_21 = value;
      break;
    case "purple":
      __export_22 = value;
      break;
    case "purple_light":
      __export_23 = value;
      break;
    case "purple_medium":
      __export_24 = value;
      break;
    case "purple_dark":
      __export_25 = value;
      break;
    case "pink":
      __export_26 = value;
      break;
    case "pink_light":
      __export_27 = value;
      break;
    case "pink_dark":
      __export_28 = value;
      break;
    case "grey":
      __export_29 = value;
      break;
    case "grey_light":
      __export_30 = value;
      break;
    case "grey_medium":
      __export_31 = value;
      break;
    case "grey_dark":
      __export_32 = value;
      break;
    case "class_color":
      __export_33 = value;
      break;
    case "function_color":
      __export_34 = value;
      break;
    case "arg_color":
      __export_35 = value;
      break;
    case "warn_color":
      __export_36 = value;
      break;
    case "error_color":
      __export_37 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x18fe19) {
  void 0;
})(__dependency_0);
__publish({
  'KeyStyle': void 0x0,
  'ShieldKey': void 0x0,
  'getKeyStyle': function (_0x3db7c0, _0x421237) {
    return (_0x539412["get"](_0x3db7c0) ? "background:" + _0x539412["get"](_0x3db7c0) + ';' : 'background:' + _0x1f99fa + ';') + (_0x421237 ? 'color:' + _0x421237 + ';' : "color:#fdfdfd;") + _0x5cc208 + _0x40c145 + _0x32f495;
  },
  'getShieldSub': function (_0x1bba50, _0x2a33ae) {
    return (_0x557f21["get"](_0x1bba50) ? 'background:' + _0x557f21["get"](_0x1bba50) : "background:" + _0x268514) + (_0x2a33ae ? "color:" + _0x2a33ae + ';' : 'color:#fdfdfd;') + _0x5cc208 + "border-radius:0 5px 5px 0 ;margin:0px 5px 0px 0px;padding: 5px 8px 5px 5px;";
  },
  'getShieldTitle': function (_0x4f20c7, _0xa7c0fc) {
    return (_0x557f21["get"](_0x4f20c7) ? "background:" + _0x557f21["get"](_0x4f20c7) : "background-image: linear-gradient(to bottom, #5f5f5f, #4d4d4d);") + (_0xa7c0fc ? "color:" + _0xa7c0fc + ';' : "color:#fdfdfd;") + _0x5cc208 + 'border-radius:5px\x200\x200\x205px;';
  },
  'getStyle': function (_0x494fbe, _0x138802) {
    return (_0x494fbe ? "background:" + _0x494fbe + ';' : "background:" + _0x1f99fa + ';') + (_0x138802 ? "color:" + _0x138802 + ';' : "color:#fdfdfd;") + _0x5cc208 + _0x40c145 + _0x32f495;
  }
}), __dependency_0["cclegacy"]["_RF"]["push"]({}, "3bd13OQzeFAB5n8UFYtqU62", "LogUtils", void 0x0);
var _0x9f8a45,
  _0x32f495 = "margin:1px 5px 1px 1px;",
  _0x40c145 = 'border-radius:5px;',
  _0x5cc208 = "font-family:\"微軟正黑體\",\"Verdana\", \"Arial\",\"Helvetica\";font-weight: 900;font-size:12px;text-shadow:.05rem .05rem #202327;padding: 5px 5px;",
  _0x563c11 = __publish("red", '#a22041'),
  _0x58ccf0 = (__publish("red_dark", '#B15560'), __publish("orange", "#bb5548")),
  _0x1b28af = (__publish('orange_dark', "#B67766"), __publish("yellow", "#7b6319"), __publish("yellow_light", "#f8d75b"), __publish("yellow_medium", '#917730'), __publish("yellow_dark", "#bb944b")),
  _0x1f99fa = __publish("green", '#8F9650'),
  _0x52e422 = (__publish("green_light", '#9DBEA9'), __publish("green_medium", "#478384")),
  _0x3b4e00 = __publish("green_dark", '#849B5A'),
  _0x29126a = __publish('blue', "#4073a8"),
  _0x402d59 = (__publish("blue_light", "#6fa0c8"), __publish("blue_medium", '#3e62ad'), __publish("blue_dark", "#6A87A3"), __publish("purple", "#6e5b70")),
  _0x4d903a = (__publish('purple_light', "#857e95"), __publish("purple_medium", "#604e61"), __publish("purple_dark", "#8E7291")),
  _0x261fbe = (__publish('pink', "#a64d79"), __publish("pink_light", "#cc7eb1")),
  _0x4f7a07 = __publish('pink_dark', '#B47686'),
  _0x274378 = __publish('grey', "#606369"),
  _0x36cfbf = (__publish("grey_light", "#808389"), __publish("grey_medium", '#5d808f'), __publish("grey_dark", "#879CAD"), __publish("class_color", '#B98A82'), __publish("function_color", "#86a092"), __publish("arg_color", '#9B8D8C'), __publish('warn_color', "#b57f14"));
__publish("error_color", "#90403e");
!function (_0x39a772) {
  _0x39a772[_0x39a772["Request"] = 0x0] = "Request", _0x39a772[_0x39a772["Response"] = 0x1] = "Response", _0x39a772[_0x39a772["XRequest"] = 0x2] = "XRequest", _0x39a772[_0x39a772['XResponse'] = 0x3] = "XResponse", _0x39a772[_0x39a772['Important'] = 0x4] = "Important", _0x39a772[_0x39a772["Manager"] = 0x5] = "Manager", _0x39a772[_0x39a772['Function'] = 0x6] = "Function", _0x39a772[_0x39a772['Logic'] = 0x7] = "Logic", _0x39a772[_0x39a772["Info"] = 0x8] = "Info", _0x39a772[_0x39a772["Watch"] = 0x9] = "Watch", _0x39a772[_0x39a772["Core"] = 0xa] = 'Core', _0x39a772[_0x39a772['Notify'] = 0xb] = "Notify", _0x39a772[_0x39a772["ToDo"] = 0xc] = "ToDo";
}(_0x9f8a45 || (_0x9f8a45 = __publish('KeyStyle', {})));
var _0x539412 = new Map([[_0x9f8a45["Request"], _0x402d59], [_0x9f8a45['Response'], _0x4d903a], [_0x9f8a45["XRequest"], _0x4f7a07], [_0x9f8a45['XResponse'], _0x261fbe], [_0x9f8a45["Important"], _0x563c11], [_0x9f8a45["Manager"], _0x3b4e00], [_0x9f8a45["Function"], _0x1b28af], [_0x9f8a45["Logic"], _0x1f99fa], [_0x9f8a45["Info"], _0x29126a], [_0x9f8a45["Watch"], _0x52e422], [_0x9f8a45["Core"], _0x274378], [_0x9f8a45["Notify"], _0x36cfbf], [_0x9f8a45["ToDo"], _0x58ccf0]]);
var _0x11f016,
  _0x268514 = "linear-gradient(to bottom, #8f8f8f, #7d7d7d);";
!function (_0x137162) {
  _0x137162[_0x137162["Red"] = 0x0] = "Red", _0x137162[_0x137162["Orange"] = 0x1] = 'Orange', _0x137162[_0x137162["Yellow"] = 0x2] = 'Yellow', _0x137162[_0x137162["Green"] = 0x3] = "Green", _0x137162[_0x137162["Yellowgreen"] = 0x4] = "Yellowgreen", _0x137162[_0x137162['Lightgrey'] = 0x5] = 'Lightgrey', _0x137162[_0x137162["Blue"] = 0x6] = "Blue", _0x137162[_0x137162['Purple'] = 0x7] = "Purple";
}(_0x11f016 || (_0x11f016 = __publish("ShieldKey", {})));
var _0x557f21 = new Map([[_0x11f016['Red'], "linear-gradient(to bottom, #c73821, #b83b27);"], [_0x11f016["Orange"], "linear-gradient(to bottom, #c06434, #af5b30);"], [_0x11f016['Yellow'], "linear-gradient(to bottom, #b0944b, #917730);"], [_0x11f016['Green'], "linear-gradient(to bottom, #709d4e, #5a7e3f);"], [_0x11f016['Yellowgreen'], "linear-gradient(to bottom, #93951a, #808216);"], [_0x11f016["Lightgrey"], _0x268514], [_0x11f016['Blue'], "linear-gradient(to bottom, #4073a8, #3a6898);"], [_0x11f016['Purple'], "linear-gradient(to bottom, #857e95, #6e5b70);"]]);
__dependency_0["cclegacy"]['_RF']['pop']();
