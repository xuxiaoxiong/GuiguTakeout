<template>
    <div class="tabbar-item" :style="activeStyle" @click="changeTabbar">
        <div class="icon">
            <slot name="icon"/>
        </div>
        <div>
            <slot name="name"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: '#000'
            }
        },
        methods: {
            changeTabbar(){
                this.$router.replace(this.path);
            }
        },
        created() {

        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) != -1;
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
    }
</script>

<style lang="less">
    .tabbar-item {
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        text-align: center;
        color: #999999;
        .icon {
            margin-top: 4px;
            font-size: 18px !important;
        }
    }
</style>
