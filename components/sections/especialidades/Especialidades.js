import ItensEspecialidades from "./ItemEspecialidades";
import especialidades from "./data.json"


export default function Especialidades() {
  return (
    <section className="section" id="especialidade">
      <h2 className="title title_section">Sobre a especialidade</h2>
      <p className="paragraphy">
        A endocrinologia pediátrica é uma subespecialidade
        médica que requer conhecimentos em pediatria e em endocrinologia.
        O profissional é responsável pelo diagnóstico, tratamento e acompanhamento de alterações hormonais. Os hormônios são substancias produzidas por diversas glândulas e permitem o adequado funcionamento do nosso corpo. Alterações no balanço hormonal repercutem negativamente no organismo em fase de maturação e desenvolvimento.
        Cada fase do desenvolvimento, desde o período neonatal até o fim da adolescência, apresenta particularidades quanto a regulação e produção hormonal e costumam ser diferentes das observadas nos indivíduos adultos. Portanto, o endocrinologista pediátrico é o profissional habilitado para cuidar de indivíduos nestas faixas etárias.
      </p>

      <div className="items-especialidades">
        {especialidades.map(item => (
          <ItensEspecialidades key={`especialidades${especialidades.indexOf(item)}`}
            title={item.title}
            icon={item.icon}
            paragraphy={item.paragraphy} />))}
      </div>
    </section>
  )
}