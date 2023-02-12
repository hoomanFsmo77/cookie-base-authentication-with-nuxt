import {Login_Response} from "~/composables/useTypes";
import {useToast} from "vue-toastification";

export const useLogout=()=>{
    const {endpoints}=useAppConfig()
    const userData=useState<Login_Response['user']|null>('userInfo')
    const toast=useToast()

    const logoutHandler = async () => {
        const headers:any=useRequestHeaders(['cookie'])
        try {
            const data:Login_Response['user']=await $fetch(endpoints.logout,{
                method:'POST',headers
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