<template>
    <div class="am-login">
        <p class="title">
            Вход в личный кабинет
        </p>

        <div class="icon-user "></div>
        <div class="line"></div>
        <div class="fields ">
            <div class="fields-item">
<<<<<<< HEAD
                <label for="fields-item__login">
                    <div class="fields-item__icon icon_user"></div>
                </label>
                <input class="fields-item__text" id="fields-item__login" placeholder="Логин" type="text">
            </div>
            <div class="fields-item">
                <label for="fields-item__password">
                    <div class="fields-item__icon icon_password"></div>
                </label>
                <input class="fields-item__text" id="fields-item__password" placeholder="Пароль" type="password">
            </div>
        </div>
        <label class="recovery" for="recovery__link">
            <a class="recovery__title">Не можете войти?</a>
        </label>
        <a class="recovery__link" id="recovery__link" href="#">Восстановление пароля</a>
=======
                <div class="fields-item__icon icon_user"></div>
                <input class="fields-item__text" placeholder="Логин" type="text">
            </div>
            <div class="fields-item">
                <div class="fields-item__icon icon_password"></div>
                <input class="fields-item__text" placeholder="Пароль" type="password">
            </div>
        </div>
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326

    </div>
</template>

<script>
    export default {
        name: "am-login",
        props: {},
<<<<<<< HEAD
        data() {
=======
        data(){
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
            return {
                title: "",
            }
        },
<<<<<<< HEAD
        components: {},
        computed: {},
        methods: {},
=======
        components: {

        },
        computed: {},
        methods: {

        },
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
        watch: {},
        mounted() {

        }
    }
</script>

<style scoped>
<<<<<<< HEAD
    .am-login {
=======
    .am-login{
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
        width: 100%;
        height: 1080px;
        background: #2E2E2E;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
<<<<<<< HEAD

    .title {
=======
    .title{
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
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
<<<<<<< HEAD

    .icon-user {
=======
    .icon-user{
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
        width: 80px;
        height: 80px;
        background: url("../assets/images/login/icon login.png") no-repeat center;
        margin-top: 84px;
    }
<<<<<<< HEAD

    .line {
=======
    .line{
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
        width: 320px;
        height: 0px;
        left: 1121.57px;
        top: 323.04px;

        border-bottom: 3px solid #27ADBB;
        transform: rotate(-180deg);

        margin-top: 25px;
    }
<<<<<<< HEAD

    /*================================fields=========================================*/
    .fields {
        width: 26%;
=======
    .fields{
        width: 26%;
        height: 165px;
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
        margin-top: 85px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
<<<<<<< HEAD

    .fields-item {
=======
    .fields-item{
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
<<<<<<< HEAD
        margin-bottom: 26px;
    }

    .fields-item__icon {
=======
    }
    .fields-item__icon{
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
        width: 77px;
        height: 73px;

        background: #EFEEEE;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
        border-radius: 5px;
    }
<<<<<<< HEAD

    .icon_user {
=======
    .icon_user{
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
        background-image: url("../assets/images/login/user.png");
        background-repeat: no-repeat;
        background-position: center;
    }
<<<<<<< HEAD

    .icon_password {
=======
    .icon_password{
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
        background-image: url("../assets/images/login/password.png");
        background-repeat: no-repeat;
        background-position: center;
    }

<<<<<<< HEAD
    .fields-item__text {
=======
    .fields-item__text{
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
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

<<<<<<< HEAD
    /*================================recovery=========================================*/
    .recovery {
        max-width: 254px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .recovery__title {
        font-family: "Source Code Pro";
        font-style: normal;
        font-weight: 300;
        font-size: 17px;
        line-height: 20px;

        color: rgba(255, 255, 255, 0.6);
    }

    .recovery__link {
        font-family: "Source Code Pro";
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        /* identical to box height */

        text-decoration-line: underline;

        color: #27ADBB;
    }
=======
















>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326


    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        src: url('../assets/fonts/rubik-v9-latin_cyrillic-500.eot'); /* IE9 Compat Modes */
        src: local('Rubik Medium'), local('Rubik-Medium'),
<<<<<<< HEAD
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../assets/fonts/rubik-v9-latin_cyrillic-500.woff2') format('woff2'), /* Super Modern Browsers */ url('../assets/fonts/rubik-v9-latin_cyrillic-500.woff') format('woff'), /* Modern Browsers */ url('../assets/fonts/rubik-v9-latin_cyrillic-500.ttf') format('truetype'), /* Safari, Android, iOS */ url('../assets/fonts/rubik-v9-latin_cyrillic-500.svg#Rubik') format('svg'); /* Legacy iOS */
    }

    /* source-code-pro-300 - cyrillic */
    @font-face {
        font-family: 'Source Code Pro';
        font-style: normal;
        font-weight: 300;
        src: url('../assets/fonts/source-code-pro-v11-cyrillic-300.eot'); /* IE9 Compat Modes */
        src: local('Source Code Pro Light'), local('SourceCodePro-Light'),
        url('../assets/fonts/source-code-pro-v11-cyrillic-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../assets/fonts/source-code-pro-v11-cyrillic-300.woff2') format('woff2'), /* Super Modern Browsers */ url('../assets/fonts/source-code-pro-v11-cyrillic-300.woff') format('woff'), /* Modern Browsers */ url('../assets/fonts/source-code-pro-v11-cyrillic-300.ttf') format('truetype'), /* Safari, Android, iOS */ url('../assets/fonts/source-code-pro-v11-cyrillic-300.svg#SourceCodePro') format('svg'); /* Legacy iOS */
=======
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.woff') format('woff'), /* Modern Browsers */
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/rubik-v9-latin_cyrillic-500.svg#Rubik') format('svg'); /* Legacy iOS */
>>>>>>> c5e4f0a3e4a87c339b7aaed3e24ba801d2d5b326
    }

</style>