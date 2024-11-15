export default (label, type, name, placeholder, maxlength) => {
    const InputContainer = document.createElement('div')
    InputContainer.classList.add('form-control')

    const labelElement = document.createElement('label')
    labelElement.innerText = label

    const inputElement = document.createElement('input')
    inputElement.type = type
    inputElement.placeholder = placeholder
    inputElement.name = name
    if (maxlength) inputElement.setAttribute("maxlength", maxlength)
    inputElement.classList.add('input-element')

    inputElement.oninput = () => {
        inputElement.value = inputElement.value.toUpperCase()
    }

    InputContainer.appendChild(labelElement)
    InputContainer.appendChild(inputElement)

    return InputContainer
}
