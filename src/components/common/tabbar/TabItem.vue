<template>
    <div class="tabbar-item" :style="activeStyle" @click="changeTabBar">
        <div v-if="isActive">
            <slot name="item-active"/>
        </div>
        <div v-else>
            <slot name="item-normal"/>
        </div>
        <div>
            {{itemName}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: '#EE7F94'
            },
            itemName:{
                type: String,
                default: ''
            }
        },
        methods: {
            changeTabBar(){
                this.$router.replace(this.path);
                console.log(this.path)
            }
        },
        created() {

        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1;
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}
            }

        },
    }
</script>

<style scoped lang="less">
    .tabbar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 49px;
        font-size: 14px;

        img {
            width: 24px;
            height: 24px;
        }
    }
</style>
