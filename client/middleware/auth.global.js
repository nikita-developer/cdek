import {useAuth} from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
    const isAuth = useAuth()
    console.log(isAuth)

    // if(isAuth && to.path !== '/login') {
    //     return navigateTo('/login')
    // }
})
