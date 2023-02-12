import {getCookie} from "h3";

export default defineEventHandler(async e=> {
    const {endpoints,cookieName}=useRuntimeConfig()
    const token=getCookie(e,cookieName)
    try {
        const data=await $fetch(endpoints.posts,{
            headers:{
                'Accept':'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
        return data;
    }catch (err) {
        return err;
    }



})