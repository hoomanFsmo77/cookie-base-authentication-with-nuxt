import {IPosts} from "~/composables/useTypes";

export const usePosts= ()=>{
    const {public:{endpoints,cookieName}}=useRuntimeConfig()
    const posts=useState<IPosts[]|null>('posts',()=>[])
    const fetchFlag=useState<boolean>('postFlag',()=>false)
    onMounted(async ()=>{
        try {
            const xsrf=useCookie(cookieName)
            const data=await $fetch<IPosts[]>(endpoints.posts,{
                credentials:'include',
                headers:{
                    'Accept':'application/json',
                    'X-XSRF-TOKEN':xsrf.value as string
                }
            })
            posts.value=data
            fetchFlag.value=true
        }catch (err) {
            fetchFlag.value=false
        }
    })


    return{
        posts,fetchFlag
    }
}