let stra = 'apple';
let strb = 'banana';
let strc = 'orange';
let result = strc.localeCompare(stra);
document.write(result);

let str1 = "The rain in spain and SPAIN"
let matches1 = str1.match(/ain/g.dotAll)
document.write(matches1)

let str2 = 'The Rain in Spain';
let matches2 = str2.match(/rain/i);
document.write(matches2);

let str3 = `The rain in Spain
stays mainly in the plain.`;
let matches3 = str3.match(/^stays/m);
document.write(matches3);

let str4 = 'The rain\nin Spain';
let matches4 = str4.match(/rain.in/s);
document.write(matches4);