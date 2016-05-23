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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _eagleUiLibUtilsComponent = require('eagle-ui/lib/utils/Component');

var _eagleUiLibUtilsComponent2 = _interopRequireDefault(_eagleUiLibUtilsComponent);

var _eagleUi = require('eagle-ui');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _egImageview = require('eg-imageview');

var _cssUploadLess = require('../css/upload.less');

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
            egSize: 'default',
            egStyle: '',
            width: '100%',
            height: '200px',
            thumbWidth: '200px',
            thumbHeight: '200px',
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
        this.data = {};

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

    //获取文件列表

    Upload.prototype.getFiles = function getFiles(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.target.files || e.dataTransfer.files;

        var len = files.length + this.fileList.length;

        this.target = e.target;

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
        _this.fileList = _this.fileList.forEach(function (item) {
            return item.name != file.name;
        });
        if (typeof (this.fileList == 'undefined')) {
            this.fileList = [];
        }

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
                                    _this.data[file.name] = JSON.parse(xhr.responseText || '{}');
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
                    xhr.setRequestHeader('X_FILENAME', encodeURIComponent(file.name));
                    var f = new FormData();
                    f.append(file.name, file);
                    xhr.send(f);
                }
            })(file);
        }
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
            if (_this.data[item.name] && item.index == index) {
                _this.data[item.name] = null;
                delete _this.data[item.name];
            }
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
                name: file.name,
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
                    null,
                    _react2['default'].createElement('img', { src: file.result, alt: file.name, title: file.name, onClick: (_context = _this.showPic).bind.call(_context, _this, file),
                        style: {
                            width: _this3.props.thumbWidth,
                            height: _this3.props.thumbHeight
                        }
                    }),
                    _react2['default'].createElement(
                        'div',
                        { className: 'text', style: {
                                width: _this3.props.thumbWidth
                            } },
                        file.name
                    )
                ) : _react2['default'].createElement(
                    'div',
                    { className: 'text', style: {
                            width: _this3.props.thumbWidth,
                            height: _this3.props.thumbHeight,
                            lineHeight: _this3.props.thumbHeight
                        }, title: file.name },
                    file.name
                ),
                _react2['default'].createElement(
                    'div',
                    { className: _classnames2['default']('progress', {
                            hide: progress ? progress.match(/\d*/) * 1 >= 100 : false
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
                if (_this.imageFilter.test(file.type)) {

                    var reader = new FileReader();
                    reader.onload = function (e) {
                        items.push({
                            index: file.index,
                            name: file.name,
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
                        name: file.name,
                        result: '',
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
                        }, 'clearfix'), style: {
                            width: this.props.width,
                            minHeight: this.props.height
                        } },
                    this.state.baseList.length > 0 ? this.props.renderItemCallback ? this.props.renderItemCallback.bind(this, this.state.baseList) : this.renderItems(this.state.baseList) : ''
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