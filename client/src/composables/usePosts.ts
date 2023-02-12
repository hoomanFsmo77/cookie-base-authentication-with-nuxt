import {IPosts} from "~/composables/useTypes";

export const usePosts= ()=>{
    const {endpoints}=useAppConfig()
    const posts=useState<IPosts[]|null>('posts',()=>[])
    const fetchFlag=useState<boolean>('postFlag',()=>false)
    onMounted(async ()=>{
        try {
            const headers:any=useRequestHeaders()
            const data=await $fetch<IPosts[]>(endpoints.posts,{headers})
            posts.value=data
            console.log(posts.value)
            fetchFlag.value=true
        }catch (err) {
            fetchFlag.value=false
        }
    })


    return{
        posts,fetchFlag
    }
}