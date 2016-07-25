/**
 * 应用列表项
 * Created by Administrator on 2015/7/7.
 */

require('./index.less');

var $ = require('lib2/zepto/main'),
    artT = require('lib2/artTemplate/artTemplate');

module.exports = (function() {
    var _e = {};

    /**
     * 渲染一个项
     * @param dom
     * @param data
     */
    _e.render = function(dom, data) {
        var $handle = $(dom),
            render = artT.compile(require('./index.tpl')());

        $handle.append(render({data: data}));
    };

    _e.reset = function(dom) {
        $(dom).empty();
    }

    return _e;
})();
