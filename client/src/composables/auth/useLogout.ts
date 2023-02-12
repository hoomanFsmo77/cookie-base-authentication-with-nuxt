import {Login_Response} from "~/composables/useTypes";
import {useToast} from "vue-toastification";

export const useLogout=()=>{
    const {public:{cookieName,endpoints}}=useRuntimeConfig()
    const userData=useState<Login_Response['user']|null>('userInfo')
    const toast=useToast()

    const logoutHandler = async () => {
        try {
            const xsrf_token=useCookie(cookieName)
            const data:Login_Response['user']=await $fetch(endpoints.logout,{
                method:'POST',
                credentials:'include',
                headers:{
                    'Accept':'application/json',
                    'X-XSRF-TOKEN':xsrf_token.value as string
                }
            })
            userData.value=null
            toast.warning('You are logged out!')
            return navigateTo({name:'index'})
        }catch (err) {
            toast.error('Something went wrong! try again.')
        }

    }

    return{
        logoutHandler
    }
}