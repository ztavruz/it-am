<template>
    <div class="main">
        <div class="header br">
            <div class="row-top br">
                <div class="row-top__left"></div>
                <div class="row-top__right br">
                    <div class="company-field">
                        <div class="company-field__title">Наименование организации: </div>
                        <div class="company-field__name">Skynet</div>
                    </div>
                    <div class="user-field">
                        <div class="user-field__title">Пользователь: </div>
                        <div class="user-field__name">ztavruz</div>
                    </div>
                </div>
            </div>
            <div class="row-menu br">
                <div class="row-menu__item">Онлайн-трансляция</div>
                <div class="row-menu__item">архив</div>
                <div class="row-menu__item">GPS-трекинг</div>
                <div class="row-menu__item">администрирование</div>
                <div class="row-menu__events"></div>
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
        width: 100%;
        background: #2E2E2E;
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 1080px;
    }

    .header{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .row-top{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .row-top__right{
        display: flex;
        flex-direction: column;
    }
    .company-field{
        display: flex;
        flex-direction: row;
    }




    .row-menu{
        display: flex;
        flex-direction: row;
    }

    .footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .icon-wifi {
        width: 94px;
        height: 76px;
        margin-top: 105px;
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