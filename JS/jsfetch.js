const url="https://api.github.com/users/KrishnaGaur12";
const res=fetch(url);
res.then((resp)=>{
    resp.json();
}).then((data)=>{
    console.log("Data:",data);
}).catch((error)=>{
    console.log("Error:",error);
}).finally(()=>{
    console.log("Finally fetched successfully");
});