let sentence=`this is my template literal`;
console.log(typeof sentence);

let obj={
    item:"pen",
    price:10,
}
console.log("the cost of ",obj.item," is ",obj.price);
//alernate method using template literal
console.log(`the cost of ${obj.item} is ${obj.price}`);