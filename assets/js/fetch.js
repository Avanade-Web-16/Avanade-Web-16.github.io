const cep = document.querySelector("#cep");

const showData = async (result) => {

  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

//o evento blur significa que clicamos na caixa de texto e saímos dela.
cep.addEventListener("blur", async (e) => {
  let search = cep.value.replace("-", "");
  if (search < 8 || Number(search) === NaN) {
    alert("CEP inválido!");
    return;
  }

  const options = {
    method: "GET", //significa que o dados vão por url.
    mode: "cors", //2 significados. voce quanto usuario, tem uma importante. e a url importante tem outra importancia.
    cache: "default", //
  };

  // https://viacep.com.br/ws/01001000/json/

  //fetch vai gerar uma promise. Promise é uma promessa de que algo vai acontecer.
  // se der certo, ele vai retornar o resultado. Se der errado, ele vai retornar um erro.
  // se der certo nós resolvemos a promise. Se der errado, nós rejeitamos a promise.

  const resultado = await fetch(`https://viacep.com.br/ws/${search}/json/`, options);
  const json = await resultado.json();

  showData(json);
});

