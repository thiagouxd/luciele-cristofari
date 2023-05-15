import { InfosLuciele } from "./InfosLuciele";
import Icon from "feather-icons-react";
import descricao from "./data";

export default function SobreMim() {
  return (
    <div className="sobreMim" id="sobreMim">
      <section className="section section_sobreMim">
        <h2 className="title title_section">Sobre mim</h2>

        <div className="sobreMim__description">
          <div className="sobreMim__primaryContainer">
            <InfosLuciele />

            <p className="paragraphy">{descricao}</p>

            <a
              href="https://www.facebook.com/lucielendocrinoped"
              target="_blank"
              rel="noreferrer"
              className="button button_white button_small u-margin-bottom-middle"
            >
              <Icon icon="facebook" />
              lucielendocrinoped
            </a>

            <a
              href="https://www.instagram.com/luciele_endocrinoped"
              target="_blank"
              rel="noreferrer"
              className="button button_white button_small u-margin-bottom-middle"
            >
              <Icon icon="instagram" />
              luciele_endocrinoped
            </a>

            <a
              href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4250071U1"
              target="_blank"
              rel="noreferrer"
              className="button button_white button_small u-margin-bottom-middle"
            >
              <Icon icon="file-text" />
              Currículo Lattes
            </a>
          </div>

          <img
            src="./luciele.png"
            alt="Foto da doutora Luciele Cristofari com os braços cruzados e olhar de seriedade."
            className="sobreMim__pic"
          />
        </div>
      </section>
    </div>
  );
}
