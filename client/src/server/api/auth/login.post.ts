import {readBody, setCookie} from "h3";
import {Login_Response} from "~/composables/useTypes";

export default defineEventHandler(async e=> {
    const {endpoints,cookieName}=useRuntimeConfig()
    const body=await readBody(e)
    try {
        const data:Login_Response=await $fetch(endpoints.login,{
            method:'POST',
            body
        })
        setCookie(e,cookieName,data.token,{
            httpOnly:true,
            secure:true,maxAge:60*60*24*7,
            path:'/'
        })
        return  data.user
    }catch (err) {
        return err;
    }
})
