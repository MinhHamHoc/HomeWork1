const dangNhap = () => {
    console.log("Nhập Tài khoản và mật khẩu thành công")
    console.log("Đang đăng nhập vào hệ thống");

    const dangDangNhap = new Promise((res, rej) => {
        let trangThaiDangNhap = true;

        setTimeout(() => {
            if (trangThaiDangNhap) {
                res("Đăng nhập thành công");
            } else {
                rej("Đăng nhập thất bại");
            }
        }, 2000)
    });
    return dangDangNhap;
}

const trangWeb = () => {
    console.log("Loading website...");

    const Loading = new Promise((res, rej) => {
        let Loaded = false;

        setTimeout(() => {
            if (Loaded) {
                res("Load DB success")
            } else {
                rej("Load DB failure, please try again...")
            }
        }, 3000);
    });
    return Loading
}


dangNhap()
.then( () => {return trangWeb()} )
.catch(error => {
    console.log(error);
})