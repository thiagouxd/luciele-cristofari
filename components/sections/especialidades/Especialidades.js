import ItensEspecialidades from "./ItemEspecialidades";
import items from "./data.json"

export default function Especialidades() {
  return (
    <section className="section" id="especialidade">
      <h2 className="title title_section">Especialidades</h2>

      <div className="items-especialidades">
        {items.itensEspecialidades.map(item => (
          <ItensEspecialidades key={`itensEspecialidades${items.itensEspecialidades.indexOf(item)}`}
            title={item.title}
            paragraphy={item.paragraphy}
            icon={item.icon} />))}
      </div>
    </section>
  )
}