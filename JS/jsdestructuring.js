// const num=[10,20,30,40,50];

// const [a,b,c,d,e]=num;
// console.log(a,b,c,d,e);

// const obj={name:"abc",id:2,email:'abc@gmail.com'};


// const {name:newName,id,email}=obj;
// console.log(newName);
// console.log(id);
// console.log(email);


//rest on array
const num=[1,2,3,4,5,6,7];
const [a,b,...rest]=num;
console.log(a);
console.log(b);
console.log(rest);


//rest on object
const obj={name:"Krishna",id:2,email:"krishna@gmail.com"};
const {name,...other}=obj;
console.log(name);
console.log(other);


//spread on array
const arr1=[1,2,];
const arr2=[3,4,5];
const arr3=[...arr1,...arr2];
console.log(arr3);