/* 
    1. Gerar número aleatório toda vez que a página abrir / reiniciar
    2. Definir um numero maximo de tentativas - 10
    3. Obter numero chutado
    4. Verificar se o numero chutado é o aleatório
        4.1. Se sim, exibir mensagem "Parabens"
        4.2. Se errar, exibir mensagem dizendo se o numero é maior ou menor.
            4.2.1. Decrementar numero no contador de tentativas
            4.2.2. Exibir o numero de tentavias restantes
        4.3. Se o numero for diferente de 0 a 100, exibir mensagem "Numero inválido"
    5. Se atingir no numero maximo de tentativas incorretas, exibir mensagem "Perde! O numero é X"
*/

   const numeroA = Math.floor(Math.random()* 100)+1;
   var i=10;

   console.log(numeroA);

function jogo(){
    
   const numeroC = document.getElementById("numeroChutado").value;
   let tentativas = i;
   let mensagem = document.getElementById("mensagem");

   if (numeroC == ""){
   mensagem.textContent = "Por favor, insira um número.";
   }
   else if (numeroC <0 || numeroC >100){
   mensagem.textContent = "Por favor, insira um número válido de 0 a 100." ;
   }
   else{

        console.log(i);

        if (numeroA != numeroC && i>0) {
        i--;

            if(numeroC > numeroA){
                mensagem.textContent = "Tente novamente. O número secreto é MENOR."
            } 
            else {
                mensagem.textContent = "Tente novamente. O número secreto é MAIOR."
            }

        }
        else if (numeroA != numeroC && i==0){
        mensagem.textContent = "Infelizmente você não acertou o número. Reinicie e tente novamente.";
        document.getElementById('chuta').removeAttribute("onclick");

        }            
        else {
        mensagem.textContent = "Meus parabéns! O número correto é: " + numeroA;
        document.getElementById('chuta').removeAttribute("onclick");

        }   
        
    }

    document.getElementById("resultado").textContent = "Tentativas restantes: " + tentativas;

}









