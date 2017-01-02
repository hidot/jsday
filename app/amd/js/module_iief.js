/**
 * Created by Administrator on 2017/1/1 0001.
 */
// 立即执行函数写法

var module2 = (function () {
    var _count = 0;
    var m1 = function () {
        console.log('module2.m1');
    }
    var m2 = function () {
        console.log('module2.m2');
    }
    var m3 = function () {
        console.log('module2.m3');
    }

    return {
        m1 : m1,
        m2 : m2,
        m3 : m3
    }
})();
