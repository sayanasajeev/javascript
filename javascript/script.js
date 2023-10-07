console.log('hi')

variable
var a=9;
 console.log(a);
 block1
{

    var a=20;
    console.log(a);
    // block2                          
}
let b=23;
console.log(b);
{
    let b=34;
    console.log(b);
}
b=44
console.log(b);
// const
const t=30;
console.log(t);
{
const t=90;
console.log(t);


}
console.log(t);
// DATATYPE
var nam='sayana';
console.log(typeof(nam));
var nam='flowers are beautiful';
console.log(typeof(nam));
// NUMBERS
var count=10;
console.log( typeof(count));
// boolean
var bg=true;
console.log(typeof(bg));
// UNDEFIEND
var gtype;
console.log(typeof(gtype));
// arrays
let arr=['blue','white','red','10']
console.log(arr[1]);
console.log(arr[3]);
console.log(arr);
console.log(arr.length);
arr.push('violet');
arr.pop()
console.log(arr);
// javascript objects
let car={
    mileage:100,
    model:'i10',
    color:'red'

}
console.log(car)
console.log(car.model)
console.log(car.mileage)
let person=new Object();
person.gender='male';
person.height='180';
console.log(person);
// operators

    let a=5
    let b=5
    sum=a+b;
    console.log(sum);
let c=5
let R=5
difference=5-5
console.log(difference);
//block3
let e=5
let f=5
product=5*5
console.log(product)
// block4
let g=5
let h=5
divide=5/5
console.log(divide)
// block5
var m=10;
var z=m++;
console.log(z);
console.log(m);
// block6
var x=10;
var y=++x;
console.log(x);
console.log(y);

if (a==b) {
    console.log('a is equal to b')
    
} else {
    console.log('a is not equal to b')
    
}
if (a!=b) {
    console.log('a is not equal to b')
    
} else {
    console.log('a is equal to b')
    
}
if (a==b && a==10) {
    console.log('a is equal tob')
    
} else {
    console.log('a is not equal to b and a is not 10')
    
}
c=10
d='10';
if (c===d) {
    console.log('c equal to d')
} else {
    console.log('c not equal to d')
}
if (c==d) {
    console.log('c is is equal to d')
    
} else {
    console.log('c is not equal to d')
    
}
var x=10;
var y=20;
if (x>30 || x==y) {

    console.log('x  is grater than 20 and equal to y  ')
} else {
    console.log('x is not greater than 20 and x is not equal to y')
    
}
let add=6;
 add*=3;
 console.log(add);

 var b=4;
 var a=10;
 var c=2;
 var d=10;
var exp=a+b*(c-d)-7;
console.log(exp);

// functions
function display (name){
    console.log('Hi '+name+' Welcome to js');
}
display('sayana');
function addition(t,s){
var sum=t+s;
return sum;
}
var sum=addition(10,30);
console.log('the sum is'+sum);

function difference(x,y){
    var d=x-y;
    return d;
}
 var d=difference(10,5);
 console.log('THE DIFFERENCE IS '+d)

function product(m,n){
    var p=m*n;
    return p;
}
var p=product(10,10);
console.log('THE PRODUCT IS '+p)