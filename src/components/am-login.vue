<template>
    <div class="am-login">
        <p class="title">
            Вход в личный кабинет
        </p>

        <div class="icon-user "></div>
        <div class="line"></div>
        <div class="fields ">
            <div class="fields-item">
                <div class="fields-item__icon icon_user"></div>
                <input class="fields-item__text" placeholder="Логин" type="text">
            </div>
            <div class="fields-item">
                <div class="fields-item__icon icon_password"></div>
                <input class="fields-item__text" placeholder="Пароль" type="password">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "am-login",
        props: {},
        data(){
            return {
                title: "",
            }
        },
        components: {

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
    .am-login{
        width: 100%;
        height: 1080px;
        background: #2E2E2E;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title{
        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 43px;
        /* identical to box height */
        margin-top: 91px;
        text-transform: uppercase;

        color: #FFFFFF;
    }
    .icon-user{
        width: 80px;
        height: 80px;
        background: url("../assets/images/login/icon login.png") no-repeat center;
        margin-top: 84px;
    }
    .line{
        width: 320px;
        height: 0px;
        left: 1121.57px;
        top: 323.04px;

        border-bottom: 3px solid #27ADBB;
        transform: rotate(-180deg);

        margin-top: 25px;
    }
    .fields{
        width: 26%;
        height: 165px;
        margin-top: 85px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .fields-item{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .fields-item__icon{
        width: 77px;
        height: 73px;

        background: #EFEEEE;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
        border-radius: 5px;
    }
    .icon_user{
        background-image: url("../assets/images/login/user.png");
        background-repeat: no-repeat;
        background-position: center;
    }
    .icon_password{
        background-image: url("../assets/images/login/password.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .fields-item__text{
        width: calc(100% - 77px);
        height: 65px;

        background: #EFEEEE;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.6), inset -6px -6px 16px rgba(255, 255, 255, 0.6);
        border-radius: 0px 5px 5px 0px;

        font-style: normal;
        font-weight: 300;
        font-size: 28px;
        line-height: 34px;
        padding-left: 23px;

        color: rgba(19, 19, 19, 0.6);
    }



















    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        src: url('../assets/fonts/rubik-v9-latin_cyrillic-500.eot'); /* IE9 Compat Modes */
        src: local('Rubik Medium'), local('Rubik-Medium'),
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.woff') format('woff'), /* Modern Browsers */
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.svg#Rubik') format('svg'); /* Legacy iOS */
    }

</style>