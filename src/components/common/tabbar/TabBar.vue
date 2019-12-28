<template>
    <div class="tabbar">
        <tab-item path="/home" item-name="首页">
            <img slot="item-normal" src="~assets/images/tabbar/home.png" alt=""/>
            <img slot="item-active" src="~assets/images/tabbar/home_active.png" alt=""/>
        </tab-item>
        <tab-item path="/category" item-name="分类">
            <img slot="item-normal" src="~assets/images/tabbar/category.png" alt=""/>
            <img slot="item-active" src="~assets/images/tabbar/category_active.png" alt=""/>
        </tab-item>
        <tab-item path="/cart" item-name="购物车">
            <img slot="item-normal" src="~assets/images/tabbar/cart.png" alt=""/>
            <img slot="item-active" src="~assets/images/tabbar/cart_active.png" alt=""/>
        </tab-item>
        <tab-item path="/profile" item-name="我的">
            <img slot="item-normal" src="~assets/images/tabbar/profile.png" alt=""/>
            <img slot="item-active" src="~assets/images/tabbar/profile_active.png" alt=""/>
        </tab-item>

    </div>
</template>

<script>
    import TabItem from "./TabItem";
    export default {
        name: "TabBar",
        data() {
            return {}
        },
        methods: {},
        created() {

        },
        components:{
            TabItem,
        }
    }
</script>

<style scoped lang="less">
.tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 2px -2px 2px rgba(100,100,100,.8) ;
}
</style>
