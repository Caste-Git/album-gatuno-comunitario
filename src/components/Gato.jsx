function Gato({ nombre, edad, ApodoDelDueño, foto }) {
  return (
    <article>
      <img src={foto} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Edad: {edad} años</p>
      <p>Apodo del dueño: {ApodoDelDueño}</p>
    </article>
  );
}

export default Gato;