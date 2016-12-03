webpackJsonp([2],{

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 应用列表项
	 * Created by Administrator on 2015/7/7.
	 */

	'use strict';

	__webpack_require__(19);

	var $ = __webpack_require__(4),
	    artT = __webpack_require__(14);

	module.exports = (function () {
	    var _e = {};

	    /**
	     * 渲染一个项
	     * @param dom
	     * @param data
	     */
	    _e.render = function (dom, data) {
	        var $handle = $(dom),
	            render = artT.compile(__webpack_require__(20)());

	        $handle.append(render({ data: data }));
	    };

	    _e.reset = function (dom) {
	        $(dom).empty();
	    };

	    return _e;
	})();

/***/ },

/***/ 19:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 20:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<a class="list-li" href="./detail.html">\n    <span>{{data}}</span>\n</a>\n';

	}
	return __p
	}

/***/ }

});