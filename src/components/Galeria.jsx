import Gato from "./Gato";
import Michi from "../images/Michi.jpg";
import Luna from "../images/Luna.jpg";
import Queque from "../images/Queque.jpg";

function Galeria() {
  return (
    <section>
      <Gato nombre="Michi" edad={3} ApodoDelDueño="Caste" foto={Michi} />
      <Gato nombre="Luna" edad={1} ApodoDelDueño="Caste" foto={Luna} />
      <Gato nombre="Queque Quequito Panqueque Mermelada" edad={1} ApodoDelDueño="Caste" foto={Queque} />
    </section>
  );
}

export default Galeria;
