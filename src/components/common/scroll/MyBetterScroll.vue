<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "MyBetterScroll",
        data() {
            return {
                scroll: null
            }
        },
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            isPullingUp: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            scrollTo(x,y,timer = 300){

            },
            scrollOffsetY(){
                return this.scroll.y;
            },
            finishPullUp(){
                this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
            },
            refresh(){
                this.scroll && this.scroll.refresh && this.scroll.refresh();
            }
        },
        created() {

        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.isPullingUp
            });
            if(this.probeType === 2 || this.probeType === 3){
                this.scroll.on("scroll",(position) => {
                    this.emit("scroll",position);
                })
            }
            if(this.isPullingUp){
                this.scroll.on("pullingUp",() => {
                    this.emit("pullingUp",null);
                });
            }
        },
    }
</script>

<style scoped lang="scss">

</style>
