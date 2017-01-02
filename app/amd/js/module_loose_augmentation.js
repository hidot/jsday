/**
 * Created by Administrator on 2017/1/1 0001.
 */
// 宽放大模式
var module4 = (function (mod) {
    mod.m5 = function () {
        console.log('module4.m5 extend module1 or null');
    }

    return mod;
})(window.module1 || {});