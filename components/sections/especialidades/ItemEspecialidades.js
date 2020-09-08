export default function ItensEspecialidades(props) {
  return (
    <div className="item-especialidades">
      <h3 className="title title_primary">{props.title}</h3>
      <p className="paragraphy">{props.paragraphy}</p>
    </div>
  )
}