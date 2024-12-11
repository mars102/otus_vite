import { defineStore } from "pinia";
import {ref} from "vue";
import axios from "axios";
import {useLoadStore} from "./load.js"

export const useProductStore = defineStore('product', () => {
    const loadingStore = useLoadStore();


    const product = ref(null) // данные по открытому продукту




    async function fetchProduct (id) {
        try {
            loadingStore.startLoad();
            const response = await axios.get('https://fakestoreapi.com/products/'+id);
            product.value = response.data;
            loadingStore.stopLoad();
        } catch (error) {
            console.error('Error fetching products:', error);
            loadingStore.stopLoad();
        }
    };
    return { product, fetchProduct }
})