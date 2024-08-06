var a = 10;
let b = 11;
const c = 12;
console.log(a, "    ", b, "    ", c);
var d = 15;
var e = 5;
var f = d + e;
console.log(f);
var f = d - e;
console.log(f);
var f = d * e;
console.log(f);
var f = d / e;
console.log(f);
var f = d % e;
console.log(f);
d++;
console.log(d);
d--;
console.log(d);
var g = [20, 30, 25, 15];
console.log(g);
console.log(g[0]);
console.log(g[1]);
console.log(g[2]);
console.log(g[3]);
console.log(g.length);
g.push(10);
console.log(g);
var h = "      Hello       ";
console.log(h);
console.log(h.trim());
console.log(h.trimStart());
console.log(h.trimEnd());
console.log(h.replace(" ", "*"));
console.log(h.replaceAll(" ", "*"));
console.log(h.toUpperCase());
console.log(h.toLowerCase());
class work {
    name = "kargar";
}
var kargar = new work;
console.log(kargar);
console.log(kargar.name);
var students = {
    fname : ["Ali","Sam","Mammad"] ,
    lname :  ["Akbari","Asghari","Akrami"] ,
    age : [58,48,26],
    score : [98,84,66]
}
console.log(students)
console.log(students.fname)
console.log(students.lname)
console.log(students.age)
console.log(students.score)