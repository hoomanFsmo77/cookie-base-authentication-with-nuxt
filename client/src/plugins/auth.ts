import {Login_Response} from "~/composables/useTypes";

export default defineNuxtPlugin(async ()=>{
    const {public:{endpoints}}=useRuntimeConfig()
    const headers:any=useRequestHeaders(['cookie'])
    const userData=useState<Login_Response['user']|null>('userInfo',()=>null)
    try {
        const data:Login_Response=await $fetch(endpoints.me,{
            credentials:'include',
            headers:{
                ...headers,
                'Accept':'application/json',
                'Referer':'http://localhost:3000',
            }
        })
        userData.value=data.user
    }catch (err){
        userData.value=null
    }


})