<template>
    <mt-tab-container-item>
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        >
            <div class="mui-scroll">
                <!-- 图片列表 -->
                <mt-navbar v-model="active">
                    <mt-tab-item v-for="item in categorys" :key="item.id" :id="item.id">{{item.title}}</mt-tab-item>
                </mt-navbar>
            </div>
        </div>

        <!-- tab-container -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item :id="item.id" v-for="item in categorys" :key="item.id">
                <div v-for="data in imgs" :key="data.id">
                    <router-link :to="'/home/photoInfo/'+data.id">
                        <div class="img">
                            <img v-lazy="data.img_url" alt="data.title">
                            <p>{{data.zhaiyao}}</p>
                        </div>
                    </router-link>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </mt-tab-container-item>
</template>

<script>
    import {TabContainer, TabContainerItem, Cell} from "mint-ui";
    // import mui from '../../lib/mui/js/mui';

    export default {
        name: "photoList",
        data() {
            return {
                active: 23,
                categorys: [],
                imgs: []
            };
        },
        created() {
            this.getCategory();
            this.getImgList();
        },
        mounted() {
            this.mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getCategory() {
                this.$axios.get('/api/getimgcategory').then(res => {
                    //   console.log(res);
                    if (res.data.status === 0) {
                        this.categorys = res.data.message;
                        this.categorys.unshift({id:0,title:'全部'});
                        this.active = res.data.message[0].id;
                    }
                })
            },
            getImgList() {
                // console.log(this.active);
                this.$axios.get(`/api/getimages/${this.active}`).then(res => {
                    this.imgs = res.data.message;
                    // console.log(res);
                })
            }
        },
        watch: {
            'active': function (newVal, oldVal) {
                // console.log(newVal + '=====' + oldVal);
                if (newVal != oldVal) {
                    this.getImgList()
                }

            }
        }
    };
</script>

<style lang="less" scoped>
    .mui-scroll {
        .mint-tab-item {
            color: #666;
            padding: 10px 20px;
        }
    }

    .mint-tab-container-item {
        display: block;
    }

    .mint-cell-title{
        display: none;
    }
    .mint-cell-value{
        width: 100%;
    }
    .img{
        position: relative;

        img{
            width: 100%;
        }
        p{
            color:white;
            position: absolute;
            bottom: 0;
        }

    }
    img[lazy=loading]{
        width: 40px;
        height: 300px;
        margin: auto;
    }


</style>