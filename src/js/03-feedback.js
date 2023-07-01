form.addEventListener('input', handlerInput)
const data = {}
function handlerInput(evt) {
    data[evt.target.name] = evt.target.value
}
