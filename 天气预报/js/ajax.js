/**
 * Created by hxsd on 2016/7/13.
 *
 * 标识符命名规则：
 * 1. 不能是关键字和保留字；
 * 2. 由字母、数字、下划线和美元符号($)组成，不能以数字开头
 */
var $ = {
    ajax: function (option) {
        var xhr = new XMLHttpRequest();
        xhr.open(option.method, option.url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (option.success) option.success(xhr.responseText);
                } else {
                    if (option.fail) option.fail();     // 回调函数
                }
            }
        };

        // step 3: 真正发送请求给服务器
        xhr.send(null);
    },
    getJSON: function (option) {
        var xhr = new XMLHttpRequest();
        xhr.open(option.method, option.url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (option.success) {
                        data = JSON.parse(xhr.responseText)
                        option.success(data);
                    }
                } else {
                    if (option.fail) option.fail();     // 回调函数
                }
            }
        };

        // step 3: 真正发送请求给服务器
        xhr.send(null);
    },
    getJSON2: function (url, success, fail) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (success) {
                        data = JSON.parse(xhr.responseText)
                        success(data);
                    }
                } else {
                    if (fail) fail();     // 回调函数
                }
            }
        };

        // step 3: 真正发送请求给服务器
        xhr.send(null);
    }
};