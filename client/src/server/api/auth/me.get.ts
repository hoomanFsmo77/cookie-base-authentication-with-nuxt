import {getCookie, setCookie} from "h3";
import {Login_Response} from "~/composables/useTypes";

export default defineEventHandler(async e=>{
    const {cookieName,endpoints}=useRuntimeConfig()
    const token=getCookie(e,cookieName)
    try {
        const data:Login_Response=await $fetch(endpoints.me,{
            headers:{
                'Accept':'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
        return data
    }catch (err:any) {
        if(err.statusCode===401){
            setCookie(e,cookieName,'',{
                path:'/',
                maxAge:new Date(0).getTime(),
                secure:true,
                httpOnly:true
            })
        }
        return err;
    }


})