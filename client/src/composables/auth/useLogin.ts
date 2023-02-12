import {Login_Information,Login_Response} from "~/composables/useTypes";
import { useToast } from "vue-toastification";
export const useLogin=()=>{
    const {endpoints}=useAppConfig()
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
            const data:Login_Response['user']=await $fetch(endpoints.login,{
                method:'POST',
                body:userInformation
            })
            toast.success('You are logged in!')
            errors.value=[]
            userData.value=data
            return navigateTo({name:'index'})
        }catch (err:any) {
            errors.value=Object.values(err.data.data).flat() as string[]
        }finally {
            fetchFlag.value=false
        }

    }



    return{
        loginHandler,userInformation,fetchFlag,errors
    }
}