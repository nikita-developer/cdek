export const isAuth = () => useState(() => false)
export const useUser = () => useState(() => {})

// конфиг env
export const useConfig = () => useState(() => useRuntimeConfig())

export const useRefresh = async () => {
    const config = useConfig().value.public
    const settings = {
        method: 'GET',
        credentials: "include",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    try {
        const fetchResponse = await fetch(`${config.API_URL}/refresh`, settings)
        const data = await fetchResponse.json();
        if(fetchResponse.status === 200) {
            isAuth().value = true
            localStorage.setItem('token', data.accessToken)
            useUser().value = data.user
        }
        if(fetchResponse.status === 401) {
            isAuth().value = false
            navigateTo('/login')
            localStorage.removeItem('token')
        }
    } catch (e) {
        return e
    }
}
