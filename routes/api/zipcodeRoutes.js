const router = require("express").Router();
var db = require("../../models");



// So the route is /api/zipcode/
router.route("/dataZip")
    .get((req, res) => {
        console.log("in zipcode");
        db.LocationZip.findAll({}).then(function (prom) {
            let result = [];
            prom.map(item =>{
                console.log(item.dataValues.zipcode);
                result.push(item.dataValues.zipcode);
            });
            res.json(result);
        });
    });


module.exports = router;