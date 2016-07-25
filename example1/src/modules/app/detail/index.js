/**
 * Created by Chenjr on 2015/7/7.
 */

require('./index.less');

var $ = require('lib2/zepto/main'),
    loading = require('../../components/loading/index'),
    header2 = require('../../components/header2/index');

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
