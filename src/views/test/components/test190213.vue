<template>
    <div id="para" style="background-color: lightseagreen">
        <p>我是子组件，父组件传来的值是：{{test01}}{{tessss}}</p>
        <input v-model="lfxx">
        <button @click="toFather">发送</button>
    </div>
</template>

<script>
    export default {
        props:['test01','tessss'], //父组件向子组件传值，靠参数
        data() {
            return {
                data: null,
                lfxx:undefined,
            };
        },
        mounted() {
        },
        methods: {
            toFather(){  //子组件向父组件通信，要靠出发时间
                this.$emit('log',this.lfxx);
            }
        }
    };
</script>

<style scoped>

</style>
