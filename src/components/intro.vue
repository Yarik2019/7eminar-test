<template>
    <div class="bg-dark menu" :class="menuBurger ? 'active' : ''">
        <div class="container">
            <div class="navbar-collapse d-xl-block d-xl-flex">
                <ul class="navbar-nav d-xl-block d-xl-flex  flex-xl-row  me-auto">
                    <li class="dropdown mr-24" :class="isActive ? 'active' : ''">
                        <router-link class="dropbtn nav-link d-flex color-white color-hover font-weight-300" to="/"
                            @click="menuDrop()">Усі
                            відео</router-link>
                        <div class="dropdown-content">
                            <div class="half">
                                <div class="tab gray">
                                    <input id="tab-one" type="radio" name="tabs2">
                                    <label for="tab-one" class="text-uppercase d-flex align-items-center">
                                        <div class="span"><i class="fa-solid  fa fa-caret-right"></i></div> відео
                                    </label>
                                    <div class="tab-content">
                                        <p>
                                            <router-link :to="{ name: 'allVideo' }" class="vue-link">Усі відео (456)
                                            </router-link>
                                            <router-link :to="{ name: 'MyVideos' }" class="vue-link">Мої відео (15)
                                            </router-link>
                                            <router-link to="/" class="vue-link">Безкоштовно (45)</router-link>
                                            <router-link to="/" class="vue-link">Новинки (34)</router-link>
                                            <router-link to="/" class="vue-link">Останні переглянуті (32)</router-link>
                                            <router-link to="/" class="vue-link">Мої обрані (14)</router-link>

                                        </p>
                                    </div>
                                </div>
                                <div class="tab gray">
                                    <input id="tab-two" type="radio" name="tabs2">
                                    <label for="tab-two" class="text-uppercase d-flex align-items-center">
                                        <div class="span"></div> КОНСУЛЬТАЦІЇ
                                    </label>
                                    <div class="tab-content">
                                        <p> </p>
                                    </div>
                                </div>
                                <div class="tab gray">
                                    <input id="tab-three" type="radio" name="tabs2">
                                    <label for="tab-three" class="text-uppercase d-flex align-items-center">
                                        <div class="span"></div> КОНСУЛЬТАЦІЇ
                                    </label>
                                    <div class="tab-content">
                                        <p> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item  mr-24">
                        <router-link :to="{ name: 'DocumentsView' }"
                            class="nav-link color-white color-hover font-weight-300 " href="#">Документи</router-link>
                    </li>
                    <li class="nav-item  mr-24">
                        <router-link :to="{ name: 'TopicsView' }"
                            class="nav-link color-white color-hover font-weight-300" href="#">Теми</router-link>
                    </li>
                    <li class="nav-item  mr-24">
                        <a class="nav-link color-white color-hover font-weight-300" href="#">Автоматизація</a>
                    </li>
                    <li class="nav-item  mr-24 ">
                        <a class="nav-link color-white color-hover font-weight-300 " href="#">Рубрики</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link color-white color-hover-two font-weight-300  bg-red personal-consultant"
                            href="#">Особистий консультант</a>
                    </li>
                </ul>
                <div class="nav-item d-flex">
                    <button class="btn bg-red p-100 color-white color-hover-two font-weight-500 text-uppercase forward"
                        href="#">передлатити</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'vueIntor',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        menuDrop() {
            this.isActive = !this.isActive;
        }
    },
    computed: {
        ...mapState(['menuBurger']),
    },
}
</script>
<style>
.nav-link {
    color: white !important;
}

.nav-link.active {
    color: #ED3434 !important;
}

.color-hover:hover {
    color: #ED3434 !important;
}

.color-hover-two:hover {
    color: white;
}

.personal-consultant {
    padding: 12px 18px !important;
    text-align: center;
}

.forward {
    width: 100%;
    padding: 6px 100px;
}

/* margin */
.mr-24 {
    margin-right: 24px;
}

.ml-24 {
    margin-right: 24px;
}


/* dropbtn menu */
.dropbtn {
    color: white;
    font-size: 16px;
    border: none;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    padding: 16px 24px;
    height: 50vh;
    min-width: 263px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-top: 10px;
}

.dropdown-content a {
    text-decoration: none;
    display: block;
}

.dropdown.active .dropdown-content {
    display: block;
}

.dropdown.active .dropbtn {
    /* background-color: #3e8e41; */
    color: ED3434;
}

/* accordion */

/* Acordeon styles */
.tab {
    position: relative;
    margin-bottom: 1px;
    width: 100%;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 16px;
    color: #232323;
    overflow: hidden;
}

.tab input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.tab label {
    position: relative;
    display: block;
    padding: 0 0 0 1em;
    background: #E5E5E5;
    font-weight: bold;
    line-height: 3;
    cursor: pointer;
}

.gray label {
    background: #E5E5E5;
}

.span {
    background: black;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.span i {
    color: white;
    font-size: 25px;
}

.tab-content {
    max-height: 0;
    overflow: hidden;
    -webkit-transition: max-height .35s;
    -o-transition: max-height .35s;
    transition: max-height .35s;
}

.gray .tab-content {
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 0px 0px 4px 4px;
}

.tab-content p {
    margin: 1em;
}

.vue-link {
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: #232323;
}

.vue-link.router-link-exact-active {
    color: #ED3434;
}

.vue-link:hover {
    color: #ED3434;
}

/* :checked */
.tab input:checked~.tab-content {
    max-height: 100vh;
}

/* Icon */
.tab label::after {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 3em;
    height: 3em;
    line-height: 3;
    text-align: center;
    -webkit-transition: all .35s;
    -o-transition: all .35s;
    transition: all .35s;
}


.tab input[type=radio]+label::after {
    content: ">";
}

.tab input[type=checkbox]:checked+label::after {
    transform: rotate(360deg);
}

.tab input[type=radio]:checked+label::after {
    transform: rotate(89deg);
}

@media (max-width: 1200px) {

    /* menu */
    .menu {
        opacity: 0;
        transform: translateX(-100px);
        position: absolute;
        z-index: 8;
        left: 0;
        right: 0;
        transition: 0.5s linear;

    }

    .menu.active {
        transform: translateX(0px);
        opacity: 1;
    }

    .personal-consultant {
        margin: 24px 0;
    }

    .forward {
        margin-bottom: 24px;
    }

    .dropdown-content {
        padding: 16px 24px;
        height: 100%;
        position: relative;
    }

    /* margin */
    .mr-24 {
        margin-right: 0px;
    }

}

@media (max-width: 991px) {}

@media (max-width: 768px) {}
</style>