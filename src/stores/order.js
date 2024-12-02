import { defineStore } from "pinia";
import {computed, reactive, ref} from "vue";

export const useOrderStore = defineStore('order', () => {

    const basket = ref([]) // { id: count }



    function addBasket(item){
        basket.value.push(item)
    }

    function removeBascket(index) {
        basket.value.splice(index.index,index.how)
    }
    return { basket, addBasket, removeBascket }
})