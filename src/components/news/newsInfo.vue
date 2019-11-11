<template>

    <div>
        <div class="mui-table-view-cell mui-media" v-for="(item,i) in newsInfo" :key="item.id">
            <a>
                <div class="mui-media-body">
                    <h3>{{item.title}}</h3>
                    <p>
                        <span>发表时间:{{item.add_time|dataFormat()}}</span>
                        <span>点击次数:{{item.click}}</span>
                    </p>

                    <p>{{item.zhaiyao}}</p>
                    <div class="html" v-html="item.content"></div>



                </div>
            </a>

            <comment :id="id"></comment>
        </div>
    </div>


</template>

<script>
    import comment from "../sub/comment.vue";
    export default {
        name: "newsInfo",
        components:{
            comment,
        },
        data() {
            return {
                newsInfo: [],
                id:this.$route.params.id,
            }
        },
        created() {
            this.GetNews()
        },
        methods: {
            GetNews() {
                this.$axios.get('api/getnew/' + this.$route.params.id)
                    .then(res => {
                        // console.log(res);
                        if (res.data.status === 0) {
                            this.newsInfo = res.data.message;
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="less">
    .mui-media-body {
        h3 {
            font-size: 14px;
        }

        p {
            font-size: 12px;
            display: flex;
            //两端对齐
            justify-content: space-between;
            color: #226aff;

        }
    }


</style>