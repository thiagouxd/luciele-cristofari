import React from "react"
import Icon from "feather-icons-react"

export default function HomeSection() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container_primary">
          <h1 className="title">Drª Luciele Cristofari</h1>
          <p className="paragraphy">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
          <button className="button button_primary">
            <Icon icon="calendar" />
          Agendar consulta
          </button>
        </div>

        <div className="home__container_secondary">
          <img src="kid.png" alt="" className="home__kid" />
          <img src="symbol.svg" alt="" className="home__symbol" />
        </div>
      </div>
    </div>
  )
}