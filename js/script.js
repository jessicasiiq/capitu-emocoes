const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let data = {
        name, 
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem("lead", convertData)

    let content= document.getElementById("content")
    let loading = "<p>Carregando...</p>"
    let ready = "<p>E-mail cadastrado com sucesso! Cheque sua caixa de entrada e aproveite o cupom ♡</p>"
    content.innerHTML = loading
    setTimeout(() => {
        content.innerHTML = ready
    }, 1000)
})















