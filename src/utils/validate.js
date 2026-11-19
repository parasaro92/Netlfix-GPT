export const checkValidData = (name, email, password, requireName = true) => {
    const isFullNameValid = !requireName || /^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(name)
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isFullNameValid) return "Full Name is not valid"
    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"

    return null
}
