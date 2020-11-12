const qs = function (element){
    return document.querySelector(element);
}


window.addEventListener('load',function(){
    console.log('JS vinculado correctamente...');


    let formRegister = qs('form#productAdd');

    let inputNombre = qs('#nombre');
    let inputCategoria = qs('#categoria');
    let inputPrecio = qs('#precio')
    let inputMarca = qs('#marca');
    let inputDescripcion = qs('#descripcion');
    let inputAvatar = qs('#imagen');



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

    inputCategoria.addEventListener('blur',function(){
        switch (true) {
            case this.value == 0:
                errorCategoria.innerHTML = "El campo categoria es obligatorio"
                this.classList.add('is-invalid')
                break;
           
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorCategoria.innerHTML = ""
                break;
        }
    })

    inputPrecio.addEventListener('blur',function(){
        switch (true) {
            case this.value == 0:
                errorPrecio.innerHTML = "El campo precio es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=2:
                errorPrecio.innerHTML = "Tenés que poner al menos tres digitos"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPrecio.innerHTML = ""
                break;
        }
    })

    inputMarca.addEventListener('blur',function(){
        switch (true) {
            case this.value == 0:
                errorMarca.innerHTML = "El campo marca es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=2:
                errorMarca.innerHTML = "Tenés que poner al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorMarca.innerHTML = ""
                break;
        }
    })

    inputDescripcion.addEventListener('blur',function(){
        switch (true) {
            case this.value == 0:
                errorDescripcion.innerHTML = "El campo descripcion es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=2:
                errorDescripcion.innerHTML = "Tenés que poner al menos un dato"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorDescripcion.innerHTML = ""
                break;
        }
    })

    inputAvatar.addEventListener('change',function(e){

        console.log(!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/))

        if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)){
            errorImagen.innerHTML = "file inválido"
            this.classList.add('is-invalid')
        }else{

            let reader = new FileReader();

            reader.readAsDataURL(e.target.files[0]);

            reader.onload = function(){
                    vistaPrevia.src = reader.result;
                    inputAvatar.classList.remove('is-invalid')
                    inputAvatar.classList.add('is-valid');
                    errorImagen.innerHTML = ""
            }  
        }  

    })

})
    