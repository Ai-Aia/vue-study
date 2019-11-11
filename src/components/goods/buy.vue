<template>
    <div>


        <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
        >
            <!--小球-->
            <div class="ball" @transitionend="end" v-show="flag"></div>
        </transition>


        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="item  in lunbotu" :key="item.id">
                        <img :src="item.src" alt/>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        <span>市场价：{{goodsInfo.market_price}}</span>
                        <span>销售价：{{goodsInfo.sell_price}}</span>
                    </p>
                    <p style="padding: 0;margin: 0">购买数量</p>


                    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="20">
                        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                        <input id="test" class="mui-input-numbox" type="number" value="5">
                        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                    </div>

                    <br/>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button @click="goCart" type="danger">加入购物车</mt-button>
                </div>
            </div>
        </div>

        <div class="mui-card" style="margin-bottom: 50px">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>库存情况：{{goodsInfo.stock_quantity}}</p>
                    <p>上架时间：{{goodsInfo.add_time|dataFormat()}}</p>
                </div>
            </div>

            <button type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined">
                <router-link :to="'/home/Introduct/'+this.$route.params.id">图文介绍</router-link>
            </button>

            <button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined button1">
                <router-link :to="'/home/say/'+this.$route.params.id">商品评论</router-link>
            </button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "buy",
        created() {
            this.GetInfo();
            this.Getlunbo();
        },
        data() {
            return {
                goodsInfo: [],
                id: this.$route.params.id,
                lunbotu: [],
                flag: false,
                isShow: false
            };
        },
        methods: {
            Getlunbo() {
                this.$axios.get("api/getthumimages/" + this.id).then(res => {
                    this.lunbotu = res.data.message;
                    // console.log(res);
                    // console.log(this.id);
                });
            },
            GetInfo() {
                this.$axios.get("api/goods/getinfo/" + this.id).then(res => {
                    /*console.log(res);*/
                    if (res.data.status === 0) {
                        this.goodsInfo = res.data.message[0];
                    }
                });
            },
            goCart() {
                //点击加入购物车
                if (this.isShow) return false;
                this.isShow = true;
                this.flag = !this.flag;

            },
            beforeEnter(el) {
                el.style.transform = 'translate(0px,0px)'
            },
            enter(el, done) {
                el.offsetHeight;
                let ball = el.getBoundingClientRect();
                let badge = document.querySelector('.mui-badge').getBoundingClientRect();

                let x = badge.left - ball.left;
                let y = badge.top - ball.top;

                el.style.transform = `translate(${x}px,${y}px)`;
                el.style.transition = 'all 1.4s cubic-bezier(1,-0.5, 0.32, 1.2)';
                done();
            },
            afterEnter() {
                this.flag = !this.flag;
            },
            end(){
                this.isShow = false;
            }
        }
    };
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 300px;
        text-align: center;

        img {

            width: 80%;
            height: 100%;
        }
    }

    .mui-numbox {
        margin: 10px 10px 10px 0;
    }

    .button1 a {
        color: red;
    }

    .ball {
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        z-index: 999999;
        top: 550px;
        left: 210px
    }
</style>