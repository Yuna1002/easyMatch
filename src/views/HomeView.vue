<template>
  <SuccessToast />
  <!-- banner -->
  <section
    class="banner d-flex justify-content-center align-items-center position-relative overflow-hidden"
  >
    <div class="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center">
      <img
        class="img-fluid me-md-19 d-none d-md-block animate__animated animate__shakeY animate__infinite my-element"
        src="../assets/images/Left_pill.svg"
        alt="藥丸圖片"
      />
      <div class="d-flex flex-column align-items-center pt-md-20">
        <h1
          class="text-white text-center fs-lg-lg fs-md-md fs-14 mb-4"
          style="font-family: Josefin Sans"
          data-aos="fade-down"
        >
          EASY<br />MATCH
        </h1>
        <p
          class="text-white fs-lg-7 fs-5 text-nowrap mb-10 mb-md-16"
          style="font-family: Noto Sans TC"
          data-aos="fade-right"
        >
          \ 一小包 您要的健康 一次搞定 /
        </p>
        <RouterLink
          to="/products"
          class="btn btn-white text-primary-200 rounded-pill py-6 px-8 fw-bold btn-hover d-flex align-items-center"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          ><span class="material-symbols-outlined me-2 fw-bold" v-if="hover === true">
            arrow_forward </span
          >立即前往</RouterLink
        >
      </div>
      <img
        class="img-fluid ms-md-19 d-none d-md-block animate__animated animate__shakeY animate__infinite my-element"
        src="../assets/images/RIght_pill.svg"
        alt="藥丸圖片"
      />
      <!-- 手機版的藥丸 -->
      <img class="d-md-none mobile-element" src="../assets/images/RIght_pill.svg" alt="藥丸圖片" />
    </div>
  </section>
  <!-- easy match的優點 -->
  <section class="bg-tertiary-100">
    <div class="container pt-30 pb-40">
      <h2 class="text-center fs-md-8 fs-6 fw-bold mb-6" data-aos="fade-right">
        <span style="font-family: Josefin Sans">Easy match</span> 的優點
      </h2>

      <p class="text-center fs-lg-6 fs-16 mb-20">
        保健食品瓶瓶罐罐一大堆？分裝藥盒嫌麻煩？哪個時段吃有疑問？
      </p>
      <div class="row justify-content-center">
        <div class="col-10 col-xl-3 col-md-6 mb-15">
          <div class="bg-card-bg rounded-4 mb-6" data-aos="fade-up">
            <img class="img-fluid" src="../assets/images/section2_1.png" alt="自由配示意圖" />
          </div>
          <h3 class="mb-6 fw-bold text-center fs-5 fs-lg-6">自由配</h3>
          <p class="fs-lg-5 fs-4 text-center">多種選擇 任你配</p>
        </div>
        <div class="col-10 col-xl-3 col-md-6 mb-15">
          <div class="bg-card-bg rounded-4 mb-6" data-aos="fade-up">
            <img class="img-fluid" src="../assets/images/section2_2.png" alt="小包裝示意圖" />
          </div>
          <h3 class="mb-6 fw-bold text-center fs-5 fs-lg-6">小包裝</h3>
          <p class="fs-lg-5 fs-4 text-center text-nowrap">30天份一次一包 攜帶方便</p>
        </div>
        <div class="col-10 col-xl-3 col-md-6 mb-15">
          <div class="bg-card-bg rounded-4 mb-6" data-aos="fade-up">
            <img class="img-fluid" src="../assets/images/section2_3.png" alt="客製化示意圖" />
          </div>
          <h3 class="mb-6 fw-bold text-center fs-5 fs-lg-6">客製化</h3>
          <p class="fs-lg-5 fs-4 text-center">依照早晚分開包裝</p>
        </div>
        <div class="col-10 col-xl-3 col-md-6">
          <div class="bg-card-bg rounded-4 mb-6" data-aos="fade-up">
            <img class="img-fluid" src="../assets/images/section2_4.png" alt="問答示意圖" />
          </div>
          <h3 class="mb-6 fw-bold text-center fs-5 fs-lg-6">專業問答</h3>
          <p class="fs-lg-5 fs-4 text-center">提供專業諮詢服務</p>
        </div>
      </div>
    </div>
  </section>
  <!-- 30天份 EASY MATCH -->
  <section class="bg-3">
    <div class="container pt-30 pb-40">
      <h2 class="text-center fs-md-8 fs-6 fw-bold mb-20" data-aos="fade-right">
        30天份 EASY MATCH
      </h2>
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="row">
            <!-- 步驟一 -->
            <div
              class="col-md-5 d-md-block"
              :class="{
                'd-none': move === 'right',
                animate__animated: move === 'left',
                animate__slideInLeft: move === 'left'
              }"
            >
              <div class="bg-primary-300 rounded-4 mb-6 position-relative" data-aos="fade-right">
                <img class="img-fluid" src="../assets/images/section3_1.png" alt="步驟示意圖" />
                <!-- 箭頭圖示 -->
                <button
                  type="button"
                  class="border-0 bg-transparent arrow-right d-md-none"
                  @click="move = 'right'"
                >
                  <div
                    class="bg-black rounded-circle d-flex justify-content-center align-items-center shadow"
                    style="width: 40px; height: 40px"
                  >
                    <span class="material-symbols-outlined fs-8 fw-bold text-primary-400"
                      >arrow_forward</span
                    >
                  </div>
                </button>
              </div>
              <div class="d-flex justify-content-center">
                <span class="material-symbols-outlined me-2">counter_1</span>
                <h3 class="mb-6 fw-bold fs-5 fs-lg-6">步驟一 自由配</h3>
              </div>
              <p class="fs-lg-5 fs-4 text-center">依您的需求 挑選單顆保健食品</p>
            </div>
            <div class="col-md-2 d-none d-md-block">
              <div class="d-flex justify-content-center align-items-center h-100">
                <div
                  class="bg-black rounded-circle d-flex justify-content-center align-items-center"
                  style="width: 40px; height: 40px"
                >
                  <span class="material-symbols-outlined fs-8 fw-bold text-primary-400"
                    >arrow_forward</span
                  >
                </div>
              </div>
            </div>
            <!-- 步驟二 -->
            <div
              class="col-md-5 d-md-block"
              :class="{
                'd-none': move === 'left',
                animate__animated: move === 'right',
                animate__slideInRight: move === 'right'
              }"
            >
              <div class="bg-primary rounded-4 mb-6 position-relative" data-aos="fade-left">
                <img class="img-fluid" src="../assets/images/section3_2.png" alt="步驟示意圖" />
                <!-- 箭頭圖示 -->
                <button
                  type="button"
                  class="border-0 bg-transparent arrow-left d-md-none"
                  @click="move = 'left'"
                >
                  <div
                    class="bg-black rounded-circle d-flex justify-content-center align-items-center shadow"
                    style="width: 40px; height: 40px"
                  >
                    <span class="material-symbols-outlined fs-8 fw-bold text-primary-400"
                      >arrow_back</span
                    >
                  </div>
                </button>
              </div>
              <div class="d-flex justify-content-center">
                <span class="material-symbols-outlined me-2">counter_2</span>
                <h3 class="mb-6 fw-bold fs-5 fs-lg-6">步驟二 客製化</h3>
              </div>
              <p class="fs-lg-5 fs-4 text-center">依您挑選的產品 進行30天份 一天一包分裝</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 熱門產品 swiper -->
  <section class="bg-tertiary-100">
    <div class="container pt-30 pb-40">
      <h2 class="text-center fs-md-8 fs-6 fw-bold mb-5" data-aos="fade-right">熱門產品</h2>
      <div class="row justify-content-center">
        <div class="col-10 col-sm-12">
          <HotProductsSwiper />
        </div>
      </div>
    </div>
  </section>
  <!-- 線上諮詢 -->
  <section class="bg-tertiary">
    <div class="container pt-20">
      <div class="row">
        <div class="col-md-6">
          <div class="ms-4 d-flex flex-column align-items-start">
            <h2 class="fs-lg-8 fs-md-7 mb-6 fw-bold" data-aos="fade-right">專業線上諮詢</h2>
            <p class="fs-lg-6 mb-10" data-aos="fade-up">
              線上真人專家諮詢，為您的客製化需求，提供良好的建議
            </p>
            <RouterLink
              class="btn btn-white text-primary-200 rounded-pill py-6 px-8 fw-bold mb-md-25 btn-hover d-flex align-items-center"
              @mouseenter="hover = true"
              @mouseleave="hover = false"
              to="qa"
            >
              <span class="material-symbols-outlined me-2 fw-bold" v-if="hover === true">
                arrow_forward </span
              >前往諮詢
            </RouterLink>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-md-end">
          <img class="img-fluid" src="../assets/images/ask.png" alt="藥丸圖示" />
        </div>
      </div>
    </div>
  </section>
  <!-- 好評回饋 swiper-->
  <section class="bg-tertiary-100 pt-30 pb-40">
    <div class="container">
      <h2 class="text-center fs-md-8 fs-6 fw-bold mb-20 d-lg-none">好評回饋</h2>
      <div class="row flex-nowrap align-items-center">
        <div class="col-lg-3 d-none d-lg-block">
          <div class="card bg-primary border-0 rounded-4 d-none d-lg-block py-30 px-6">
            <img
              src="../assets/images/commentIcon.svg"
              class="d-block card-img-top mb-11 mx-auto animate__animated animate__shakeX animate__delay-4s animate__repeat-3"
              alt="icon"
              style="width: 46px"
            />
            <h2 class="text-white text-center fs-lg-8 fs-6 fw-bold mb-4">好評回饋</h2>
            <p class="text-white text-center fs-lg-6 fs-4 mb-4">Comment</p>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row">
            <CommentSwiper />
          </div>
        </div>
      </div>
    </div>
  </section>
  <GotopBtn />
</template>

<script>
import { RouterLink } from 'vue-router'
import HotProductsSwiper from '../components/HotProductsSwiper.vue'
import CommentSwiper from '../components/CommentSwiper.vue'
import SuccessToast from '../components/SuccessToast.vue'
import GotopBtn from '../components/GotopBtn.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {
      hover: false,
      move: 'left'
    }
  },
  components: {
    RouterLink,
    HotProductsSwiper,
    CommentSwiper,
    SuccessToast,
    GotopBtn
  },

  mounted() {
    AOS.init({
      offset: 100,
      duration: 800,
      once: false
    })
  }
}
</script>
