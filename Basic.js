let n=prompt("Enter the value of n: ");
n= Number.parseInt(n);
//while loop
let i=0;
while(i<n){
console.log(i);
i++;
}
console.log("NEXT QUESTION")
//do-while loop
//Executes atleast once then if the condition is true executes further
let k=0;
do{
console.log(k);
k++;
}while(k<n)

//Next

let age=prompt("Enter your age: ");
age=Number.parseInt(age);

//if, else if, else condition
if (age<0){
    alert("Invalid age");
}
else if (age<14){
    alert("Don't even think about driving.");
}
else if(age>=18){
    alert("You can now learn driving.");
}
else(age>18);{
    alert("If you know how to drive,you can drive. ");
}
alert ("THANK YOU!!");
