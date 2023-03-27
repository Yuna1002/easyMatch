<template>
    <div class="bg-tertiary-100">
        <div class="container  bg-tertiary-100">
            <nav aria-label="breadcrumb" class="bg-tertiary-100 pt-3">
            <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">確認付款</li>
            </ol>
            </nav>
            <div class="row justify-content-center pt-12 pb-40">
                <div class="col-10 col-md-8">
                    <div class="bg-card-bg p-6">
                        <h2 class="h4">訂單資訊</h2>
                        <form @submit.prevent="payOrder(order.id)" >
                            <table class="table align-middle ">
                            <tbody>
                                <tr>
                                <th class="p-md-3 border-0">訂單編號</th>
                                
                                <td class="p-md-3 border-0">{{ order.id }} </td>
                                </tr>
        
                                <tr>
                                <th class="p-md-3 border-0">訂單成立日期</th>
                                <td class="p-md-3 border-0">{{ $filters.date(order.create_at) }}</td>
                                </tr>
        
                                <tr>
                                <th class="p-md-3 border-0">訂單金額</th>
                                <td class="p-md-3 border-0">NT$ {{ $filters.toThousands(order.totalIncludeGroup) }}</td>
                                </tr>
                                <tr>
                                <th class="p-md-3 border-0">姓名</th>
                                <td class="p-md-3 border-0">{{ order.user?.name }}</td>
                                </tr>
                                <tr>
                                <th class="p-md-3 border-0">手機</th>
                                <td class="p-md-3 border-0">{{ order.user?.tel }}</td>
                                </tr>
                               
                                <tr>
                                <th class="p-md-3 border-0">信箱</th>
                                <td class="p-md-3 border-0">{{ order.user?.email }}</td>
                                </tr>
                                
                                <tr>
                                <th class="p-md-3 border-0">外送地址</th>
                                <td class="p-md-3 border-0">{{ order.user?.address }}</td>
                                </tr>
                                <tr>
                                <th class="p-md-3 border-0">訂單備註</th>
                                <td class="p-md-3 border-0">{{ order.message ? order.message : '無' }}</td>
                                </tr>
                                <tr>
                                <th scope="row" class="p-md-3 border-0" width="150" >付款狀態</th>
                                <td class="p-md-3 border-0 ">
                                    <span class="text-danger " v-if="!order.is_paid">尚未付款</span>
                                    <span class="text-primary-200 " v-else>已付款</span>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <button type="submit" class="btn btn-primary-200 w-100 text-white py-3">確認付款</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default{
    data(){
        return{
            order:{},
            fullPage: true
        }
    },
    methods:{
       getOrder(){
        const loader = this.$loading.show()
        const { orderId } = this.$route.params;
        this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${orderId}`)
        .then((res)=>{
            //console.log('訂單資料',res.data.order)
            this.order=res.data.order
            //抓localStorage的值
            const savedOption = localStorage.getItem('totalIncludeGroup')
            if (savedOption) {
                this.order.totalIncludeGroup = parseInt(savedOption)
            }
            loader.hide()
        })
        
       },
       payOrder(orderId){
        this.$http
          .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${orderId}`)
          .then((res) => {
            if (res.data.success) {
              
                Swal.fire({ 
                    icon: 'success',
                    toast: true,
                    position: 'top',
                    title: '付款成功', 
                    timer: 1500, 
                    showConfirmButton: false,
                })
                this.getOrder();
            }
          })
       }

    },
    mounted() {        
        this.getOrder();
    },
}
</script>