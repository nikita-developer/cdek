export const errorsForm = data => {
    const errorsMessages = {}
    data.forEach(elem => errorsMessages[elem.param] = elem.msg)
    return errorsMessages
}