var dangNhap = function () {
    console.log("Nhập Tài khoản và mật khẩu thành công");
    console.log("Đang đăng nhập vào hệ thống");
    var dangDangNhap = new Promise(function (res, rej) {
        var trangThaiDangNhap = true;
        setTimeout(function () {
            if (trangThaiDangNhap) {
                res("Đăng nhập thành công");
            }
            else {
                rej("Đăng nhập thất bại");
            }
        }, 2000);
    });
    return dangDangNhap;
};
var trangWeb = function () {
    console.log("Loading website...");
    var Loading = new Promise(function (res, rej) {
        var Loaded = false;
        setTimeout(function () {
            if (Loaded) {
                res("Load DB success");
            }
            else {
                rej("Load DB failure, please try again...");
            }
        }, 3000);
    });
    return Loading;
};
dangNhap()
    .then(function () { return trangWeb(); })["catch"](function (error) {
    console.log(error);
});
