<template>

    <div>
        <div class="p2">
            <h4>{{Info.title}}</h4>
            <p>
                <span>发表时间: {{Info.add_time|dataFormat()}}</span>
                <span>点击: {{Info.click}}次</span>
            </p>
            <hr>
        </div>
<!--        <div class="center">-->
<!--            <div class="tu" v-for="item in Images" :key="item.id">-->
<!--                <img :src="item.src" alt="">-->
<!--            </div>-->
<!--        </div>-->
        <!-- 缩略图区域 -->
        <div class="thumbs">
            <vue-preview :slides="Images" @close="handle"></vue-preview>
        </div>


        <div class="bottom" v-html="Info.content">

        </div>


        <comment :id="id"></comment>
    </div>


</template>

<script>

    import comment from "../sub/comment.vue";
    export default {
        name: "photoInfo",
        components:{
            comment,
        },
        data() {
            return {
                Images: [],
                Info: [],
                id: this.$route.params.id,
            }
        },
        created() {
            this.GetImages();
            this.GetInfo();
        },
        methods: {


            GetImages() {
                this.$axios.get('api/getthumimages/' + this.id)
                    .then(res => {
                        // console.log(res);
                        if (res.data.status === 0) {
                            res.data.message.forEach( item => {
                                item.w = 600;
                                item.h = 400;
                                item.msrc = item.src;
                            });
                            this.Images = res.data.message;
                        }
                    })
            },
            GetInfo() {
                this.$axios.get('api/getimageInfo/' + this.id)
                    .then(res => {
                        // console.log(res);
                        if (res.data.status === 0) {
                            this.Info = res.data.message[0];
                        }
                    })
            },
            handle(){

            }
        }
    }
</script>

<style scoped lang="less">
    .center {
        height:460px;
    }

    /*.tu {*/
    /*    width: 40%;*/
    /*    display: flex;*/
    /*    float: left;*/
    /*    overflow: hidden;*/
    /*    margin-left: 24px;*/

    /*    img {*/
    /*        width: 80%;*/
    /*        margin: 10px;*/

    /*    }*/
    /*}*/

    .p2 {
        h4{
            color: #226aff;
            text-align: center;
            padding:10px;
            line-height:30px;
        }
        p {
            font-size: 12px;
            display: flex;
            //两端对齐
            color: #ccc;
            justify-content: space-between;
            span{
                padding:10px;
            }
        }

    }

    .bottom {
        color:black;
        font-size: 13px;
        padding:10px;
    }
    .thumbs{
        img{
            margin: 10px;
            box-shadow: 0 0 8px #999;
        }
    }



</style>