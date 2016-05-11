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

        //此数据返回给调用者
        this.data = {};

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
                                _this.data[file.name] = JSON.parse(xhr.responseText || '{}');
                                _this.execMethod('success', file, JSON.parse(xhr.responseText || '{}'));
                                //全部加载完成
                                if (i == fileList.length - 1) {
                                    _this.resetData();
                                    _this.props.completeCallback(_this.data);
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
                    xhr.setRequestHeader('X_FILENAME', encodeURIComponent(file.name));
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
        var _this = this;
        this.fileList = this.fileList.filter(function (item) {
            if (_this.data[item.name]) {
                _this.data[item.name] = null;
                delete _this.data[item.name];
            }
            return item.index != index;
        });

        _this.props.completeCallback(_this.data);
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
                _react2['default'].createElement('img', { src: file.result, alt: file.name, title: file.name, onClick: (_context = _this.showPic).bind.call(_context, _this, file),
                    style: {
                        width: _this2.props.thumbWidth,
                        height: _this2.props.thumbHeight
                    }
                }),
                _react2['default'].createElement(
                    'div',
                    { className: 'text', style: {
                            width: _this2.props.thumbWidth
                        } },
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
                    _react2['default'].createElement('img', { ref: this.imgId, src: this.state.showFile.url, alt: '', style: { width: "100%", height: "auto", maxHeight: document.documentElement.clientHeight * 1 - 100 + 'px', transform: this.transform } }),
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