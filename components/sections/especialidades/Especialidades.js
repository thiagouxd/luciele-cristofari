import ItensEspecialidades from "./ItemEspecialidades";

const itensEspecialidades = [{
  icon: "calendar",
  title: "Crescimento",
  paragraphy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ultricies libero. Phasellus dapibus feugiat leo volutpat sagittis. Donec tellus nisi"
},
{
  icon: "user",
  title: "Puberdade",
  paragraphy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ultricies libero. Phasellus dapibus feugiat leo volutpat sagittis. Donec tellus nisi"
},
{
  icon: "calendar",
  title: "Crescimento",
  paragraphy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ultricies libero. Phasellus dapibus feugiat leo volutpat sagittis. Donec tellus nisi"
},
{
  icon: "calendar",
  title: "Crescimento",
  paragraphy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ultricies libero. Phasellus dapibus feugiat leo volutpat sagittis. Donec tellus nisi"
},
]

export default function Especialidades() {
  return (
    <section className="section">
      <h2 className="title title_section">Especialidades</h2>

      <div className="items-especialidades">
        {itensEspecialidades.map(item => (
          <ItensEspecialidades
            title={item.title}
            paragraphy={item.paragraphy}
            icon={item.icon} />))}
      </div>
    </section>
  )
}