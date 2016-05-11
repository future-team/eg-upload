import {Upload} from '../../src/index.js';
import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';

ReactDom.render(
    <Upload uploadUrl="http://172.24.121.17:8080/attachment/upload" maxNumber={5} />,
    document.getElementById('root')
);