// Include fs module
const fs = require('fs');
 
function countStudents(fpath){

try {// Calling the readFileSync() method
// to read 'input.txt' file
// read files in a synchronous/blocking way
const data = fs.readFileSync(`${fpath}`,
    { encoding: 'utf8', flag: 'r' });
 

 if (data !== null){
 // Display the file data
    // console.log(typeof(data)); 
    let splittedString = data.split("\n").slice(1)
    let fieldset = new Set()
    let output_string_array = new Array();
    let track_field_index = new Object();
    let curr_field_set_index = 0;
    // console.log(splittedString);
    console.log("Number of Students: "+ splittedString.length );
    for (let row of splittedString) {
        let process_data = row.split(',');
        // console.log(process_data)
        // process.abort()
        if (fieldset.has(process_data[3])){


            // retrieve index from dictionary
            curr_field_set_index =  track_field_index[process_data[3]]
            // append string to string array 0
            output_string_array[curr_field_set_index] = output_string_array[curr_field_set_index] + ", " + process_data[0];

        }
        else{
            // add new field item to set
            fieldset.add(process_data[3]);
            let temparray = Array.from(fieldset)
            //grab its index of insertion
            let insert_index = temparray.indexOf(process_data[3]);

            // memoize its dict key for subsequent updates
            track_field_index[process_data[3]] = insert_index;

            // item not exist in set + init set
            output_string_array[insert_index] = "List: " + process_data[0];
        }


    } 
    let temparray = Array.from(fieldset)
    let counter = 0;
    for (let row of output_string_array) {
        // Improve Big-OH notation by storing the students count per fileld within the track_field_idex dictionary
        console.log(`Number of students in ${temparray[counter]}: ${row.split(',').length}. `+row)
        counter += 1;
    } 

}

  } catch (err) {
    // If the type is not what you want, then just throw the error again.
    if (err.code !== 'ENOENT') throw err;
  
    // Handle a file-not-found error
    process.stderr.write('Cannot load the database\n')

 }
 
}
module.exports = countStudents;