<template>
    <div class="plr-29">
        <div class="card card-style" v-if="content">
            <div class="block-img-date">
                <img :src="content.covers.main" class="card-img" alt="">
                <div class="date">13 червня 2022 р</div>
            </div>
            <div class="card-body card_body">
                <h5 class="card_title">{{ content.title }}</h5>
                <div class="ratings d-flex justify-content-center align-items-center">
                    <h4 class="review-stat">5.0</h4>
                    <div class="small-ratings pl-6 pr-4">
                        <i class="fa fa-star rating-color"></i>
                        <i class="fa fa-star rating-color"></i>
                        <i class="fa fa-star rating-color"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h5 class="all-review">(231)</h5>
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
    </div>
</template>
<script>

export default {
    name: 'cardContent',
    props: ['content'],
    methods: {
        localizeDate(date) {
            console.log(date)
            const [yyyy, mm, dd] = date.split('-');
            console.log(date)
            return new Date(`${yyyy}/${dd}/${mm}`)
        },
    }
}
</script>
<style>
@import url('../assets/css/rating.css');
@import url('../assets/css/btn_heart.css');

.plr-29 {
    padding: 0 15px;
}

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
    z-index: 10;

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
</style>