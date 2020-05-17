<template>
    <el-container style="width:100%;height:100%">
        <el-aside width="16em"><my-sidebar></my-sidebar>
        </el-aside>
        <el-container class="container-wrapper">
            <!--<el-header class="main-header"><myHeader/></el-header>-->
            <el-main class="main-container"><router-view/></el-main>
        </el-container>
    </el-container>
</template>
<script>
import mySidebar from './components/my_sidebar.vue';
// import myheader from './components/my_header.vue';
export default {
    components: {  //第二步
        mySidebar
    },
    data() {
        return {

        };
    },
    computed: {
    },
    created() {
    },
    destroyed: function() {
    },
    methods: {

    }
};
</script>
<style scoped>
    .main-header{
        height:60px;
    }
    .main-container {
        width: 100%;
        position: absolute;
        top: 5px;
        bottom: 0px;
        left: 0px;
        overflow-y: hidden;
    }
    .container-wrapper {
        position: relative;
        height: 100%;
        width: calc(100% - 16em);
    }
</style>
<style>
    @import '../../css/custom.css';
</style>

