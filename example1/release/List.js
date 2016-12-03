webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(16);


/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Chenjr on 2015/7/9.
	 */

	'use strict';

	__webpack_require__(17);

	var loading = __webpack_require__(10),
	    header2 = __webpack_require__(12);

	// loading
	loading.start();

	if (true) {
	    console.log('run in dev.');
	}

	// 异步加载
	__webpack_require__.e/* nsure */(2, function () {
	    var listItem = __webpack_require__(18);

	    for (var i = 0; i < 100; i++) {
	        listItem.render(document.getElementById('contentWrap'), 'hello ' + i);
	    }

	    setTimeout(function () {
	        loading.end();
	    }, 1000);
	});

/***/ },

/***/ 17:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});