import Icon from "feather-icons-react"

export const Contato = () => (
  <div id="contato">
    <section className="section">
      <img src="./Cascata.svg" alt="" />
      <h2 className="title title_section">
        Contato
      </h2>

      <h3 className="title title_contato">
        Centro Clínico Regina
      </h3>
      <p className="paragraphy paragraphy_contato">
        <Icon icon="map-pin" className="icon icon_contato" />
        Av. Dr. Mauricio Cardoso, 833/401, Hamburgo Velho, Novo Hamburgo / RS
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

        <a href="tel:997261372" className="button button_primary button_outline">
          <img src="./whats.svg" alt="" />
          <span>51 <strong>99726 1372</strong></span>
        </a>
      </div>
    </section>
  </div>
)