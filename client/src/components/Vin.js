import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/vin";


export default function Home() {

  const [vin, setVin] = useState([]);
  const [formObject, setFormObject] = useState({});

  // useEffect(() => {
  //   loadVin()
  // }, [])

  // function loadVin() {
  //   API.searchVin()
  //     .then(res => setVin(res.data.Results[0]))
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    console.log(formObject)
    event.preventDefault();
    if (formObject.search) {
      API.searchVin(formObject.search)
        .then(res => {
          // console.log(res.data.Results[0].Make)
          console.log(res.data.Results)
          setVin(res.data.Results)
        })
        .catch(err => {
          console.log(err);
        })
    }
  };

  //save vin to dbase
  function saveVinSelection(vin) {
    // event.preventDefault();
    // savebook to dbase
    console.log("OnClick saveVinSelection--results: " + vin[0].VIN);
    API.saveVin({
      vin: vin[0].VIN,
      make: vin[0].Make,
      model: vin[0].Model,
      modelYear: vin[0].ModelYear,
      engineModel: vin[0].EngineModel,
      engineHp: vin[0].EngineHP,
      engineCylinders: vin[0].EngineCylinders,
      fuelInjection: vin[0].FuelInjectionType,
    })
      // .then(res => console.log('Saved to dbase'))
      .then(res => alert("SAVED"))
      .catch(err => console.log(err));
  };


  function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("US"));

    setInterval(() => setTime(new Date().toLocaleTimeString("US")), 1000);

    return <p>Current Time: {time} </p>

  }
  return (
    <div className="page">

      <form>
        <input style={{ height: 50, width: "60%", borderColor: 'grey', borderWidth: 1, borderRadius: 10, margin: 10, fontSize: 15 }}
          onChange={handleInputChange}
          name="search"
          placeholder="  Enter Car VIN  "
        />

        <button style={{ fontsize: 10, padding: 10, borderradius: 5, borderWidth: 1, margin: 5, backgroundColor: 'grey', }}
          disabled={!(formObject.search)}
          onClick={handleFormSubmit}
          type="light"
        >
          VIN Search
       </button>
      </form>
      {vin.length ? (
        <div className="vinReturn" class="col-md-6 col-md-offset-3">
          <h2 style={{ color: 'white' }} className="f-weight-300">VIN Details </h2>
          <button onClick={() => saveVinSelection(vin)} variant="outline-success" className='ml-3' >Save</button>
          <div style={{ color: 'white' }}> VIN: {vin[0].VIN} </div>
          <div style={{ color: 'white' }}> Make: {vin[0].Make} || Model: {vin[0].Model} </div>
          <div style={{ color: 'white' }}> Model Year: {vin[0].ModelYear} </div>
          <div style={{ color: 'white' }}> Engine HP: {vin[0].EngineHP} </div>
          <div style={{ color: 'white' }}> Engine Cylinders: {vin[0].EngineCylinders} </div>
          <div style={{ color: 'white' }}> Displacement CC: {vin[0].DisplacementCC} </div>
          <div style={{ color: 'white' }}> Fuel Injection Type: {vin[0].FuelInjectionType} </div>
          <div style={{ color: 'white' }}> Drive Type: {vin[0].DriveType} </div>
          <div style={{ color: 'white' }}> Doors: {vin[0].Doors} </div>
          <div style={{ color: 'white' }}> Trim: {vin[0].Trim} </div>
        </div>
      ) : (
          <h3 style={{ color: 'red' }} >No Results to Display</h3>
        )}
    </div>
  );
}