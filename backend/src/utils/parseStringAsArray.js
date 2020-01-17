module.exports = 
    function parseStringAsArray(arrayAsString){
        return arrayAsString.split(',').map(tech => tech.trim())//trim remove espaçamentos antes e depois das strings
    }