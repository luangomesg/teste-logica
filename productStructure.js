const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

module.exports = () => {
  let resultado = {};

  for (let i = 0; i < products.length; i++) {
    let item = products[i].split("-");
    let cor = item[0];
    let tamanho = item[1];

    if (resultado[cor]) {
      if (resultado[cor][tamanho]) {
        resultado[cor][tamanho] += 1;
      } else {
        resultado[cor][tamanho] = 1;
      }
    } else {
      resultado[cor] = {
        [tamanho]: 1
      };
    }
  }

  return resultado;
}
