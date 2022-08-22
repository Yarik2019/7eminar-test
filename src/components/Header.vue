<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-black">
            <div class="container">
                <button class="burger-menu_button" :class="menuBurger ? 'burger-menu_active' : ''"
                    @click="menuBurgerActive">
                    <spun class="burger-menu_lines"></spun>
                </button>
                <a href="#" class="navbar-brand"><img class="logos-img" src="../assets/img/logo_white.svg" alt=""></a>
                <div class="d-flex align-items-center">
                    <div>
                        <div class="h-100">
                            <div class="d-flex justify-content-center h-100">
                                <div class="searchbar">
                                    <input class="search_input color-black" type="text" name=""
                                        placeholder="Шукайте будь-що...">
                                    <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="block-user d-flex align-items-center ml-24">
                        <div class="logo-user pr_6">
                            <img class="logo-img" src="../assets/img/user.svg" alt="">
                            <div class="bg-red dot-user"></div>
                        </div>
                        <h6 class="user-name color-white font-size-12 font-weight-300">person@gmail.com</h6>
                    </div>
                    <div class="block-bell pl-19">
                        <img class="bell-img" src="../assets/img/bell.svg" alt="">
                        <div class="bg-red dot-bell"></div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'vueHeader',
    methods: {
        ...mapMutations(['menuBurgerActive'])
    },
    computed: {
        ...mapState(['menuBurger'])
    }
}
</script>
<style>
.searchbar {
    margin-bottom: auto;
    margin-top: auto;
    height: 40px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    /* padding: px; */
}

.search_input {
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color: transparent;
    line-height: 40px;
    transition: width 0.4s linear;
}

.searchbar:hover>.search_input {
    padding: 0 15px 10px;
    width: 713px;
    transition: width 0.4s linear;
}


.searchbar:hover>.search_icon {
    background: white;
    color: #262D4A;
}

.search_icon {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    right: 5px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    color: #262D4A;
    background: white;
    text-decoration: none;
}

/* .searchbar {
    margin-bottom: auto;
    margin-top: auto;
    height: 40px;
    background: #FFFFFF;
    border-radius: 5px;
    
}

.search_input {
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color: transparent;
    line-height: 40px;
    transition: width 0.4s linear;
}

.searchbar:hover>.search_input {
    padding: 0 15px 10px;
    width: 713px;
    transition: width 0.4s linear;
}


.searchbar:hover>.search_icon {
    background: white;
    color: #262D4A;
}

.search_icon {
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #262D4A;

    text-decoration: none;
} */

/* margin */
.ml-24 {
    margin-left: 24px;
}

/* padding */
.pr_6 {
    padding-right: 10px;
}

.pl-19 {
    padding-left: 19px;
}

/* user */
.logo-user {
    position: relative;
}

.dot-user {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    bottom: 2px;
    right: 9px;
}


/* bell */
.block-bell {
    position: relative;
}

.bell-img {
    width: 21px;
    height: 24px;
}

.dot-bell {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    right: 0px;
}

.burger-menu_button {
    display: none;
}



@media (max-width: 1200px) {
    /* menu burger */

    .burger-menu_button {
        background: transparent;
        border: none;
        width: 30px;
        height: 30px;
        position: relative;
        display: flex;
    }

    .burger-menu_lines::before,
    .burger-menu_lines::after,
    .burger-menu_lines {
        position: absolute;
        width: 20px;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.7);
        -webkit-transition: 0.4s;
        -moz-transition: 0.4s;
        -o-transition: 0.4s;
        transition: 0.4s;
    }

    .burger-menu_lines {
        top: 50%;
        transform: translateY(-50%);
    }

    .burger-menu_lines::before {
        content: '';
        top: -8px;
        left: 0px;
    }

    .burger-menu_lines::after {
        content: '';
        top: 8px;
        left: 0px;
    }


    .burger-menu_active .burger-menu_lines {
        background-color: transparent;
    }

    .burger-menu_active .burger-menu_lines::before {
        top: 0;
        transform: rotate(45deg);
    }

    .burger-menu_active .burger-menu_lines::after {
        top: 0;
        transform: rotate(-45deg);
    }

    /* search */
    .searchbar:hover>.search_input {
        width: 400px;
    }
}

@media (max-width: 992px) {

    /* search */
    .searchbar:hover>.search_input {
        width: 200px;
    }

    .search_icon {
        top: 2px;
        color: white;
        background: transparent;

    }

    .searchbar:hover>.search_icon {
        background: transparent;
    }
}

@media (max-width: 768px) {

    /* search */
    .searchbar:hover>.search_input {
        width: 200px;
    }

    /* dot-user */
    .dot-user {
        right: 0px;
    }

    /* logos  */
    .logos-img {
        width: 125px;
        height: auto;
    }

    .user-name {
        display: none;
    }

    /* bell */
    .block-bell {
        display: none;
    }

    /* padding */
    .pr_6 {
        padding-right: 0px;
    }

    .pl-19 {
        padding-left: 0px;
    }


    /* margin */
    .mr-24 {
        margin-right: 0;
    }

}
</style>