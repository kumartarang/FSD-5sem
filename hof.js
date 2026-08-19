let ar = [1, 2, 3, 4, 5,6,7,8,9,10];
const multipleoffive = ar.map((data) => data * 5);
console.log(multipleoffive);

const divisibleoffive = ar.filter((data) => data % 5 === 0);
console.log(divisibleoffive);

const firstdivisibleoffive = ar.find((data) => data % 5 === 0);
console.log(firstdivisibleoffive);

