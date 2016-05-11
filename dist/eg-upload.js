(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("eagle-ui/lib/utils/Component"), require("eagle-ui"), require("react/lib/ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "eagle-ui/lib/utils/Component", "eagle-ui", "react/lib/ReactDOM"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("eagle-ui/lib/utils/Component"), require("eagle-ui"), require("react/lib/ReactDOM")) : factory(root["React"], root["Component"], root["Eagleui"], root["ReactDom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	//export Table from './tables/Table.js';
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Upload2 = __webpack_require__(2);

	var _Upload3 = _interopRequireDefault(_Upload2);

	exports.Upload = _Upload3['default'];

	if (window.Eagleui) {
	    Eagleui.Upload = exports['Upload'];
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 16/5/9.
	 */

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _eagleUiLibUtilsComponent = __webpack_require__(4);

	var _eagleUiLibUtilsComponent2 = _interopRequireDefault(_eagleUiLibUtilsComponent);

	var _eagleUi = __webpack_require__(5);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactLibReactDOM = __webpack_require__(7);

	var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

	var _uploadLess = __webpack_require__(8);

	var _uploadLess2 = _interopRequireDefault(_uploadLess);

	var Upload = (function (_Component) {
	    _inherits(Upload, _Component);

	    _createClass(Upload, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default btn
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default a
	             * */
	            componentTag: _react.PropTypes.string,
	            //最大上传数量
	            maxNumber: _react.PropTypes.number,
	            minNumber: _react.PropTypes.number,
	            //最小上传数量
	            //是否允许删除
	            //是否支持预览
	            //是否支持多张批量上传
	            //压缩比例
	            //button文案
	            //上传url
	            uploadUrl: _react.PropTypes.string,
	            //允许上传文件大小
	            maxSize: _react.PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'upload',
	            componentTag: 'div',
	            maxSize: 5120000,
	            maxNumber: 1000000,
	            uploadBtnText: '选择上传文件',
	            maxNumberMessage: '上传数量达到上限，最多允许上传',
	            completeCallback: function completeCallback() {},
	            failureCallback: function failureCallback() {},
	            filter: function filter(files, maxSize) {
	                var arrFiles = [];
	                for (var i = 0, file; file = files[i]; i++) {
	                    if (file.type.indexOf("image") == 0) {
	                        if (file.size >= maxSize) {
	                            alert('您这张' + file.name + '图片大小过大，应小于' + maxSize + 'k');
	                        } else {
	                            arrFiles.push(file);
	                        }
	                    } else {
	                        alert('文件"' + file.name + '"不是图片。');
	                    }
	                }
	                return arrFiles;
	            }
	        },
	        enumerable: true
	    }]);

	    function Upload(props, context) {
	        _classCallCheck(this, Upload);

	        _Component.call(this, props, context);

	        this.fileList = [];
	        //上传的文件
	        this.uploadFiles = [];

	        this.toastId = this.uniqueId();
	        this.imageSliderId = this.uniqueId();
	        this.imgId = this.uniqueId();

	        this.transform = 'scale(1, 1) rotate(0deg)';
	        this.state = {
	            baseList: [],
	            isDrag: false,
	            progress: [],
	            showFile: {
	                result: ''
	            }
	        };
	    }

	    //获取文件列表

	    Upload.prototype.getFiles = function getFiles(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        var files = e.target.files || e.dataTransfer.files;

	        var len = files.length + this.fileList.length;

	        if (len > this.props.maxNumber) {
	            this.setState({
	                toastMessage: this.props.maxNumberMessage + this.props.maxNumber + '张'
	            });
	            _eagleUi.Dialog.mask(this.toastId);
	            return;
	        }

	        this.fileList = this.fileList.concat(this.props.filter(files, this.props.maxSize));

	        this.uploadFiles = files;

	        this.dealFiles();
	    };

	    Upload.prototype.dealFiles = function dealFiles() {

	        for (var i = 0, file; file = this.fileList[i]; i++) {
	            //增加唯一索引值
	            file.index = i;
	        }
	        //执行选择回调
	        this.select();
	        this.upload();
	        //this.onSelect(this.fileFilter);
	        //this.renderItem(this.fileList);
	    };

	    Upload.prototype.progressHandler = function progressHandler(file, loaded, total) {

	        if (total == 0) {
	            total = 1;
	        }

	        var loaded = (loaded / total * 100).toFixed(2) + '%';

	        var pross = this.state.progress;

	        pross[file.index] = loaded;
	        this.setState({
	            progress: pross
	        });
	    };

	    //上传完成重置

	    Upload.prototype.resetData = function resetData() {
	        this.setState({
	            progress: []
	        });
	        this.uploadFiles = null;
	    };

	    Upload.prototype.upload = function upload() {
	        var fileList = arguments.length <= 0 || arguments[0] === undefined ? this.uploadFiles : arguments[0];

	        var _this = this;

	        var _loop = function (i, file) {

	            (function (file) {
	                var xhr = new XMLHttpRequest();
	                if (xhr.upload) {
	                    xhr.upload.addEventListener('progress', function (e) {
	                        _this.progressHandler(file, e.loaded, e.total);
	                    }, false);

	                    xhr.onreadystatechange = function (e) {
	                        if (xhr.readyState == 4) {
	                            if (xhr.status == 200) {
	                                //成功回调
	                                _this.execMethod('success', file, JSON.parse(xhr.responseText || '{}'));
	                                //全部加载完成
	                                if (i == fileList.length - 1) {
	                                    _this.resetData();
	                                    _this.props.completeCallback();
	                                }
	                            } else {
	                                /* _this.fileList = _this.fileList.forEach((item)=>{
	                                     return item.name !=file.name;
	                                 });
	                                _this.select();*/
	                                //失败回调
	                                _this.resetData();
	                                _this.props.failureCallback(file, JSON.parse(xhr.responseText || '{}'));
	                            }
	                        }
	                    };

	                    xhr.open("POST", _this.props.uploadUrl, true);
	                    xhr.setRequestHeader("X_FILENAME", file.name);
	                    var f = new FormData();
	                    f.append(file.name, file);
	                    xhr.send(f);
	                }
	            })(file);
	        };

	        for (var i = 0, file = null; file = fileList[i]; i++) {
	            _loop(i, file);
	        }
	    };

	    Upload.prototype.closeStatus = function closeStatus(val, e) {
	        var i = e.target.parentNode.querySelector('i');
	        i.style.display = val;
	    };

	    Upload.prototype.remove = function remove(index) {
	        this.fileList = this.fileList.filter(function (item) {
	            return item.index != index;
	        });
	        this.select();
	    };

	    Upload.prototype.showPic = function showPic(file) {
	        this.setState({
	            showFile: {
	                profile: file.name,
	                url: file.result
	            }
	        });
	        this.transform = 'scale(1, 1) rotate(0deg)';

	        _eagleUi.Dialog.mask(this.imageSliderId);
	    };

	    Upload.prototype.renderItems = function renderItems(list) {
	        var _this2 = this;

	        var items = [],
	            _this = this,
	            progress = 0;
	        list.forEach(function (file) {
	            var _context;

	            progress = _this2.state.progress[file.index];
	            items.push(_react2['default'].createElement(
	                'li',
	                { key: file.index, onMouseEnter: (_context = _this.closeStatus).bind.call(_context, _this, 'block'), onMouseLeave: (_context = _this.closeStatus).bind.call(_context, _this, 'none') },
	                _react2['default'].createElement('img', { src: file.result, alt: file.name, title: file.name, onClick: (_context = _this.showPic).bind.call(_context, _this, file) }),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'text' },
	                    file.name
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames2['default']('progress', {
	                            hide: progress ? progress.match(/\d*/) * 1 > 100 : false
	                        }) },
	                    _react2['default'].createElement(
	                        'b',
	                        { style: {
	                                width: progress
	                            } },
	                        progress
	                    )
	                ),
	                _react2['default'].createElement(
	                    'i',
	                    { onClick: _this.remove.bind(_this, file.index) },
	                    'x'
	                )
	            ));
	        });
	        return items;
	    };

	    Upload.prototype.select = function select() {
	        var files = arguments.length <= 0 || arguments[0] === undefined ? this.fileList : arguments[0];

	        var items = [],
	            i = 0,
	            _this = this;
	        var file = null;

	        var render = function render() {
	            file = files[i];
	            if (file) {
	                var reader = new FileReader();

	                reader.onload = function (e) {
	                    items.push({
	                        index: file.index,
	                        name: file.name,
	                        result: e.target.result
	                    });
	                    i++;
	                    render();
	                };
	                reader.readAsDataURL(file);
	            } else {
	                _this.setState({
	                    baseList: items
	                });
	            }
	        };
	        render();
	        //return items;
	    };

	    Upload.prototype.dragLeave = function dragLeave(e) {
	        this.setState({
	            isDrag: false
	        });
	    };

	    Upload.prototype.dragOver = function dragOver(e) {
	        this.setState({
	            isDrag: true
	        });
	        //transform: scale(5.5, 5.5) rotate(270deg);
	    };

	    Upload.prototype.cssEnhance = function cssEnhance(type) {

	        var val = this.transform.match(/\d+\.?\d*/g);

	        var set = function set(zoom, rotate) {
	            return 'scale(' + (val[0] * 1 + zoom) + ', ' + (val[0] * 1 + zoom) + ') rotate(' + (val[2] * 1 + rotate) + 'deg)';
	        };

	        if (val && val.length >= 3) {
	            switch (type) {
	                case 'rotate':
	                    //val[2] = val[2]>=270?0
	                    val = set(0, 90);
	                    break;
	                case 'max':
	                    val = set(0.5, 0);
	                    break;
	                case 'min':
	                    val = set(-0.5, 0);
	                    break;
	            }

	            this.transform = val;
	            _reactLibReactDOM2['default'].findDOMNode(this.refs[this.imgId]).style.transform = val;
	        }
	    };

	    Upload.prototype.render = function render() {
	        var _context2;

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(), this.props.className) }),
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    _eagleUi.Button,
	                    null,
	                    this.props.uploadBtnText,
	                    _react2['default'].createElement('input', { type: 'file', onChange: this.getFiles.bind(this), multiple: true })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'item-list' },
	                _react2['default'].createElement(
	                    'ul',
	                    { onDrop: this.getFiles.bind(this), onDragLeave: this.dragLeave.bind(this), onDragOver: this.dragOver.bind(this), className: _classnames2['default']({
	                            'drag': this.state.isDrag
	                        }, 'clearfix') },
	                    this.state.baseList.length > 0 ? this.renderItems(this.state.baseList) : ''
	                )
	            ),
	            _react2['default'].createElement(
	                _eagleUi.Dialog,
	                { id: this.toastId, isClose: false, isMask: false },
	                _react2['default'].createElement(
	                    _eagleUi.Toast,
	                    { type: 'error' },
	                    this.state.toastMessage
	                )
	            ),
	            _react2['default'].createElement(
	                _eagleUi.Dialog,
	                { id: this.imageSliderId, isClose: true, isMask: true, title: this.state.showFile.profile || '', egSize: 'lg' },
	                _react2['default'].createElement(
	                    'div',
	                    { style: {
	                            overflow: 'hidden'
	                        } },
	                    _react2['default'].createElement('img', { ref: this.imgId, src: this.state.showFile.url, alt: '', style: { width: "100%", height: "auto", transform: this.transform } }),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'icon-box' },
	                        _react2['default'].createElement(_eagleUi.Icon, { onClick: (_context2 = this.cssEnhance).bind.call(_context2, this, 'rotate'), className: 'upload-icon', name: 'radio_unchecked', alt: '旋转' }),
	                        _react2['default'].createElement(_eagleUi.Icon, { onClick: (_context2 = this.cssEnhance).bind.call(_context2, this, 'max'), className: 'upload-icon', name: 'add', alt: '放大' }),
	                        _react2['default'].createElement(_eagleUi.Icon, { onClick: (_context2 = this.cssEnhance).bind.call(_context2, this, 'min'), className: 'upload-icon', name: 'remove', alt: '缩小' })
	                    )
	                )
	            )
	        );
	    };

	    return Upload;
	})(_eagleUiLibUtilsComponent2['default']);

	exports['default'] = Upload;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./upload.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./upload.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".eg-upload button {\n  position: relative;\n}\n.eg-upload input[type=\"file\"] {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.eg-upload .item-list {\n  overflow: hidden;\n  position: relative;\n}\n.eg-upload ul {\n  width: 100%;\n  min-height: 200px;\n  margin-top: 5px;\n  border: 1px dashed #e2e2e2;\n  background: #fff;\n}\n.eg-upload ul li {\n  margin: 5px 5px;\n  float: left;\n  position: relative;\n}\n.eg-upload ul li i {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  font-style: normal;\n  background: #ccc;\n  color: #fff;\n  text-align: center;\n  line-height: 20px;\n  top: -8px;\n  right: -8px;\n  cursor: pointer;\n  display: none;\n}\n.eg-upload ul li .text {\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 200px;\n}\n.eg-upload ul img {\n  width: 200px;\n  height: 200px;\n  cursor: pointer;\n}\n.eg-upload ul.drag {\n  border-color: #999;\n}\n.eg-upload ul .progress {\n  width: 100%;\n  height: 20px;\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  top: 50%;\n  color: #fff;\n  font-size: 12px;\n  line-height: 20px;\n  margin-top: -10px;\n}\n.eg-upload ul .progress b {\n  text-align: right;\n  display: block;\n  width: 0;\n  height: 100%;\n  background: #db3a27;\n  border-color: #c73321 #b12d1e #8e2418;\n  background-image: -webkit-linear-gradient(top, #ea8a7e 0%, #e15a4a 70%, #db3a27 100%);\n  background-image: -moz-linear-gradient(top, #ea8a7e 0%, #e15a4a 70%, #db3a27 100%);\n  background-image: -o-linear-gradient(top, #ea8a7e 0%, #e15a4a 70%, #db3a27 100%);\n  background-image: linear-gradient(to bottom, #ea8a7e 0%, #e15a4a 70%, #db3a27 100%);\n  -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);\n  -webkit-transition: all ease-in-out 0.4s;\n  -moz-transition: all ease-in-out 0.4s;\n  -ms-transition: all ease-in-out 0.4s;\n  -o-transition: all ease-in-out 0.4s;\n  transition: all ease-in-out 0.4s;\n}\n.upload-icon {\n  fill: #fff;\n  margin: 0 5px;\n  cursor: pointer;\n}\n.icon-box {\n  position: absolute;\n  bottom: 20px;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 5px 10px;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;