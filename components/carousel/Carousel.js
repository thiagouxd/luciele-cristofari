import Icon from "feather-icons-react"

export const Carousel = (props) => (
  <div className="carousel">
    <button className="carousel__button carousel__button_left" onClick={() => movimentar("esquerda")}>
      <Icon icon="chevron-left" />
    </button>
    <div className="carousel__container">
      <div className="carousel__itens">
        {props.depoimentos.map(depoimento => {
          return (
            <div className="carousel__item" key={`depoimento${props.depoimentos.indexOf(depoimento)}`}>
              <blockquote>{depoimento.descricao}</blockquote>
              <p>{depoimento.autor}</p>
            </div>
          )
        })}
      </div>
    </div>
    <button className="carousel__button carousel__button_right" onClick={() => movimentar("direita")}>
      <Icon icon="chevron-right" />
    </button>
  </div>
)

const movimentar = (sinal) => {
  const itens = document.querySelector('.carousel__itens')
  const larguraDoContainer = itens.offsetWidth;
  const quantidadeDeItens = document.querySelectorAll('.carousel__item').length - 1
  const posicao = itens.style.left;
  const posicaoEmNumero = Number(posicao.split('p')[0])

  if ((posicaoEmNumero === 0 && sinal !== "direita")
    || (posicaoEmNumero === (quantidadeDeItens * larguraDoContainer) * -1 && sinal === "direita")) {
  } else if (!posicao) {
    itens.style.left = `${sinal === "direita" ? '-' : ''}${larguraDoContainer}px`
  } else {
    let novaPosicao = sinal === "direita" ?
      posicaoEmNumero - larguraDoContainer :
      posicaoEmNumero + larguraDoContainer
    itens.style.left = `${novaPosicao}px`
  }
}
