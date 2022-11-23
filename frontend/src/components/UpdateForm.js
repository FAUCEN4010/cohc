import propsStore from "../stores/propsStore";

export default function UpdateForm() {
  const store = propsStore();

  if (!store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Update prop</h2>
      <form onSubmit={store.updateProp}>
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.item}
          name="item"
        />
        <textarea
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.dollarVal}
          name="dollarVal"
        />
        <button type="submit">Update prop</button>
      </form>
    </div>
  );
}
