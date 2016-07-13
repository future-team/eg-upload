import {Upload} from '../../src/index.js';
import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';

var filter = function(files){
    var arrFiles = [];
    for (var i = 0, file; file = files[i]; i++) {
        arrFiles.push(file);
    }
    return arrFiles;
};
class Demo extends Component{
    paste(e){
        this.refs.uploader.getFiles(e);
    }
    render(){
       return (
           <div>
                <textarea onPaste={::this.paste}>
                </textarea>
               <Upload ref='uploader' hideImgViewWhenEmpty uploadUrl="http://172.24.121.17:8080/attachment/upload" maxNumber={5} filter={filter} />
           </div>
       )
    }
}



ReactDom.render(
    <Demo></Demo>,
    document.getElementById('root')
);