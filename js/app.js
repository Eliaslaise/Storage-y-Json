console.log("Inicio de Javascript")
btnCargar.addEventListener("click", ()=> {
    servicios.push(inputServicio.value)
    localStorage.setItem("servicios", JSON.stringify(servicios))
    console.log("Se agregó un servicio nuevo.")
    btnCancelar.click()
    inputServicio.focus()
})

const recuperarArrays = ()=> {
    if (localStorage.getItem("servicios")) {
        let serv = JSON.parse(localStorage.getItem("servicios"))
            for (elemento of serv) {
                servicios.push(elemento)
            }
    }
}
recuperarArrays()

btnCancelar.addEventListener("click", ()=> {
    inputServicio.value = ""
    inputImporte.value = ""
})

btnVer.addEventListener("click", ()=> {
    location.href = "servicios.html"
})