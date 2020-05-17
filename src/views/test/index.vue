<template>
    <div id="LFX_test" style="background-color: yellow;height:300px;">
        <lfx-test :test01="lfx" @log="log11"  :tessss="aa"></lfx-test>
        俺是父组件区域
        子组件传给我的值是{{data}}
        <el-input v-model="lfx"></el-input>
    </div>
</template>

<script>

    import lfxTest from './components/test190213'; //第一步，引入子组件
    export default {
        components: {  //第二步
            lfxTest
        },
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
            log11(val){
                // console.log(val);
                this.data=val;
                // alert('我时候父组件，值是',val);
            }
        }
    };
</script>

<style scoped>

</style>
