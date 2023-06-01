export default defineNuxtRouteMiddleware(async (to, from) => {
    await useRefresh()
    let auth = isAuth().value

    if (!auth) {
        if (to.path === '/profile' || to.path === '/users')
            return navigateTo('/login')
    } else {
        if (to.path === '/registration' || (auth && to.path === '/login'))
            return navigateTo('/')
    }
})
