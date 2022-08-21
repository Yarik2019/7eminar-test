<template>
    <div class="card card-style " v-if="content">
        <div class="block-img-date">
            <img :src="content.covers.main" class="card-img" alt="">
            <div class="date">10 червня 2022 р.</div>
        </div>
        <div class="card-body card_body">
            <h5 class="card_title">{{ content.title }}</h5>
            <div class="d-flex justify-content-center align-items-center">
                <h4 class="review-stat">5.0</h4>
                <div class="small-ratings pl-6 pr-4">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <h5 class="all-review">(231) {{ content.popular }}</h5>
            </div>
            <div class="block-btn d-flex  justify-content-between align-items-center">
                <button class="btns btn-white font-weight-500 font-size-14px d-flex align-items-center"
                    :class="content.options.sale ? 'btn-red' : ''">
                    <div>Дивитися</div> <i class="fa-solid fa-angle-right arrow"></i>
                </button>
                <div class="haerts">
                    <i class="fa fa-heart" :class="content.options.popular ? 'fa-solid' : 'fa-regular'"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'cardContent',
    props: ['content']
}
</script>
<style>
.card-style {
    width: 257px;
    margin-bottom: 30px;
}

.block-img-date {
    position: relative;
}

.card-img {
    position: relative;
}

.date {
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    color: #FF0000;
    width: 160px;
    padding: 5px 0;
    background: #FFFFFF;
    border-radius: 5px;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;

    display: flex;
    justify-content: center;
}

.card_body {
    padding: 20px !important;
}

.card_title {
    font-weight: 300;
    font-size: 16px;
    line-height: 120%;
    height: 7vh;
    color: #000000;
    margin-bottom: 18px;
}

/* stars */

.ratings i {
    color: #cecece;
    font-size: 32px;
}

.rating-color {
    color: #FF9A01 !important;
}

.small-ratings i {
    color: #cecece;
}

.review-stat {
    font-weight: 300;
    font-size: 26px;
    line-height: 150%;
    color: #FF0000;
}

/* padding */

.pl-6 {
    padding-left: 6px;
}

.pr-4 {
    padding-right: 4px;
}

/*  */

.all-review {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: #262D4A;
}

/* btn */
.block-btn {
    margin-top: 15px;
}

.btns {
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    color: #232323;
}

.btn-red {
    border: 0px;
    background: #ED3434;
    color: #FFFFFF;
}

.btns>div {
    padding: 0 30px;
}

.arrow {
    font-size: 12px;
    color: white;
    background: #ED3434;
    border: 1px solid #ED3434;
    border-radius: 5px;
    padding: 12px 15px;
    overflow: hidden;
}

/* heart */

.haerts {}

.haerts i {
    font-size: 25px;
}

.haerts i:nth-child(1) {
    color: red;
}

.haerts i:nth-child(2) {
    color: red;
}

.haerts i:nth-child(2) {
    border-radius: red;
}
</style>