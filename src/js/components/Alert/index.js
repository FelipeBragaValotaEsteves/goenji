export default (message) => {
    const alerta = document.getElementById('alerta');
    const alertaMsg = document.getElementById('alerta-msg');
    alertaMsg.textContent = message;

    alerta.classList.add('show');

    setTimeout(() => {
        fecharAlerta();
    }, 5000);
}