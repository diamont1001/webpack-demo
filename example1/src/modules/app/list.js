/**
 * Created by Chenjr on 2015/7/9.
 */

require('../base/reset.less');

var loading = require('../loading/loading'),
    header2 = require('./header2/header2');

// loading
loading.start();

// 异步加载
require.ensure([], function() {
    var listItem = require('./list-item/list-item');

    for(var i=0; i<100; i++) {
        listItem.render(document.getElementById('contentWrap'), 'hello ' + i);
    }

    setTimeout(function() {
        loading.end();
    }, 1000);
});
