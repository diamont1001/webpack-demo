webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Chenjr on 2015/7/7.
	 */

	'use strict';

	__webpack_require__(3);

	var $ = __webpack_require__(4),
	    loading = __webpack_require__(10),
	    header2 = __webpack_require__(12);

	loading.start();
	header2.render(document.getElementById('headerWrap'));
	header2.setTitle('detail');

	setTimeout(function () {
	    loading.end();
	    loading.subloading(document.getElementById('contentWrap'), 500);
	    setTimeout(function () {
	        $('#contentWrap').text('content here.');
	    }, 3000);
	}, 1000);

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);