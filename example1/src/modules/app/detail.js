/**
 * Created by Chenjr on 2015/7/7.
 */

require('../base/reset.less');

var $ = require('lib1/zepto/main'),
    loading = require('../loading/loading'),
    header2 = require('./header2/header2');

loading.start();
header2.render(document.getElementById('headerWrap'));
header2.setTitle('detail');

setTimeout(function() {
    loading.end();
    loading.subloading(document.getElementById('contentWrap'), 500);
    setTimeout(function() {
        $('#contentWrap').text('content here.');
    }, 3000);
}, 1000);
