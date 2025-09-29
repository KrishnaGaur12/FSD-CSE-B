const num=[10,20,30,40,50];

const [a,b,c,d,e]=num;
console.log(a,b,c,d,e);

const obj={name:"abc",id:2,email:'abc@gmail.com'};


const {name:newName,id,email}=obj;
console.log(newName);
console.log(id);
console.log(email);
