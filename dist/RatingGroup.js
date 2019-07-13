import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React from 'react';
import { RatingGroupContainer, BarContainer, Bar, BarLengthContainer, Size, BarTitle } from './RatingGroup.style';

var RatingGroup = function RatingGroup(_ref) {
  var bars = _ref.bars,
      empHighest = _ref.empHighest;
  var barSizes = bars.map(function (_ref2) {
    var _ref2$size = _ref2.size,
        size = _ref2$size === void 0 ? 0 : _ref2$size;
    return size;
  });
  return React.createElement(RatingGroupContainer, null, bars.map(function (_ref3, index) {
    var _ref3$size = _ref3.size,
        size = _ref3$size === void 0 ? 0 : _ref3$size,
        _ref3$color = _ref3.color,
        color = _ref3$color === void 0 ? 'black' : _ref3$color,
        title = _ref3.title;
    return React.createElement(BarContainer, {
      key: index
    }, React.createElement(BarTitle, null, title), React.createElement(BarLengthContainer, null, React.createElement(Bar, {
      size: size > 100 ? 100 : size,
      color: color
    })), React.createElement(Size, {
      empHighest: empHighest,
      isMax: size === Math.max.apply(Math, _toConsumableArray(barSizes))
    }, size > 100 ? 100 : size, "%"));
  }));
};

export default RatingGroup;