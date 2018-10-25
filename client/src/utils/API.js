import axios from "axios";

export default {
  getAllServices: function(careMake){
    // console.log("I am Car Make" + careMake);
    return axios.get("/api/service/all",  {
      params: {
        id: careMake
      }
    });
  },
  getZipCode: function(){
    return axios.get("/api/location/dataZip");
  },
  getCarMake: function(){
    return axios.get("/api/service/make");
  }
};
