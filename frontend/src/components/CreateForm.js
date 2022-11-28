import propsStore from "../stores/propsStore";
import {Input} from 'semantic-ui-react'
import { useState } from "react";


export default function CreateForm() {
  const store = propsStore();

  const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file) 
    console.log(base64);
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

  const [file, setFile] = useState("");

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
          min="0"
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

  <div className="form-outline mb-4 text-center ui  mini">
  <label className="form-Label" htmlFor="uploadFile">Supporting File: &nbsp;
              
                <Input
                id="uploadFile"
                type="file"
                name="uploadFile"
                onChange={handleFileRead}
                {...(file ? ( {value: file} ) : {value: setFile})}
                
              />
              
              &nbsp;
    <i className="ui upload icon" />
    (Optional)</label>
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary btn-block mb-4 text-center">Add Property</button>
    </div>

    <div><br /><br /></div>

</form>

</div>
  );
}
