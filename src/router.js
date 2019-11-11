import Vue from 'vue'
import VueRouter from 'vue-router'

//安装路由模块
Vue.use(VueRouter);

//导入对应的模板
import Home from './components/tabbar/home.vue'
import Member from './components/tabbar/member.vue'
import Cart from './components/tabbar/cart.vue'
import Search from './components/tabbar/search.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsInfo.vue'
import PhotoList from './components/photo/photoList.vue'
import PhotoInfo from './components/photo/photoInfo.vue'
import ShopList from './components/goods/shopList.vue'
import Buy from './components/goods/buy.vue'
import Introduct from './components/goods/Introduct.vue'
import Say from './components/goods/say.vue'

//创建路由对象,把路由对象导出去
export default new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/cart',component:Cart},
        {path:'/search',component:Search},
        {path:'/home/newsList',component:NewsList},
        {path:'/home/newsInfo/:id',component:NewsInfo},
        {path:'/home/photoList',component:PhotoList},
        {path:'/home/photoInfo/:id',component:PhotoInfo},
        {path:'/home/shopList',component:ShopList},
        {path:'/home/buy/:id',component:Buy},
        {path:'/home/Introduct/:id',component:Introduct},
        {path:'/home/say/:id',component:Say},

    ],
    //配置高亮显示
    linkActiveClass:'mui-active'

})