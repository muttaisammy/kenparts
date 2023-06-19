import React, { useState, useEffect } from "react";
import API from "../utils/vin";
import { Link } from "react-router-dom";


function Saved() {

  const [saved, setSaved] = useState([]);

  // get all the vins from the database and set them in the array 
  useEffect(() => {
    loadVins()
  }, [saved])

  function loadVins() {
    API.loadSavedVin()
      .then(res => {
        setSaved(res.data);
      })
      .catch(err => console.log(err))
  }

  function deleteVin(id) {
    API.deleteVin(id)
      .then(res => res)
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h4 class="col-md-6 col-md-offset-3" style={{ color: 'white' }}>Saved VIN</h4>
      {saved.length ? (
        saved.map(vin => (
          <div class='row' key={vin._id}>
            {/* <div className="mb-4 border  p-3 rounded shadow "> */}
            <div class="col-md-6 col-md-offset-3">

              <button onClick={() => deleteVin(vin._id)}> DELETE </button>
              <link to={"/api/vin" + vin.id} />
              <strong className="m-4" style={{ color: 'white' }}>
                VIN: {vin.vin}
              </strong>
              <p className="mt-3" style={{ color: 'white' }}>
                MAKE: {vin.make}
              </p>
              <p className="mt-3" style={{ color: 'white' }} >
                MODEL: {vin.model}
              </p>
              <p className="mt-3" style={{ color: 'white' }}>
                MODEL YEAR: {vin.modelYear}
              </p>
              <p className="mt-3" style={{ color: 'white' }}>
                ENGINE MODEL: {vin.engineModel}
              </p>
              <p className="mt-3" style={{ color: 'white' }}>
                ENGINE HP: {vin.engineHp}
              </p>
              <p className="mt-3" style={{ color: 'white' }}>
                ENGINE CYCLINERS: {vin.engineCylinders}
              </p>
              <hr />

            </div>
          </div>
        ))) : (
          <h3 style={{ color: 'white' }}>No Saved VIN to Display</h3>
        )};
    </div>
  );
}


export default Saved;