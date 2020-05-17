<template>
    
</template>

<script>
    export default {
        name: "index",
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
               this.$axios.get('mylovelfx/index/Dive/gettablist')
                    .then(function(response){
                       console.log(response.data);
                    }).catch(function(error){
                    console.log(error);
                })
            },
        }
    }
</script>

<style scoped>

</style>