function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];
  //forma menos utilizada
  /*  form.onsubmit = function (evento) {
    evento.preventDefault();
    alert(1);
    console.log("Foi enviado.");
  }; */

  function recebeEventoForm(event) {
    event.preventDefault();

    const nome = form.querySelector(".nome"); //esse seletor busca  no form apenas informações que precisa, ou seja, fica algo mais focado à um "ponto" do html ao inves de "document.queryselector"
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);

    resultado.innerHTML += `
    <p>${nome.value}</p>
    <p> ${sobrenome.value}</p>
      <p>${peso.value}</p>
       <p>${altura.value}</p>
       `;
  }
  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
