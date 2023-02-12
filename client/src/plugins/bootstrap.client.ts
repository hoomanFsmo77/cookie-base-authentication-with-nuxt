import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'

export default defineNuxtPlugin((nuxtApp)=>{
    ///// >>>>>> use $bootstrap anywhere you need create an instance from new bootstrap
    return nuxtApp.provide('bootstrap',bootstrap)
})