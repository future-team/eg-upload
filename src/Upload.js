/**
 * Created by mac on 16/5/9.
 */

import React,{PropTypes} from 'react';
import Component from 'eagle-ui/lib/utils/Component';
import {Button,Dialog,Toast,Icon} from 'eagle-ui';
import classnames from 'classnames';
import ReactDom from 'react/lib/ReactDOM';
import {ImageView} from 'eg-imageview';

import uploadStyle from '../css/upload.less';

export default class Upload extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default btn
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default a
         * */
        componentTag:PropTypes.string,
        //最大上传数量
        maxNumber:PropTypes.number,
        minNumber:PropTypes.number,
        //最小上传数量
        //是否允许删除
        //是否支持预览
        //是否支持多张批量上传
        //压缩比例
        //button文案
        //上传url
        uploadUrl:PropTypes.string,
        //允许上传文件大小
        maxSize:PropTypes.number
    };

    static defaultProps = {
        classPrefix:'upload',
        componentTag:'div',
        maxSize:5120000,
        maxNumber:1000000,
        uploadBtnText:'选择上传文件',
        maxNumberMessage:'上传数量达到上限，最多允许上传',
        egSize:'default',
        egStyle:'',
        width:'100%',
        height:'200px',
        thumbWidth:'200px',
        thumbHeight:'200px',
        completeCallback:()=>{},
        failureCallback:()=>{},
        uploadedCallback:()=>{},
        successCallback:()=>{return true},
        filter:(files,maxSize)=>{
            var arrFiles = [];
            for (var i = 0, file; file = files[i]; i++) {
                if (file.type.indexOf("image") == 0) {
                    if (file.size >= maxSize) {
                        alert(`您这张${file.name}图片大小过大，应小于${maxSize}k`);
                    } else {
                        arrFiles.push(file);
                    }
                } else {
                    alert('文件"' + file.name + '"不是图片。');
                }
            }
            return arrFiles;
        }
    };

    constructor(props,context){
        super(props,context);

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

        this.transform = 'scale(1, 1) rotate(0deg)';
        this.state={
            baseList:[],
            isDrag:false,
            progress:[],
            showFile:{
                name:'',
                url:''
            }
        };
    }

    //获取文件列表
    getFiles(e){
        e.stopPropagation();
        e.preventDefault();
        let files = e.target.files || e.dataTransfer.files;

        let len = files.length +this.fileList.length;

        this.target = e.target;

        if(len > this.props.maxNumber){
            this.setState({
                toastMessage:this.props.maxNumberMessage+this.props.maxNumber+'张'
            });
            Dialog.mask(this.toastId);
            return ;
        }

        this.fileList=this.fileList.concat(this.props.filter(files,this.props.maxSize) );

        this.uploadFiles = files;

        this.dealFiles();
    }

    dealFiles(){

        for (var i = 0, file; file = this.fileList[i]; i++) {
            //增加唯一索引值
            file.index = i;
        }
        //执行选择回调
        this.select();
        this.upload();
        //this.onSelect(this.fileFilter);
        //this.renderItem(this.fileList);
    }

    progressHandler(file, loaded, total){

        if(total==0){
            total=1;
        }

        var loading = (loaded / total * 100).toFixed(2) + '%';

        let pross = this.state.progress;

        pross[file.index] =loading;
        this.setState({
            progress:pross
        });
    }

    //上传完成重置
    resetData(){
        this.uploadFiles = null;
    }

    rollback(file,xhr){
        let _this = this;
        _this.fileList = _this.fileList.forEach((item)=>{
            return item.name !=file.name;
        });
        if(typeof(this.fileList =='undefined') ){
            this.fileList = [];
        }

        this.target && (this.target.value='');

        clearInterval(_this.timeout);
        this.timeout = setInterval(function(){
            if(typeof(_this.isRender)!='undefined' &&_this.isRender ){
                _this.select(_this.fileList);
            }else{
                clearInterval(_this.timeout);
            }

        },1000);
        //失败回调
        _this.resetData();
        _this.props.failureCallback(file,xhr.responseText );
    }

    upload(fileList = this.uploadFiles){
        let _this = this;

        _this.props.uploadedCallback(this.fileList,fileList );
        for(let i=0,file=null;file=fileList[i];i++ ){

            ((file)=>{
                let xhr = new XMLHttpRequest();
                if(xhr.upload){
                    xhr.upload.addEventListener('progress',(e)=>{
                        _this.progressHandler(file, e.loaded, e.total);
                    },false);

                    xhr.onreadystatechange=(e)=>{
                        if(xhr.readyState == 4){
                            if(xhr.status == 200){
                                //成功回调
                                var isUpload = this.props.successCallback(file,JSON.parse(xhr.responseText ||'{}') );
                                //_this.execMethod('success',file,JSON.parse(xhr.responseText ||'{}') );

                                if(typeof(isUpload)=='boolean'&& !isUpload){
                                    _this.rollback(file,xhr);
                                }else{
                                    _this.data[file.name] = JSON.parse(xhr.responseText ||'{}');
                                }

                                //全部加载完成
                                if(i ==(fileList.length-1) ){
                                    _this.resetData();
                                    _this.props.completeCallback(_this.data);
                                }
                            }else{
                               _this.rollback(file,xhr);
                            }
                        }
                    };

                    xhr.open("POST", _this.props.uploadUrl, true);
                    xhr.setRequestHeader('X_FILENAME', encodeURIComponent(file.name));
                    let f = new FormData();
                    f.append(file.name, file);
                    xhr.send(f);
                }
            })(file);
        }
    }

    closeStatus(val,e){
        let i = e.target.parentNode.querySelector('i');
        i.style.display=val;

    }

    remove(index){
        let _this = this;
        this.fileList = this.fileList.filter(function(item){
            if(_this.data[item.name]){
                _this.data[item.name] = null;
                delete _this.data[item.name];
            }
            return item.index!=index;
        });

        _this.props.completeCallback(_this.data);
        this.select();
    }

    showPic(file){
        this.setState({
            showFile:{
                name:file.name,
                url:file.result
            }
        });

        Dialog.mask(this.imageSliderId);
    }

    renderItems(list){
        let items = [],_this = this,progress=0;
        list.forEach((file)=>{
            progress=this.state.progress[file.index];
            items.push(
                <li key={file.index} onMouseEnter={::_this.closeStatus.bind(_this,'block')} onMouseLeave={::_this.closeStatus.bind(_this,'none')}>
                    <img src={file.result} alt={file.name} title={file.name} onClick={::_this.showPic.bind(_this,file)}
                         style={{
                            width:this.props.thumbWidth,
                            height:this.props.thumbHeight
                        }}
                        />
                    <div className="text" style={{
                        width:this.props.thumbWidth
                    }}>{file.name}</div>
                    <div className={
                        classnames('progress',{
                            hide:progress ? progress.match(/\d*/)*1>=100:false
                        })
                    }><b style={{
                                width:progress
                            }}>{progress}</b></div>
                    <i onClick={_this.remove.bind(_this,file.index) }>x</i>
                </li>
            );
        });
        return items;
    }

    select(files=this.fileList){

        let items = [],i=0,_this = this;
        let file  =null;

        let render = ()=>{
            file= files[i];
            if(file){
                var reader = new FileReader();
                _this.isRender = false;
                reader.onload = function(e) {
                    items.push(
                        {
                            index:file.index,
                            name:file.name,
                            result:e.target.result
                        }
                    );
                    i++;
                    render();
                };
                reader.readAsDataURL( file );


            }else{
                _this.isRender = true;
                _this.setState({
                    baseList:items
                });
            }
        };
        render();
        //return items;
    }

    dragLeave(e){
        this.setState({
            isDrag:false
        });
    }
    dragOver(e){
        this.setState({
            isDrag:true
        });
    }
    render() {
        return (
            <div {...this.otherProps} className={
                classnames(
                    this.getProperty(),
                    this.props.className
                )
                }>
                <div>
                    <Button egSize={this.props.egSize} egStyle={this.props.egStyle}>{this.props.uploadBtnText}
                        <input type="file" onChange={::this.getFiles} multiple />
                    </Button>

                </div>
                <div className="item-list">
                    <ul  onDrop={::this.getFiles} onDragLeave={::this.dragLeave} onDragOver={::this.dragOver} className={classnames({
                        'drag':this.state.isDrag
                    },'clearfix')} style={{
                        width:this.props.width,
                        minHeight:this.props.height
                    }}>
                        {this.state.baseList.length > 0? this.renderItems(this.state.baseList):''}
                    </ul>
                </div>

                <Dialog id={this.toastId} isClose={false} isMask={false}>
                    <Toast type="error">{this.state.toastMessage}</Toast>
                </Dialog>

                <ImageView id={this.imageSliderId} file={this.state.showFile} />
            </div>
        );
    }
}