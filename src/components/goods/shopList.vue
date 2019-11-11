<template>
    <div class="goods-container">
        <div class="good-item" v-for="item in list" :key="item.id">
<!--            <router-link :to="'/home/buy/'+item.id">-->
<!--                <img :src="item.img_url" alt="">-->
<!--                <h1>{{ item.title }}</h1>-->
<!--                <div class="info">-->
<!--                    <div class="substr">-->
<!--                        <span class="new">￥{{ item.sell_price }}</span>-->
<!--                        <span class="old">￥{{ item.market_price }}</span>-->
<!--                    </div>-->
<!--                    <div class="status">-->
<!--                        <span>热卖中</span>-->
<!--                        <span>剩{{ item.stock_quantity }}件</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </router-link>-->
            <div @click="gobuy(item.id)">
                <img :src="item.img_url" alt="">
                <h1>{{ item.title }}</h1>
                <div class="info">
                    <div class="substr">
                        <span class="new">￥{{ item.sell_price }}</span>
                        <span class="old">￥{{ item.market_price }}</span>
                    </div>
                    <div class="status">
                        <span>热卖中</span>
                        <span>剩{{ item.stock_quantity }}件</span>
                    </div>
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>


    export default {
        name: 'shopList',

        data() {
            // data 是往自己组件内部，挂载一些私有数据的
            return {
                list: [],
                pageindex: 1,

            }
        },
        created() {
            this.getGoodsList()

        },
        methods: {
            gobuy(id){
                this.$router.push('/home/buy/'+id);
                // this.$router.push({path:'/home/buy/'+id});
                // this.$router.push({name:'buy',params:{id:id}});

            },
            getGoodsList() {
                this.$axios.get(`api/getgoods?pageindex=${this.pageindex}`)
                    .then(res => {
                        /*console.log(res);*/
                        if (res.data.status === 0) {
                            this.list = res.data.message;
                        }
                    })
            },
            getMore() {
                this.pageindex++;
                this.getGoodsList();
            }
        },

    };
</script>

<style lang="less" scoped>

    .goods-container {
        background-color: whitesmoke;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .good-item {
            width: 49%;
            height:330px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 4px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            //  改变主轴。利用flex盒子布局
            h1 {
                height: 40px;
                font-size: 16px;
                font-weight: bold;
            }

            img {
                width: 100%;
                min-height: 170px;
            }

            .info {
                width:98%;
                position: absolute;
                bottom: 0;
                height: 60px;
                background-color: #ccc;
                border-radius: 5px;

                .substr {
                    .new {
                        color: red;
                    }

                    .old {
                        font-size: 13px;
                        text-decoration: line-through;
                    }
                }

                .status {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;

                    span {
                        padding-top: 20px;
                        color: gray;
                    }
                }
            }

        }
    }
</style>