/*
* @Author: 风丶轻轻
* @Date:   2017-12-15 00:16:53
* @Last Modified by:   风丶轻轻
* @Last Modified time: 2017-12-15 00:34:06
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
})