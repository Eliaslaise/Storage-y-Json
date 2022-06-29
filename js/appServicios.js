function recuperarServicios() {
    if (localStorage.getItem("servicios")) {
        let serv = JSON.parse(localStorage.getItem("servicios"))
        for (elemento of serv) {
            ul.innerHTML += `<li>${elemento}</li>`
        }
    }
}

recuperarServicios()