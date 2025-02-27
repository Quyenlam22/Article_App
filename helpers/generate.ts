export const generateRandomString = (length: number) => {
    const character = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz0123456789"
    console.log(character.length)
    let res = ""
    for (let i = 0; i < length; i++) {
        res += character.charAt(Math.floor(Math.random() * character.length))
    }
    return res
}

export const generateRandomNumber = (length: number) => {
    const character = "0123456789"
    console.log(character.length)
    let res = ""
    for (let i = 0; i < length; i++) {
        res += character.charAt(Math.floor(Math.random() * character.length))
    }
    return res
}