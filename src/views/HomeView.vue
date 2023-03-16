<template>
  <div class="banner d-flex justify-content-center align-items-center position-relative  overflow-hidden">    
    <div class="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center  ">
      <img class="img-fluid me-md-19 d-none d-md-block animate__animated animate__shakeY animate__infinite my-element" src="../assets/images/Left pill.svg" alt="">
      <div class="d-flex flex-column align-items-center" >
        <h1 class="text-white text-center fs-lg-lg fs-md-md fs-14 mb-4 " style="font-family:'Josefin Sans'">EASY<br>MATCH</h1>
        <p class="fs-lg-7 fs-5 text-white text-nowrap mb-16" style="font-family:'Noto Sans TC';">\  一小包 您要的健康 一次搞定  /</p>
        <RouterLink to="/products" class="btn btn-white text-primary-200 rounded-pill py-6 px-8 fw-semibold btn-hover d-flex align-items-center" @mouseenter="hover=true"  @mouseleave="hover=false"><span class="material-symbols-outlined me-2 fw-bold"  v-if="hover===true">
arrow_forward
</span>立即前往</RouterLink> 
      </div>
      <img class="img-fluid ms-md-19 d-none d-md-block animate__animated animate__shakeY animate__infinite my-element" src="../assets/images/RIght pill.svg" alt="">
      <!-- 手機版的藥丸 -->
      <img class=" position-absolute top-100 start-50 translate-middle  d-md-none animate__animated animate__shakeY animate__infinite my-element" src="../assets/images/RIght pill.svg" alt="">
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

  <section class="bg-3">
    <div class="container pt-30 pb-40">
      <h2 class="text-center fs-lg-9 fs-6 fw-bold mb-20">30天份 EASY MATCH</h2>
      <div class="row ">
        <div class="col-md-5">
          <div class="bg-primary-300 rounded-4 mb-6">
            <img class="img-fluid" src="../assets/images/工作區域 3@1.png" alt="">  
          </div>

        </div>
        <div class="col-md-2 d-flex justify-content-center align-items-center ">
          <div class="bg-black rounded-circle d-flex justify-content-center align-items-center " style="width:40px ; height:40px;">
            <span class="material-symbols-outlined fs-8 fw-bold text-primary-400">arrow_forward</span>
          </div>
        </div>
        <div class="col-md-5">
          <div class="bg-primary rounded-4 mb-6">
            <img class="img-fluid" src="../assets/images/工作區域 3@2.png" alt="">  
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 mb-15">
          <div class="d-flex justify-content-center">
            <span class="material-symbols-outlined me-2">counter_1</span>
            <h3 class="mb-6 fw-bold fs-5 fs-lg-6"> 步驟一 自由配</h3>
          </div>
          <p class="fs-lg-5 fs-4 text-center">依您的需求 挑選單顆保健食品</p>

        </div>
        <div class="col-md-2">

        </div>
        <div class="col-md-5">
          <div class="d-flex justify-content-center">
            <span class="material-symbols-outlined me-2">counter_2</span>
            <h3 class="mb-6 fw-bold fs-5 fs-lg-6">  步驟二 客製化</h3>
          </div>
          <p class="fs-lg-5 fs-4 text-center">依您挑選的產品 進行30天份 一天一包分裝</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-tertiary-100">
    <div class="container pt-30 pb-40">
      <h2 class="text-center fs-lg-9 fs-6 fw-bold mb-20">熱門產品</h2>
      <div class="row">
        <div class="col-lg-3 " >
          <div class="card bg-card-bg border-0 h-100 pb-5  rounded-4">
                <div
                  style="height: 180px; background-size: cover; background-position: center; background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/yuna1002/1677657392409.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nPpjgf9nGBXJ0NqTmW%2BRaWeXxKJmERwJe8Kll7g3C9AM7G0Qj59d%2FMtMddZKM%2BWgzSXFLlCQgEZTl7b2xrJKd7M2Jfq%2B4jLSQQGj%2Ft9eDkbt3ZTQyNBcg8k2bACz%2BDIAtP%2FzHOrzaYdOhVJll8auiGukC8iyQsaZjl4BhvGcYA3rRWZKixGdAvI9t9Sq%2Bu9I69Bdp1JTvMHciU1QXlzbCqHxJ4KMP5hKqlBje26EQ9KFrgsVfz9tM8uDABN%2B7ebM0N2uVK1nt3rbmdvz2lldu2LGF7nebw%2FxYlbhTkk8J%2BZ69ujAxUG0RRrVEIKgdF%2Bh9wlvfRCW1O1NZO%2F08uYMhw%3D%3D);"
                 
                  class="mb-2"
                ></div>
                <div class="card-body px-8 d-flex flex-column">
                  <div class="d-flex mb-4">
                    <h3 class="card-title h5 fw-bold mb-0">
                      維生素B群
                    </h3>
                    <div>
                      <span class="badge bg-primary rounded-pill fs-3 fw-normal ms-2">維生素</span>
                    </div>
                  </div>

                  <p class="card-text mb-4 h-100">
                    增強體力、穩定神經系統，內含B1、B2、B6、B12全方面助攻。
                  </p>

                  <div class="d-flex align-items-center justify-content-end mb-1">
                    <p class="fw-semibold text-primary-200">$7/顆</p>
                  </div>
                  <!-- <button
                    type="button"
                    class="btn btn-secondary text-white disabled"
                    v-if="cart.carts.some((item) => item.product_id === product.id)"
                  >
                    已加入
                  </button>
                  <button
                    type="button"
                    v-else
                    class="btn btn-primary-200 text-white"
                    
                    :disabled="loadingItem === product.id"
                  >
          
                    加入購物車
                  </button> -->
                </div>
              </div>
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


<footer class="bg-primary-200 py-15">
  <h4 class="text-center fs-5 text-white fw-semibold">EASY MATCH</h4>
  <p class="text-secondary text-center text-white">本網站僅供個人作品使用，不提供商業用途。</p>
</footer>
</template>

<script>
import { RouterLink } from 'vue-router'
export default{
  // props:['products'],
  data(){
    return{
      hover:false
    }
  },
  components:{
    RouterLink
  }
 
}
</script>
