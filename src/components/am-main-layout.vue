<template>
    <div class="main">
        <div class="header ">
            <div class="row-top ">
                <div class="row-top__left"></div>
                <div class="row-top__right ">
                    <div class="company-field">
                        <p class="company-field__title">Наименование организации: </p>
                        <p class="company-field__name field__name">"Skynet"</p>
                    </div>
                    <div class="user-field">
                        <p class="user-field__title">Пользователь: </p>
                        <p class="user-field__name field__name">ztavruz</p>
                    </div>
                </div>
            </div>
            <div class="row-menu ">
                <div class="row-menu__left">
                    <a href="#" class="row-menu__item">Онлайн-трансляция</a>
                    <a href="#" class="row-menu__item">архив</a>
                    <a href="#" class="row-menu__item">GPS-трекинг</a>
                    <a href="#" class="row-menu__item">администрирование</a>
                </div>
                <div class="row-menu__right">
                    <a href="#" class="row-menu__events"></a>
                </div>

            </div>
        </div>
        <div class="content">

        </div>
        <div class="footer">
            <div class="icon-wifi"></div>

            <div class="rights">IT-am. Все права защищены. 2020</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "am-main-layout"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .main {
        max-width: 100%;
        background: #2E2E2E;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        height: 1080px;
    }
    p{
        font-family: Proxima Nova Cond;
        font-style: normal;
        font-weight: 600;
        font-size: 27px;
        line-height: 40px;
        /* or 148% */
        color: #FFFFFF;
    }
    a{
        text-decoration: none;
        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;

        color: #FFFFFF;
    }

    .header{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .row-top{
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .row-top__right{
        display: flex;
        flex-direction: column;
        padding: 16px 31px;

        border-left: 2.5px solid rgba(255, 255, 255, 0.3);
        box-shadow: inset 0px 1px 10px 2px rgba(255, 255, 255, 0.25);
    }
    .field__name{
        margin-left: 10px;
    }
    .company-field{
        display: flex;
        flex-direction: row;
    }
    .user-field{
        display: flex;
        flex-direction: row;
    }




    .row-menu{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-top: 2.5px solid rgba(255, 255, 255, 0.3);
        border-bottom: 2.5px solid rgba(255, 255, 255, 0.3);
        box-shadow: inset 0px 1px 10px 4px rgba(255, 255, 255, 0.25);
        /*transform: rotate(90deg);*/
    }
    .row-menu__left{
        width: 81%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding-right: 1.5%;
    }
    .row-menu__right{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 19%;
    }

    .row-menu__item{
        margin-left: 20px;
        margin-right: 20px;
    }
    .row-menu__events{
        width: 81px;
        height: 81px;
        margin-right: -10% ;
        border-left: 2.5px solid rgba(255, 255, 255, 0.3);
        border-right: 2.5px solid rgba(255, 255, 255, 0.3);
        background: url("../assets/images/main/notification.png") no-repeat center;

        position: relative;
    }

    /*==============content====================*/
    .content{
        height: 500px;
    }

    /*==============footer====================*/
    .footer {
        width: 100%;
        height: 233px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .icon-wifi {
        width: 94px;
        height: 76px;
        margin-top: 53px;
        background: url("../assets/images/login/wifi.png") no-repeat center;
    }

    .rights {
        font-family: Proxima Nova Cond;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 70px;
        /* identical to box height, or 219% */
        color: #FFFFFF;
    }






    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        src: url('../assets/fonts/rubik-v9-latin_cyrillic-500.eot'); /* IE9 Compat Modes */
        src: local('Rubik Medium'), local('Rubik-Medium'),
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
    }

    @font-face {
        font-family: 'Proxima Nova Cond';
        font-style: normal;
        font-weight: 300;
        src: url('../assets/fonts/ProximaNovaCond-Light.eot'); /* IE9 Compat Modes */
        src: local('Proxima Nova Cond Light'), local('ProximaNovaCond-Light'),
        url('../assets/fonts/ProximaNovaCond-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../assets/fonts/ProximaNovaCond-Light.woff') format('woff'), /* Modern Browsers */ url('../assets/fonts/ProximaNovaCond-Light.ttf') format('truetype'); /* Safari, Android, iOS */
    }

</style>