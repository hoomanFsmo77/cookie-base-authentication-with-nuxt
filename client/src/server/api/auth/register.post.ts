import {readBody, setCookie} from "h3";
import {Register_Response} from "~/composables/useTypes";

export default defineEventHandler(async e=>{
    const {endpoints,cookieName}=useRuntimeConfig()
    const body=await readBody(e)
    try {
        const data:Register_Response=await $fetch(endpoints.register,{
            method:'POST',
            body,
            headers:{
                'Accept':'application/json'
            }
        })
        setCookie(e,cookieName,data.token,{
            path:'/',
            maxAge:60*60*24*7,
            secure:true,
            httpOnly:true
        })
        return data.user
    }catch (err) {
        return err;
    }
})