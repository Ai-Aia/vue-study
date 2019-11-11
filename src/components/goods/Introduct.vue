<template>
    <div class="title">
        <h3>{{Tu.title}}</h3>
        <hr>
        <div v-html="Tu.content"></div>
    </div>
</template>

<script>
    export default {
        name: "Introduct",
        created() {
            this.getTu();
        },
        data() {
            return {
                Tu:[],
                id:this.$route.params.id,
            }
        },
        methods:{
            getTu(){
                this.$axios.get('api/goods/getdesc/'+this.id)
                    .then(res =>{
                        this.Tu = res.data.message[0];
                        // console.log(res);
                        // console.log(this.id);
                    })
            },
        }
    }
</script>

<style lang="less" scoped>
    .title{
        color:blueviolet;
        text-align: center;
        div{
            padding: 10px;
        }
    }
</style>