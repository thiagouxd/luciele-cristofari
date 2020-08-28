import React from "react"

export default function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <a href="#" className="header__logo">
          <img src="logo.svg" alt="Drª Luciele Cristofari" />
        </a>

        <ul className="header__navigationItems">
          <li>
            <a href="" className="header__link">Especialidades</a>
          </li>
          <li>
            <a href="" className="header__link">Sobre mim</a>
          </li>
          <li>
            <a href="" className="header__link">Contato</a>
          </li>
        </ul>
        {/* <button onClick={() => abrirMenu()}>Abrir Menu</button> */}
      </nav>
    </header>
  )
}

function abrirMenu() {
  alert('abriu')
}