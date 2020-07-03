<template>
    <div id="app">
        <am-wrapper></am-wrapper>
    </div>
</template>

<script>
    import amWrapper from "./components/am-wrapper";

    export default {
        name: 'App',
        components: {
            amWrapper
        }
    }
</script>

<style>
    html{
        padding: 0;
        margin: 0;
    }

    #app {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .br {
        border: 1px solid greenyellow;
    }
</style>
