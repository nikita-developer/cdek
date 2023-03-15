export const useAuth = (token) => {
    const isAuth = ref(token)
    return isAuth.value
}
