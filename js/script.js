// Esta é a função que será chamada quando o botão for clicado (definido no HTML com onclick="somar()").
function somar() {
    // 1. OBTER OS VALORES DOS CAMPOS DE ENTRADA

    // document.getElementById('valor1') seleciona o elemento HTML que tem o id 'valor1'.
    // .value pega o texto que está dentro do campo de entrada.
    // O valor pego de um campo de input é sempre um texto (string), mesmo que seja um número.
    let valor1String = document.getElementById('valor1').value;
    let valor2String = document.getElementById('valor2').value;

    // 2. CONVERTER OS VALORES DE TEXTO PARA NÚMERO

    // Usamos a função parseFloat() para converter as strings em números com casas decimais.
    // Se usássemos '+' com strings, ele iria concatenar (juntar) em vez de somar. Ex: "5" + "5" = "55".
    // Precisamos de números para fazer a soma matemática. Ex: 5 + 5 = 10.
    let valor1 = parseFloat(valor1String);
    let valor2 = parseFloat(valor2String);

    // 3. VERIFICAR SE OS VALORES SÃO NÚMEROS VÁLIDOS

    // isNaN() é uma função que verifica se um valor "Não é um Número" (Not-a-Number).
    // Se o usuário deixar um campo em branco ou digitar texto, a conversão para número falhará, resultando em NaN.
    if (isNaN(valor1) || isNaN(valor2)) {
        // Se um dos valores não for um número, exibe um alerta para o usuário.
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return; // A instrução 'return' para a execução da função aqui.
    }

    // 4. REALIZAR A SOMA

    // Agora que temos dois números, podemos somá-los com o operador '+'.
    let resultadoSoma = valor1 + valor2;

    // 5. EXIBIR O RESULTADO NA PÁGINA

    // document.getElementById('resultado') seleciona o elemento <h2> onde o resultado será exibido.
    // .innerHTML é a propriedade que nos permite alterar o conteúdo HTML dentro daquele elemento.
    // Estamos montando uma frase para exibir o resultado de forma amigável.
    document.getElementById('resultado').innerHTML = "O resultado da soma é: " + resultadoSoma;
}