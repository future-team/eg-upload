/**
 * Created by mac on 16/5/9.
 */

import React,{PropTypes} from 'react';
import Component from 'eagle-ui/lib/utils/Component';
import {Button,Dialog,Toast,Icon} from 'eagle-ui';
import classnames from 'classnames';
import ReactDom from 'react/lib/ReactDOM';

import uploadStyle from './upload.less';

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
        completeCallback:()=>{},
        failureCallback:()=>{},
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
        this.imgId = this.uniqueId();

        this.transform = 'scale(1, 1) rotate(0deg)';
        this.state={
            baseList:[],
            isDrag:false,
            progress:[],
            showFile:{
                result:''
            }
        };
    }

    //获取文件列表
    getFiles(e){
        e.stopPropagation();
        e.preventDefault();
        let files = e.target.files || e.dataTransfer.files;

        let len = files.length +this.fileList.length;

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

        var loaded = (loaded / total * 100).toFixed(2) + '%';

        let pross = this.state.progress;

        pross[file.index] =loaded;
        this.setState({
            progress:pross
        });
    }

    //上传完成重置
    resetData(){
        this.setState({
            progress:[]
        });
        this.uploadFiles = null;
    }

    upload(fileList = this.uploadFiles){
        let _this = this;
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
                                _this.execMethod('success',file,JSON.parse(xhr.responseText ||'{}') );
                                //全部加载完成
                                if(i ==(fileList.length-1) ){
                                    _this.resetData();
                                    _this.props.completeCallback();
                                }
                            }else{
                               /* _this.fileList = _this.fileList.forEach((item)=>{
                                    return item.name !=file.name;
                                });
                               _this.select();*/
                                //失败回调
                                _this.resetData();
                                _this.props.failureCallback(file,JSON.parse(xhr.responseText|| '{}') );
                            }
                        }
                    };

                    xhr.open("POST", _this.props.uploadUrl, true);
                    xhr.setRequestHeader("X_FILENAME", file.name);
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
        this.fileList = this.fileList.filter(function(item){
            return item.index!=index;
        });
        this.select();
    }

    showPic(file){
        this.setState({
            showFile:{
                profile:file.name,
                url:file.result
            }
        });
        this.transform = 'scale(1, 1) rotate(0deg)';

        Dialog.mask(this.imageSliderId);
    }

    renderItems(list){
        let items = [],_this = this,progress=0;
        list.forEach((file)=>{
            progress=this.state.progress[file.index];
            items.push(
                <li key={file.index} onMouseEnter={::_this.closeStatus.bind(_this,'block')} onMouseLeave={::_this.closeStatus.bind(_this,'none')}>
                    <img src={file.result} alt={file.name} title={file.name} onClick={::_this.showPic.bind(_this,file)} />
                    <div className="text">{file.name}</div>
                    <div className={
                        classnames('progress',{
                            hide:progress ? progress.match(/\d*/)*1>100:false
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
        //transform: scale(5.5, 5.5) rotate(270deg);
    }

    cssEnhance(type){

        let val = this.transform.match(/\d+\.?\d*/g);

        let set=(zoom,rotate)=>{
            return `scale(${val[0]*1+zoom}, ${val[0]*1+zoom}) rotate(${val[2]*1+rotate}deg)`;
        };

        if(val && val.length>=3){
            switch (type){
                case 'rotate':
                    //val[2] = val[2]>=270?0
                    val =set(0,90);
                    break;
                case 'max':
                    val =set(0.5,0);
                    break;
                case 'min':
                    val =set(-0.5,0);
                    break;
            }

            this.transform = val;
            ReactDom.findDOMNode(this.refs[this.imgId]).style.transform = val;
        }
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
                    <Button>{this.props.uploadBtnText}
                        <input type="file" onChange={::this.getFiles} multiple />
                    </Button>

                </div>
                <div className="item-list">
                    <ul  onDrop={::this.getFiles} onDragLeave={::this.dragLeave} onDragOver={::this.dragOver} className={classnames({
                        'drag':this.state.isDrag
                    },'clearfix')}>
                        {this.state.baseList.length > 0? this.renderItems(this.state.baseList):''}
                    </ul>
                </div>

                <Dialog id={this.toastId} isClose={false} isMask={false}>
                    <Toast type="error">{this.state.toastMessage}</Toast>
                </Dialog>

                <Dialog id={this.imageSliderId} isClose={true} isMask={true} title={this.state.showFile.profile ||''} egSize="lg">
                    <div style={{
                        overflow:'hidden'
                    }}>
                        <img ref={this.imgId} src={this.state.showFile.url}  alt="" style={{width:"100%",height:"auto",transform:this.transform }} />
                        <div className="icon-box">
                            <Icon onClick={::this.cssEnhance.bind(this,'rotate')} className="upload-icon" name="radio_unchecked" alt="旋转"></Icon>
                            <Icon onClick={::this.cssEnhance.bind(this,'max')} className="upload-icon"  name="add" alt="放大"></Icon>
                            <Icon  onClick={::this.cssEnhance.bind(this,'min')} className="upload-icon" name="remove" alt="缩小"></Icon>
                        </div>
                    </div>

                </Dialog>
            </div>
        );
    }
}