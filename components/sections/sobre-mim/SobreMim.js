import { InfosLuciele } from "./InfosLuciele";
import Icon from "feather-icons-react"

export default function SobreMim() {
  return (
    <div className="sobreMim" id="sobreMim">
      <section className="section section_sobreMim">
        <h2 className="title title_section">Sobre mim</h2>


        <div className="sobreMim__description">
          <div className="sobreMim__primaryContainer">
            <InfosLuciele />

            <p className="paragraphy">
              Desde a infância desejava me tornar médica e isto concretizou-se em 2011, quando conclui o curso de medicina na Universidade Federal de Santa Maria no Rio Grande do sul. Durante minha graduação o contato com o mundo da pediatria me encantou de tal maneira que percebi que não poderia mais viver sem ele. Tornei-me especialista em pediatria pelo Hospital Universitário da Universidade Federal de Mato Grosso do Sul em 2015. Decidi continuar estudando e a endocrinologia pediátrica foi minha escolha. Em 2018 concluí a subespecialidade no IPPMG, Hospital Pediátrico da Universidade Federal do Rio de Janeiro. Foram 10 anos de formação para proporcionar aos pacientes um cuidado baseado na ciência, ética e humanização.
            </p>

            <a href="https://www.facebook.com/lucielendocrinoped" target="_blank"
              className="button button_white button_small u-margin-bottom-middle">
              <Icon icon="facebook" />
              lucielendocrinoped
            </a>

            <a href="https://www.instagram.com/luciele_endocrinoped" target="_blank"
              className="button button_white button_small u-margin-bottom-middle">
              <Icon icon="instagram" />
              luciele_endocrinoped
            </a>

            <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4250071U1" target="_blank"
              className="button button_white button_small u-margin-bottom-middle">
              <Icon icon="file-text" />
              Currículo Lattes
            </a>
          </div>

          <img src="./luciele.png" alt="Foto da doutora Luciele Cristofari com os braços cruzados e olhar de seriedade." className="sobreMim__pic" />
        </div>
      </section>
    </div>
  )
}