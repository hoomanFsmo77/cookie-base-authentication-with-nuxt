import Toast, { PluginOptions,POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin ((nuxtApp)=>{
    const options: PluginOptions = {
        position:'top-right' as POSITION,
        timeout:1500
    };
    nuxtApp.vueApp.use(Toast,options)
})