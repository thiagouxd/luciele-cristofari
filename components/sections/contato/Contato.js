import Icon from "feather-icons-react"

export const Contato = () => (
  <div id="contato">
    <section className="section">
      <img src="./Cascata.svg" alt="" />
      <h2 className="title title_section">
        Contato
      </h2>

      <h3 className="title title_contato">
        Novo Hamburgo
      </h3>

      <p className="paragraphy paragraphy_contato">
        <Icon icon="map-pin" className="icon icon_contato" />
        Av. Dr. Mauricio Cardoso, 833 - Sala 401, Centro Clínico Regina, Hamburgo Velho <br /> Novo Hamburgo / RS
      <a href="https://goo.gl/maps/qe7RNAniQNEdSXnd7" target="_blank" rel="noreferrer"
          className="link u-margin-left-middle">
          <span>Ver no mapa</span>
          <Icon icon="arrow-up-right" size="16" />
        </a>
      </p>

      <div>
        <a href="tel:5130973839" className="button button_primary button_outline">
          <Icon icon="phone" className="icon icon_contato" />
          <span>51 <strong>3097 3839</strong></span>
        </a>

        <a href="tel:51997261372" className="button button_primary button_outline">
          <img src="./whats.svg" alt="" />
          <span>51 <strong>99726 1372</strong></span>
        </a>
      </div>

      <h3 className="title title_contato u-margem-superior-grande">
        Porto Alegre
      </h3>
      <p className="paragraphy paragraphy_contato">
        <Icon icon="map-pin" className="icon icon_contato" />
        Av. Independência, 925 - Conjunto 311, Bairro Independência, Porto Alegre / RS
      <a href="https://goo.gl/maps/ob51X7Ffhn98UdVH6" target="_blank" rel="noreferrer"
          className="link u-margin-left-middle">
          <span>Ver no mapa</span>
          <Icon icon="arrow-up-right" size="16" />
        </a>
      </p>

      <div>
        <a href="tel:5130198900" className="button button_primary button_outline">
          <Icon icon="phone" className="icon icon_contato" />
          <span>51 <strong>3019 8900</strong></span>
        </a>

        <a href="tel:51998406533" className="button button_primary button_outline">
          <img src="./whats.svg" alt="" />
          <span>51 <strong>99840 6533</strong></span>
        </a>
      </div>

      <p className="paragraphy paragraphy_contato">
        Atendimento de pacientes de <strong>zero a 19 anos</strong>.
      </p>
    </section>
  </div>
)