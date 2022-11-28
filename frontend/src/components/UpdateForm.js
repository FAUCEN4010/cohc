import propsStore from "../stores/propsStore";
import { Input } from "semantic-ui-react";

export default function UpdateForm() {
  const store = propsStore();

  const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file) 
    console.log(base64)
  }


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
        store.createForm.uploadFile = fileReader.result;
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }
  



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
          value={new Date(store.updateForm.dateAquired).toLocaleDateString('fr-CA')}
          name="dateAquired"
          type="date"
          required
        />
  </div>

  <div className="form-outline mb-4 text-center ui  mini">
  <label className="form-Label" htmlFor="uploadFile">Supporting File: &nbsp;
              <Input
                id="originalFileName"
                type="file"
                name="originalFileName"
                onChange={handleFileRead}
                
              /> &nbsp; 
    <i className="ui upload icon" />
    (Optional)</label>
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary btn-block mb-4 text-center">Update</button>
    &nbsp; or &nbsp;
    <button type="submit" className="btn btn-danger btn-block mb-4 text-center">Cancel</button>
    </div>

    <div><br /><br /></div>

</form>


    </div>
  );
}
