function Formulario() {
  return (
    <form>
      <h2>Publicá a tu michi</h2>
      <label>Apodo del dueño:</label>
      <input type="text" />

      <label>Nombre del michi:</label>
      <input type="text" />

      <label>Edad del michi:</label>
      <input type="number" />

      <label>Foto del michi:</label>
      <input type="file" />

      <button type="submit">Publicar michi</button>
    </form>
  );
}

export default Formulario;