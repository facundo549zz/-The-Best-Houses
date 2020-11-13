
const qs = function (element){
    return document.querySelector(element);
}


window.addEventListener('load',function(){
    console.log('JS vinculado correctamente...');

    let formProfile = qs('form#profile');

    let elementos = formProfile.elements;

    let inputNombre = qs('#nombre');
    let inputApellido = qs('#apellido');
    let inputEmail = qs('#email');
    let inputImage = qs('#imagenImput')

    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    inputNombre.addEventListener('blur',function(){
        switch (true) {
            case this.value == 0:
                errorNombre.innerHTML = "El campo nombre es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=2:
                errorNombre.innerHTML = "Tenés que poner al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }
    })

    inputApellido.addEventListener('blur',function(){
        switch (true) {
            case this.value == 0:
                errorApellido.innerHTML = "El campo apellido es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=2:
                errorApellido.innerHTML = "Tenés que poner al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorApellido.innerHTML = ""
                break;
        }
    })

    inputEmail.addEventListener('blur',function(){

        switch (true) {
            case this.value == 0:
                errorEmail.innerHTML = "El campo email es obligatorio"
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value):
                errorEmail.innerHTML = "Debes escribir un email válido"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorEmail.innerHTML = ""
                break;
        }
    })

    inputImage.addEventListener('change',function(e){

        console.log(!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/))

        if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)){
            errorAvatar.innerHTML = "file inválido"
            this.classList.add('is-invalid')
        }else{

            let reader = new FileReader();

            reader.readAsDataURL(e.target.files[0]);

            reader.onload = function(){
                    avatar.src = reader.result;
                    inputImage.classList.remove('is-invalid')
                    inputImage.classList.add('is-valid');
                    errorAvatar.innerHTML = ""
            }  
        }  

    })

        formProfile.addEventListener('submit' , (e)=>{
            e.preventDefault()
             let error = false
        for (let index = 1; index < elementos.length-4; index++) {
            if(elementos[index].value == 0){
                elementos[index].classList.add('is-invalid');
               error = true;
            }
        }
        if(!error){
            formProfile.submit()
        }else{
            msgError.innerHTML = "Los campos señadados son obligatorios"
        }
        })
       
})