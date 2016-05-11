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

## Command


