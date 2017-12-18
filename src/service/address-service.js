/*
* @Author: 风丶轻轻
* @Date:   2017-12-18 13:17:55
* @Last Modified by:   风丶轻轻
* @Last Modified time: 2017-12-18 13:21:02
*/

'use strict';

var _mm = require('util/mm.js');
var _address = {
    //获取地址列表信息
    getAddressList: function(resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/list.do'),
            data:{
                pageSize:50
            },
            success: resolve,
            error: reject,
        });
    },
    //新建收件人收货信息
    save: function(addressInfo,resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/add.do'),
            data:addressInfo,
            success: resolve,
            error: reject,
        });
    },
    //更新收件人收货信息
    update:function(addressInfo,resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/update.do'),
            data:addressInfo,
            success: resolve,
            error: reject,
        });
    },
    //删除收件人收货信息
    deleteAddress:function(shippingId,resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/del.do'),
            data:{
                shippingId:shippingId
            },
            success: resolve,
            error: reject,
        });
    },
    // 获取要编辑的收货人收货信息
    getAddress: function(shippingId,resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/select.do'),
            data:{
                shippingId:shippingId
            },
            success: resolve,
            error: reject,
        });
    }
};
module.exports = _address;