<template>
    <div class="card_list bg-white" v-if="content">
        <div class="card_list_img">
            <img :src="content.covers.main" alt="">
        </div>
        <div class="card_body_list">
            <div class="d-flex justify-content-between">
                <div class="card_date_list">
                    <p class="color-red font-size-12 font-weight line-height-150">13 червня 2022 р.</p>
                </div>
                <div class="haerts">
                    <i class="fa fa-heart" :class="content.options.popular ? 'fa-solid' : 'fa-regular'"></i>
                </div>
            </div>
            <div class="card_body_list_block">
                <div class="card_body_list_text">
                    <h5 class="card_list_title">Online-відповіді на запитання
                        з Тетяною Мойсеєнко</h5>

                    <div class="d-flex align-items-center rating">
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
                </div>
                <div class="block-btn d-flex  justify-content-between align-items-center">
                    <button class="btns btn-white font-weight-500 font-size-14px d-flex align-items-center"
                        :class="content.options.sale ? 'btn-red' : ''">
                        <div>Дивитися</div> <i class="fa-solid fa-angle-right arrow"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardContentList',
    props: ['content']
}
</script>
<style>
@import url('../assets/css/rating.css');
@import url('../assets/css/btn_heart.css');

.card_list {
    width: 100%;
    margin-bottom: 24px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    display: flex;
}

.card_list_img {
    max-width: 173px;
    width: 100%;
    height: 162px;
}

.card_list_img img {
    width: 100%;
    height: 100%;
}

/* card_body_list */
.card_body_list {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 36px;
    padding-right: 16px;
    width: 100%;
}


.card_body_list_block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.card_body_list_text {
    max-width: 277px;
    width: 100%;
}

.card_list_title {
    font-weight: 400;
    font-size: 15px;
    line-height: 120%;
    /* or 18px */
    color: #000000;
    margin-bottom: 22px;
}

@media (max-width: 768px) {

    .card_list {
        max-width: 290px;
        text-align: center !important;
        /* padding: 24px; */
    }

    .card_list_img {
        display: none;
    }

    .card_body_list {
        padding: 24px;
    }

    .card_date_list {
        width: 100%;
        text-align: center !important;
    }

    .card_body_list_block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card_body_list_text {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>