<template>
  <div class="AllVideos bg-gray-white">
    <div class="container">
      <div class="d-flex justify-content-end">
        <div class="containers-crad">
          <h1 class="color-back font-size-35 font-weight-300 text-center py-19">Усі відео</h1>
          <div class="w-full h-px bg-gray-two-white mb-9"></div>
          <div class="mb-25 d-flex justify-content-end">
            <div>
              <select name="" id="">
                <option value="">News</option>
              </select>
            </div>
            <div class="icon nav-icon-1 ">
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
            </div>
            <div class="icon nav-icon-2">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="card-block">
            <cardContent v-for="content in paginatedContent" :key="content.id" :content="content" />
          </div>

          <div class="block-showMore d-flex justify-content-center ">
            <button class="d-flex align-items-center" @click="showMore()">
              <img src="../../assets/img/Group.png" alt="">
              <h5 class="ml-11 color-black font-size-12 font-weight-300  line-height-150">Показати ще...</h5>
            </button>
          </div>

          <div class="block-pages d-flex justify-content-center">
            <button @click="page = page - 1" v-if="page > 1">
              <i class="page page-prev bg-white fa-solid fa-chevron-left"></i>
            </button>
            <button class="pages" :class="{ 'pagesActive': isActive === page }" @click="page = pageNumm"
              v-for="pageNumm in allPages" :key='pageNumm'>{{ pageNumm }}</button>
            <button @click="page = page + 1" v-if="hasNextPage">
              <i class="page page-next bg-white fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import cardContent from '@/components/cardContent.vue';
import ContextDataServices from '@/api/services/ContextDataServices';
export default {
  name: 'AllVideosView',
  components: {
    cardContent,
  },
  data() {
    return {
      contents: [],
      page: 1,
      numPage: 3,
      isActive: null
    }
  },
  methods: {
    getContent() {
      ContextDataServices.getData().then((response) => {
        this.contents = response.data;
        console.log(response.data)
      })
    },
    showMore() {
      this.numPage += 3;
    }
  },
  computed: {
    tooManyTickersAdded() {
      return this.tickers.length > 4;
    },
    startIndex() {
      return (this.page - 1) * this.numPage;
    },
    endIndex() {
      return this.page * this.numPage;
    },
    paginatedContent() {
      return this.contents.slice(this.startIndex, this.endIndex);
    },
    hasNextPage() {
      return this.contents.length > this.endIndex;
    },
    allPages() {
      return this.contents.length / this.numPage;
    }
  },
  watch: {
    page(newValue) {
      this.isActive = newValue;
      console.log(newValue)
      // this.loadUsers(page)
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

.containers-crad {
  max-width: 848px;
  width: 100%;
}

.card-block {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 69px;
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


/* show more */
.block-showMore {
  margin-bottom: 29px;
}

/* margin */
.ml-11 {
  margin-left: 11px;
}

/* pages */
.block-pages {
  margin-bottom: 100px;
}

.page {
  padding: 11px 14px;
  font-size: 15px;
  border: 1px solid #C4C4C4;

}

.page-prev {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pages {
  padding: 11px 14px;
  font-size: 10px;
  border: 1px solid #C4C4C4;
}

.pagesActive {
  color: #ED3434;
}

.page-next {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
