# eg-upload

上传组件

## 使用

```js

	import {Upload} from 'eg-upload';
    import React, { Component ,PropTypes} from 'react';
    import ReactDom from 'react/lib/ReactDOM';
    
    //completeCallback 全部上传完成
    //successCallback  单张上传成功 会执行多次
    //failureCallback  上传失败
    ReactDom.render(
        <Upload uploadUrl="http://172.24.121.17:8080/attachment/upload" maxNumber={5} successCallback={(file,data)=>{}} 
          	completeCallback={()=>{}}
			failureCallback={(file,data)=>{}}
			filter={()=>{}}
			uploadBtnText="选择上传文件"
          />,
        document.getElementById('root')
    );

```

## API

### props

    * `maxNumber：`文件最大上传数量；   
    * `minNumber：`文件最少上传数量；   
    * `uploadBtnText：`上传按钮文案； 
    * `maxNumberMessage：`超出范围的提示文案；   
    * `egSize：`上传按钮大小（default、xs、sm、lg）;      
    * `egStyle：`上传按钮颜色（error、warning、danger、link、gray、white、success、''）；      
    * `width：`略缩图容器的宽度；       
    * `height：`略缩图容器的高度；      
    * `thumbWidth：`略缩图宽度；     
    * `thumbHeight：`略缩图高度；        
    
### callback
    
    * `completeCallback(successImageList,imageListSize)`：上传单个文件成功后和删除文件后执行的方法，`successImageList`上传成功后的文件列表，`imageListSize`一共选择多少个文件；      
    * `failureCallback(file,responseText)`：上传单个文件失败后执行，`file`失败后的文件，`responseText`失败信息，由服务端返回；        
    * `successCallback(file,data)`：单个文件上传成功后执行，`file`上传成功的文件，`data`服务端返回的json数据；      
    * `renderItemCallback(files)`：返回自定义略缩图模板，用户可自定义容器中显示的内容模板，该方法的作用域为upload对象本身，`files`需要显示的文件列表，
            
        ```js
        
            renderItemCallback([
                index:file.index,//文件的索引
                name:file.name,//文件的名字
                result:'',//base64
                type:file.type//类型
            ])
        ```
    * `filter(files,maxSize)`：过滤不允许上传的文件      
    
        ```js
        
            filter=(files,maxSize)=>{
                var arrFiles = [];
                for (var i = 0, file; file = files[i]; i++) {
                    arrFiles.push(file);
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
        ```


