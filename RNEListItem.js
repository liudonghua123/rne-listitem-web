"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _helpers = require("react-native-elements/src/helpers");

var _config = require("react-native-elements/src/config");

var _reactNativeElements = require("react-native-elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';
var chevronDefaultProps = {
  type: _reactNative.Platform.OS === 'ios' ? 'ionicon' : 'material',
  color: '#D1D1D6',
  name: _reactNative.Platform.OS === 'ios' ? 'ios-arrow-forward' : 'keyboard-arrow-right',
  size: 16
};

var checkmarkDefaultProps = function checkmarkDefaultProps(theme) {
  return {
    name: 'check',
    size: 20,
    color: theme.colors.primary
  };
};

var renderText = function renderText(content, defaultProps, style) {
  return (0, _helpers.renderNode)(_reactNativeElements.Text, content, { ...defaultProps,
    style: _reactNative.StyleSheet.flatten([style, defaultProps && defaultProps.style])
  });
};

var renderAvatar = function renderAvatar(content) {
  return (0, _helpers.renderNode)(_reactNativeElements.Avatar, content, {
    size: 40,
    rounded: true
  });
};

var renderIcon = function renderIcon(content) {
  return (0, _helpers.renderNode)(_reactNativeElements.Icon, content, {
    color: _reactNative.Platform.OS === 'ios' ? null : ANDROID_SECONDARY,
    size: 24
  });
};

var ListItem = function ListItem(props) {
  var title = props.title,
      titleStyle = props.titleStyle,
      titleProps = props.titleProps,
      subtitle = props.subtitle,
      subtitleStyle = props.subtitleStyle,
      subtitleProps = props.subtitleProps,
      containerStyle = props.containerStyle,
      onPress = props.onPress,
      onLongPress = props.onLongPress,
      _props$Component = props.Component,
      Component = _props$Component === void 0 ? onPress || onLongPress ? _reactNative.TouchableHighlight : _reactNative.View : _props$Component,
      leftIcon = props.leftIcon,
      leftAvatar = props.leftAvatar,
      leftElement = props.leftElement,
      rightIcon = props.rightIcon,
      rightAvatar = props.rightAvatar,
      rightElement = props.rightElement,
      rightTitle = props.rightTitle,
      rightTitleStyle = props.rightTitleStyle,
      rightTitleProps = props.rightTitleProps,
      rightSubtitle = props.rightSubtitle,
      rightSubtitleStyle = props.rightSubtitleStyle,
      rightSubtitleProps = props.rightSubtitleProps,
      input = props.input,
      buttonGroup = props.buttonGroup,
      switchProps = props.switch,
      checkBox = props.checkBox,
      badge = props.badge,
      chevron = props.chevron,
      contentContainerStyle = props.contentContainerStyle,
      rightContentContainerStyle = props.rightContentContainerStyle,
      checkmark = props.checkmark,
      disabled = props.disabled,
      disabledStyle = props.disabledStyle,
      bottomDivider = props.bottomDivider,
      topDivider = props.topDivider,
      pad = props.pad,
      linearGradientProps = props.linearGradientProps,
      _props$ViewComponent = props.ViewComponent,
      ViewComponent = _props$ViewComponent === void 0 ? linearGradientProps && global.Expo ? global.Expo.LinearGradient : _reactNative.View : _props$ViewComponent,
      theme = props.theme,
      attributes = _objectWithoutProperties(props, ["title", "titleStyle", "titleProps", "subtitle", "subtitleStyle", "subtitleProps", "containerStyle", "onPress", "onLongPress", "Component", "leftIcon", "leftAvatar", "leftElement", "rightIcon", "rightAvatar", "rightElement", "rightTitle", "rightTitleStyle", "rightTitleProps", "rightSubtitle", "rightSubtitleStyle", "rightSubtitleProps", "input", "buttonGroup", "switch", "checkBox", "badge", "chevron", "contentContainerStyle", "rightContentContainerStyle", "checkmark", "disabled", "disabledStyle", "bottomDivider", "topDivider", "pad", "linearGradientProps", "ViewComponent", "theme"]);

  return _react.default.createElement(Component, _extends({}, attributes, {
    onPress: onPress,
    onLongPress: onLongPress,
    disabled: disabled
  }), _react.default.createElement(PadView, _extends({
    Component: ViewComponent
  }, linearGradientProps, {
    style: _reactNative.StyleSheet.flatten([styles.container(theme), (buttonGroup || switchProps) && {
      paddingVertical: 8
    }, topDivider && {
      borderTopWidth: _reactNative.StyleSheet.hairlineWidth
    }, bottomDivider && {
      borderBottomWidth: _reactNative.StyleSheet.hairlineWidth
    }, containerStyle, disabled && disabledStyle]),
    pad: pad
  }), (0, _helpers.renderNode)(_reactNativeElements.Text, leftElement), renderIcon(leftIcon), renderAvatar(leftAvatar), (typeof title !== 'undefined' || subtitle) && _react.default.createElement(_reactNative.View, {
    style: _reactNative.StyleSheet.flatten([styles.contentContainer, contentContainerStyle])
  }, renderText(title, {
    testID: 'listItemTitle',
    ...titleProps
  }, _reactNative.StyleSheet.flatten([styles.title, titleStyle])), renderText(subtitle, subtitleProps, _reactNative.StyleSheet.flatten([styles.subtitle, subtitleStyle]))), (!!rightTitle || !!rightSubtitle) && _react.default.createElement(_reactNative.View, {
    style: _reactNative.StyleSheet.flatten([styles.rightContentContainer, rightContentContainerStyle])
  }, renderText(rightTitle, rightTitleProps, _reactNative.StyleSheet.flatten([styles.title, styles.rightTitle, rightTitleStyle])), renderText(rightSubtitle, rightSubtitleProps, _reactNative.StyleSheet.flatten([styles.subtitle, styles.rightSubtitle, rightSubtitleStyle]))), input && _react.default.createElement(_reactNativeElements.Input, _extends({}, input, {
    inputStyle: _reactNative.StyleSheet.flatten([styles.input, input && input.inputStyle]),
    inputContainerStyle: _reactNative.StyleSheet.flatten([styles.inputContentContainer, input && input.inputContainerStyle]),
    containerStyle: _reactNative.StyleSheet.flatten([styles.inputContainer, input && input.containerStyle])
  })), switchProps && _react.default.createElement(_reactNative.Switch, switchProps), checkBox && _react.default.createElement(_reactNativeElements.CheckBox, _extends({}, checkBox, {
    containerStyle: _reactNative.StyleSheet.flatten([styles.checkboxContainer, checkBox && checkBox.containerStyle])
  })), badge && _react.default.createElement(_reactNativeElements.Badge, badge), buttonGroup && _react.default.createElement(_reactNativeElements.ButtonGroup, _extends({}, buttonGroup, {
    containerStyle: _reactNative.StyleSheet.flatten([styles.buttonGroupContainer, buttonGroup && buttonGroup.containerStyle])
  })), renderAvatar(rightAvatar), renderIcon(rightIcon), (0, _helpers.renderNode)(_reactNativeElements.Text, rightElement), (0, _helpers.renderNode)(_reactNativeElements.Icon, checkmark, checkmarkDefaultProps(theme)), (0, _helpers.renderNode)(_reactNativeElements.Icon, chevron, chevronDefaultProps)));
};

exports.ListItem = ListItem;
var styles = {
  container: function container(theme) {
    return { ..._reactNative.Platform.select({
        ios: {
          padding: 14
        },
        default: {
          padding: 16
        }
      }),
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderColor: theme.colors.divider
    };
  },
  title: {
    backgroundColor: 'transparent',
    ..._reactNative.Platform.select({
      ios: {
        fontSize: 17
      },
      default: {
        fontSize: 16
      }
    })
  },
  subtitle: {
    backgroundColor: 'transparent',
    ..._reactNative.Platform.select({
      ios: {
        fontSize: 15
      },
      default: {
        color: ANDROID_SECONDARY,
        fontSize: 14
      }
    })
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  rightContentContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  inputContainer: {
    flex: 1,
    paddingRight: 0
  },
  inputContentContainer: {
    flex: 1,
    borderBottomWidth: 0,
    width: null,
    height: null
  },
  input: {
    flex: 1,
    textAlign: 'right',
    width: null,
    height: null
  },
  checkboxContainer: {
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    padding: 0
  },
  buttonGroupContainer: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0
  },
  rightTitle: {
    color: ANDROID_SECONDARY
  },
  rightSubtitle: {
    color: ANDROID_SECONDARY
  }
};
ListItem.propTypes = {
  containerStyle: _config.ViewPropTypes.style,
  contentContainerStyle: _config.ViewPropTypes.style,
  rightContentContainerStyle: _config.ViewPropTypes.style,
  Component: _propTypes.default.func,
  onPress: _propTypes.default.func,
  onLongPress: _propTypes.default.func,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  titleStyle: _config.TextPropTypes.style,
  titleProps: _propTypes.default.object,
  subtitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  subtitleStyle: _config.TextPropTypes.style,
  subtitleProps: _propTypes.default.object,
  leftIcon: _helpers.nodeType,
  leftAvatar: _helpers.nodeType,
  leftElement: _helpers.nodeType,
  rightIcon: _helpers.nodeType,
  rightAvatar: _helpers.nodeType,
  rightElement: _helpers.nodeType,
  rightTitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  rightTitleStyle: _config.TextPropTypes.style,
  rightTitleProps: _propTypes.default.object,
  rightSubtitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  rightSubtitleStyle: _config.TextPropTypes.style,
  rightSubtitleProps: _propTypes.default.object,
  input: _propTypes.default.object,
  buttonGroup: _propTypes.default.object,
  switch: _propTypes.default.object,
  checkBox: _propTypes.default.object,
  badge: _propTypes.default.object,
  chevron: _helpers.nodeType,
  checkmark: _helpers.nodeType,
  disabled: _propTypes.default.bool,
  disabledStyle: _config.ViewPropTypes.style,
  topDivider: _propTypes.default.bool,
  bottomDivider: _propTypes.default.bool,
  pad: _propTypes.default.number,
  linearGradientProps: _propTypes.default.object,
  ViewComponent: _propTypes.default.func,
  theme: _propTypes.default.object
};
ListItem.defaultProps = {
  pad: 16,
  title: ''
};

var PadView = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      pad = _ref.pad,
      Component = _ref.Component,
      props = _objectWithoutProperties(_ref, ["children", "pad", "Component"]);

  var childrens = _react.default.Children.toArray(children);

  var length = childrens.length;
  var Container = Component || _reactNative.View;
  return _react.default.createElement(Container, _extends({
    ref: ref
  }, props), _react.default.Children.map(childrens, function (child, index) {
    return child && [child, index !== length - 1 && _react.default.createElement(_reactNative.View, {
      width: pad
    })];
  }));
});

PadView.propTypes = {
  children: _propTypes.default.node,
  pad: _propTypes.default.number,
  Component: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
};

var _default = (0, _config.withTheme)(ListItem, 'ListItem');

exports.default = _default;