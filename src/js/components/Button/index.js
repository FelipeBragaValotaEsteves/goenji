export default (label, onClick, ...params) => {
    const ButtonContainer = document.createElement('div')
    ButtonContainer.classList.add('button-control')

    const buttonElement = document.createElement('button')
    buttonElement.innerText = label

    if (onClick) {
        buttonElement.onclick = (e) => {
            e.preventDefault()
            onClick(...params)
        }
    }

    ButtonContainer.append(buttonElement)

    return ButtonContainer
}
