<template>
  <div class="banner d-flex justify-content-center align-items-center position-relative  overflow-hidden">    
    <div class="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center  ">
      <img class="img-fluid me-md-19 d-none d-md-block animate__animated animate__shakeY animate__infinite my-element " src="../assets/images/Left pill.svg" alt="">
      <div class="d-flex flex-column align-items-center" >
        <h1 class="text-white text-center fs-lg-lg fs-md-md fs-14 mb-4 " style="font-family:Josefin Sans">EASY<br>MATCH</h1>
        <p class="fs-lg-7 fs-5 text-white text-nowrap mb-10 mb-md-16" style="font-family:Noto Sans TC">\  一小包 您要的健康 一次搞定  /</p>
        <RouterLink to="/products" class="btn btn-white text-primary-200 rounded-pill py-6 px-8 fw-semibold btn-hover d-flex align-items-center" @mouseenter="hover=true"  @mouseleave="hover=false"><span class="material-symbols-outlined me-2 fw-bold"  v-if="hover===true">
arrow_forward
</span>立即前往</RouterLink> 
      </div>
      <img class="img-fluid ms-md-19 d-none d-md-block animate__animated animate__shakeY animate__infinite my-element" src="../assets/images/RIght pill.svg" alt="">
      <!-- 手機版的藥丸 -->
      <img class=" d-md-none mobile-element" src="../assets/images/RIght pill.svg" alt="">
    </div>
    
  </div>
  <section class="bg-tertiary-100">
    <div class="container pt-30 pb-40">
      <h2 class="text-center fs-lg-9 fs-6 fw-bold mb-6">選擇Easy match的優點</h2>
      <p class="text-center fs-lg-6 fs-16 mb-20">您是否保健食品瓶瓶罐罐一大堆？是否懶得再分裝藥盒？是否對於哪個時段吃有疑問？</p>
      <div class="row">
        <div class="col-xl-3 col-md-6 mb-15">
          <div class="bg-card-bg rounded-4 mb-6">
            <img class="img-fluid" src="../assets/images/工作區域 2@1.png" alt="">  
          </div>
          <h3 class="mb-6 fw-bold text-center fs-5 fs-lg-6">自由配</h3>
          <p class="fs-lg-5 fs-4 text-center"> 多種選擇 任你配</p>
        </div>
        <div class="col-xl-3 col-md-6 mb-15">
          <div class="bg-card-bg rounded-4 mb-6">
            <img class="img-fluid" src="../assets/images/工作區域 2@2.png" alt="">  
          </div>
          <h3 class="mb-6 fw-bold text-center fs-5 fs-lg-6">小包裝</h3>
          <p class="fs-lg-5 fs-4 text-center text-nowrap"> 30天份一次一包 攜帶方便</p>
        </div>
        <div class="col-xl-3 col-md-6 mb-15">
          <div class="bg-card-bg rounded-4 mb-6">
            <img class="img-fluid" src="../assets/images/工作區域 2@3.png" alt="">  
          </div>
          <h3 class="mb-6 fw-bold text-center fs-5 fs-lg-6">客製化</h3>
          <p class="fs-lg-5 fs-4 text-center"> 依照早晚分開包裝</p>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="bg-card-bg rounded-4 mb-6">
            <img class="img-fluid" src="../assets/images/工作區域 2@4.png" alt="">  
          </div>
          <h3 class="mb-6 fw-bold text-center fs-5 fs-lg-6">專業問答</h3>
          <p class="fs-lg-5 fs-4 text-center"> 提供專業諮詢服務</p>
        </div>
      </div>
    </div>
  
  </section>
<!-- 30天份 EASY MATCH -->
  <section class="bg-3">
    <div class="container pt-30 pb-40">
      <h2 class="text-center fs-lg-9 fs-6 fw-bold mb-20 ">30天份 EASY MATCH</h2>
      <div class="row  ">
        <!-- 步驟一 -->
        <div class="col-md-5 d-md-block" :class="{'d-none':move==='right','animate__animated':move==='left','animate__slideInLeft':move==='left'}" >
          <div class="bg-primary-300 rounded-4 mb-6 position-relative ">
            <img class="img-fluid" src="../assets/images/工作區域 3@1.png" alt=""> 
            <!-- 箭頭圖示 -->
            <button type="button" class="border-0 bg-transparent arrow-right d-md-none " @click="move='right'">
              <div class="bg-black rounded-circle d-flex justify-content-center align-items-center shadow " style="width:40px ; height:40px;">
              <span class="material-symbols-outlined fs-8 fw-bold text-primary-400">arrow_forward</span>
              </div>
            </button>
          </div>
          <div class="d-flex justify-content-center">
            <span class="material-symbols-outlined me-2">counter_1</span>
            <h3 class="mb-6 fw-bold fs-5 fs-lg-6"> 步驟一 自由配</h3>
          </div>
          <p class="fs-lg-5 fs-4 text-center">依您的需求 挑選單顆保健食品</p> 
          

        </div>
        <div class="col-md-2  d-none d-md-block">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="bg-black rounded-circle d-flex justify-content-center align-items-center " style="width:40px ; height:40px;">
            <span class="material-symbols-outlined fs-8 fw-bold text-primary-400">arrow_forward</span>
          </div>
          </div>    
        </div>
        <!-- 步驟二 -->
        <div class="col-md-5  d-md-block" :class="{'d-none':move==='left','animate__animated':move==='right','animate__slideInRight':move==='right'}" >

          <div class="bg-primary rounded-4 mb-6 position-relative">
            <img class="img-fluid" src="../assets/images/工作區域 3@2.png" alt="">
            <!-- 箭頭圖示 -->
            <button type="button" class="border-0 bg-transparent arrow-left d-md-none" @click="move='left'">
              <div class="bg-black rounded-circle d-flex justify-content-center align-items-center shadow " style="width:40px ; height:40px;">
              <span class="material-symbols-outlined fs-8 fw-bold text-primary-400">arrow_back</span>
              </div>
            </button>  
          </div>
          <div class="d-flex justify-content-center">
            <span class="material-symbols-outlined me-2">counter_2</span>
            <h3 class="mb-6 fw-bold fs-5 fs-lg-6">  步驟二 客製化</h3>
          </div>
          <p class="fs-lg-5 fs-4 text-center">依您挑選的產品 進行30天份 一天一包分裝</p>
        </div>
      </div>
    
    </div>
  </section>
<!-- 熱門產品 -->
  <section class="bg-tertiary-100">
    <div class="container pt-30 pb-40">
      <h2 class="text-center fs-lg-9 fs-6 fw-bold mb-20">熱門產品</h2>
      <div class="row flex-nowrap ">
        <div class="col-xl-3 col-md-4 col-sm-6  " v-for="product in hotProducts" :key="product.id" >
          <a href="" class="card bg-card-bg border-0 h-100 pb-5  rounded-3 position-relative text-dark" @click.prevent="handleClick($event, product.id)" @mouseenter="iconUp"  @mouseleave="iconDown"  >
            <img class="icon-position " src="../assets/images/Product.svg" alt="" >
                <div
                  style="height: 180px; background-size: cover; background-position: center;"
                  :style="{ backgroundImage: `url(${product.imageUrl})` }" 
                  class="mb-2 img-radius"
                ></div>
                <div class="card-body px-8 px-sm-5 d-flex flex-column">
                  <div class="d-flex mb-4">
                    <h3 class="card-title h5 fw-bold mb-0">
                      {{ product.title }}
                    </h3>
                  </div>
                  <p class="card-text mb-4 h-100">
                    {{ product.simple }}
                  </p>
                  <div class=" mb-4">
                    <p class="fw-semibold text-primary-200 text-center ">{{ `$${product.price} /顆` }}</p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-secondary text-white disabled rounded-pill py-3"
                    v-if="cart.carts.some((item) => item.product_id === product.id)"
                  >
                    已加入
                  </button>
                  <button
                    v-else
                    type="button" 
                    class="bg-primary border-0 text-white rounded-pill py-3 btn-hover"  
                  >
          
                    加入購物車
                  </button>
                </div>
              </a>
        </div> 
      </div>
    </div>

  </section>

  <section class="bg-tertiary">
    <div class="container pt-20">
      <div class="row">
        <div class="col-md-6">
          <h2 class="fs-lg-9 fs-md-7 mb-6">專業線上諮詢</h2>
          <p class="fs-lg-6 mb-10">線上真人專家諮詢，為您的客製化需求，提供良好的建議</p>
          <button type="button" class="btn btn-white text-primary-200 rounded-pill py-6 px-8 fs-lg-5 fw-semibold mb-md-25 btn-hover d-flex align-items-center" @mouseenter="hover=true"  @mouseleave="hover=false"><span class="material-symbols-outlined me-2 fw-bold"  v-if="hover===true">
arrow_forward
</span>前往諮詢</button>
        </div>
        <div class="col-md-6 d-flex align-items-md-end">
          <img class="img-fluid" src="../assets/images/線上諮詢.png" alt="">
        </div>
      </div>
    </div>
  </section>



</template>

<script>
import { RouterLink } from 'vue-router'
import {productsStore} from '../stores/productsStore'
import { mapState, mapActions } from 'pinia'
import { cartStore } from '../stores/cartStore'
export default{

  data(){
    return{
      hover:false,
      move:'left',
      cardHover:false
      
    }
  },
  components:{
    RouterLink
  },
  computed:{
    ...mapState(productsStore,['products']),
    ...mapState(cartStore, ['cart']),
    hotProducts(){
      return this.products.filter((product)=>product.category === '維生素'||product.category === '功能性補給')
    }
  },
  methods: {
    ...mapActions(productsStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart']),
    handleClick(e, id) {
      //console.log(e)
      if (e.target.nodeName === 'BUTTON') {
        this.addToCart(id)
      } else {
        this.$router.push(`/product/${id}`)
      }
    },
    iconUp(e){
      //console.log(e)
      e.currentTarget.querySelector('.icon-position').classList.add('icon-position-hover')
    },
    iconDown(e){
      e.currentTarget.querySelector('.icon-position').classList.remove('icon-position-hover')
    }
  },
  mounted(){
    this.getProducts()
  }
 
}
</script>
