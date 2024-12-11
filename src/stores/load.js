import { defineStore } from "pinia";
import {ref} from "vue";
export const useLoadStore = defineStore('load', () => {
    const loading = ref(false);
    function startLoad () {
        loading.value = true;
    };
    function stopLoad(){
        loading.value = false;
    }
    return { loading, startLoad, stopLoad }
})