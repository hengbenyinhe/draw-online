<template>
    <el-scrollbar class="mscrollbar">
        <el-menu  class="el-menu-vertical-demo" :default-active="$route.path" :router="true">
            <el-submenu index="person" >
                <template slot="title"><i class="el-icon-menu"></i><span class="el-title">练手项目</span></template>
                <el-menu-item index="/views/vueCanvas">
                    <i class="el-icon-date"></i>画布
                </el-menu-item>
                <el-menu-item index="/views/testCanvas">
                    <i class="el-icon-date"></i>测试canvas
                </el-menu-item>
                <el-menu-item index="/views/test">
                    <i class="el-icon-edit-outline"></i>父子组件传值测试页
                </el-menu-item>
                <el-menu-item index="/views/watch">
                    <i class="el-icon-edit-outline"></i>watch学习
                </el-menu-item>
                <el-menu-item index="/views/tree">
                    <i class="el-icon-edit-outline"></i>vue-tree
                </el-menu-item>
                <el-menu-item index="/views/tree">
                    <i class="el-icon-edit-outline"></i>vue-tips
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    export default {
        props:['test'],
        data() {
            return {
                data: null
            };
        },
        mounted() {
        },
        methods: {}
    };
</script>

<style scoped>
</style>
