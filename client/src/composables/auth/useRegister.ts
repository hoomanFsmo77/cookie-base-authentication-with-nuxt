import {Register_Information} from "~/composables/useTypes";
import {Register_Response} from "~/composables/useTypes";

import { useToast } from "vue-toastification";
export const useRegister=()=>{
    const fetchFlag=useState<boolean>('registerFlag',()=>false)
    const toast = useToast();
   const {public:{endpoints,cookieName}}=useRuntimeConfig()
    const errors=ref<string[]>([])
    const userData=useState<Register_Response['user']|null>('userInfo',()=>null)
    const userInformation=reactive<Register_Information>({
        name:null,
        email:null,
        password:null,
        c_password:null
    })



    const registerHandler = async () => {
        fetchFlag.value=true
        try {
            await $fetch(endpoints.csrf,{
                credentials:'include'
            })
            const xsrf=useCookie(cookieName)
            const data:Register_Response=await $fetch(endpoints.register,{
                method:'POST',
                body:userInformation,
                credentials:'include',
                headers:{
                    'Accept':'application/json',
                    'X-XSRF-TOKEN':xsrf.value as string
                }
            })
            toast.success('You registered!')
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
        registerHandler,userInformation,errors,fetchFlag
    }
}