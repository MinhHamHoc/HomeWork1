var myArray = [1, 2, 3, 4, 5, 6];
var filterArray = myArray.filter(function (value, index, array) {
    return value % 2 === 0;
});
console.log(filterArray);
