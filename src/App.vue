<template>
  <div id="app">
    <router-view/>
    <tab-bar/>
  </div>
</template>
<script>
    // import MainTabbar from "components/content/maintabbar/MainTabbar";
    import TabBar from "./components/common/tabbarfont/TabBar";
    export  default {
        name: 'App',
        components: {
            TabBar
        }
    }
</script>
<style lang="less">
    @import "~assets/css/normalize.css";
    #app {
        height: 100vh;
    }
</style>
