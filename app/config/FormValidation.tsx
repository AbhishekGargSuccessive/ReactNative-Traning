
export const ValidationUsername = (username: string) => {
    const usernameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/

    if (!usernameRegex.test(username)) {
        return true
    } else {
        return false
    }
}

export const ValidationEmail = (email: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        return true
    } else {
        return false
    }
}

export const ValidationPassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (!passwordRegex.test(password)) {
        return true
    } else {
        return false
    }
}

export const ValidationConfirmPassword = (password: string, confirmPassword: string) => {

    if (password == confirmPassword) {
        return true
    } else {
        return false
    }
}
