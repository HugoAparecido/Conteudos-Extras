const btn_gravar = document.querySelector("#btn_gravar");
const btn_cancelar = document.querySelector("#btn_cancelar");
const f_nome = document.querySelector("#f_nome");
const f_celular = document.querySelector("#f_celular");
const f_email = document.querySelector("#f_email");
const f_dtnasc = document.querySelector("#f_dtnasc");
btn_gravar.addEventListener("click", (evt) => { console.log(f_nome.value); })
const endpoint = "http://127.0.0.1:1880/contatos";
fetch(endpoint).then(res => res.json()).then(res => {
    console.log(res);
})