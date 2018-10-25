import React, { Component } from "react";
import API from "../../utils/API";
import LocForm from "../LocForm"
import Nav from "../Nav";
import Service from "../Service";


class Location extends Component {
  state = {
    zipcode: "",
    isZipValid: false,
    databaseZip:[],
    carMake:"",
    databaseAllServices :[],
    databaseCarMake:[],
    iscarButtonClicked: false,   
    isOil: false,
    isFilter:false,
    isSpark:false,
    isTune:false,
    isBattery:false,
    isSteering:false,
    isBrake:false,
    isMuffler:false,
    isTire:false,
    isTrans:false,
    isAc:false,
    isDetail:false
  };

  componentDidMount() {
    this.getDataBaseZip();
    this.getDataBaseCarMake();
  }
//  Car based function
  handleCarChange = (e) =>{
    this.setState({carMake: e.target.value});
  }

  getDataBaseCarMake = () =>{
    API.getCarMake()
      .then(res =>{
        this.setState({databaseCarMake:res.data});
      })
      .catch(err=> console.log(err));      
  };
  toggleChangeOil = () => {
    this.setState(prevState => ({
      isOil: !prevState.isOil,
    }));
  }
  toggleChangeFilter = () => {
    this.setState(prevState => ({
      isFilter: !prevState.isFilter,
    }));
  }
  toggleChangeSpark = () => {
    this.setState(prevState => ({
      isSpark: !prevState.isSpark,
    }));
  }
  toggleChangeTune = () => {
    this.setState(prevState => ({
      isTune: !prevState.isTune,
    }));
  }
  toggleChangeBattery = () => {
    this.setState(prevState => ({
      isBattery: !prevState.isBattery,
    }));
  }
  toggleChangeSteering = () => {
    this.setState(prevState => ({
      isSteering: !prevState.isSteering,
    }));
  }
  toggleChangeBrake = () => {
    this.setState(prevState => ({
      isBrake: !prevState.isBrake,
    }));
  }
  toggleChangeMuffler = () => {
    this.setState(prevState => ({
      isMuffler: !prevState.isMuffler,
    }));
  }
  toggleChangeTire = () => {
    this.setState(prevState => ({
      isTire: !prevState.isTire,
    }));
  }
  toggleChangeTrans = () => {
    this.setState(prevState => ({
      isTrans: !prevState.isTrans,
    }));
  }
  toggleChangeAc = () => {
    this.setState(prevState => ({
      isAc: !prevState.isAc,
    }));
  }
  toggleChangeDetail = () => {
    this.setState(prevState => ({
      isDetail: !prevState.isDetail,
    }));
  }
  getDataBaseZip = () =>{
    API.getZipCode()
      .then(res =>{
        this.setState({databaseZip:res.data});
        // console.log(`State of databaseZip[] is ${this.state.databaseZip}`);
      })
      .catch(err=> console.log(err));      
  };
  
  handleCarSubmit = event => {
    event.preventDefault();
    let car = this.state.carMake.toLowerCase();
    const carId = this.validateCarmakeId(car)[0].id;
    // console.log(carId);
    this.getDataBaseServices(carId);
  };

  validateCarmakeId = (car) => {
   return this.state.databaseCarMake.filter((cars) => {
            const {make} = cars;
            const makeLower = make.toLowerCase();
            return (makeLower === car);
          });
  };

  getDataBaseServices = (carMakeId) =>{
    API.getAllServices(carMakeId)
      .then(res =>{
        this.setState({databaseAllServices:res.data , iscarButtonClicked: true}, () =>{
          for(let i = 0 ; i<this.state.databaseAllServices.length; i++){
            console.log(`databaseAllServices ${this.state.databaseAllServices[i]}`);
          }
          
        });
      })
      .catch(err=> console.log(err));      
  };
  

  // Location Related Functions
  handleLocSubmit = event => {
    event.preventDefault();
    this.searchZipCode(this.state.zipcode);
    this.setState({
      zipcode : ""
    });
  };

  searchZipCode = query => {
          query = parseInt(query,10);
          let valid = false;
          this.state.databaseZip.forEach(value=>{
            if(value === query){
              valid = true;
            }
          });
          // console.log(`Valid is ${valid}`);
          if(valid){
            this.setState({isZipValid : true}, ()=>{
              // console.log(`Now state is uptodate ${this.state.isZipValid}`);
            });
          } else{
            this.setState((prevState,props) =>{
              return{
                isZipValid : false
              }
            }, ()=>{
              // console.log(`Now state is uptodate ${this.state.isZipValid}`);
            });
          }     
};

handleLocChange = event => {
  // Getting the value and name of the input which triggered the change
  let value = event.target.value;
  const name = event.target.name;

  // Updating the input's state
  this.setState({
    [name]: value
  });
};

getDataBaseZip = () =>{
  API.getZipCode()
    .then(res =>{
      this.setState({databaseZip:res.data});
      // console.log(`State of databaseZip[] is ${this.state.databaseZip}`);
    })
    .catch(err=> console.log(err));      
};



 

  render(){
    return(
      <div>
          <Nav 
          handleCarChange={this.handleCarChange} 
          handleCarSubmit ={this.handleCarSubmit} 
          value={this.state.carMake}
          carB = {this.state.iscarButtonClicked}/>

          <LocForm 
            name ="zipcode" 
            placeholder ="ZIPCODE" 
            value={this.state.zipcode} 
            handleLocChange={this.handleLocChange}
            handleLocSubmit={this.handleLocSubmit}/>

         {this.state.isZipValid ? (<Service
           serviceCar = {this.state.databaseAllServices}
           checkedOil = {this.state.isOil}
           checkedFilter = {this.state.isFilter}
           checkedSpark = {this.state.isSpark}
           checkedTune = {this.state.isTune}
           checkedBattery = {this.state.isBattery}
           checkedSteering = {this.state.isSteering}
           checkedBrake = {this.state.isBrake}
           checkedMuffler = {this.state.isMuffler}
           checkedTire = {this.state.isTire}
           checkedTrans = {this.state.isTrans}
           checkedAc = {this.state.isAc}
           checkedDetail = {this.state.isDetail}
           toggleChangeOil={this.toggleChangeOil}
           toggleChangeFilter={this.toggleChangeFilter}
           toggleChangeSpark={this.toggleChangeSpark}
           toggleChangeTune={this.toggleChangeTune}
           toggleChangeBattery={this.toggleChangeBattery}
           toggleChangeSteering={this.toggleChangeSteering}
           toggleChangeBrake={this.toggleChangeBrake}
           toggleChangeMuffler={this.toggleChangeMuffler}
           toggleChangeTire={this.toggleChangeTire}
           toggleChangeTrans={this.toggleChangeTrans}
           toggleChangeAc={this.toggleChangeAc}
           toggleChangeDetail={this.toggleChangeDetail}
           />) 
           : (<h2 className="text-center"> Please enter a valid ZipCode</h2>)}
    </div>

    ); 
  }

 
}

export default Location;
