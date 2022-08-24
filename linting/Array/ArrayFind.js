// Hàm find sẽ lần lượt sử dụng các phần tử của mảng để thực hiện hàm kiểm tra cho đến khi có giá trị thỏa mãn và hàm kiểm tra trả về true.
var numbers = [5, 10, 15, 20, 25, 30];
var checkTheNumber = function (numbers) {
    return numbers > 25;
};
var checkedNumber = numbers.find(checkTheNumber);
console.log(checkedNumber);
