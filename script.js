const conversor = document.querySelector('button')

conversor.onclick = () => {
    let numero = Number(document.querySelector('input').value)
    if (numero < 0 || numero>999999999 /*|| typeof(numero)!="number"*/) {
        document.querySelector('span').innerHTML = "Valor inválido!";
    } else {
        let text = conversorNumeroTexto(numero);
        text = text[0].toUpperCase() + text.slice(1).toLowerCase();
        document.querySelector('span').innerHTML = text;
    }
}

function conversorNumeroTexto(numero) {
    numero = parseInt(numero);

    let retorno = ""; //A variável que irá receber o tratamento para se transformar no número convertido em texto

    //Aqui se escolhe qual subfunção será convocada de acordo com o tamanho no número
    if (numero == 0) {
        retorno += "zero";
    }
    else if (numero > 0 && numero < 20) {
        unidade(numero);
    }
    else if (numero >= 20 && numero < 100) {
        dezena(numero);
    }
    else if (numero >= 100 && numero < 999) {
        centena(numero);
    }
    else if (numero >= 1000 && numero < 1000000) {
        milhar(numero);
    }
    else if (numero >= 1000000 && numero < 1000000000) {
        milhao(numero);
    }

    /*      A base de funcionamento do programa
    
        conversorNumeroTexto(numero);  // a função principal que ao ser invocada realiza a transformação do numero digitado (invocando as outras a depender do tamanho do número)
            No início da função principal, há um seletor que escolhe qual é a função invocada
        unidade(numeroUnidade);      // função que imprime a unidade do número + os números de 11 à 19
        dezena(numeroDezena);      // função que imprime as dezenas do número
        centena(numeroCentena);   // função que imprime as centenas do número
        milhar(numeroMilhar);    // função que imprime a casa do milhar do número
        milhao(numeroMilhao);   // função que imprime a casa do milhão do número  */

    function unidade(numeroUnidade) {
        switch (numeroUnidade) {
            case 1:
                retorno += "um ";
                break;
            case 2:
                retorno += "dois ";
                break;
            case 3:
                retorno += "três ";
                break;
            case 4:
                retorno += "quatro ";
                break;
            case 5:
                retorno += "cinco ";
                break;
            case 6:
                retorno += "seis ";
                break;
            case 7:
                retorno += "sete ";
                break;
            case 8:
                retorno += "oito ";
                break;
            case 9:
                retorno += "nove ";
                break;
            case 10:
                retorno += "dez ";
                break;
            case 11:
                retorno += "onze ";
                break;
            case 12:
                retorno += "doze ";
                break;
            case 13:
                retorno += "treze ";
                break;
            case 14:
                retorno += "catorze (quatorze) ";
                break;
            case 15:
                retorno += "quinze ";
                break;
            case 16:
                retorno += "dezesseis ";
                break;
            case 17:
                retorno += "dezessete ";
                break;
            case 18:
                retorno += "dezoito ";
                break;
            case 19:
                retorno += "dezenove ";
                break;
        }
    }

    function dezena(numeroDezena) {
        if (numeroDezena == 20) {
            retorno += "vinte ";
        }
        else if (numeroDezena > 20 && numeroDezena < 30) {
            retorno += "vinte e ";
        }
        else if (numeroDezena == 30) {
            retorno += "trinta ";
        }
        else if (numeroDezena > 30 && numeroDezena < 40) {
            retorno += "trinta e ";
        }
        else if (numeroDezena == 40) {
            retorno += "quarenta ";
        }
        else if (numeroDezena > 40 && numeroDezena < 50) {
            retorno += "quarenta e ";
        }
        else if (numeroDezena == 50) {
            retorno += "cinquenta ";
        }
        else if (numeroDezena > 50 && numeroDezena < 60) {
            retorno += "cinquenta e ";
        }
        else if (numeroDezena == 60) {
            retorno += "sessenta ";
        }
        else if (numeroDezena > 60 && numeroDezena < 70) {
            retorno += "sessenta e ";
        }
        else if (numeroDezena == 70) {
            retorno += "setenta ";
        }
        else if (numeroDezena > 70 && numeroDezena < 80) {
            retorno += "setenta e ";
        }
        else if (numeroDezena == 80) {
            retorno += "oitenta ";
        }
        else if (numeroDezena > 80 && numeroDezena < 90) {
            retorno += "oitenta e ";
        }
        else if (numeroDezena == 90) {
            retorno += "noventa ";
        }
        else if (numeroDezena > 90 && numeroDezena < 100) {
            retorno += "noventa e ";
        }

        unidade(numeroDezena % 10); //Chamada da função que continuará a escrita
    }

    function centena(numeroCentena) {

        if (numeroCentena == 100) {
            retorno += "cem ";
        }
        else if (numeroCentena > 100 && numeroCentena < 200) {
            retorno += "cento e ";
        }
        else if (numeroCentena == 200) {
            retorno += "duzentos ";
        }
        else if (numeroCentena > 200 && numeroCentena < 300) {
            retorno += "duzentos e ";
        }
        else if (numeroCentena == 300) {
            retorno += "trezentos ";
        }
        else if (numeroCentena > 300 && numeroCentena < 400) {
            retorno += "trezentos e ";
        }
        else if (numeroCentena == 400) {
            retorno += "quatrocentos ";
        }
        else if (numeroCentena > 400 && numeroCentena < 500) {
            retorno += "quatrocentos e ";
        }
        else if (numeroCentena == 500) {
            retorno += "quinhentos ";
        }
        else if (numeroCentena > 500 && numeroCentena < 600) {
            retorno += "quinhentos e ";
        }
        else if (numeroCentena == 600) {
            retorno += "seiscentos ";
        }
        else if (numeroCentena > 600 && numeroCentena < 700) {
            retorno += "seiscentos e ";
        }
        else if (numeroCentena == 700) {
            retorno += "setecentos ";
        }
        else if (numeroCentena > 700 && numeroCentena < 800) {
            retorno += "setecentos e ";
        }
        else if (numeroCentena == 800) {
            retorno += "oitocentos ";
        }
        else if (numeroCentena > 800 && numeroCentena < 900) {
            retorno += "oitocentos e ";
        }
        else if (numeroCentena == 900) {
            retorno += "novecentos ";
        }
        else if (numeroCentena > 900 && numeroCentena < 1000) {
            retorno += "novecentos e ";
        }

        if (numeroCentena % 100 >= 10 && numeroCentena % 100 < 20) //if necessário por causa dos números rebeldes. é aqui que é decidido se chama a impressão dos rebeldes ou os números comuns
            unidade(numeroCentena % 100);
        else
            dezena(numeroCentena % 100);
    }

    function milhar(numeroMilhar) {
        if (numeroMilhar >= 2000 && numeroMilhar < 20000) {
            unidade(parseInt(numeroMilhar / 1000));
        }
        else if (numeroMilhar >= 20000 && numeroMilhar < 100000) {
            dezena(parseInt(numeroMilhar / 1000));
        }
        else if (numeroMilhar >= 100000 && numeroMilhar < 1000000) {
            centena(parseInt(numeroMilhar / 1000));
        }

        if (numeroMilhar % 1000 >= 1 && numeroMilhar % 1000 <= 100) //problema nesse if else pois preciso deles para imprimir o 'mil... mil e um', mas ele atrapalha com
            retorno += "mil e ";
        else
            retorno += "mil ";

        centena(numeroMilhar % 1000);
    }

    function milhao(numeroMilhao) {

        if (numeroMilhao >= 1000000 && numeroMilhao < 2000000) {
            unidade(parseInt(numeroMilhao / 1000000));
            if (numeroMilhao % 1000000 >= 1 && numeroMilhao % 1000000 <= 100) {
                retorno += "milhão e ";
            }
            else {
                retorno += "milhão ";
            }
        }
        else if (numeroMilhao >= 2000000 && numeroMilhao < 20000000) {
            unidade(parseInt(numeroMilhao / 1000000));
        }
        else if (numeroMilhao >= 20000000 && numeroMilhao < 100000000) {
            dezena(parseInt(numeroMilhao / 1000000));
        }
        else if (numeroMilhao >= 100000000 && numeroMilhao < 1000000000) {
            centena(parseInt(numeroMilhao / 1000000));
        }

        if (numeroMilhao >= 2000000) {
            if (numeroMilhao % 1000000 >= 1 && numeroMilhao % 1000000 <= 100) {
                retorno += "milhões e ";
            }
            else {
                retorno += "milhões ";
            }
        }

        if (numeroMilhao % 1000000 >= 0 && numeroMilhao % 1000000 <= 999) {
            centena(numeroMilhao % 1000000);
        }
        else {
            milhar(numeroMilhao % 1000000);
        }

    }

    //Depois que a variável "retorno" recebeu todo o tratamento com as concatenações, ela está pronta para ser devolvida para a chamada da função
    return retorno;
}
