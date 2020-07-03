<template>
    <div id="app">
        <am-main-wrapper></am-main-wrapper>
    </div>
</template>

<script>
    import amMainWrapper from "./components/am-main-wrapper";

    export default {
        name: 'App',
        components: {
            amMainWrapper
        }
    }
</script>

<style>

    #app {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .br {
        border: 1px solid greenyellow;
    }
</style>
