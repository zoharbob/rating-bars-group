import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left: ", "%;\n    top: 0;\n    height: 60%;\n    border-bottom-right-radius: 30px;\n    border-bottom-left-radius: 10px;\n    border-right: #676766 7px solid;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n  width: 30px;\n  padding: 10px;\n  font-size: ", ";\n  font-weight: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  width: 50px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        transition: box-shadow 0.3s;\n        transition-timing-function: ease;\n        :hover {\n            box-shadow: 2px 2px 10px ", ";\n        }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: ", "%;\n  height: 100%;\n  background-color: ", ";\n  border-bottom-right-radius: ", ";\n  border-top-right-radius: ", ";\n  -webkit-animation-name: ", ";\n  -webkit-animation-duration: 2s;\n  -webkit-animation-timing-function: ease-out;\n  animation-name: ", ";\n  animation-duration: 2s;\n  animation-timing-function: ease-out;\n  \n  ", "\n  }\n"]);

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

import styled, { keyframes, css } from 'styled-components';
export var RatingGroupContainer = styled.div(_templateObject());
export var BarContainer = styled.div(_templateObject2());
export var BarLengthContainer = styled.div(_templateObject3());

var fillBar = function fillBar(_ref) {
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
}, fillBar, fillBar, function (_ref6) {
  var isGlowing = _ref6.isGlowing;
  return isGlowing && css(_templateObject6(), function (_ref7) {
    var color = _ref7.color;
    return color;
  });
});
export var BarTitle = styled.div(_templateObject7());
export var Size = styled.div(_templateObject8(), function (_ref8) {
  var empHighest = _ref8.empHighest,
      isMax = _ref8.isMax;
  return empHighest && isMax ? '12.5px' : '12px';
}, function (_ref9) {
  var empHighest = _ref9.empHighest,
      isMax = _ref9.isMax;
  return empHighest && isMax && 'bold';
});
export var Limit = styled.div(_templateObject9(), function (_ref10) {
  var limit = _ref10.limit;
  return limit > 100 ? 100 : limit;
});