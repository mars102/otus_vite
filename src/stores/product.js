import { defineStore } from "pinia";
import {computed, reactive, ref} from "vue";
import axios from "axios";

export const useProductStore = defineStore('product', () => {

    const products = ref([]); // { id: count }
    const loading = ref(false);
    const searchTerm = ref("")



    // function addBasket(item){
    //     basket.value.push(item)
    // }
    //
    // function removeBascket(index) {
    //     basket.value.splice(index.index,index.how)
    // }
    // const inCart = computed(() => (itemId) => {
    //     const countInCart = cart[itemId]
    //     return countInCart ?? 0
    // })

    function onSearch(term){
        searchTerm.value = term;
    };

    const filteredItems = computed(() => {  // поиск по документам
        if (!searchTerm.value) return products.value;
        return products.value.filter(item =>
            item.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
    });

    async function fetchProducts (){
        try {

            loading.value = true;
            const response = await axios.get('https://fakestoreapi.com/products');
            products.value = response.data;

            loading.value = false;

        } catch (error) {
            console.error('Error fetching products:', error);
            loading.value = false;
        }
    }
    return { products, fetchProducts, filteredItems, searchTerm, onSearch }
})