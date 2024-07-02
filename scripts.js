
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliquei() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
   
}
function sairformulario(){
    form.style.transform = "translatex(0)"
     form.style.left = "-225px"   
    mascara.style.visibility = "hidden"

}

