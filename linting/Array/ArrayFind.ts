// Hàm find sẽ lần lượt sử dụng các phần tử của mảng để thực hiện hàm kiểm tra cho đến khi có giá trị thỏa mãn và hàm kiểm tra trả về true.
const numbers: number[] = [5, 10, 15, 20, 25, 30];

const checkTheNumber = (numbers) => {
    return numbers > 25
}

const checkedNumber = numbers.find(checkTheNumber);
console.log(checkedNumber);

export{numbers, checkTheNumber, checkedNumber}