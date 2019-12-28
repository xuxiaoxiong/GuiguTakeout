<template>
    <div class="tabbar">
        <tab-bar-item path="/home" active-color="#02a774">
            <span  slot="name">首页</span>
            <span  slot="icon" class="iconfont icon-waimai"></span>
        </tab-bar-item>
        <tab-bar-item path="/search" active-color="#02a774">
            <span slot="name">搜索</span>
            <span slot="icon" class="iconfont icon-search"></span>
        </tab-bar-item>
        <tab-bar-item path="/cart" active-color="#02a774">
            <span slot="name">订单</span>
            <span slot="icon" class="iconfont icon-dingdan"></span>
        </tab-bar-item>
        <tab-bar-item path="/profile" active-color="#02a774">
            <span slot="name">我的</span>
            <span slot="icon" class="iconfont icon-geren"></span>
        </tab-bar-item>
    </div>
</template>

<script>
    import TabBarItem from "./TabBarItem";

    export default {
        name: "TabBar",
        components: {TabBarItem},
        data() {
            return {}
        },
        methods: {},
        created() {

        },
        component: {
            TabBarItem
        }
    }
</script>

<style scoped lang="scss">
    .tabbar {
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 49px;
        background-color: #ffffff;
        box-shadow: 1px -1px 1px rgba(100,100,100,.8);
        .iconfont{
            font-size: 18px !important;
        }
    }
</style>
