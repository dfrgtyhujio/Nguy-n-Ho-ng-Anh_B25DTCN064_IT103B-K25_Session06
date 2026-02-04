let stu = "Quý, Nam, Lan, Hùng, Nam";

let students = stu.split(", ")

students.reverse();
// Phương thức này có làm thay đổi mảng gốc

console.log(students);

let check = students.includes('Lan');
if (check) {
    console.log('Tên Lan tồn tại trong mảng');
} else {
    console.log('Tên Lan không tồn tại trong mảng');
}

let checkIndex = students.indexOf('Nam');
console.log(checkIndex);


let price = [100, 200, 300, 400];

for (let value of price) {
    console.log(value);   
}

for (let index in price) {
    console.log(index);   
}

let sum = 0;
for (let i = 0; i < price.length; i++){
    if (i % 2 === 0) {
        sum += price[i];
    }
}
console.log(sum);
