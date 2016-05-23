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

ReactDom.render(
    <Upload uploadUrl="http://172.24.121.17:8080/attachment/upload" maxNumber={5} filter={filter} />,
    document.getElementById('root')
);