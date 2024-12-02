import { defineStore } from "pinia";
import {ref} from "vue";

export const useAuthStore = defineStore('auth', () => {
    const storedData = ref(0)

    function onLogin(login){
        storedData.value = login;
    }

    function initAuth () {
        storedData.value =   Number(localStorage.getItem('isAuth'))!=1&&Number(localStorage.getItem('isAuth'))!=0 ? 0:Number(localStorage.getItem('isAuth'));
    }
    return { storedData, onLogin, initAuth }
})