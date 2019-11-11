<template>
    <div class="app_container">
        <!--设置头部-->
        <mt-header fixed title="shop">
            <router-link to="" slot="left">
                <mt-button icon="back" @click="goback">返回</mt-button>
            </router-link>
        </mt-header>

        <transition name="section">
            <router-view></router-view>
        </transition>
        <!--尾部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="my-tab-item " to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="my-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="my-tab-item" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="my-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>


    </div>


</template>

<script>
    export default {
        name: "app",
        methods: {
            goback(){
                history.back(-1)
            }
        },
    }
</script>

<style scoped>

    .section-enter {
        opacity: 0;
        transform: translateX(100%);

    }

    .section-enter-active,
    .section-leave-active {
        transition: all 0.6s;
    }

    .section-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .app_container {
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }

    .mui-bar-tab .my-tab-item
    {
        display: table-cell;
        overflow: hidden;

        width: 1%;
        height: 50px;

        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;

        color: #929292;
    }
    .mui-bar-tab .my-tab-item.mui-active
    {
        color: #007aff;
    }
    .mui-bar-tab .my-tab-item .mui-icon
    {
        top: 3px;

        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .my-tab-item .mui-icon ~ .mui-tab-label
    {
        font-size: 11px;

        display: block;
        overflow: hidden;

        text-overflow: ellipsis;
    }
    .mui-bar-tab .my-tab-item .mui-icon:active
    {
        background: none;
    }

</style>