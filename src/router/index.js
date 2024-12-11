import {createRouter, createWebHistory, useRouter} from "vue-router";

import ListProduct from '../page/ListProduct.vue'
import PageOrder from '../page/PageOrder.vue'
import PageProduct from '../page/PageProduct.vue'
import Login from '../page/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component:ListProduct,
            meta: { requiresAuth: true },
        },
        {
            path:'/basket',
            name:'basket',
            component:PageOrder,
            meta: { requiresAuth: true },
        },


        { path: '/product/:id',
            name:'product',
            component: PageProduct,
            meta: { requiresAuth: true },
        },
        {   path: '/login',
            name:'login',
            component: Login,

        },



    ]

})

router.beforeEach(async (to, from, next) => {
    let getAuthValue = Number(localStorage.getItem('isAuth'));
    let data = (getAuthValue !== 1 && getAuthValue !== 0) ? 0 : getAuthValue;
    if (to.meta.requiresAuth && data != 1) {
        return next({name: "login"});
    } else {
        return next(true);
    }
})
export default router