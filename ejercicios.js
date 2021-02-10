Ejercicios = {
    ejercicio1(lista) {
        if(lista.length <= 0)
            return "cadena vacia";
        let lista_pesos = lista.split(' ');

        let lista_suma_digitos_pesos = [];

        let lista_nuevos_pesos = [];


        for (let i = 0; i < lista_pesos.length; i++){
            lista_suma_digitos_pesos.push(sumarDigitos(lista_pesos[i]))
        }

        lista_suma_digitos_pesos.sort(function(a, b){return a - b});


        for(let i = 0; i < lista_suma_digitos_pesos.length; i++){
            for(let j = 0; j < lista_pesos.length; j++){
                if(lista_suma_digitos_pesos[i] == sumarDigitos(lista_pesos[j])){
                    lista_nuevos_pesos.push(lista_pesos[j]);
                    lista_pesos.splice(j,1);
                    break;
                }
            }
        }

        let cadena = "";
        for (let i = 0; i < lista_nuevos_pesos.length; i++){
            cadena += lista_nuevos_pesos[i] + " ";
        }
        console.log(cadena);

        return cadena
    },
    ejercicio2(n){
        let i = 1;
        if(n <= 0){
            return "-1";
        } 
        let secuencia = ['1'];
        let secuencia_aux = "";
        let cadena_secuencia = "1";
        while(i<n){
            let j = 0;
            do{
                let contador = 0;
                let k = j;

                let digito_leido = secuencia[i-1][j];
                do{
                    if(secuencia[i-1][k] == digito_leido){
                        contador++;
                    } 
                    if(k+1<secuencia[i-1].length){
                        if(secuencia[i-1][k+1] != digito_leido){
                            break;
                        }
                    }
                    k++;
                }while(k<secuencia[i-1].length);
                secuencia_aux += contador.toString() + digito_leido.toString(); 
                j+=contador;
                if(contador == secuencia[i-1].length){
                    break;   
                }
            }while(j<secuencia[i-1].length);
            secuencia.push(secuencia_aux);
            cadena_secuencia += ", " +secuencia_aux;
            secuencia_aux = "";
            i++;
        }
        console.log(cadena_secuencia);
        return cadena_secuencia;
    }
}


function sumarDigitos(digitos){
    let suma = 0;
    for(let i = 0; i < digitos.length; i++){
        if(!isNaN(digitos[i] - parseFloat(digitos[i]))){
            suma += parseInt(digitos[i]);
        }
    }
    return suma;
}

module.exports = Ejercicios;
