export default function ItensEspecialidades(props) {
  return (
    <div className="item-especialidades">
      <div className="item-especialidades__containerIcon">
        <img src={`${props.icon}.svg`} alt="" />
      </div>
      <h3 className="title title_primary">{props.title}</h3>
      <p className="paragraphy">{props.paragraphy}</p>
    </div>
  );
}
