import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left: ", "%;\n    top: 0;\n    height: 60%;\n    border-bottom-right-radius: 30px;\n    border-bottom-left-radius: 10px;\n    border-right: #676766 7px solid;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n  width: 30px;\n  padding: 10px;\n  font-size: ", ";\n  font-weight: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  width: 50px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: ", "%;\n  height: 100%;\n  background-color: ", ";\n  border-bottom-right-radius: ", ";\n  border-top-right-radius: ", ";\n  animation-name: ", ";\n  animation-duration: 2s;\n  animation-timing-function: ease-out;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  from {\n    width: 0;\n  }\n\n  to {\n    width: ", "%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 92%;\n  height: 30px;\n  background-color: #e5e5e5;\n  flex: 1;\n  position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-color: whitesmoke;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { keyframes } from 'styled-components';
export var RatingGroupContainer = styled.div(_templateObject());
export var BarContainer = styled.div(_templateObject2());
export var BarLengthContainer = styled.div(_templateObject3());

var rotate = function rotate(_ref) {
  var size = _ref.size;
  return keyframes(_templateObject4(), size);
};

export var Bar = styled.div(_templateObject5(), function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, function (_ref4) {
  var size = _ref4.size;
  return size === 100 ? 0 : '15px';
}, function (_ref5) {
  var size = _ref5.size;
  return size === 100 ? 0 : '15px';
}, rotate);
export var BarTitle = styled.div(_templateObject6());
export var Size = styled.div(_templateObject7(), function (_ref6) {
  var empHighest = _ref6.empHighest,
      isMax = _ref6.isMax;
  return empHighest && isMax ? '12.5px' : '12px';
}, function (_ref7) {
  var empHighest = _ref7.empHighest,
      isMax = _ref7.isMax;
  return empHighest && isMax && 'bold';
});
export var Limit = styled.div(_templateObject8(), function (_ref8) {
  var limit = _ref8.limit;
  return limit > 100 ? 100 : limit;
});