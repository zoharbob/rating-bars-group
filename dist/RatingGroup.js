import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React from 'react';
import { RatingGroupContainer, BarContainer, Bar, BarLengthContainer, Size, BarTitle, Limit } from './RatingGroup.style';

var RatingGroup = function RatingGroup(_ref) {
  var bars = _ref.bars,
      empHighest = _ref.empHighest,
      limitBars = _ref.limitBars;
  var barSizes = bars.map(function (_ref2) {
    var _ref2$size = _ref2.size,
        size = _ref2$size === void 0 ? 0 : _ref2$size;
    return size;
  });

  var checkLimit = function checkLimit(limit) {
    var num = limitBars ? limitBars : limit;
    return Math.sign(num) === 1 ? true : false;
  };

  return React.createElement(RatingGroupContainer, null, bars.map(function (_ref3, index) {
    var _ref3$size = _ref3.size,
        size = _ref3$size === void 0 ? 0 : _ref3$size,
        _ref3$color = _ref3.color,
        color = _ref3$color === void 0 ? 'black' : _ref3$color,
        title = _ref3.title,
        limit = _ref3.limit;
    var sizeValue = isNaN(size) ? 0 : size;
    return React.createElement(BarContainer, {
      key: index
    }, React.createElement(BarTitle, null, title), React.createElement(BarLengthContainer, null, React.createElement(Bar, {
      size: sizeValue > 100 ? 100 : sizeValue,
      color: color
    }), checkLimit(limit || limitBars) ? React.createElement(Limit, {
      limit: limitBars ? limitBars : limit
    }) : ''), React.createElement(Size, {
      empHighest: empHighest,
      isMax: sizeValue === Math.max.apply(Math, _toConsumableArray(barSizes))
    }, sizeValue > 100 ? 100 : sizeValue, "%"));
  }));
};

export default RatingGroup;