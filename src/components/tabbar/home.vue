<template>

    <div>
        <banner :swipe="banner"></banner>
        <!--        <mt-swipe :auto="4000">-->
        <!--            <mt-swipe-item v-for="(item,i) in banner" :key="item.id">-->
        <!--                <img :src="item.img" alt="">-->
        <!--            </mt-swipe-item>-->
        <!--        </mt-swipe>-->

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="/home/newsList">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/home/photoList">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="/home/shopList">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
        </ul>
    </div>


</template>

<script>
    import banner from "../sub/banner.vue";

    export default {
        name: "home",
        components: {
            banner,
        },
        created() {
            this.getBanner();
        },
        data() {
            return {
                banner: []
            }
        },
        methods: {
            getBanner() {
                this.$axios.get('api/getlunbo')
                    .then(res => {
                        // console.log(res);
                        if (res.data.status === 0) {
                            this.banner = res.data.message
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="less">



    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }

    .mui-grid-view {
        background-color: white;

        li {
            img {
                width: 60%;
            }
        }

    }
</style>