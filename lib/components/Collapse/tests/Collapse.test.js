var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our Collapse component
 */

import { shallow } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Collapse from '../index';
import { makeTheme } from '../../../theme';

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(_jsx(BootstrapProvider, {
    theme: props.theme
  }, void 0, _jsx(Collapse, {
    isOpened: props.isOpened
  }, void 0, props.children)));
};

describe('<Collapse />', function () {
  it('should render a <div> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      isOpened: true,
      theme: makeTheme({
        '$enable-transitions': false
      })
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      isOpened: true,
      theme: makeTheme({
        '$enable-transitions': false
      })
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      isOpened: false,
      theme: makeTheme({
        '$enable-transitions': true
      })
    });
    expect(renderedComponent.length).toBe(1);
  });
});