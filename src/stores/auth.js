import { defineStore } from "pinia";
import {ref} from "vue";

export const useAuthStore = defineStore('auth', () => {
    const storedData = ref(0)

    function onLogin(login){
        storedData.value = login;
    }

    function initAuth () {
        const isAuthValue = Number(localStorage.getItem('isAuth'));
        storedData.value = (isAuthValue !== 1 && isAuthValue !== 0) ? 0 : isAuthValue;
    }
    return { storedData, onLogin, initAuth }
})