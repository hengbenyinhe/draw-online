<template>
    <div id="test" style="background-color: yellow;height:300px;">
        <input v-model='data'></input>{{datanow}}
    </div>
</template>

<script>
    export default {
   
        data() {
            return {
                data: null,
                lfx:'myLove',
                aa:'22222',
            };
        },
        mounted() {
        },
        methods: {
           
        },
        computed: {
		  datanow(){
		    return this.data*2+'1111';
		  }
		},
        watch:{
        	data(newval,oldval){
				console.log(newval,oldval);
        	}
        }
    };
</script>

<style scoped>

</style>
