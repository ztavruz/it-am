<template>
    <div class="main">
<!--        <am-login></am-login>-->
<!--        <am-recovery></am-recovery>-->
        <am-main-layout></am-main-layout>
    </div>
</template>

<script>
    // import amLogin from './am-login'
    // import amRecovery from './am-recovery'
    import amMainLayout from './am-main-layout'

    export default {
        name: "am-main-wrapper",
        props: {},
        data() {
            return {
                title: "",
            }
        },
        components: {
            // amLogin,
            // amRecovery,
            amMainLayout
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {

        }
    }
</script>

<style scoped>
    .main {
        width: 1920px;
        min-width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
    }
</style>