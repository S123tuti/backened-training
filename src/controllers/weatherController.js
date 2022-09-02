let axios = require("axios")


 let getSortedcities = async function(req, res) {

    try {

    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

    let cityObjArray= []

   for (let i =0; i<cities.length; i++){

        let Obj = {city: cities[i] }

        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=86ed64baaf3ed6cee3319cc41835ed29`)
        

        Obj.temp = result.data.main.temp

        cityObjArray.push(Obj)
    
        let sorted = cityObjArray.sort( function(a, b) { return a.temp - b.temp } )

       return  res.status(200).send({status: true, data: sorted})
    }
 } catch (err) {

    res.status(500).send({status: false, error:err})
} 
 }

module.exports.getSortedcities = getSortedcities  

