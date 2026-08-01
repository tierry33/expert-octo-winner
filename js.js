const botoes = document.querySelectorAll(".botao");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Você será redirecionado para a loja.");
    });
});

document.querySelector(".whatsapp").addEventListener("click", function () {
    console.log("Botão do WhatsApp clicado!");
});