import React from "react";
import "./LocForm.css";

const LocForm = (props) =>(
    <form className="form mx-sm-4 mb-2">
        <input
            onChange={props.handleLocChange}
            value={props.value}
            name={props.name}
            type="number"
            className="form-control"
            placeholder={props.placeholder}
        />
        <button
            id = "LocButton"
            onClick={props.handleLocSubmit}
            className="btn btn-primary mt-3">
            ZIPCODE
      </button>
    </form>
);

export default LocForm;