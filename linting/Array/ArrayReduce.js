//reduce nhận vào 1 mảng và tính toán thành một giá trị duy nhất
// Callback bây giờ nhận bộ tích luỹ ( nó tích luỹ tất cả các giá trị trả về . 
// Giá trị của nó là sự tích luỹ của các tích luỹ trả về trước đó ) giá trị hiện tại, 
// index hiện tại và cuối cùng là toàn bộ mảng
var numbers = [5, 25, 20, 1,];
var sum = numbers.reduce(function (acc, crrValue) {
    return acc + crrValue;
});
console.log(sum);
