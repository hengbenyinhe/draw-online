<template>
    <div class="mwheader">
        <div class="head-title">
            <span class="proj-name" @click="toHome">项目名称</span>
        </div>
        <div class="head-tools">
            <!--<div class="language_icon">-->
                <!--<el-tooltip :content="$t('m.language')" effect="dark" placement="left" >-->
                    <!--<lang-select class="international right-menu-item"/>-->
                <!--</el-tooltip>-->
            <!--</div>-->
            <div class="language_icon">
                <el-tooltip :content="$t('m.language')" effect="dark" placement="top" >
                    <lang-select class="international right-menu-item"/>
                </el-tooltip>
            </div>
            <div class="full_screen_icon">
                <el-dropdown class="avatar-container right-menu-item userdrop" trigger="click">
                    <span class="avatar-wrapper">{{name}}
                        <svg-icon class-name="user-icon" icon-class="user" />
                    </span>
                    <!--<span class="el-dropdown-link">-->
                        <!--{{name}}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                      <!--</span>-->
                    <!--<span style="color:white">{{name}}</span>-->
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <span style="display:block;" @click="setRules">
                                 <svg-icon class-name="settings-icon" icon-class="settings" />
                                {{ $t('m.settings') }}
                            </span>
                        </el-dropdown-item>
                        <el-dropdown-item >
                            <span style="display:block;" @click="logout">
                                <svg-icon class-name="settings-icon" icon-class="log-out" />
                                {{ $t('m.logOut') }}
                            </span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </div>
            <div @click="clickFullscreen" class="full_screen_icon">
                <el-tooltip :content="$t('m.screenfull')" effect="dark" placement="top">
                    <screenfull class="screenfull right-menu-item"/>
                </el-tooltip>
            </div>
        </div>
        <el-menu :default-active="$route.path" class="el-menu-demo mainmenus"
                  text-color="#FFFFFF" background-color="#0071c6" :router="true"
                  mode="horizontal" @select="handleSelect">
            <el-menu-item index="/views/position_location" v-if="menus.indexOf('position_location')>-1" class="elmitem">
                <svg-icon class-name="two-line" icon-class="location"  style="font-size: 24px;"/>
                <span slot="title" style="font-size: inherit;">{{$t('m.position_location')}}</span>
            </el-menu-item>
            <el-menu-item index="/views/realtime_video" v-if="menus.indexOf('realtime_video')>-1" class="elmitem">
                <svg-icon class-name="two-line" icon-class="realtime-video" />
                <span slot="title" style="font-size: inherit;">{{$t('m.realtime_video')}}</span>
            </el-menu-item>
            <el-menu-item index="/views/vehicletrajectory" v-if="menus.indexOf('vehicletrajectory')>-1" class="elmitem">
                <svg-icon class-name="two-line" icon-class="route" />
                <span slot="title" style="font-size: inherit;">{{$t('m.vehicletrajectory')}}</span>
            </el-menu-item>
            <el-menu-item index="/views/videoreplay" v-if="menus.indexOf('videoreplay')>-1" class="elmitem">
                <svg-icon class-name="two-line" icon-class="video-play" />
                <span slot="title" style="font-size: inherit;">{{$t('m.videoreplay')}}</span>
            </el-menu-item>
            <el-menu-item index="/views/statement" v-if="menus.indexOf('statement')>-1" class="elmitem">
                <svg-icon class-name="two-line" icon-class="statement" />
                <span slot="title" style="font-size: inherit;">{{$t('m.statement')}}</span>
            </el-menu-item>
            <el-menu-item index="/views/operationmanagement" v-if="menus.indexOf('operationmanagement')>-1" class="elmitem">
                <svg-icon class-name="two-line" icon-class="operation" />
                <span slot="title" style="font-size: inherit;">{{$t('m.operationmanagement')}}</span>
            </el-menu-item>
            <el-menu-item index="/views/rules" v-if="menus.indexOf('rules')>-1" class="elmitem">
                <svg-icon class-name="two-line" icon-class="rules" />
                <span slot="title" style="font-size: inherit;">{{$t('m.rulesmanagement')}}</span>
            </el-menu-item>
        </el-menu>
        <set-rlues :dialogFormVisible="dialogFormVisible" @closeDialog="closeDialog"></set-rlues>
    </div>
</template>

<script>
// import Screenfull from 'components/Screenfull';
// import LangSelect from 'components/LangSelect';
// import { logout } from 'src/api/login';
// import { mapGetters } from 'vuex';
export default {
    components: {
        // Screenfull,
        // LangSelect,
    },
    name:'mwheader',
    data() {
        return {
            activeName: 'second',
            dialogFormVisible:false
        };
    },
    computed: {
        // ... mapGetters([
        //     'menus',
        //     'name'
        // ])
    },
    methods: {
        handleSelect(tab, event) {
            // console.log(tab, event);
        },
        toHome(){
            this.$router.push('/views/position_location');
        },
        clickFullscreen(){
        },
        logout(){
            logout().then(response => {
                Auth.logout();
                window.location.reload();
            }).catch(err => {
                Auth.logout();
                window.location.reload();
            });
            // console.log('退出登录');
        },
        setRules(){
            this.dialogFormVisible=true;
        },
        closeDialog(){
            this.dialogFormVisible=false;
        }
    }
};
</script>

<style scoped>
    .mwheader{
        width:100%;
        height: inherit;
        overflow-y: hidden;
        background-color: #0071c6;
    }
    .head-title{
        float: left;
        width:280px;
        padding: 15px 0px 0 5px;
        overflow: hidden;
        white-space: nowrap;
    }
    .head-tools{
        height: inherit;
        display: inline;
        float: right;
        /*padding-top: 20px;*/
        margin-right: 40px;
    }
    .full_screen_icon{
        float: right;
        padding-top: 20px;
    }
    .language_icon{
        padding-top: 20px;
        float: left;
        padding-right: 2px;
    }
    .el-menu-item:hover{
        background-color: #0b83dc!important;
    }
    .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: 2px solid #0071c6!important;
    }
    .proj-name{
        cursor:pointer;
        color:white
    }
    /*.el-menu-item:focus {*/
        /*outline: 0;*/
        /*background-color: #0b83dc!important;*/
    /*}*/
    /*.el-menu-item{*/
        /*background-color: #0071c6!important;*/
    /*}*/
    /*.isMenuSelceted{*/
        /*background-color: 0b83dc!important*/
    /*}*/
    .international{
        vertical-align: top;
    }
    .right-menu-item {
        display: inline-block;
        margin: 0 8px;
    }
    .user-icon {
        font-size: 20px;
        cursor: pointer;
        color: #f7f7f7;
        vertical-align: -5px!important;
    }
    .two-line{
        font-size: 22px;
        top: 9px;
        bottom: 0px;
        left:38%;
        position: absolute;
        /*height:40px;*/
    }
    .elmitem{
        position: relative;
        padding-top: 12px;
    }
    .avatar-wrapper{
        color: white;
        cursor: pointer;
    }
</style>
