import {Login_Response} from "~/composables/useTypes";

export default defineNuxtPlugin(async ()=>{
    const headers:any=useRequestHeaders(['cookie'])
    const userData=useState<Login_Response['user']|null>('userInfo',()=>null)
    const {endpoints}=useAppConfig()
    try {
        const data:Login_Response=await $fetch(endpoints.me,{headers})
        userData.value=data.user
    }catch (err){
        userData.value=null
    }


})