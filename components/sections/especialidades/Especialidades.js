import ItensEspecialidades from "./ItemEspecialidades";
import { especialidades, tratamentos } from "./data.json"


export default function Especialidades() {
  return (
    <section className="section" id="especialidade">
      <h2 className="title title_section">Especialidades</h2>

      <div className="items-especialidades">
        {especialidades.map(item => (
          <ItensEspecialidades key={`especialidades${especialidades.indexOf(item)}`}
            title={item.title}
            paragraphy={item.paragraphy}
            icon={item.icon} />))}
      </div>

      <hr />

      <h2 className="title">
        Tratamento de condições médicas
      </h2>

      <ul className="tratamentos-list">
        {tratamentos.map(item => (
          <li key={`tratamentos${tratamentos.indexOf(item)}`}>{item}</li>
        ))}
      </ul>
    </section>
  )
}