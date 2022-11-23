import propsStore from "../stores/propsStore";

export default function CreateForm() {
  const store = propsStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Add New Propery Record</h2>
      <form onSubmit={store.createProp}>
      <label htmlFor="item">Item</label>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.item}
          name="item"
          type="text"
        />
        <br />
        <label htmlFor="Value">Value</label>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.dollarVal}
          name="dollarVal"
          type="number"
        />
        <br />
        <label htmlFor="dateAquired">Date Aquired</label>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.dateAquired}
          name="dateAquired"
          type="date"
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
