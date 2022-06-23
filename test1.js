/*
Make the function that takes 3 arguments: array of objects, key as string and value.
The function should find all objects in the array (1st argument) that have property (2nd argument) equal to the value (3rd argument) and return array of objects that pass this test.
You can consider that each object will have the property passed as 2nd value.
*/

const array1 = [
    { id: "333222111", name: "SuleJman", age: "22" },
    { id: "321123432", name: "Stefan", age: "25" },
    { id: "222312543", name: "Semir", age: "32" },
    { id: "222312", name: "ImRan", age: "35" },
    { id: "2223125", name: "IrfAn", age: "42" },
    { id: "2223232", name: "Daris", age: "18" },
    { id: "222324234", name: "Ahmed", age: "25" },
];

const fn = (array, names) => {
    let na = names.toUpperCase();
    const obj = array.filter((n) => {
        let naa = n.name.toUpperCase();
        if (na == naa) return true;
        else return false;
    })
    return obj;
};

console.log(fn(array1, "Semir"), "prvi");
//result [ { id: '222312543', name: 'Semir', age: '32' } ] prvi

console.log(fn(array1, "SEMIR"), "drugi");
//result [ { id: '222312543', name: 'Semir', age: '32' } ] drugi

console.log(fn(array1, "SEMIR1"), "treci");
    //result [] treci
