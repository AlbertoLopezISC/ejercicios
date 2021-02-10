Ejercicios = {
    // funcion del ejercicio1
    ejercicio1(lista) {
        if(lista.length <= 0)
            return "cadena vacia"; // se regresa por is la cadena esta vacia

        //separa la cadena por espacios y regresa un array que contiene cada peso
        let lista_pesos = lista.split(' ');

        //array que almacenara la suma de los digito de cada peso
        let lista_suma_digitos_pesos = [];

        //array que contendra la lista de los pesos ordenada de la nueva forma
        let lista_nuevos_pesos = [];


        for (let i = 0; i < lista_pesos.length; i++){
            // se insertan la suma de los digitos de los pesos
            lista_suma_digitos_pesos.push(sumarDigitos(lista_pesos[i]));
        }

        // se ordena el array pero con la suma de los pesos
        lista_suma_digitos_pesos.sort(function(a, b){return a - b});

        // lo siguiente que haremos sera agregar el peso original a lista_nuevos_pesos en
        // el orden que nos dicta lista_suma_digitos_pesos (el cual ordenamos anteriormente)
        for(let i = 0; i < lista_suma_digitos_pesos.length; i++){
            for(let j = 0; j < lista_pesos.length; j++){
                // se compara la lista con la suma de los digitos con el nuevo orden con
                // la suma de los digitos de la lista de los pesos normales
                if(lista_suma_digitos_pesos[i] == sumarDigitos(lista_pesos[j])){
                    // si es igual se agrega al nuevo array, se elimina la posicion y se rompe 
                    // el ciclo para no agregarlo dos veces
                    lista_nuevos_pesos.push(lista_pesos[j]);
                    lista_pesos.splice(j,1);
                    break;
                }
            }
        }

        let cadena = "";
        // finalmente concatenamos las posiciones para crear una cadena;
        for (let i = 0; i < lista_nuevos_pesos.length; i++){
            cadena += lista_nuevos_pesos[i] + " ";
        }
        console.log(cadena);
        
        // retornamos la cadena con el nuevo orden.
        return cadena
    },
    // funcion del ejercicio2
    ejercicio2(n){
        let i = 1;
        if(n <= 0){
            return "-1"; // no permitimos que se ejecute nada si n = 0
        } 
        // array que contendra cada miembro de la secuencia
        let secuencia = ['1'];
        // cadena que nos ayudara a formar cada miembro de la secuencia
        let secuencia_aux = "";
        // cadena que contendra toda la secuencia
        let cadena_secuencia = "1";

        // entramos en el primer ciclo, aqui controlaremos el numero de miembros que se
        // agregaran a la secuencia
        while(i<n){
            // declaramos j que nos ayudara en los siguientes ciclos
            let j = 0;
            // este ciclo lo utilizaremos para "mirar" el numero de la cadena y contar cuantas
            // veces se repite ese numero
            do{
                let contador = 0; 
                // k sera el caracter comparado con el digito que estamos mirando, comenzamos k
                // en j para que no se compare desde el principio del miembro de la secuencia
                let k = j;

                // leemos el digito en el indice j
                let digito_leido = secuencia[i-1][j];
                // comenzamos con el tercer ciclo, este nos ayudara a contar cuantas veces esta 
                // el digito
                do{
                    if(secuencia[i-1][k] == digito_leido){
                        contador++; // si es igual el contador se incrementa
                    } 
                    if(k+1<secuencia[i-1].length){
                        if(secuencia[i-1][k+1] != digito_leido){
                            // si el digito que sigue es diferente, se rompe el ciclo3 y ya tenemos
                            // cuantas veces se repite
                            break;
                        }
                    }
                    k++;
                }while(k<secuencia[i-1].length);
                // como ya tenemos cuantas veces se repite el dijito en la posicion j simplemente
                // lo agregamos a la cadena del miembro nuevo
                secuencia_aux += contador.toString() + digito_leido.toString(); 
                // aumentamos 'contador'-veces j para que la siguiente vez no comience
                // desde el principio
                j+=contador;
                // este es utilizado por si siempre se repite 1 numero
                if(contador == secuencia[i-1].length){
                    break;   
                }
            }while(j<secuencia[i-1].length);
            // ya que tenemos la nueva secuencia del miembro i lo agregamos al array 
            // y de una vez podemos concatenarlo con la cadena_secuencia
            secuencia.push(secuencia_aux);
            cadena_secuencia += ", " +secuencia_aux;
            // limpiamos la secuencia_aux por si se utiliza de nuevo
            secuencia_aux = "";
            i++;
        }
        console.log(cadena_secuencia);
        // finalmente regresamos la cadena que contiene la nueva secuencia
        return cadena_secuencia;
    }
}

// funcion que nos ayuda a sumar los digitos.
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
