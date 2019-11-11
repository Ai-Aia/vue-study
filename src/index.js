import Vue from 'vue'
import App from './app.vue'
import router from './router'
//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入自己的全局样式
import './css/app.less'

//导入mint ui
import MintUl from 'mint-ui'

import { Toast } from 'mint-ui'
Vue.prototype.toast = Toast;

Vue.use(MintUl);
import 'mint-ui/lib/style.css'

//导入mui
import mui from './lib/mui/js/mui.min.js';
Vue.prototype.mui=mui;

//导入vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

import axios from 'axios'
//设置公共路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/';
Vue.prototype.$axios = axios;

//格式化时间
import moment from 'moment'

Vue.filter('dataFormat', function (data, pattern = "YYYY-MM-DD h:mm:ss") {
    return moment(data).format(pattern);

});


new Vue({
    el: '#app',
    render: c => c(App),
    router,
});