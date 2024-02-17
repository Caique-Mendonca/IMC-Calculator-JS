var botaoCalcular = document.getElementById("botao-calcular")
botaoCalcular.addEventListener('click', clicar)

function clicar(){
    var altura = Number(document.getElementById("altura").value) / 100;
    var peso = Number(document.getElementById("peso").value);
    var resultado = document.getElementById("resultado")
    var resultadoIMC = document.getElementById('resultado-imc')
    var imc = peso / (altura**2)
    imc = imc.toFixed(2)

    var inputAltura = document.getElementById("altura");
    var inputPeso = document.getElementById("peso");
    
    if(altura == 0 || peso == 0){
        if(altura == 0 && peso == 0){
            inputPeso.style.borderColor = "red"
            inputAltura.style.borderColor = "red"
            resultado.innerText = "Por favor preencha todos os campos!"
        }
        else if(altura == 0){
            inputAltura.style.borderColor = "red"
            inputPeso.style.borderColor = "#636363"
        }
        else if(peso == 0){
            inputPeso.style.borderColor = "red"
            inputAltura.style.borderColor = "#636363"

        }
    }
    else if(altura < 0 || peso < 0){
        inputPeso.style.borderColor = "red"
        inputAltura.style.borderColor = "red"
        resultado.innerText = "Preencha os campos com números positivos"
    }
    else{
        inputAltura.style.borderColor = "#636363"
        inputPeso.style.borderColor = "#636363"
        if(imc<16){
            resultado.innerText = "Você está muito gravemente abaixo do peso"
        }
        else if(imc>=16 && imc<=16.99){
            resultado.innerText = "Você está gravemente abaixo do peso"
        }
        else if(imc>=17 && imc<=18.49){
            resultado.innerText = "Você está abaixo do peso"
        }
        else if(imc>=18.50 && imc<=24.99){
            resultado.innerText = "Você está no peso ideal"
        }
        else if(imc>=25 && imc<=29.99){
            resultado.innerText = "Você está em sobrepeso"
        }
        else if(imc>=30 && imc<=34.99){
            resultado.innerText = "Você está com obesidade grau I"
        }
        else if(imc>=35 && imc<=39.99){
            resultado.innerText = "Você está com obesidade grau II"
        }
        else if(imc>=40){
            resultado.innerText = "Você está com obesidade grau III, Cuide-se!"
        }
        resultadoIMC.innerHTML = `Seu IMC é <strong>${imc}</strong>`
    }
}


