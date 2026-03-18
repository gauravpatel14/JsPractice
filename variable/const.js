const student={
    fullName :"Gp",
    age : 18,
    cgpa :8,
    isPass:true,
}

student["newAge"] =student["age"]+1;
console.log(typeof(student));
console.log(student);
console.log(student["age"]);
console.log(student.newAge);

const Product={
    name:"Paker Pen",
    rating:4,
    offer:5,
    price:270,
}
console.log(Product);
console.log(typeof Product["name"]);