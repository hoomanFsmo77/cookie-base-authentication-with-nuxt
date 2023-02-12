import {getCookie, setCookie} from "h3";

export default defineEventHandler(async e=> {
    const {cookieName,endpoints}=useRuntimeConfig()
    const token=getCookie(e,cookieName)
    try {
        const data=await $fetch(endpoints.logout,{
            method:'POST',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Accept':'application/json'
            }
        })
        setCookie(e,cookieName,'',{
            path:'/',
            maxAge:new Date(0).getTime(),
            secure:true,
            httpOnly:true
        })
        return data
    }catch (err) {
        return err
    }
})