var carta1 = {
  nome: "Targaryen",
  imagem:
    "https://i.pinimg.com/564x/08/ae/67/08ae675a6016ed582d1cdaddac31f2bf.jpg",
  atributos: {
    ataque: 8,
    defesa: 4,
    magia: 9
  }
};

var carta2 = {
  nome: "Lannister",
  imagem:
    "https://i.pinimg.com/564x/d3/ac/45/d3ac45466b7a702cfc314262973c5ea3.jpg",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 3
  }
};

var carta3 = {
  nome: "Stark",
  imagem:
    "https://i.pinimg.com/564x/6a/f9/4a/6af94a9d4cdfc81f0a887faa5fc99cba.jpg",
  atributos: {
    ataque: 8,
    defesa: 8,
    magia: 5
  }
};

var carta4 = {
  nome: "Baratheon",
  imagem:
    "https://i.pinimg.com/564x/b7/77/74/b777746176429ca9cea2c3259e35d68f.jpg",
  atributos: {
    ataque: 9,
    defesa: 5,
    magia: 1
  }
};

var carta5 = {
  nome: "Corvos",
  imagem:
    "https://i.pinimg.com/564x/fe/16/63/fe1663418e27e671b9712d3b3aa7e124.jpg",
  atributos: {
    ataque: 3,
    defesa: 5,
    magia: 10
  }
};

var carta6 = {
  nome: "White Walkers",
  imagem:
    "https://i.pinimg.com/564x/94/cf/53/94cf53c164c42f3f53b8745e681e09e3.jpg",
  atributos: {
    ataque: 10,
    defesa: 5,
    magia: 10
  }
};
carta6;

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 6);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Você Venceu!</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML =
      "<p class='resultado-final'>Você perdeu, a carta da maquina é maior</p>";
  } else {
    elementoResultado.innerHTML = "<p class='resultado-final'>Empatou</p>";
  }

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p> `;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p> `;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}