import {Login_Response} from "~/composables/useTypes";

export default defineNuxtRouteMiddleware(()=>{
    const userData=useState<Login_Response['user']|null>('userInfo',()=>null)
    if(userData.value){
        return navigateTo({name:'index'})
    }
})