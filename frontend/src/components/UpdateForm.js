import propsStore from "../stores/propsStore";
import { Input } from "semantic-ui-react";

export default function UpdateForm() {
  const store = propsStore();

  if (!store.updateForm._id) return <></>;
  console.log(store.props);

  return (

<div>

<form onSubmit={store.updateProp}>
<br />
  <h3 className="text-center">Update Property Record</h3>
  <br />


  <div className="form-outline mb-4 text-center" >
  <label className="form-label" htmlFor="item">Item: &nbsp;</label>
  <Input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.item}
          name="item"
          required
        />
  </div>


  <div className="form-outline mb-4 text-center">
  <label className="form-label" htmlFor="value">Value: &nbsp;</label>
  <Input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.dollarVal}
          name="dollarVal"
          type="number"
          required
        />
  </div>

  <div className="form-outline mb-4 text-center">
  <label className="form-label" htmlFor="dateAquired">Date Aquired: &nbsp;</label>
  <Input
          onChange={store.handleUpdateFieldChange}
          // value={store.updateForm.dateAquired}
          value={new Date(store.updateForm.dateAquired).toLocaleDateString('fr-CA')}
          name="dateAquired"
          type="date"
          required
        />
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary btn-block mb-4 text-center">Update</button>
    &nbsp; or &nbsp;
    <button type="submit" className="btn btn-danger btn-block mb-4 text-center">Cancel</button>
    </div>

    <div><br /><br /></div>

</form>

      {/* <h2>Update prop</h2>
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
      </form> */}
    </div>
  );
}
