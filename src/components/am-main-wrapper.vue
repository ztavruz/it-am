<template>
    <div class="main">
        <am-login></am-login>
    </div>
</template>

<script>
    import amLogin from './am-login'

    export default {
        name: "am-main-wrapper",
        props: {},
        data(){
            return {
                title: "",
            }
        },
        components: {
            amLogin
        },
        computed: {},
        methods: {

        },
        watch: {},
        mounted() {

        }
    }
</script>

<style scoped>

</style>