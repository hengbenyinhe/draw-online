<template>
    <div id="app" style="width:100%;">
        <router-view></router-view>
    </div>
</template>
<script>
</script>
<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #0071c6;
        height:100%;
    }
    html{
        height:100%;/*让html的高度等于屏幕*/
    }
    body{
        height:100%;
        margin:0;
    }
    #nprogress .bar{
        background: #5dff41 !important; /*自定义颜色*/
    }
</style>

