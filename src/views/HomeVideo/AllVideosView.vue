<template>
  <div class="AllVideos bg-gray-white" :class="menuBurger ? '' : 'active'">
    <div class="container">
      <div class="d-flex justify-content-end">
        <div class="containers-card">
          <h1 class="color-back font-size-35 font-weight-300 title-header py-19">Усі відео</h1>
          <div class="w-full h-px bg-gray-two-white mb-9"></div>
          <div class="mb-25 d-flex justify-content-end">
            <div>
              <select name="" id="" v-model='selectedType'>
                <option value="1">new Date</option>
                <option value="2">old date</option>
              </select>
            </div>

            <div class="icon nav-icon-1 " @click="ClickCardBlock()">
              <span :class="{ 'active': cardsBlocks.cardBlock }"></span>
              <span :class="{ 'active': cardsBlocks.cardBlock }"></span>
              <span :class="{ 'active': cardsBlocks.cardBlock }"></span>
              <span :class="{ 'active': cardsBlocks.cardBlock }"></span>
              <span :class="{ 'active': cardsBlocks.cardBlock }"></span>
              <span :class="{ 'active': cardsBlocks.cardBlock }"></span>
              <span :class="{ 'active': cardsBlocks.cardBlock }"></span>
              <span :class="{ 'active': cardsBlocks.cardBlock }"></span>
              <span :class="{ 'active': cardsBlocks.cardBlock }"></span>
            </div>

            <div class="icon nav-icon-2" @click="ClickCardList()">
              <span :class="{ 'active': cardsBlocks.cardList }"></span>
              <span :class="{ 'active': cardsBlocks.cardList }"></span>
              <span :class="{ 'active': cardsBlocks.cardList }"></span>
            </div>
          </div>

          <div class="card-block" v-if="cardsBlocks.cardBlock">
            <cardContentBlock v-for="content in paginatedContent" :key="content.id" :content="content" />
          </div>
          <div class="card-list" v-if="cardsBlocks.cardList">
            <cardContentList v-for="content in paginatedContent" :key="content.id" :content="content" />
          </div>

          <div class="block-showMore d-flex justify-content-center " v-if="hasNextPage">
            <button class="d-flex align-items-center" @click="showMore()">
              <img src="../../assets/img/Group.png" alt="">
              <h5 class="ml-11 color-black font-size-12 font-weight-300  line-height-150">Показати ще...</h5>
            </button>
          </div>

          <paginate :page-count="allPages" :click-handler="clickCallback" :prev-text="'<'" :next-text="'>'"
            :container-class="'d-flex justify-content-center pages'">
          </paginate>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import cardContentBlock from '@/components/cardContentBlock.vue';
import cardContentList from '@/components/cardContentList.vue';
import Paginate from "vuejs-paginate-next";
export default {
  name: 'AllVideosView',
  components: {
    cardContentBlock,
    cardContentList,
    Paginate
  },
  data() {
    return {
      page: 1,
      numPage: 3,
      selectedType: '',
      cardsBlocks: {
        cardBlock: true,
        cardList: false
      }
    }
  },
  methods: {
    ...mapActions(['getContent']),
    ClickCardBlock() {
      this.cardsBlocks.cardBlock = true;
      this.cardsBlocks.cardList = false;
    },
    ClickCardList() {
      this.cardsBlocks.cardBlock = false;
      this.cardsBlocks.cardList = true;
    },
    clickCallback(pageNum) {
      this.page = pageNum;
    },
    showMore() {
      this.numPage += 3;
    },
  },
  computed: {
    ...mapState(['menuBurger']),
    ...mapGetters(['allContent']),

    startIndex() {
      return (this.page - 1) * this.numPage;
    },
    endIndex() {
      return this.page * this.numPage;
    },
    paginatedContent() {
      return this.allContent.slice(this.startIndex, this.endIndex);
    },
    hasNextPage() {
      return this.allContent.length > this.endIndex;
    },
    allPages() {
      return this.allContent.length / this.numPage;
    }
  },
  created() {
    this.getContent();
  }
}
</script>
<style>
.AllVideos {
  height: 100vh;
  height: 100%;
}

.containers-card {
  max-width: 831px !important;
  width: 100%;
}

.title-header {
  text-align: center;
}

.card-block {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  margin-bottom: 50px;
}


/* margin */
.mb-9 {
  margin-bottom: 9px;
}

.mb-25 {
  margin-bottom: 25px;
}

/* nav-icon-1 */
.nav-icon-1 {
  width: 20px;
  height: 20px;
  position: relative;
  transition: .1s;
  margin: 2px 10px;
  cursor: pointer;
  display: inline-block;
}

.nav-icon-1 span {
  width: 4px;
  height: 4px;
  background-color: #C4C4C4;
  display: block;
  position: absolute;

}

.nav-icon-1:hover span {
  transform: scale(1);
  transition: 350ms cubic-bezier(.8, .5, .2, 1.4);
}

.nav-icon-1 span:nth-child(1) {
  left: 0;
  top: 0;
}

.nav-icon-1 span:nth-child(2) {
  left: 8px;
  top: 0;
}

.nav-icon-1 span:nth-child(3) {
  right: 0;
  top: 0;
}

.nav-icon-1 span:nth-child(4) {
  left: 0;
  top: 8px;
}

.nav-icon-1 span:nth-child(5) {
  position: absolute;
  left: 8px;
  top: 8px;
}

.nav-icon-1 span:nth-child(6) {
  right: 0px;
  top: 8px;
}

.nav-icon-1 span:nth-child(7) {
  left: 0px;
  bottom: 0px;
}

.nav-icon-1 span:nth-child(8) {
  position: absolute;
  left: 8px;
  bottom: 0px;
}

.nav-icon-1 span:nth-child(9) {
  right: 0px;
  bottom: 0px;
}

.nav-icon-1 span.active {
  background: #ED3434;
}

/* nav-icon-2 */
.nav-icon-2 {
  width: 20px;
  height: 20px;
  margin: 2px 0px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}

.nav-icon-2 span {
  background-color: #C4C4C4;
  position: absolute;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
}

.nav-icon-2 span:nth-child(1) {
  width: 100%;
  height: 4px;
  display: block;
  top: 0px;
  left: 0px;
}

.nav-icon-2 span:nth-child(2) {
  width: 100%;
  height: 4px;
  display: block;
  top: 8px;
  left: 0px;
}

.nav-icon-2 span:nth-child(3) {
  width: 100%;
  height: 4px;
  display: block;
  bottom: 0px;
  left: 0px;
}

.nav-icon-2 span.active {
  background: #ED3434;
}

/* card-list */
.card-list {
  margin-bottom: 69px
}

/* show more */
.block-showMore {
  margin-bottom: 29px;
}

/* margin */
.ml-11 {
  margin-left: 11px;
}

/* pages */
.pages {
  list-style: none;
  margin-bottom: 100px;
  padding-left: 0 !important;
}


.page-link {
  background: #eeeaea !important;
  color: #000000 !important;
}

.page-link:hover {
  color: #ED3434 !important;
  background-color: #FFFFFF !important;
  border-color: transparent !important;
}

.page-item.active .page-link {
  background-color: #FFFFFF !important;
  color: #ED3434 !important;
  border-color: transparent !important;
}

.page-item .disabled {
  background-color: #FFFFFF !important;
}

.page-link:focus {
  z-index: 3;
  color: #ED3434 !important;
  background-color: #FFFFFF !important;
  outline: none !important;
  box-shadow: none !important;
}


@media (max-width: 1200px) {
  .AllVideos.active {
    position: relative;
    z-index: 50;
  }
}

@media (max-width: 991px) {
  .card-block {
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .card-block {
    justify-content: center;
  }

  .card-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 576px) {
  .title-header {
    text-align: start;
  }

  .card-block {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
