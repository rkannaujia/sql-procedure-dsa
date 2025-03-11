let add = (a,b) => a+b;
let sub = (a,b) => a-b;
let mult = (a,b) => a*b;
let div = (a,b) => a/b;

let personObj= {
    name :"Rahul Kannaujia",
    arrowfun : ()=>{return `Hello ${personObj.name}`},
    normalfun : function (){return `Hello ${this.name}`}
}

export {
    add,
    sub,
    mult,
    div,
    personObj
} 

// module.exports  ={
//     add,
//     sub,
//     mult,
//     div,
//     personObj
// }