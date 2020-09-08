import { Carousel } from "../../carousel/Carousel";
import depoimentos from "./data.json"

export const Depoimentos = () => (
  <div className="depoimentos">
    <section className="section">
      <h2 className="title title_section">Depoimentos</h2>

      <Carousel depoimentos={depoimentos} />
    </section>
  </div>
)