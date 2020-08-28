import React, { Component } from "react"
import Icon from "feather-icons-react"

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuEstaAberto: false
    }
  }

  abrirMenu() {
    this.setState({
      menuEstaAberto: true
    })
  }

  fecharMenu() {
    this.setState({
      menuEstaAberto: false
    })
  }

  navegar = (id) => {
    this.fecharMenu()
    window.location.hash = id
  }

  render() {
    return (
      <header className="header" >
        <nav className="header__navigation">
          <a href="#" className="header__logo">
            <img src="logo.svg" alt="Drª Luciele Cristofari" />
          </a>

          <ul className={`header__navigationItems ${this.state.menuEstaAberto && 'header__navigationItems_menu-aberto'}`}>
            <li>
              <a onClick={() => this.navegar("especialidade")} className="header__link">Especialidades</a>
            </li>
            <li>
              <a onClick={() => this.navegar("sobre")} className="header__link">Sobre mim</a>
            </li>
            <li>
              <a onClick={() => this.navegar("contato")} className="header__link">Contato</a>
            </li>
          </ul>
          <button className="button button_icon button_hamburger" onClick={() => this.abrirMenu()}>
            <Icon icon="menu" />
          </button>

        </nav>
      </header>
    )
  }
}
