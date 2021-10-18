//to call this function please run function in node as 
//node APRSFlightSimCode.js 'file location'
// Make sure we got a filename on the command line.
//example: node APRSFlightSimCode.js EOSS313TestData/EOSS-313AE0SS-13TestAprsPackets
function getTestData(fileName){
    const fs = require('fs')
    try {
      const data = fs.readFileSync(fileName, 'utf8')
      return data;
    } catch (err) {
      console.error(err)
    }
}
function parseTestDataString(str)
{
    //parse string and return array with each lines data
}


//console.log(getTestData(process.argv[2])); //prints out file data in string form
console.log(parseTestDataString(getTestData(process.argv[2])));//prints out file data in array form split by new line