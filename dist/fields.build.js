/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/src/js/fields.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/src/js/fields.js":
/*!***********************************!*\
  !*** ./frontend/src/js/fields.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gallery_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-field */ \"./frontend/src/js/gallery-field/index.js\");\n/* harmony import */ var _gallery_field__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gallery_field__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./frontend/src/js/fields.js?");

/***/ }),

/***/ "./frontend/src/js/gallery-field/index.js":
/*!************************************************!*\
  !*** ./frontend/src/js/gallery-field/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Component = wp.element.Component;\nvar MediaPlaceholder = wp.blockEditor.MediaPlaceholder;\n\nvar Gallery = /*#__PURE__*/function (_Component) {\n  _inherits(Gallery, _Component);\n\n  var _super = _createSuper(Gallery);\n\n  function Gallery(props) {\n    var _this;\n\n    _classCallCheck(this, Gallery);\n\n    _this = _super.call(this, props);\n    var imagesHiddenField = document.querySelector(\"[name=\\\"\".concat(props.name, \"\\\"]\"));\n    _this.state = {\n      images: imagesHiddenField.value ? JSON.parse(imagesHiddenField.value) : [],\n      name: props.name\n    };\n    _this.onImageSelected = _this.onImageSelected.bind(_assertThisInitialized(_this));\n    _this.removeImage = _this.removeImage.bind(_assertThisInitialized(_this));\n    _this.handleError = _this.handleError.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Gallery, [{\n    key: \"onImageSelected\",\n    value: function onImageSelected(media) {\n      var _this2 = this;\n\n      var images = this.state.images;\n\n      if (media.url.indexOf(\"blob:\") < 0) {\n        // Remove one loading item\n        var selectedIndex = images.findIndex(function (element) {\n          return element.loading;\n        });\n        images.splice(selectedIndex, 1);\n        images.push({\n          url: media.url,\n          id: media.id,\n          title: media.title\n        });\n      } else {\n        images.push({\n          loading: true\n        });\n      }\n\n      this.setState({\n        images: images\n      }, function () {\n        document.querySelector(\"[name=\\\"\".concat(_this2.state.name, \"\\\"]\")).value = JSON.stringify(_this2.state.images);\n      });\n    }\n  }, {\n    key: \"removeImage\",\n    value: function removeImage(imageID) {\n      var _this3 = this;\n\n      if (!confirm('Deseja remover esta imagem?')) return;\n      var images = this.state.images.filter(function (image) {\n        return image.id !== imageID;\n      });\n      this.setState({\n        images: images\n      }, function () {\n        document.querySelector(\"[name=\\\"\".concat(_this3.state.name, \"\\\"]\")).value = JSON.stringify(_this3.state.images);\n      });\n    }\n  }, {\n    key: \"handleError\",\n    value: function handleError(props) {\n      alert(\"Error!\");\n      console.log(props);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      var images = this.state.images.map(function (image) {\n        if (image.loading) return /*#__PURE__*/React.createElement(\"div\", {\n          \"class\": \"loading\"\n        }, /*#__PURE__*/React.createElement(\"span\", null, \"Aguarde, carregando Imagem...\"));else return /*#__PURE__*/React.createElement(\"div\", {\n          className: \"thumbnail\"\n        }, /*#__PURE__*/React.createElement(\"img\", {\n          src: image.url,\n          alt: image.title\n        }), /*#__PURE__*/React.createElement(\"div\", {\n          className: \"btn-remove-image\"\n        }, /*#__PURE__*/React.createElement(\"a\", {\n          href: \"#\",\n          \"class\": \"dashicons dashicons-trash\",\n          onClick: function onClick() {\n            return _this4.removeImage(image.id);\n          }\n        })));\n      });\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"uploaded-images\"\n      }, images), /*#__PURE__*/React.createElement(MediaPlaceholder, {\n        onSelect: this.onImageSelected,\n        handleError: this.onError,\n        onSelectUrl: this.onImageUrlSelected\n      }));\n    }\n  }]);\n\n  return Gallery;\n}(Component);\n\nvar galleries = document.querySelectorAll('[data-media-field]');\n\nfor (var x = 0; x < galleries.length; x++) {\n  ReactDOM.render( /*#__PURE__*/React.createElement(Gallery, {\n    name: galleries[x].querySelector('.gallery-data').name\n  }), galleries[x].querySelector('.component'));\n}\n\n//# sourceURL=webpack:///./frontend/src/js/gallery-field/index.js?");

/***/ })

/******/ });