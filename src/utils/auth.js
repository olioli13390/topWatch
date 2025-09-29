import { Users } from "./userDatabase"

export const login = (mail, password) => {
    const user = Users.find(u => u.mail === mail && u.password === password)
    if (user) {
        sessionStorage.setItem("logged", "true")
        return true
    }
    return false
}

export const authenticated = () => {
    return sessionStorage.getItem('logged') === "true"
}
