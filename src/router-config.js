import vueCanvas from './views/vueCanvas/index.vue';
import test from './views/test/index.vue';
import mywatch from './views/watch/index';
import tree from './views/tree/index';
import testCanvas from './views/vueDraw/testCanvas';


export default [
    {
        path: '/',
        component: resolve => require(['./views/layout/layout.vue'], resolve),
        children: [
            {
                path: '',
                redirect: '/views/vueCanvas'
            },
            {
                path: '/views/vueCanvas',
                component: vueCanvas
            },
            {
                path: '/views/test',
                component: test
            },
             {
                path: '/views/watch',
                component: mywatch
            },
            {
                path: '/views/tree',
                component: tree
            },
            {
                path: '/views/testCanvas',
                component: testCanvas
            },
            ]
        }
]
