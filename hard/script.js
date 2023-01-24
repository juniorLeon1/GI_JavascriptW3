function patients() {

    // all of this info is private and the output in the console will be undefined
    const pii = {name: "John Doe" , SSN: "123-45-6789" , sex: "Male" , ethnicity: "Hispanic/Latino" , age: 32 , height: "5 feet and 10in"};


    // This next block is to define what will be public and the user will only have access to the things in here
    // by using get(whatever you need) like on line 31 and 32. Down below is an object named publicInfo with the keys being get(whatever)
    // and the value of those keys being a function that returns the information needed from the previous object above named pii.
    // the object above named pii is the information. The object below named publicInfo is defining what information from above
    // can be shown. publicInfo's values are functions that pull from the information provided by pii.
    const publicInfo = {
        getName: function nameInfo() {
            return pii.name;
        } ,
        getSSN: function ssnInfo() {
            return pii.SSN;
        }
    };
    
    // below, on line 23, tells the main function, patients(), what to do. This is what makes pii private and publicInfo public because
    // the main function is only returning (or making public) everything in the publicInfo object
    return publicInfo;
};

// this turns the entire patients() function into a variable with a different name, and easily able to recall in console log
const patient2 = patients();


console.log(patient2.name);
console.log(patient2.SSN);
console.log(patient2.getName());
console.log(patient2.getSSN());