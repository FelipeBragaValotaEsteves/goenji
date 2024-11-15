export default (label, name, options) => {
    const SelectContainer = document.createElement('div')
    SelectContainer.classList.add('form-control')

    const labelElement = document.createElement('label')
    labelElement.innerText = label

    const selectElement = document.createElement('select')
    selectElement.name = name
    console.log(options.length)
    console.log(options)

    if (options.length > 0) {
        options.forEach(option => {

            const optionElement = document.createElement('option')
            optionElement.value = option.id
            optionElement.textContent = option.nome
            selectElement.appendChild(optionElement)
        })
    }

    SelectContainer.append(
        labelElement,
        selectElement
    )

    return SelectContainer
}