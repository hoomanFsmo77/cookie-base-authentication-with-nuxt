import {Login_Information,Login_Response} from "~/composables/useTypes";
import { useToast } from "vue-toastification";
export const useLogin=()=>{
    const {public:{endpoints,cookieName}}=useRuntimeConfig()
    const toast = useToast();
    const userData=useState<Login_Response['user']|null>('userInfo',()=>null)
    const errors=ref<string[]>([])
    const fetchFlag=useState<boolean>('loginFlag',()=>false)
    const userInformation=reactive<Login_Information>({
        email:null,
        password:null
    })

    const loginHandler = async () => {
        fetchFlag.value=true
        try {
            await $fetch(endpoints.csrf,{
                credentials:'include'
            })
            const xsrf=useCookie(cookieName)
            const data:Login_Response=await $fetch(endpoints.login,{
                method:'POST',
                body:userInformation,
                credentials:'include',
                headers:{
                    'Accept':'application/json',
                    'X-XSRF-TOKEN':xsrf.value as string
                }
            })
            toast.success('You are logged in!')
            errors.value=[]
            userData.value=data.user
            return navigateTo({name:'index'})
        }catch (err:any) {
            errors.value=Object.values(err.data).flat() as string[]
        }finally {
            fetchFlag.value=false
        }

    }



    return{
        loginHandler,userInformation,fetchFlag,errors
    }
}