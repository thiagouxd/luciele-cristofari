import Icon from "feather-icons-react";

const whatsHref =
  "https://api.whatsapp.com/send/?phone=5551980586831&text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20atendimento%20da%20Dr%C2%AA%20Luciele%20Cristofari.&type=phone_number&app_absent=0";

export const Contato = () => (
  <div id="contato">
    <section className="section">
      <img src="./Cascata.svg" alt="" />
      <h2 className="title title_section">Contato</h2>

      <h3 className="title title_contato">Novo Hamburgo</h3>

      <p className="paragraphy paragraphy_contato">
        <Icon icon="map-pin" className="icon icon_contato" />
        <strong>Clínica Criare</strong> - Rua Silveira Martins, nº 32, Centro
        <br /> Novo Hamburgo / RS
        <a
          href="https://goo.gl/maps/j68fJtBnGQ6mg3d87"
          target="_blank"
          rel="noreferrer"
          className="link u-margin-left-middle"
        >
          <span>Ver no mapa</span>
          <Icon icon="arrow-up-right" size="16" />
        </a>
      </p>

      <div>
        <a
          href="tel:5130973839"
          className="button button_primary button_outline"
        >
          <Icon icon="phone" className="icon icon_contato" />
          <span>
            51 <strong>3097 3839</strong>
          </span>
        </a>

        <a
          href={whatsHref}
          target="_blank"
          className="button button_primary button_outline"
        >
          <img src="./whats.svg" alt="" />
          <span>
            51<strong>98058-6831</strong>
          </span>
        </a>
      </div>

      <h3 className="title title_contato u-margem-superior-grande">
        Porto Alegre
      </h3>
      <p className="paragraphy paragraphy_contato">
        <Icon icon="map-pin" className="icon icon_contato" />
        Av. Independência, 925 - Conjunto 311, Bairro Independência, Porto
        Alegre / RS
        <a
          href="https://goo.gl/maps/ob51X7Ffhn98UdVH6"
          target="_blank"
          rel="noreferrer"
          className="link u-margin-left-middle"
        >
          <span>Ver no mapa</span>
          <Icon icon="arrow-up-right" size="16" />
        </a>
      </p>

      <div>
        <a
          href="tel:5130973839"
          className="button button_primary button_outline"
        >
          <Icon icon="phone" className="icon icon_contato" />
          <span>
            51 <strong>3097 3839</strong>
          </span>
        </a>

        <a
          href={whatsHref}
          target="_blank"
          className="button button_primary button_outline"
        >
          <img src="./whats.svg" alt="" />
          <span>
            51<strong>98058-6831</strong>
          </span>
        </a>
      </div>

      <p className="paragraphy paragraphy_contato">
        Atendimento de pacientes de <strong>zero a 19 anos</strong>.
      </p>
    </section>
  </div>
);
