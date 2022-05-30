
var botaoAdicionar = document.querySelector("#add-pedido");

botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault();
   var form = document.querySelector("#adicionar-pedido");

   var nome = form.nome.value;
   var mesa = form.mesa.value;
   var prato = form.prato.value;
   var qtd = form.qtd.value;
   var valU = prato.slice(-5);
   var valT = valU * qtd;
   
   var pedidoTr = document.createElement("tr");

   var nomeTd = document.createElement("td");
   var mesaTd = document.createElement("td");
   var pratoTd = document.createElement("td");
   var qtdTd = document.createElement("td");
   var valUnitTd = document.createElement("td");
   var valTotTd = document.createElement("td");

   nomeTd.textContent = nome;
   mesaTd.textContent = mesa;
   pratoTd.textContent = prato;
   qtdTd.textContent = qtd;
   valUnitTd.textContent = valU;
   valTotTd.textContent = valT.toFixed(2);

   pedidoTr.appendChild(nomeTd);
   pedidoTr.appendChild(mesaTd);
   pedidoTr.appendChild(pratoTd);
   pedidoTr.appendChild(qtdTd);
   pedidoTr.appendChild(valUnitTd);
   pedidoTr.appendChild(valTotTd);

   var tabela = document.querySelector("#tabela-pedido");
   tabela.appendChild(pedidoTr);
});