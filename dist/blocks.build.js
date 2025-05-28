/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/src/js/index.js":
/*!**********************************!*\
  !*** ./frontend/src/js/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/block.js */ \"./frontend/src/js/list/block.js\");\n\nwindow.wf_support_builder = {};\nwindow.wf_support_builder.version = '1.0.0';\n\n//# sourceURL=webpack://wf-support-builder/./frontend/src/js/index.js?");

/***/ }),

/***/ "./frontend/src/js/list/block.js":
/*!***************************************!*\
  !*** ./frontend/src/js/list/block.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./frontend/src/js/list/edit.js\");\nvar registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\n\nregisterBlockType('wf-support-builder/list', {\n  title: __('List'),\n  description: __('Insert custom post type lists items into your content'),\n  icon: 'format-gallery',\n  category: 'wf-support-builder',\n  keywords: [__('list')],\n  supports: {\n    multiple: true,\n    html: false\n  },\n  attributes: {\n    className: {\n      type: 'string'\n    },\n    itemsLimit: {\n      type: 'number',\n      \"default\": 0\n    },\n    template: {\n      type: 'string'\n    },\n    postTypeId: {\n      type: 'string'\n    }\n  },\n  edit: function edit(props) {\n    return /*#__PURE__*/React.createElement(_edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"], props);\n  },\n  save: function save() {\n    return null;\n  }\n});\n\n//# sourceURL=webpack://wf-support-builder/./frontend/src/js/list/block.js?");

/***/ }),

/***/ "./frontend/src/js/list/edit.js":
/*!**************************************!*\
  !*** ./frontend/src/js/list/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WFServicesEdit)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar __ = wp.i18n.__;\nvar Component = wp.element.Component;\n\nvar _ref = wp.blockEditor || wp.editor,\n    InspectorControls = _ref.InspectorControls;\n\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl;\n\nvar WFServicesEdit = /*#__PURE__*/function (_Component) {\n  _inherits(WFServicesEdit, _Component);\n\n  var _super = _createSuper(WFServicesEdit);\n\n  function WFServicesEdit() {\n    _classCallCheck(this, WFServicesEdit);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(WFServicesEdit, [{\n    key: \"render\",\n    value: function render() {\n      var postTypes = wf_support_builder_global_variables.post_types.map(function (post_type) {\n        return {\n          value: post_type.name,\n          label: post_type.display_name\n        };\n      });\n      postTypes.unshift({\n        value: '',\n        label: 'Select'\n      });\n      var templates = wf_support_builder_global_variables.templates.map(function (template) {\n        return {\n          value: template,\n          label: template\n        };\n      });\n      templates.unshift({\n        value: '',\n        label: 'Select'\n      });\n      var _this$props = this.props,\n          attributes = _this$props.attributes,\n          className = _this$props.className,\n          setAttributes = _this$props.setAttributes;\n      var itemsLimit = attributes.itemsLimit,\n          postTypeId = attributes.postTypeId,\n          template = attributes.template;\n\n      function selectPostType(value) {\n        setAttributes({\n          postTypeId: value\n        });\n      }\n\n      function selectTemplate(value) {\n        setAttributes({\n          template: value\n        });\n      }\n\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: className\n      }, \"WF Support Builder List\", /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(TextControl, {\n        label: __('Items limit', 'wf-support-builder'),\n        value: itemsLimit,\n        onChange: function onChange(value) {\n          setAttributes({\n            itemsLimit: value\n          });\n        }\n      }), /*#__PURE__*/React.createElement(SelectControl, {\n        label: 'Post Type',\n        value: postTypeId,\n        options: postTypes,\n        onChange: selectPostType\n      }), /*#__PURE__*/React.createElement(SelectControl, {\n        label: 'Template',\n        value: template,\n        options: templates,\n        onChange: selectTemplate\n      }))));\n    }\n  }]);\n\n  return WFServicesEdit;\n}(Component);\n\n\nWFServicesEdit.defaultProps = {};\n\n//# sourceURL=webpack://wf-support-builder/./frontend/src/js/list/edit.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/src/js/index.js");
/******/ 	
/******/ })()
;