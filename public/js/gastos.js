window.onload = () => {
    //exA()
    //exB()
    exC()
}

const exA = () => {
    let confirma = confirm("Quiere iniciar el proceso?");
    if(!confirma){
		alert("Gracias por haber venido");
		location.href ="https://www.netflix.com/ar/"
    }
}

const exB = () => {
    let confirma = confirm("Quiere iniciar el proceso?");
    if(!confirma){
		alert("Gracias por haber venido");
		location.href ="https://www.netflix.com/ar/"
    } else {
        cantIntegrantes = prompt("Cuántos integrantes tiene tu familia?");
        if( isNaN(cantIntegrantes)){
            alert("Debe ingresar un valor numérico");
            prompt("Cuántos integrantes tiene tu familia?");
        } else if (cantIntegrantes < 3) {
            alert("Para continuar la cantidad de integrantes debe ser de almenos 3 personas");
            prompt("Cuántos integrantes tiene tu familia?");
        } 
        alert("Continuemos con el proceso")       
    }
}

const exC = () => {
    let confirma = confirm("Quiere iniciar el proceso?");
    if(!confirma){
		alert("Gracias por haber venido");
		location.href ="https://www.netflix.com/ar/"
    } else {
        cantIntegrantes = prompt("Cuántos integrantes tiene tu familia?");
        if( isNaN(cantIntegrantes)){
            alert("Debe ingresar un valor numérico");
            prompt("Cuántos integrantes tiene tu familia?");
        } else if (cantIntegrantes < 3) {
            alert("Para continuar la cantidad de integrantes debe ser de almenos 3 personas");
            prompt("Cuántos integrantes tiene tu familia?");
        } 
        let familiaGastos = [];
        for(let i=0; i < cantIntegrantes; i++){
        let nombre = prompt("Ingrese nombre");
        if (nombre.trim() == "") {
            alert("Debe ingresar un nombre");
            prompt("Ingrese nombre");
        };

        let gasto = prompt("Ingrese un gasto diario");
        if (isNaN(gasto) || (gasto.trim() == "")) {
            alert("Este campo es obligatorio, debe ingresar un valor numérico");
            prompt("Ingrese un gasto diario");
        };

        let gastoIndividual = {
            nombre : nombre,
            gastoDiario : gasto
        }
        familiaGastos.push(gastoIndividual)
        }
        console.log(familiaGastos)
    } 
}