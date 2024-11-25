import {createRouter, createWebHistory, useRouter} from "vue-router";

import ListProduct from '../page/ListProduct.vue'
import PageOrder from '../page/PageOrder.vue'
import PageProducts from '../page/PageProducts.vue'
import Login from '../page/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component:ListProduct
        },
        {
            path:'/basket',
            name:'basket',
            component:PageOrder
        },


        { path: '/product/:id', name:'product', component: PageProducts },
        { path: '/login', name:'login', component: Login },



    ]

})

router.beforeEach(async (to, from, next) => {
    const data = Number(localStorage.getItem('isAuth'))!=1&&Number(localStorage.getItem('isAuth'))!=0 ? 0:Number(localStorage.getItem('isAuth'));

    if (data==0 && to.name != 'login') {
        return next({name: "login"});
    } else {
        return next(true);
    }

})
export default router