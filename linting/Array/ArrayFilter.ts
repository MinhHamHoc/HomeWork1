const myArray: number[] = [1, 2, 3, 4, 5, 6]

//Filter dùng để lọc mảng ban đầu
// callback cần trả về true hoặc false , nếu nó là true mảng không thay đổi nếu là false phần tử đó sẽ được lọc ra khỏi mảng ban đầu
const filterArray = myArray.filter((value, index, array) => {
    return value % 2 === 0
});

console.log(filterArray);