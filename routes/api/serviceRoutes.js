const router = require("express").Router();
var db = require("../../models");



// So the route is /api/service/
router.route("/all")
    .get((req, res) => {
        // console.log("Entered the function Service Api call");
        console.log(req.query.id);
        let carId = req.query.id
        db.Service.findAll({
            where:{
                CarMakeId: carId
            }
        }).then(function (prom) {
            res.json(prom);
        });
    });

 router.route("/make")
    .get((req, res) => {
        db.CarMake.findAll({ }).then(function (prom) {
            console.log(prom);
            res.json(prom);
        });
    });
    
    


module.exports = router;

