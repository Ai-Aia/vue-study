<template>

    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,i) in NewsList" :key="item.id">
                <router-link :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url" alt="">
                    <div class="mui-media-body">
                        <h3>{{item.title}}</h3>
                        <p>
                            <span>发表时间:{{item.add_time|dataFormat('YYYY-MM-DD')}}</span>
                            <span>点击次数:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>

    </div>


</template>

<script>
    export default {
        name: "newsList",
        data(){
          return{
              NewsList:[]
          }
        },
        created(){
            this.getNewsList()
        },
        methods:{
            getNewsList(){
                this.$axios.get('api/getnewslist')
                    .then(res=>{
                        // console.log(res);
                        if (res.data.status===0){
                            this.NewsList=res.data.message;
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