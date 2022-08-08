const today = new Date().getDate()
const b = new Date().getMonth()+1

const part = function(){
    console.log(today +" " +'date')
}

const c  = function(){
    console.log(b +" "+"month") 
}

const getBatchinfo = function(){
    console.log('plutonium W3D7 the topic for today is nodejs module system')
}

module.exports.part = part
module.exports.c = c
module.exports.getBatchinfo = getBatchinfo











