<template>
    <div class="car-list">
        <!-- 购物列表 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner mui-card-content-inner1">
                    <mt-switch></mt-switch>
                    <img :src="goodslist.thumb_path" alt="">
                    <div class="info">
                        <h1>{{ goodslist.title }}</h1>
                        <div class="number">
                            <span class="price">￥{{ goodslist.sell_price }}</span>

                            <div class="mui-numbox" data-numbox-min="1" data-numbox-max="20">
                                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                <input id="test" class="mui-input-numbox" type="number" value="2">
                                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                            </div>

                            <span class="deleted">删除</span>
                        </div>
                    </div>
                </div>
            </div>


            <!-- 结算列表 -->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner mui-card-content-inner2">
                        <p>总计(不含运费)</p>
                        <div class="info">
                            已勾选商品 <span class="count"> 1 </span>件, 总价
                            <span class="allprice">￥</span>
                            <mt-button class="jie" type="danger" size="small">去结算</mt-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goodslist: [],
                carsinfo: [],
            };
        },
        created() {
            this.getGoodsList();
            this.getinfo();

        },
        methods: {
            getGoodsList() {
                this.$axios.get("api/goods/getshopcarlist/87")
                    .then(res => {
                        console.log(res);
                        if (res.data.status === 0) {
                            this.goodslist = res.data.message[0];
                        }
                    });
            },
            getinfo() {
                this.$axios.get("api/goods/getinfo/87")
                    .then(res => {
                        console.log(res);
                        if (res.data.status === 0) {
                            this.carsinfo = res.data.message;
                        }
                    });
            },
        }
    };
</script>

<style scoped lang="less">
    .car-list {
        img {
            padding: 0;
            height:80px;
            margin:0 10px;
        }
        h1 {
            font-size: 13px;
            font-weight: bold;
        }
        .mui-card-content-inner1 {
            display: flex;
            align-items: center;

            .info {
                h1 {
                    margin-bottom: 20px;
                }
                .number {
                    align-items: center;

                    .price {
                        margin-left: -4px;
                        color: red;
                        padding-right:8px;
                    }

                    .deleted {
                        margin-left: 4px;
                        color: #26a2ff;
                    }
                }
            }
        }

        .mui-card-content-inner2 {
            .info {
                height: 40px;
                line-height: 40px;
                justify-content: space-between;

                .count {
                    color: red;
                }

                .allprice {
                    color: red;
                }
                .jie{
                    margin-left:100px;
                }
            }
        }
    }
</style>