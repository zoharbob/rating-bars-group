import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React from "react";
import { mount } from 'enzyme';
import { RatingGroup } from "./index";
import { RatingGroupContainer, BarContainer, Bar, BarLengthContainer, Size, BarTitle, Limit } from './RatingGroup.style';
var bars = [{
  size: 30,
  color: 'red',
  title: 'john',
  limit: 80
}, {
  size: 100,
  color: 'green',
  title: 'dani'
}, {
  size: 90,
  color: 'yellow',
  title: 'jessica',
  limit: 10
}, {
  size: 41,
  color: 'blue',
  title: 'avi'
}];
describe('Rating Group', function () {
  it('render correctly', function () {
    var ratingGroup = mount(React.createElement(RatingGroup, {
      bars: bars
    }));
    var barSizes = ratingGroup.prop('bars').map(function (_ref) {
      var _ref$size = _ref.size,
          size = _ref$size === void 0 ? 0 : _ref$size;
      return size;
    });
    var limitCount = ratingGroup.prop('bars').filter(function (_ref2) {
      var limit = _ref2.limit;
      return limit;
    }).length;
    expect(ratingGroup.prop('bars')).toEqual(bars);
    var ratingGroupContainer = ratingGroup.find(RatingGroupContainer);
    expect(ratingGroupContainer).toHaveLength(1);
    expect(ratingGroupContainer.find(BarContainer)).toHaveLength(ratingGroup.prop('bars').length);
    expect(ratingGroupContainer.find(BarTitle)).toHaveLength(ratingGroup.prop('bars').length);
    expect(ratingGroupContainer.find(BarLengthContainer)).toHaveLength(ratingGroup.prop('bars').length);
    expect(ratingGroupContainer.find(Size)).toHaveLength(ratingGroup.prop('bars').length);
    expect(ratingGroupContainer.find(BarTitle).forEach(function (node, index) {
      var title = ratingGroup.prop('bars')[index].title;
      expect(node.prop('children')).toEqual(title);
    }));
    expect(ratingGroupContainer.find(BarLengthContainer).forEach(function (node, index) {
      var size = ratingGroup.prop('bars')[index].size;
      var color = ratingGroup.prop('bars')[index].color;
      var bar = node.find(Bar);
      var limitComp = ratingGroup.find(Limit);
      expect(limitComp).toHaveLength(limitCount);
      expect(bar.props()).toMatchObject({
        size: size,
        color: color
      });
    }));
    expect(ratingGroupContainer.find(Size).forEach(function (node, index) {
      var empHighestProp = ratingGroup.prop('empHighest');
      var size = ratingGroup.prop('bars')[index].size;
      var isMaxProp = size === Math.max.apply(Math, _toConsumableArray(barSizes));
      expect(node.props()).toMatchObject({
        empHighest: empHighestProp,
        isMax: isMaxProp
      });
      expect(node.prop('children')).toEqual([size, '%']);
    }));
  });
  it('passing limitBars prop', function () {
    var ratingGroup = mount(React.createElement(RatingGroup, {
      bars: bars,
      limitBars: 10
    }));
    var limitComp = ratingGroup.find(Limit);
    var limitBarsProp = ratingGroup.prop('limitBars');
    expect(limitComp).toHaveLength(ratingGroup.prop('bars').length);
    limitComp.forEach(function (node) {
      expect(node.prop('limit')).toEqual(limitBarsProp);
    });
  });
  it('passing props correctly', function () {
    var ratingGroup = mount(React.createElement(RatingGroup, {
      bars: bars,
      empHighest: true
    }));
    expect(ratingGroup.prop('empHighest')).toBe(true);
  });
});