<template>   
  <Swiper
    :slidesPerView="2"
    :spaceBetween="20"
    navigation
    :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"  
    :breakpoints="{
      '768': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '992': {
        slidesPerView: 2.5,
        spaceBetween: 25,
      },
      '1200': {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    }"
    :modules="modules"
    class="py-5 hoverSwiper"
    >
      <SwiperSlide>
        <div class="card bg-white rounded-4 py-20 px-8 px-lg-12 border-0 align-items-center h-100 shadow" >
          <img src="../assets/images/comment01.jpg" alt="大頭照" class="rounded-circle mb-6" style="width:72px ;">
          <p class="fs-5 mb-6">吳Ｏ娜</p>
          <div class=" mb-4">
            <span v-for="i in 5" :key="i" class="text-primary"><span class="material-symbols-outlined">
              star
              </span>
            </span>
          </div>
          <p class="fw-semibold  h-100 mb-6">葉黃素蠻小顆的很好吞，之前買其他品牌的很大顆不好吞，吃一陣子，發現蠻有效果的。</p>
          <div>
            <p class="text-center mb-6">葉黃素</p>
            <span>2022/11/22</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card bg-white rounded-4 py-20 px-8 px-lg-12 border-0 align-items-center h-100 shadow" >
          <img src="../assets/images/comment02.jpg" alt="大頭照" class="rounded-circle mb-6" style="width:72px ;">
          <p class="fs-5 mb-6">沈Ｏ民</p>
          <div class=" mb-4">
            <span v-for="i in 4" :key="i" class="text-primary"><span class="material-symbols-outlined">
                star
                </span>
            </span>
            <span class="material-symbols-outlined text-light">
                star</span>
          </div>
          <p class="fw-semibold  h-100 mb-6">最近因掉髮問題，所以買鋅來補充營養，食用後，還不錯。</p>
          <div>
            <p class="text-center mb-6">鋅</p>
            <span>2022/11/24</span>
          </div>
        </div>    
      </SwiperSlide>
      <SwiperSlide>
        <div class="card bg-white rounded-4 py-20 px-8 px-lg-12 border-0 align-items-center h-100 shadow" >
          <img src="../assets/images/comment03.jpg" alt="大頭照" class="rounded-circle mb-6" style="width:72px ;">
          <p class="fs-5 mb-6">吳Ｏ哲</p>
          <div class=" mb-4">
            <span v-for="i in 5" :key="i" class="text-primary"><span class="material-symbols-outlined">
                star
                </span>
            </span>
          </div>
          <p class="fw-semibold  h-100 mb-6">已經回購第二次，現在眼睛比較不會乾澀。</p>
          <div>
            <p class="text-center mb-6">葉黃素</p>
            <span>2022/11/24</span>
          </div>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
        <div class="card bg-white rounded-4 py-20 px-8 px-lg-12 border-0 align-items-center h-100 shadow" >
          <img src="../assets/images/comment04.jpg" alt="大頭照" class="rounded-circle mb-6" style="width:72px ;">
          <p class="fs-5 mb-6">林Ｏ筠</p>
          <div class=" mb-4">
            <span v-for="i in 5" :key="i" class="text-primary"><span class="material-symbols-outlined">
                star
                </span>
            </span>
          </div>
            <p class="fw-semibold  h-100 mb-6">藥丸大小剛好，吃了一陣子，沒有胃不舒服或拉肚子問題。</p>
            <div>
              <p class="text-center mb-6">蔓越莓</p>
              <span>2022/11/24</span>
            </div>
        </div>   
      </SwiperSlide>
      <SwiperSlide>
        <div class="card bg-white rounded-4 py-20 px-8 px-lg-12 border-0 align-items-center h-100 shadow" >
          <img src="../assets/images/comment05.jpg" alt="大頭照" class="rounded-circle mb-6" style="width:72px ;">
          <p class="fs-5 mb-6">Ama Lin</p>
          <div class=" mb-4">
            <span v-for="i in 5" :key="i" class="text-primary"><span class="material-symbols-outlined">
                star
                </span>
            </span>
          </div>
          <p class="fw-semibold  h-100 mb-6">三餐幾乎都吃外食，也經常加班，隨著年齡逐漸增長，沒有年輕時的體力，一顆B群可以補充平時缺失的養份。</p>
          <div>
            <p class="text-center mb-6">維他命B群</p>
            <span>2023/01/12</span>
          </div>
        </div>   
      </SwiperSlide>
      <SwiperSlide>
        <div class="card bg-white rounded-4 py-20 px-8 px-lg-12 border-0 align-items-center h-100 shadow" >
          <img src="../assets/images/comment06.jpg" alt="大頭照" class="rounded-circle mb-6" style="width:72px;">
          <p class="fs-5 mb-6">劉Ｏ宣</p>
          <div class="mb-4">
            <span v-for="i in 5" :key="i" class="text-primary"><span class="material-symbols-outlined">
                star
                </span>
            </span>
          </div>
          <p class="fw-semibold  h-100 mb-6">常常覺得沒精神，經期後更加嚴重，會定期買鐵吃補充營養。</p>
          <div>
            <p class="text-center mb-6">鐵</p>
            <span>2023/03/07</span>
          </div> 
        </div>   
      </SwiperSlide>   
  </Swiper>    
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation,Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
export default{
    data(){
        return{
          modules: [ Navigation,Autoplay],
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        }
    },
    components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<style>
  .swiper-button-next,.swiper-button-prev{
      display: none;
      color: #46afa2 ;

  }
  .hoverSwiper:hover .swiper-button-next{
      display: block;
  }
  .hoverSwiper:hover .swiper-button-prev{
      display: block;
  }
</style>