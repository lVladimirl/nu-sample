import "./index.css";
export const FormTransaction = (props) => {
  return (
    <div className="FormTransaction">
      <form>
        <label>text descrição</label>
        <input type="text" />

        <label>select tipo</label>
        <select
        // {...register("type")}
        >
          <option value="">Escolha</option>
          <option value="dispensa">Dispensa</option>
          <option value="entrada">Entrada</option>
        </select>
        <label>number value</label>
        <input type="number" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormTransaction;
