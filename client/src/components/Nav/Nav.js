import React from "react";

const Nav = (props) =>{ 
    // console.log(props);

  return  (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <a className="navbar-brand" href="/">
              Mobile Auto Mechanic
              </a>

            </nav>
            <div id = "ymmt" >
                <label for="year">YEAR: <select name="car-years" id="car-years" ></select></label>
                <br/>
                <label for="make">MAKE: <select name="car-makes" id="car-makes"  value={props.value} 
                onChange={props.handleCarChange}></select></label>
                <br/>
                <label for="MODEL">MODEL: <select name="car-models" id="car-models"></select></label>
                <br/>
                <label for="TRIM">TRIM: <select name="car-model-trims" id="car-model-trims"></select></label>
                <br/>
                <button
                    id = "CarSubmitButton"
                    onClick={props.handleCarSubmit}
                    className="btn btn-primary mt-3">
                    MY CAR
                </button>
                {props.carB ? (<h2 className="text-center">Your Car is set as {props.value.toUpperCase()}</h2>) : (<h2 className="text-center"> Please choose your Car</h2>)}
            </div>
        </div>
      );

} 

export default Nav;
