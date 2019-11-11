<template>
    <div>
        <comment :id="id"></comment>
    </div>
</template>

<script>

    import  comment from '../sub/comment.vue'
    export default {
        name: "say",
        components:{
            comment
        },
        data(){
            return{
                id:this.$route.params.id,
            }
        }
    }
</script>

<style scoped>

</style>