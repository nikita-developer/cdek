export default defineNuxtRouteMiddleware(async (to, from) => {
    await useRefresh()
    let auth = isAuth().value

    if(!auth && to.path !== '/registration' && to.path !== '/login') return navigateTo('/login')
    if(auth && to.path === '/registration' || auth && to.path === '/login') return navigateTo('/')
})
