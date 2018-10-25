import React from "react";
import "./Service.css";
import { spawn } from "child_process";


const Service = (props) =>{
    const services = props.serviceCar;
    let carSer = services[0].service;
    let serPrice = services[0].price;
    const togArr = [props. toggleChangeOil,
        props.toggleChangeFilter,
        props.toggleChangeSpark,
        props.toggleChangeTune,
        props.toggleChangeBattery,
        props.toggleChangeSteering,
        props.toggleChangeBrake,
        props.toggleChangeMuffler,
        props.toggleChangeTire,
        props.toggleChangeTrans,
        props.toggleChangeAc,
        props.toggleChangeDetail];
    const chkArr = [
           props.checkedOil,
           props.checkedFilter,
           props.checkedSpark,
           props.checkedTune,
           props.checkedBattery,
           props.checkedSteering,
           props.checkedBrake,
           props.checkedMuffler,
           props.checkedTire,
           props.checkedTrans,
           props.checkedAc,
           props.checkedDetail
    ];
    console.log(` ${togArr}`);

          return(
            <div>
            <h1>Please choose your <b>Service</b> from the list below </h1>
            <ul className="list-group">
                {services.map((service,i) =>{
                    return (<li>
                        <input type="checkbox" name={service.service} value={service.price}
                        onChange={togArr[i]} checked = {chkArr[i]}/> <span>{service.service.toUpperCase()} 
                        </span>: <span> {service.price}</span><br/>
                          </li>)    
                }) 
                }
                <button className="btn btn-primary mt-3">Check Out</button>
            </ul>

          </div>
  );
}

export default Service;

