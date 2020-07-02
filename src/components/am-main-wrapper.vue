<template>
    <div class="am-main-wrapper ">
        <am-login></am-login>
    </div>
</template>

<script>
    import amLogin from './am-login'

    export default {
        name: "am-main-wrapper",
        props: {},
        data() {
            return {
                title: "",
            }
        },
        components: {
            amLogin
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {

        }
    }
</script>

<style scoped>
    .am-main-wrapper {
        width: 1920px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>