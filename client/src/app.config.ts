
export default defineAppConfig({
    endpoints:{
        register:'/api/auth/register',
        login:'/api/auth/login',
        logout:'/api/auth/logout',
        me:'/api/auth/me',
        posts:'/api/posts'
    }
})