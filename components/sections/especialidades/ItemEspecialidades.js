import Icon from "feather-icons-react"

export default function ItensEspecialidades(props) {
  return (
    <div className="item-especialidades">
      <div className="item-especialidades__containerIcon">
        <Icon icon={props.icon} />
      </div>
      <h3 className="title title_primary">{props.title}</h3>
      <p className="paragraphy">{props.paragraphy}</p>
    </div>
  )
}