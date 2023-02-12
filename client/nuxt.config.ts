
export default defineNuxtConfig({
    runtimeConfig:{
      endpoints:{
          register:process.env.REGISTER_URL,
          login:process.env.LOGIN_URL,
          logout:process.env.LOGOUT_URL,
          me:process.env.ME_URL,
          posts:process.env.POSTS_URL
      },
      cookieName:process.env.COOKIE_NAME

    },
    build:{
        transpile:['vue-toastification']
    },
    css:['~/assets/style/App.scss'],
    app:{
        rootId:'v-app',
        rootTag:'main',
        head:{
            title:'my website',
            meta: [
                { name: 'viewport', content: 'width=device-width ,initial-scale=1.0' },
                { name: 'description', content: 'welcome to My project' },
                { name: 'keyword', content: 'HTML,CSS,Js developer' },
                { "http-equiv": 'X-UA-Compatible', content: 'ie=edge' },
            ],
            bodyAttrs:{}
        }
    },
    srcDir: './src',
    modules: [
        '@pinia/nuxt','@nuxt/image-edge'
    ],
})
