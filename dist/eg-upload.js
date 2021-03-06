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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

	var _egImageview = __webpack_require__(8);

	var _cssUploadLess = __webpack_require__(17);

	var _cssUploadLess2 = _interopRequireDefault(_cssUploadLess);

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
	            maxSize: _react.PropTypes.number,
	            hideImgViewWhenEmpty: _react.PropTypes.bool
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
	            egSize: 'default',
	            egStyle: '',
	            width: '100%',
	            height: '200px',
	            thumbWidth: '200px',
	            thumbHeight: '200px',
	            placeholder: '此区域支持复制粘贴上传功能，仅限图片',
	            completeCallback: function completeCallback() {},
	            failureCallback: function failureCallback() {},
	            uploadedCallback: function uploadedCallback() {},
	            successCallback: function successCallback() {
	                return true;
	            },
	            renderItemCallback: null,
	            filter: function filter(files, maxSize) {
	                var arrFiles = [];
	                for (var i = 0, file; file = files[i]; i++) {
	                    arrFiles.push(file);
	                    /*if (file.type.indexOf("image") == 0) {
	                        if (file.size >= maxSize) {
	                            alert(`您这张${file.name}图片大小过大，应小于${maxSize}k`);
	                        } else {
	                            arrFiles.push(file);
	                        }
	                    } else {
	                        alert('文件"' + file.name + '"不是图片。');
	                    }*/
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
	        //this.imgId = this.uniqueId();

	        //此数据返回给调用者
	        this.data = [];

	        this.isRender = true;
	        this.timeout = null;

	        this.target = null;

	        this.imageFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
	        this.state = {
	            baseList: [],
	            isDrag: false,
	            progress: [],
	            showFile: {
	                name: '',
	                url: ''
	            }
	        };
	    }

	    Upload.prototype.uniqueId = function uniqueId() {
	        return 'file-' + (new Date().getTime() + (Math.random() * 1e10).toFixed(0));
	    };

	    Upload.prototype.getClipboardData = function getClipboardData(e) {
	        var files = [],
	            _this = this;

	        if (e.clipboardData) {
	            //getAsString
	            var items = e.clipboardData.items,
	                item = null,
	                file = null;

	            /*items[0].getAsString(function(str){
	            } );*/

	            for (var i = 0, len = items.length; i < len; i++) {
	                item = items[i];
	                if (item.kind == 'file' || item.type.indexOf('image') > -1) {
	                    file = item.getAsFile();
	                    try {
	                        file.name = this.uniqueId();
	                    } catch (ex) {
	                        file._name = this.uniqueId();
	                        console.warn('不支持更改可读属性name！');
	                    }
	                    files.push(file);
	                }
	            }
	        }

	        return files;
	    };

	    //获取文件列表

	    Upload.prototype.getFiles = function getFiles(e) {
	        e.stopPropagation();
	        e.preventDefault();

	        var files = e.target.files || e.dataTransfer && e.dataTransfer.files || [];

	        if (files.length <= 0) {
	            files = this.getClipboardData(e);
	        }

	        var len = files.length + this.fileList.length;

	        this.target = e.target;

	        if (len > this.props.maxNumber) {
	            this.setState({
	                toastMessage: this.props.maxNumberMessage + this.props.maxNumber + '张'
	            });
	            _eagleUi.Dialog.mask(this.toastId);
	            return;
	        }

	        var map = this.props.filter(files, this.props.maxSize);

	        for (var i = 0; i < map.length; i++) {
	            if (!map[i]._name) {
	                map[i]._name = map[i].name;
	            }
	        }

	        if (map && map.length && map.length > 0) {
	            this.fileList = this.fileList.concat(map);

	            this.uploadFiles = map;
	            this.dealFiles();
	        }
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

	        var loading = (loaded / total * 100).toFixed(2) + '%';

	        var pross = this.state.progress;

	        pross[file.index] = loading;
	        this.setState({
	            progress: pross
	        });
	    };

	    //上传完成重置

	    Upload.prototype.resetData = function resetData() {
	        this.uploadFiles = null;
	    };

	    Upload.prototype.rollback = function rollback(file, xhr) {
	        var _this = this;
	        _this.fileList = _this.fileList.filter(function (item) {
	            return item._name != file._name;
	        });

	        this.target && (this.target.value = '');

	        clearInterval(_this.timeout);
	        this.timeout = setInterval(function () {
	            if (typeof _this.isRender != 'undefined' && _this.isRender) {
	                _this.select(_this.fileList);
	            } else {
	                clearInterval(_this.timeout);
	            }
	        }, 1000);
	        //失败回调
	        //_this.resetData();
	        _this.props.failureCallback(file, xhr.responseText);
	    };

	    Upload.prototype.upload = function upload() {
	        var _this2 = this;

	        var fileList = arguments.length <= 0 || arguments[0] === undefined ? this.uploadFiles : arguments[0];

	        var _this = this,
	            success = 0;

	        _this.props.uploadedCallback(this.fileList, fileList);
	        for (var i = 0, file = null; file = fileList[i]; i++) {

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
	                                var isUpload = _this2.props.successCallback(file, JSON.parse(xhr.responseText || '{}'));
	                                //_this.execMethod('success',file,JSON.parse(xhr.responseText ||'{}') );

	                                if (typeof isUpload == 'boolean' && !isUpload) {
	                                    _this.rollback(file, xhr);
	                                } else {
	                                    _this.data.push(JSON.parse(xhr.responseText || '{}'));
	                                }

	                                success += 1;
	                                //全部加载完成
	                                if (success == fileList.length) {
	                                    _this.resetData();
	                                    _this.props.completeCallback(_this.data, _this.fileList && _this.fileList.length ? _this.fileList.length : 0);
	                                }
	                            } else {
	                                _this.rollback(file, xhr);
	                            }
	                        }
	                    };

	                    xhr.open("POST", _this.props.uploadUrl, true);
	                    xhr.setRequestHeader('X_FILENAME', encodeURIComponent(file._name));
	                    var f = new FormData();
	                    f.append(file._name || '', file);
	                    xhr.send(f);
	                }
	            })(file);
	        }
	        _this.fileUpload.value = '';
	    };

	    Upload.prototype.closeStatus = function closeStatus(val, e) {
	        var parent = e.target;

	        while (parent.nodeName.toLowerCase() != 'li') {
	            parent = parent.parentNode;
	        }
	        parent.querySelector('i').style.display = val;
	    };

	    Upload.prototype.remove = function remove(index) {
	        var _this = this;
	        this.fileList = this.fileList.filter(function (item) {
	            _this.data = _this.data.filter(function (ele) {
	                return !(ele._name == item._name && item.index == index);
	            });
	            // if(_this.data[item._name] && item.index==index){
	            //     _this.data[item._name] = null;
	            //     delete _this.data[item._name];
	            // }
	            return item.index != index;
	        });

	        /*let data = {},_data = this.data,singleData = null;
	        for(var item in _data){
	            singleData = _data[item];
	            if(singleData){
	                data[item] = singleData;
	            }
	        }
	        this.data = data;*/
	        var len = 0;
	        if (this.fileList && this.fileList.length) {
	            len = this.fileList.length;
	        }
	        _this.props.completeCallback(_this.data, len);
	        this.select();
	    };

	    Upload.prototype.showPic = function showPic(file) {
	        this.setState({
	            showFile: {
	                name: file._name,
	                url: file.result
	            }
	        });

	        _eagleUi.Dialog.mask(this.imageSliderId);
	    };

	    Upload.prototype.renderItems = function renderItems(list) {
	        var _this3 = this;

	        var items = [],
	            _this = this,
	            progress = 0;
	        list.forEach(function (file) {
	            var _context;

	            progress = _this3.state.progress[file.index];
	            items.push(_react2['default'].createElement(
	                'li',
	                { key: file.index, onMouseEnter: (_context = _this.closeStatus).bind.call(_context, _this, 'block'), onMouseLeave: (_context = _this.closeStatus).bind.call(_context, _this, 'none') },
	                _this.imageFilter.test(file.type) ? _react2['default'].createElement(
	                    'div',
	                    { style: {
	                            width: _this3.props.thumbWidth,
	                            height: _this3.props.thumbHeight
	                        } },
	                    _react2['default'].createElement('img', { src: file.result, alt: file._name, title: file._name, onClick: (_context = _this.showPic).bind.call(_context, _this, file),
	                        style: {
	                            width: _this3.props.thumbWidth,
	                            height: _this3.props.thumbHeight
	                        }
	                    }),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'text', style: {
	                                width: _this3.props.thumbWidth
	                            }, title: file._name },
	                        file._name
	                    )
	                ) : _react2['default'].createElement(
	                    'div',
	                    { className: 'text', style: {
	                            width: _this3.props.thumbWidth,
	                            height: _this3.props.thumbHeight,
	                            lineHeight: _this3.props.thumbHeight
	                        }, title: file._name },
	                    file._name
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames2['default']('progress', {
	                            hide: typeof progress == 'undefined' ? true : progress ? progress.match(/\d*/) * 1 >= 100 : false
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
	                _this.isRender = false;
	                if (_this.imageFilter.test(file.type) && !file._init) {
	                    var reader = new FileReader();
	                    reader.onload = function (e) {
	                        items.push({
	                            index: file.index,
	                            name: file.name || _this.uniqueId(),
	                            _name: file._name || _this.uniqueId(),
	                            result: e.target.result,
	                            type: file.type
	                        });
	                        i++;
	                        render();
	                    };
	                    reader.readAsDataURL(file);
	                } else {
	                    items.push({
	                        index: file.index,
	                        name: file.name || _this.uniqueId(),
	                        _name: file._name || _this.uniqueId(),
	                        result: file.result || '',
	                        type: file.type
	                    });
	                    i++;
	                    render();
	                }
	            } else {
	                _this.isRender = true;
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
	    };

	    Upload.prototype.render = function render() {
	        var _this4 = this;

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(), this.props.className) }),
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    _eagleUi.Button,
	                    { egSize: this.props.egSize, egStyle: this.props.egStyle },
	                    this.props.uploadBtnText,
	                    _react2['default'].createElement('input', { ref: function (fileUpload) {
	                            return _this4.fileUpload = fileUpload;
	                        }, type: 'file', onChange: this.getFiles.bind(this), multiple: true })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'item-list', style: {
	                        display: this.props.hideImgViewWhenEmpty && this.state.baseList.length == 0 ? 'none' : 'block'
	                    } },
	                _react2['default'].createElement(
	                    'ul',
	                    { onDrop: this.getFiles.bind(this), onDragLeave: this.dragLeave.bind(this), onDragOver: this.dragOver.bind(this), onPaste: this.getFiles.bind(this), className: _classnames2['default']({
	                            'drag': this.state.isDrag
	                        }, 'clearfix'), style: {
	                            width: this.props.width,
	                            minHeight: this.props.height
	                        } },
	                    this.state.baseList.length > 0 ? this.props.renderItemCallback ? this.props.renderItemCallback.bind(this, this.state.baseList) : this.renderItems(this.state.baseList) : _react2['default'].createElement(
	                        'li',
	                        { className: 'placeholder', style: { minHeight: this.props.height, lineHeight: this.props.height } },
	                        this.props.placeholder
	                    )
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
	            _react2['default'].createElement(_egImageview.ImageView, { id: this.imageSliderId, file: this.state.showFile })
	        );
	    };

	    return Upload;
	})(_eagleUiLibUtilsComponent2['default']);

	exports['default'] = Upload;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
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
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
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
			classNames.default = classNames;
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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _ImageView2 = __webpack_require__(9);

	var _ImageView3 = _interopRequireDefault(_ImageView2);

	exports.ImageView = _ImageView3['default'];

	if (window.Eagleui) {
	    Eagleui.Upload = exports['ImageView'];
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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

	var _Draggable = __webpack_require__(10);

	var _Draggable2 = _interopRequireDefault(_Draggable);

	__webpack_require__(13);

	var _utils = __webpack_require__(12);

	var ImageView = (function (_Component) {
	    _inherits(ImageView, _Component);

	    _createClass(ImageView, null, [{
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
	            componentTag: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            componentTag: 'div',
	            /**
	             * @param file
	             * 图片参数数组
	             * @default []
	             * */
	            file: {
	                name: '',
	                url: ''
	            },
	            id: '',
	            /**
	             * @param isMask
	             * 是显示遮罩层
	             * @default true
	             * */
	            isMask: true,
	            /**
	             * @param isLoop
	             * 是否循环播放
	             * @default true
	             * */
	            isLoop: true,
	            /**
	             * @param activeIndex
	             * 当前展示图片下标
	             * @default 0
	             * */
	            activeIndex: 0,
	            /**
	             * @param showIcon
	             * 配置要显示的操作图标
	             * @default Object
	             * */
	            showIcon: {
	                /**
	                 * @param leftRotate
	                 * 是否显示左旋转图标
	                 * @default false
	                 * */
	                leftRotate: false,
	                /**
	                 * @param rightRotate
	                 * 是否显示左旋转图标
	                 * @default false
	                 * */
	                rightRotate: false,
	                /**
	                 * @param zoomIn
	                 * 是否显示放大图标
	                 * @default false
	                 * */
	                zoomIn: false,
	                /**
	                 * @param zoomOut
	                 * 是否显示放大图标
	                 * @default false
	                 * */
	                zoomOut: false

	            }
	        },
	        enumerable: true
	    }]);

	    function ImageView(props, context) {
	        _classCallCheck(this, ImageView);

	        _Component.call(this, props, context);
	        this.imgId = this.uniqueId();
	        this.totalNum = 1;
	        this.transform = 'scale(1, 1) rotate(0deg)';
	        this.state = {
	            maxHeight: document.documentElement.clientHeight - 100,
	            maxWidth: document.documentElement.clientWidth - 100,
	            imgWrap: {
	                height: 'auto',
	                width: 'auto'
	            },
	            activeIndex: this.props.activeIndex || 0,
	            name: '图片',
	            //动画准备，暂时不用
	            sizeChange: false
	        };
	        this.initSize = {
	            height: 'auto',
	            width: 'auto'
	        };
	        this.isLoop = this.props.isLoop;
	        this.showIcon = this.props.showIcon;
	    }

	    /**
	     * 判断旋转方向
	     * */

	    ImageView.prototype.getDirNum = function getDirNum(rorateVal, dir) {

	        return dir == 1 ? rorateVal >= 0 ? 1 : -1 : rorateVal <= 0 ? -1 : 1;
	    };

	    /**
	     * @dir -1 向左 1 向右
	     * */

	    ImageView.prototype.cssEnhance = function cssEnhance(type, dir) {
	        var val = this.transform.match(/-?\d+\.?\d*/g);
	        if (val && val.length >= 3) {
	            var _ = 0;
	            var zoom = _.zoom;
	            var rotate = _.rotate;

	            switch (type) {
	                case 'rotate':
	                    //val[2] = val[2]>=270?0
	                    zoom = 0;
	                    rotate = 90;
	                    break;
	                case 'max':
	                    zoom = 0.5;
	                    rotate = 0;
	                    break;
	                case 'min':
	                    zoom = -0.5;
	                    rotate = 0;
	                    break;
	            }
	            this.calculatePosition(zoom, rotate, type, dir);
	        }
	    };

	    ImageView.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var index = nextProps.activeIndex;
	        this.setState({
	            imgWrap: {
	                height: 'auto',
	                width: 'auto'
	            },
	            activeIndex: typeof index == 'undefined' ? this.state.activeIndex : index
	        });
	        this.isLoop = nextProps.isLoop;
	        this.showIcon = Object.assign(this.showIcon, nextProps.showIcon);
	        this.resetImageStatus();
	    };

	    ImageView.prototype.transformImg = function transformImg() {
	        /**
	         * @todo 原来操作dom，先不管等待改进
	         * */
	        setTimeout((function () {
	            var dom = document.getElementById(this.imgId);
	            if (dom != null) {
	                var domStyle = dom.style; //ReactDom.findDOMNode(this.refs[this.imgId]).style;
	                domStyle.WebkitTransform = this.transform;
	                domStyle.msTransform = this.transform;
	                domStyle.OTransform = this.transform;
	                domStyle.transform = this.transform;
	            }
	        }).bind(this));
	    };

	    /**
	     * 获取img size & reset
	     * https://bugs.chromium.org/p/chromium/issues/detail?id=7731
	     * */

	    ImageView.prototype.onLoadHandler = function onLoadHandler(e) {
	        // 获取加载图片的大小
	        this.imgSize = this.getImgSize(this.state.activeIndex);
	        var size = this.imgSize;
	        this.setState({
	            imgWrap: size
	        });
	        this.resetImageStatus();
	    };

	    ImageView.prototype.getDeg = function getDeg(deg, dir) {
	        switch (deg / 180 % 2 * dir) {
	            case 0:
	            case 1:
	                deg = 0;
	                break;
	            case 0.5:
	                deg = 1;
	                break;
	            case 1.5:
	                deg = -1;
	                break;
	            default:
	                deg = 0;
	        }
	        return deg;
	    };

	    /**
	     *
	     * @param zoom 放大/缩小
	     * @param rotate 旋转
	     * @param type 操作类型
	     * @param dir 旋转方向
	     */

	    ImageView.prototype.calculatePosition = function calculatePosition(zoom, rotate, type, dir) {
	        var vals = this.transform.match(/-?\d+\.?\d*/g);
	        var scaleVal = vals[0] * 1 + zoom;
	        var rotateVal = vals[2] * 1 + rotate * dir;
	        var diff = vals[3] || vals[4] || 0;
	        var imgSize = this.imgSize;
	        if (!imgSize || !imgSize.width || !imgSize.height) {
	            imgSize = this.imgSize = this.getImgSize(this.state.activeIndex);
	        }
	        if (type == 'rotate') {
	            var dirNum = this.getDirNum(rotateVal, dir);
	            var tx = this.getDeg(rotateVal, dirNum);
	            if (tx == 0) {
	                // 重置为正常
	                diff = 0;
	                // 正常的显示
	                this.setState({
	                    imgWrap: {
	                        width: imgSize.width,
	                        height: imgSize.height
	                    }
	                });
	            } else {
	                // 图片的宽高比
	                var imgScaleHW = imgSize.width / imgSize.height;
	                var iH = imgSize.height;
	                var iW = imgSize.width;
	                var mW = this.state.maxWidth;
	                var mH = this.state.maxHeight;
	                var _dirNum = this.getDirNum(rotateVal, dir);
	                // wrap 的宽高转换
	                if (iH > mW) {
	                    // 计算 iw 的值
	                    iH = mW;
	                    iW = imgScaleHW * iH;
	                } else if (iW > mH) {
	                    // 计算ih 的值 mW
	                    iH = iW / imgScaleHW;
	                    iW = mH;
	                }
	                // 计算偏移
	                diff = _dirNum * tx * (iW - iH) / 2;
	                this.setState({
	                    imgWrap: {
	                        width: iH,
	                        height: iW
	                    }
	                });
	            }
	        } else {
	            // 重置拖放的位置
	            this.draggable.reset();
	        }
	        var diffVal = diff * 1;
	        // 如果为负数的话,图片就旋转了
	        if (scaleVal <= 0) {
	            return;
	        }
	        // 计算是否缩放
	        // TODO 需要优化
	        var _zoom = zoom || scaleVal - 1;
	        if (_zoom != 0) {
	            _zoom = _zoom > 0 ? 0.5 : 2;
	            diffVal = _zoom * diffVal;
	        }
	        this.transform = 'scale(' + scaleVal + ', ' + scaleVal + ') rotate(' + rotateVal + 'deg) translate(' + diffVal + 'px, ' + diffVal + 'px)';
	        // 渲染生效
	        //@todo 原来操作dom不太好，需改进
	        this.transformImg();
	        // Dialog.mask(this.props.id);
	    };

	    ImageView.prototype.render = function render() {
	        var _context,
	            _this = this;

	        this.isFile = !!this.props.children ? false : true;
	        var file = this.props.file;

	        var files = !this.isFile ? this.transToFile() : file;
	        this.saveToLocal(files);
	        this.name = this.getImgName(this.state.activeIndex);
	        this.totalNum = this.getFileLength();
	        var _showIcon = this.showIcon;
	        var leftRotate = _showIcon.leftRotate;
	        var rightRotate = _showIcon.rightRotate;
	        var zoomIn = _showIcon.zoomIn;
	        var zoomOut = _showIcon.zoomOut;

	        return _react2['default'].createElement(
	            _eagleUi.Dialog,
	            _extends({ id: this.props.id, isClose: true, isMask: this.props.isMask }, this.props, { isHeader: false, className: 'imageview-dialog' }),
	            _react2['default'].createElement(
	                _Draggable2['default'],
	                { elm: 'imageview-header', ref: function (draggable) {
	                        _this.draggable = draggable;
	                    } },
	                _react2['default'].createElement(
	                    'div',
	                    { id: 'imageview-header', className: _classnames2['default']('eg-header', 'h4', {
	                            'header-bg': true
	                        }), style: {
	                            textAlign: 'left',
	                            cursor: 'move'
	                        } },
	                    this.name
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'img-hover' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: "img-wrap " + (this.props.overflow ? 'img-wrap-hidden' : 'img-wrap-show'),
	                        style: {
	                            height: this.state.imgWrap.height,
	                            width: this.state.imgWrap.width
	                        } },
	                    this.renderContent()
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames2['default']('icon-side left-15', this.isShowSideArrow()) },
	                    _react2['default'].createElement(_eagleUi.Icon, { onClick: (_context = this.countIndex).bind.call(_context, this, 'left'), className: 'upload-icon',
	                        name: 'chevron-left' })
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames2['default']('icon-side right-15', this.isShowSideArrow()) },
	                    _react2['default'].createElement(_eagleUi.Icon, { onClick: (_context = this.countIndex).bind.call(_context, this, 'right'), className: 'upload-icon',
	                        name: 'chevron-right' })
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'icon-box' },
	                    _react2['default'].createElement(_eagleUi.Icon, { onClick: (_context = this.cssEnhance).bind.call(_context, this, 'rotate', -1),
	                        className: _classnames2['default']('upload-icon', this.isHideIcon('left')),
	                        name: 'zuoxuanzhuan',
	                        alt: '左旋转' }),
	                    _react2['default'].createElement(_eagleUi.Icon, { onClick: (_context = this.cssEnhance).bind.call(_context, this, 'rotate', 1),
	                        className: _classnames2['default']('upload-icon', this.isHideIcon('right')),
	                        name: 'youxuanzhuan',
	                        alt: '右旋转' }),
	                    _react2['default'].createElement(_eagleUi.Icon, { onClick: (_context = this.cssEnhance).bind.call(_context, this, 'max', 1),
	                        className: _classnames2['default']('upload-icon', this.isHideIcon(zoomIn)),
	                        name: 'add',
	                        alt: '放大' }),
	                    _react2['default'].createElement(_eagleUi.Icon, { onClick: (_context = this.cssEnhance).bind.call(_context, this, 'min', 1),
	                        className: _classnames2['default']('upload-icon', this.isHideIcon(zoomOut)),
	                        name: 'minus',
	                        alt: '缩小' }),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'tip-num' },
	                        _react2['default'].createElement(
	                            'label',
	                            { className: 'red-txt' },
	                            this.state.activeIndex + 1
	                        ),
	                        _react2['default'].createElement(
	                            'label',
	                            { className: 'mar-5' },
	                            '/'
	                        ),
	                        _react2['default'].createElement(
	                            'label',
	                            { className: 'white-txt' },
	                            this.totalNum
	                        )
	                    )
	                )
	            )
	        );
	    };

	    /**
	     * is show side arrow
	     * */

	    ImageView.prototype.isShowSideArrow = function isShowSideArrow() {
	        var len = this.getFileLength();
	        return len > 1 ? '' : 'hide';
	    };

	    /**
	     * is show icon
	     * */

	    ImageView.prototype.isHideIcon = function isHideIcon(key) {
	        return key ? '' : 'hide';
	    };

	    /**
	     * 放大或者拖动时不需要overHidden
	     * */

	    ImageView.prototype.isOverHide = function isOverHide() {
	        //return this.state.sizeChange ? '' : 'over-hidden';
	        return '';
	    };

	    /**
	     * 渲染多图情况
	     * */

	    ImageView.prototype.renderContent = function renderContent() {
	        //let {file} = this.props;
	        //let files = !this.isFile ? this.transToFile() : file;
	        //this.saveToLocal(files);
	        return _react2['default'].createElement(
	            'div',
	            null,
	            this.renderImage(this.state.activeIndex)
	        );
	    };

	    ImageView.prototype.renderImage = function renderImage(index) {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement('img', { draggable: 'false', id: this.imgId,
	                onLoad: this.onLoadHandler.bind(this),
	                src: this.getImgSrc(index), alt: '',
	                style: {
	                    maxHeight: this.state.maxHeight + 'px',
	                    maxWidth: this.state.maxWidth + 'px',
	                    msTransform: this.transform,
	                    WebkitTransform: this.transform,
	                    MozTransform: this.transform,
	                    OTransform: this.transform,
	                    transform: this.transform } })
	        );
	    };

	    /**
	     * transform children to files
	     * */

	    ImageView.prototype.transToFile = function transToFile() {
	        var file = [];
	        _react2['default'].Children.forEach(this.props.children, function (options) {
	            file.push({
	                name: options.props.name,
	                url: options.props.url
	            });
	        });
	        return file;
	    };

	    /**
	     * get file info push to local
	     * */

	    ImageView.prototype.saveToLocal = function saveToLocal(file) {
	        this._file = _utils.isArray(file) ? file : _utils.toArray(file);
	    };

	    ImageView.prototype.getFileLength = function getFileLength() {
	        return this._file ? this._file.length : 0;
	    };

	    ImageView.prototype.getImgOpt = function getImgOpt(index) {
	        var i = this.isValidLength(index, 0, this.getFileLength() - 1) ? index : 0;
	        return this._file ? this._file[i] : undefined;
	    };

	    ImageView.prototype.isValidLength = function isValidLength(index, min, max) {
	        return index >= min ? index <= max ? true : false : false;
	    };

	    ImageView.prototype.getImgName = function getImgName(index) {
	        var opt = this.getImgOpt(index);
	        return opt ? opt.name : '图片';
	    };

	    ImageView.prototype.getImgSrc = function getImgSrc(index) {
	        var opt = this.getImgOpt(index);
	        return opt ? opt.url : '';
	    };

	    ImageView.prototype.getImgSize = function getImgSize(index) {
	        var opt = this.getImgOpt(index),
	            size = this.initSize,
	            tempImg = new Image();
	        if (!opt) return size;
	        tempImg.src = opt.url;
	        size = this.getModifySize(tempImg.width, tempImg.height, this.state.maxWidth, this.state.maxHeight);
	        return size;
	    };

	    ImageView.prototype.isOver = function isOver(init, max) {
	        return init > max;
	    };

	    /**
	     * 是否超出最大宽高
	     * 计算的有点草率啊。。。。
	     *  */

	    ImageView.prototype.getModifySize = function getModifySize(initW, initH, maxW, maxH) {
	        var w = this.isOver(initW, maxW),
	            h = this.isOver(initH, maxH),
	            size = {
	            width: initW,
	            height: initH
	        },
	            i = initW / initH;
	        (h || w) && (size = {
	            width: i * maxH,
	            height: maxH
	        });
	        return size;
	    };

	    ImageView.prototype.countIndex = function countIndex(dir) {
	        var index = parseInt(this.state.activeIndex),
	            max = this.totalNum - 1,
	            num = index;
	        if (dir == 'left') {
	            index > 0 && (num = index - 1);
	            this.isLoop && index == 0 && (num = max);
	        } else {
	            index < max && (num = index * 1 + 1);
	            this.isLoop && index == max && (num = 0);
	        }
	        if (num != index) {
	            this.name = this.getImgName(this.props, this.isFile, num);
	            this.imgId = this.uniqueId();
	            this.setState({
	                activeIndex: num,
	                sizeChange: false
	            });
	            //获得imgsize，再重新渲染
	            this.onLoadHandler();
	        }
	    };

	    /**
	     * 渲染旋转箭头方向
	     * */

	    ImageView.prototype.renderArrow = function renderArrow(key, dir) {
	        var _context2;

	        var dirs = {
	            left: -1,
	            right: 1
	        };
	        return _react2['default'].createElement(
	            'div',
	            { onClick: (_context2 = this.cssEnhance).bind.call(_context2, this, 'rotate', dirs[dir]),
	                className: _classnames2['default']('arrow-warp', 'arrow-' + dir, this.isHideIcon(key)) },
	            _react2['default'].createElement('div', { className: 'arrow' }),
	            _react2['default'].createElement('div', { className: 'inner' })
	        );
	    };

	    /**
	     * 重置图片的状态
	     */

	    ImageView.prototype.resetImageStatus = function resetImageStatus() {
	        this.transform = 'scale(1, 1) rotate(0deg)';
	        // Dialog.mask(this.props.id);
	        this.transformImg();
	        this.draggable && this.draggable.reset();
	    };

	    return ImageView;
	})(_eagleUiLibUtilsComponent2['default']);

	exports['default'] = ImageView;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * inspiration by https://github.com/mzabriskie/react-draggable
	 * Created by genffy on 16/7/18.
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

	var _reactLibReactDOM = __webpack_require__(7);

	var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

	var _eagleUiLibUtilsComponent = __webpack_require__(4);

	var _eagleUiLibUtilsComponent2 = _interopRequireDefault(_eagleUiLibUtilsComponent);

	var _eagleUiLibUtilsDom = __webpack_require__(11);

	var _eagleUiLibUtilsDom2 = _interopRequireDefault(_eagleUiLibUtilsDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utils = __webpack_require__(12);

	var eventsFor = {
	    touch: {
	        start: 'touchstart',
	        move: 'touchmove',
	        stop: 'touchend'
	    },
	    mouse: {
	        start: 'mousedown',
	        move: 'mousemove',
	        stop: 'mouseup'
	    }
	};
	var dragEventFor = eventsFor.mouse;

	var Draggable = (function (_Component) {
	    _inherits(Draggable, _Component);

	    _createClass(Draggable, null, [{
	        key: 'propTypes',
	        value: {
	            bounds: _react.PropTypes.string,
	            defaultPosition: _react.PropTypes.shape({
	                x: _react.PropTypes.number,
	                y: _react.PropTypes.number
	            }),
	            position: _react.PropTypes.shape({
	                x: _react.PropTypes.number,
	                y: _react.PropTypes.number
	            })
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            // default is parent
	            bounds: 'parent',
	            defaultPosition: { x: 0, y: 0 },
	            position: null
	        },
	        enumerable: true
	    }]);

	    function Draggable(props) {
	        _classCallCheck(this, Draggable);

	        _Component.call(this, props);
	        // console.dir(props.position);
	        this.state = {
	            dragging: false,
	            dragged: false,
	            x: props.position ? props.position.x : props.defaultPosition.x,
	            y: props.position ? props.position.y : props.defaultPosition.y,
	            slackX: 0, slackY: 0,
	            touchIdentifier: null
	        };
	        this.id = props.elm;
	    }

	    Draggable.prototype.componentWillMount = function componentWillMount() {};

	    Draggable.prototype.componentDidMount = function componentDidMount() {
	        // var elm = this.getDElement();
	        // if(elm){
	        //     setTimeout(()=>{
	        //         this.setState({
	        //             x:elm.offsetWidth,
	        //             y:elm.offsetHeight
	        //         })
	        //     })
	        // }
	    };

	    Draggable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        // Set x/y if position has changed
	        if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
	            this.setState({ x: nextProps.position.x, y: nextProps.position.y });
	        }
	    };

	    Draggable.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.setState({ dragging: false });
	    };

	    Draggable.prototype.createCoreData = function createCoreData(x, y) {
	        var draggable = this;
	        var state = draggable.state;
	        var isStart = !_utils.isNum(state.lastX);
	        var elm = this.getDElement();
	        if (isStart) {
	            // first start init data
	            return {
	                node: elm ? elm : _reactLibReactDOM2['default'].findDOMNode(draggable),
	                deltaX: 0, deltaY: 0,
	                lastX: x, lastY: y,
	                x: x, y: y
	            };
	        } else {
	            // calculate data.
	            return {
	                node: elm ? elm : _reactLibReactDOM2['default'].findDOMNode(draggable),
	                deltaX: x - state.lastX, deltaY: y - state.lastY,
	                lastX: state.lastX, lastY: state.lastY,
	                x: x, y: y
	            };
	        }
	    };

	    // factory

	    Draggable.prototype.createDraggableData = function createDraggableData(coreData) {
	        var draggable = this;
	        return {
	            node: coreData.node,
	            x: draggable.state.x + coreData.deltaX,
	            y: draggable.state.y + coreData.deltaY,
	            deltaX: coreData.deltaX,
	            deltaY: coreData.deltaY,
	            lastX: draggable.state.x,
	            lastY: draggable.state.y
	        };
	    };

	    Draggable.prototype.getPosition = function getPosition(evt, touchIdentifier) {
	        // 判断 touch
	        var touchObj = typeof touchIdentifier === 'number' ? _utils.getTouch(evt, touchIdentifier) : null;
	        if (typeof touchIdentifier === 'number' && !touchObj) return null;

	        evt = touchObj || evt;
	        var node = _reactLibReactDOM2['default'].findDOMNode(this);
	        var offsetParent = node.offsetParent;
	        var offsetParentRect = _eagleUiLibUtilsDom2['default'](offsetParent).offset();

	        var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
	        var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;

	        return { x: x, y: y };
	    };

	    Draggable.prototype.handleDragStart = function handleDragStart(e) {
	        // Set touch identifier in component state if this is a touch event. This allows us to
	        // distinguish between individual touches on multitouch screens by identifying which
	        // touchpoint was set to this element.
	        var touchIdentifier = _utils.getTouchIdentifier(e);
	        this.setState({ touchIdentifier: touchIdentifier });

	        var _getPosition = this.getPosition(e, touchIdentifier, this /*node*/);

	        var x = _getPosition.x;
	        var y = _getPosition.y;

	        this.setState({
	            dragging: true,
	            dragged: true,
	            lastX: x,
	            lastY: y
	        });
	        _utils.addEvent(document, dragEventFor.move, this.handleDrag.bind(this));
	        _utils.addEvent(document, dragEventFor.stop, this.handleDragStop.bind(this));
	    };

	    Draggable.prototype.handleDrag = function handleDrag(e) {
	        if (!this.state.dragging) return false;

	        var _getPosition2 = this.getPosition(e, this.state.touchIdentifier, this /*node*/);

	        var x = _getPosition2.x;
	        var y = _getPosition2.y;

	        var coreData = this.createCoreData(x, y);
	        var uiData = this.createDraggableData(coreData);
	        var newState = {
	            x: uiData.x,
	            y: uiData.y
	        };
	        // TODO Keep within bounds.
	        newState.lastX = x;
	        newState.lastY = y;
	        this.setState(newState);
	    };

	    Draggable.prototype.handleDragStop = function handleDragStop(e) {
	        if (!this.state.dragging) return false;
	        var newState = {
	            dragging: false,
	            lastX: NaN,
	            lastY: NaN,
	            slackX: 0,
	            slackY: 0
	        };
	        // If this is a controlled component, the result of this operation will be to
	        // revert back to the old position. We expect a handler on `onDragStop`, at the least.
	        var controlled = Boolean(this.props.position);
	        if (controlled) {
	            var _props$position = this.props.position;
	            var _x = _props$position.x;
	            var _y = _props$position.y;

	            newState.x = _x;
	            newState.y = _y;
	        }
	        this.setState(newState);
	        _utils.removeEvent(document, dragEventFor.move, this.handleDrag);
	        _utils.removeEvent(document, dragEventFor.stop, this.handleDragStop);
	    };

	    // TODO add prefix for browser

	    Draggable.prototype.createCSSTransform = function createCSSTransform(styleObj) {
	        var value = 'translate( ' + styleObj.x + 'px, ' + styleObj.y + 'px)';
	        if (this.id) {
	            return '-webkit-transform:' + value + ';transform:' + value + ';';
	        }
	        return {
	            'WebkitTransform': value,
	            'MozTransform': value,
	            'msTransform': value,
	            'OTransform': value,
	            'transform': value
	        };
	    };

	    // hack event

	    Draggable.prototype.onMouseDown = function onMouseDown(e) {
	        dragEventFor = eventsFor.mouse;
	        return this.handleDragStart(e);
	    };

	    Draggable.prototype.onTouchStart = function onTouchStart(e) {
	        dragEventFor = eventsFor.touch;
	        return this.handleDragStart(e);
	    };

	    Draggable.prototype.onMouseUp = function onMouseUp(e) {
	        dragEventFor = eventsFor.mouse;
	        return this.handleDragStop(e);
	    };

	    Draggable.prototype.onTouchEnd = function onTouchEnd(e) {
	        dragEventFor = eventsFor.touch;
	        return this.handleDragStop(e);
	    };

	    Draggable.prototype.reset = function reset() {
	        var _this = this;

	        var elm = this.getDElement();
	        if (elm) {
	            setTimeout(function () {
	                _this.setState({
	                    x: -elm.offsetWidth / 2,
	                    y: -elm.offsetHeight / 2
	                });
	            });
	        } else {
	            var newState = {
	                x: 0,
	                y: 0
	            };
	            this.setState(newState);
	        }
	    };

	    Draggable.prototype.getDElement = function getDElement() {
	        if (this.id) {
	            var elm = document.getElementById(this.id);
	            if (elm) {
	                return elm.parentNode.parentNode.parentNode;
	            }
	        }

	        return null;
	    };

	    Draggable.prototype.render = function render() {
	        var style = this.createCSSTransform(this.state);
	        // add class
	        var className = _classnames2['default'](this.props.children.props.className || '', 'draggable', {
	            'draggable-dragging': this.state.dragging,
	            'draggable-dragged': this.state.dragged
	        });
	        // TODO hack event
	        var elm = this.getDElement();
	        if (elm) {
	            elm.style.cssText = style;
	        }
	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, {
	                className: 'img-inner',
	                onMouseDown: this.onMouseDown.bind(this),
	                onTouchStart: this.onTouchStart.bind(this),
	                onMouseUp: this.onMouseUp.bind(this),
	                onTouchEnd: this.onTouchEnd.bind(this),
	                style: this.id ? {} : style }),
	            _react2['default'].cloneElement(_react2['default'].Children.only(this.props.children), {
	                className: className,
	                style: _extends({}, this.props.children.props.style)
	            })
	        );
	    };

	    return Draggable;
	})(_eagleUiLibUtilsComponent2['default']);

	exports['default'] = Draggable;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Dom = (function () {
	    function Dom(obj) {
	        _classCallCheck(this, Dom);

	        this.obj = obj;
	    }

	    Dom.prototype.offset = function offset() {

	        var element = this.obj;
	        var w = element.offsetLeft;
	        var t = element.offsetTop;
	        var node = element.offsetParent;

	        while (node && node.nodeName.toLowerCase() != document.body) {
	            t += node.offsetTop;
	            w += node.offsetLeft;
	            node = node.offsetParent;
	        }

	        return {
	            top: t,
	            left: w,
	            width: element.offsetWidth,
	            height: element.offsetHeight
	        };
	    };

	    Dom.prototype.parents = function parents(str) {
	        try {
	            var tempNode = this.obj.parentNode;
	            while (tempNode && tempNode.tagName != arguments[0].toUpperCase()) {
	                tempNode = tempNode.parentNode;
	            }
	            return [tempNode];
	        } catch (err) {
	            return [];
	        }
	    };

	    Dom.prototype.matchNode = function matchNode(element, direction, start) {
	        for (var node = element[start]; node; node = node[direction]) {
	            if (node.nodeType == 1) return node;
	        }
	        return null;
	    };

	    Dom.prototype.next = function next() {
	        return this.matchNode(this.obj, 'nextSibling', 'nextSibling');
	    };

	    Dom.prototype.prev = function prev() {
	        return this.matchNode(this.obj, 'previousSibling', 'previousSibling');
	    };

	    Dom.prototype.first = function first() {
	        return this.matchNode(this.obj, 'nextSibling', 'firstChild');
	    };

	    Dom.prototype.last = function last() {
	        return this.matchNode(this.obj, 'previousSibling', 'lastChild');
	    };

	    Dom.prototype.parent = function parent() {
	        return this.matchNode(this.obj, 'parentNode', 'parentNode');
	    };

	    Dom.prototype.children = function children() {
	        var element = this.obj;
	        for (var children = [], tmpEl = element.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
	            if (tmpEl.nodeType == 1) children.push(tmpEl);
	        }
	        return children;
	    };

	    return Dom;
	})();

	module.exports = function (obj) {
	    return new Dom(obj);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Created by genffy on 16/7/19.
	 *
	 */
	'use strict';

	exports.__esModule = true;
	exports.outerHeight = outerHeight;
	exports.outerWidth = outerWidth;
	exports.innerHeight = innerHeight;
	exports.innerWidth = innerWidth;
	exports.addEvent = addEvent;
	exports.removeEvent = removeEvent;
	exports.findInArray = findInArray;
	exports.getTouch = getTouch;
	exports.getTouchIdentifier = getTouchIdentifier;
	exports.isNum = isNum;
	exports.isArray = isArray;
	exports.toArray = toArray;
	exports.isValidNum = isValidNum;

	function outerHeight(node) {
	    // This is deliberately excluding margin for our calculations, since we are using
	    // offsetTop which is including margin. See getBoundPosition
	    var height = node.clientHeight;
	    var computedStyle = window.getComputedStyle(node);
	    height += parseInt(computedStyle.borderTopWidth, 10);
	    height += parseInt(computedStyle.borderBottomWidth, 10);
	    return height;
	}

	function outerWidth(node) {
	    // This is deliberately excluding margin for our calculations, since we are using
	    // offsetLeft which is including margin. See getBoundPosition
	    var width = node.clientWidth;
	    var computedStyle = window.getComputedStyle(node);
	    width += parseInt(computedStyle.borderLeftWidth, 10);
	    width += parseInt(computedStyle.borderRightWidth, 10);
	    return width;
	}

	function innerHeight(node) {
	    var height = node.clientHeight;
	    var computedStyle = window.getComputedStyle(node);
	    height -= parseInt(computedStyle.paddingTop, 10);
	    height -= parseInt(computedStyle.paddingBottom, 10);
	    return height;
	}

	function innerWidth(node) {
	    var width = node.clientWidth;
	    var computedStyle = window.getComputedStyle(node);
	    width -= parseInt(computedStyle.paddingLeft, 10);
	    width -= parseInt(computedStyle.paddingRight, 10);
	    return width;
	}

	function addEvent(el, event, handler) {
	    if (!el) {
	        return;
	    }
	    if (el.attachEvent) {
	        el.attachEvent('on' + event, handler);
	    } else if (el.addEventListener) {
	        el.addEventListener(event, handler, true);
	    } else {
	        el['on' + event] = handler;
	    }
	}

	function removeEvent(el, event, handler) {
	    if (!el) {
	        return;
	    }
	    if (el.detachEvent) {
	        el.detachEvent('on' + event, handler);
	    } else if (el.removeEventListener) {
	        el.removeEventListener(event, handler, true);
	    } else {
	        el['on' + event] = null;
	    }
	}

	function findInArray(array, callback) {
	    for (var i = 0, _length = array.length; i < _length; i++) {
	        if (callback.apply(callback, [array[i], i, array])) return array[i];
	    }
	}

	function getTouch(e, identifier) {
	    return e.targetTouches && findInArray(e.targetTouches, function (t) {
	        return identifier === t.identifier;
	    }) || e.changedTouches && findInArray(e.changedTouches, function (t) {
	        return identifier === t.identifier;
	    });
	}

	function getTouchIdentifier(e) {
	    if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
	    if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}

	function isNum(num) {
	    return typeof num === 'number' && !isNaN(num);
	}

	function isArray(obj) {
	    return obj instanceof Array;
	}

	function toArray(obj) {
	    var arr = [];
	    arr.push(obj);
	    return arr;
	}

	function isValidNum(index, min, max) {
	    return index >= min ? index <= max ? true : false : false;
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../_css-loader@0.17.0@css-loader/index.js!../../_less-loader@2.2.3@less-loader/index.js!./imageview.less", function() {
				var newContent = require("!!../../_css-loader@0.17.0@css-loader/index.js!../../_less-loader@2.2.3@less-loader/index.js!./imageview.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".upload-icon {\n  fill: #fff;\n  margin: 0 5px;\n  cursor: pointer;\n  color: #ffffff;\n}\n.icon-box {\n  position: absolute;\n  bottom: 20px;\n  visibility: hidden;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 5px 10px;\n  transition: all 1s ease-in-out 0s;\n}\n.icon-side {\n  position: absolute;\n  top: 50%;\n  visibility: hidden;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 5px 5px;\n  transition: all 1s ease-in-out 0s;\n}\n.img-hover:hover .icon-side,\n.img-hover:hover .icon-box {\n  visibility: visible;\n  opacity: 1;\n}\n.over-hidden {\n  overflow: hidden;\n}\n.hide {\n  display: none;\n}\n.left-15 {\n  left: 15px;\n}\n.right-15 {\n  right: 15px;\n}\n.tip-num {\n  display: inline-block;\n  margin-left: 15px;\n  font-size: 16px;\n}\n.tip-num .red-txt {\n  color: red;\n}\n.tip-num .mar-5 {\n  color: white;\n  margin: 0 5px;\n}\n.tip-num .white-txt {\n  color: white;\n}\n.img-wrap {\n  position: relative;\n}\n.img-wrap.img-wrap-hidden {\n  overflow: hidden;\n}\n.img-wrap.img-wrap-show {\n  overflow: visible;\n}\n.img-wrap .draggable {\n  cursor: move;\n}\n.img-wrap .img-inner {\n  width: 100%;\n  height: 100%;\n}\n.img-wrap img {\n  position: relative;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.arrow-warp {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  background: transparent;\n  display: inline-block;\n  cursor: pointer;\n}\n.arrow {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n.arrow:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 9px;\n  left: -27px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #fff;\n  border-radius: 22%;\n}\n.inner {\n  display: block;\n  position: absolute;\n  top: 5px;\n  left: -6px;\n  width: 0px;\n  height: 0px;\n  border: 5px solid;\n  z-index: 999;\n  border-color: transparent #fff transparent transparent;\n}\n.arrow-right .arrow:after {\n  left: 7px;\n}\n.arrow-right .inner {\n  left: 17px;\n  border-color: transparent transparent transparent #fff;\n}\n.imageview-dialog .eg-content {\n  padding: 0 ;\n}\n.imageview-dialog .img-hover {\n  padding: 15px;\n}\n", ""]);

	// exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

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


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.17.0@css-loader/index.js!../node_modules/_less-loader@2.2.3@less-loader/index.js!./upload.less", function() {
				var newContent = require("!!../node_modules/_css-loader@0.17.0@css-loader/index.js!../node_modules/_less-loader@2.2.3@less-loader/index.js!./upload.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".eg-upload button {\n  position: relative;\n}\n.eg-upload input[type=\"file\"] {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.eg-upload .item-list {\n  overflow: hidden;\n  position: relative;\n}\n.eg-upload ul {\n  width: 100%;\n  min-height: 200px;\n  margin-top: 5px;\n  border: 1px dashed #e2e2e2;\n  background: #fff;\n}\n.eg-upload ul li {\n  margin: 5px 5px;\n  float: left;\n  position: relative;\n}\n.eg-upload ul li.placeholder {\n  width: 100%;\n  text-align: center;\n  color: #e2e2e2;\n  font-size: 22px;\n}\n.eg-upload ul li i {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  font-style: normal;\n  background: #ccc;\n  color: #fff;\n  text-align: center;\n  line-height: 20px;\n  top: -8px;\n  right: -8px;\n  cursor: pointer;\n  display: none;\n}\n.eg-upload ul li .text {\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 200px;\n}\n.eg-upload ul img {\n  width: 200px;\n  height: 200px;\n  cursor: pointer;\n}\n.eg-upload ul.drag {\n  border-color: #999;\n}\n.eg-upload ul .progress {\n  width: 100%;\n  height: 15px;\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  top: 50%;\n  color: #fff;\n  font-size: 12px;\n  line-height: 15px;\n  margin-top: -7px;\n}\n.eg-upload ul .progress b {\n  text-align: right;\n  display: block;\n  width: 0;\n  height: 100%;\n  background-color: #eb6032;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ee5511), to(#e86c54));\n  background-image: -webkit-linear-gradient(top, #ee5511, #e86c54);\n  background-image: -moz-linear-gradient(top, #ee5511, #e86c54);\n  background-image: -o-linear-gradient(top, #ee5511, #e86c54);\n  background-image: -ms-linear-gradient(top, #ee5511, #e86c54);\n  background-image: linear-gradient(top, #ee5511, #e86c54);\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, StartColorStr='#ee5511', EndColorStr='#e86c54');\n  -webkit-transition: all ease-in-out 0.4s;\n  -moz-transition: all ease-in-out 0.4s;\n  -ms-transition: all ease-in-out 0.4s;\n  -o-transition: all ease-in-out 0.4s;\n  transition: all ease-in-out 0.4s;\n}\n", ""]);

	// exports


/***/ })
/******/ ])
});
;