const image=React.createElement("img",
    {
        src:"https://i.pinimg.com/736x/38/5e/19/385e19bb0f1b6047725ad5a4858f9b0d.jpg",
        width: "150",
        height:"150",
        alt:"book-image"
    },null
);
const h4=React.createElement("h4",null,"Price:345/-");
const child=React.createElement("div",{
    className: "card"
},image,h4);
const parent=document.getElementById("root");
// ReactDOM.render(child,parent); changed in react 19
const root=ReactDOM.createRoot(parent);
root.render(child);