import { defineStore } from "pinia";
import {computed, ref} from "vue";
import axios from "axios";
import {useLoadStore} from "./load.js"

export const useProductsStore = defineStore('products', () => {
    const loadingStore = useLoadStore();
    const products = ref([]); // список всех продуктов
    const searchTerm = ref("");

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

    async function fetchProducts () {
        try {
            loadingStore.startLoad();
            const response = await axios.get('https://fakestoreapi.com/products');
            products.value = response.data;
            loadingStore.stopLoad();
        } catch (error) {
            console.error('Error fetching products:', error);
            loadingStore.stopLoad();
        }
    }
    return { products, fetchProducts, filteredItems, searchTerm, onSearch}
})