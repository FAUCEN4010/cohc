import propsStore from "../stores/propsStore";
import {Input} from 'semantic-ui-react'

export default function CreateForm() {
  const store = propsStore();

  if (store.updateForm._id) return <></>;

  return (

<div>

<form onSubmit={store.createProp}>
<br />
  <h3 className="text-center">Add New Property</h3>
  <br />


  <div className="form-outline mb-4 text-center" >
  <label className="form-label" htmlFor="item">Item: &nbsp;</label>
  <Input
          onChange={store.updateCreateFormField}
          value={store.createForm.item}
          name="item"
          type="text"
          required
        />
  </div>


  <div className="form-outline mb-4 text-center">
  <label className="form-label" htmlFor="value">Value: &nbsp;</label>
  <Input
          onChange={store.updateCreateFormField}
          value={store.createForm.dollarVal}
          name="dollarVal"
          type="number"
          required
        />
  </div>

  <div className="form-outline mb-4 text-center">
  <label className="form-label" htmlFor="dateAquired">Date Aquired: &nbsp;</label>
  <Input
          onChange={store.updateCreateFormField}
          value={store.createForm.dateAquired}
          name="dateAquired"
          type="date"
          required
        />
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary btn-block mb-4 text-center">Add Property</button>
    </div>

    <div><br /><br /></div>

</form>

</div>
  );
}
