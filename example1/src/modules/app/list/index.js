/**
 * Created by Chenjr on 2015/7/9.
 */

require('./index.less');

var loading = require('../../components/loading/index'),
    header2 = require('../../components/header2/index');

// loading
loading.start();

if(__DEV__) {
    console.log('run in dev.');
}

// 异步加载
require.ensure([], function() {
    var listItem = require('../../components/list-item/index');

    for(var i=0; i<100; i++) {
        listItem.render(document.getElementById('contentWrap'), 'hello ' + i);
    }

    setTimeout(function() {
        loading.end();
    }, 1000);
});
