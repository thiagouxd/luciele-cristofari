import React from "react"
import Icon from "feather-icons-react"

export default function HomeSection() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container_primary">
          <h1 className="title">
            Endocrinologia e pediatria integradas em uma forma especial de cuidar.
          </h1>
        </div>

        <div className="home__container_secondary">
          <img src="kid.png" alt="" className="home__kid" />
          <img src="symbol.svg" alt="" className="home__symbol" />
        </div>
      </div>
    </div>
  )
}