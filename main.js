
// bài 1
document.getElementById("ketQuaBai1").onclick = function () {
    var name = document.getElementById ("name").value
    var ngayCong = document.getElementById ("soNgayCong").value * 1
    const tienCongNgay = 100000
    tienLuong = ngayCong * tienCongNgay
    
    if (tienLuong <= 1000000) {
        document.getElementById("ketQua").innerHTML = `Tiền lương của ${name} là ${tienLuong} vnđ Hãy cố gắng hơn ở tháng sau nhé, rồi giờ mang tiền về trả nợ đi :))`
    } else if (tienLuong > 3100000) {
        document.getElementById("ketQua").innerHTML = `Tiền lương của ${name} là "tôi không biết". Đừng gian lận tôi bạn, một tháng làm gì có nhiều ngày vậy :))`
    }
    else {
        document.getElementById("ketQua").innerHTML = `Tiền lương của ${name} là ${tienLuong} vnđ Tháng này bạn đã làm rất tốt chúc mừng bạn, bây giờ đi làm vài chai bia nào :()`
    }
}

// BÀI 2
document.getElementById("ketQuaBai2").onclick = function () {
    var number1 = document.getElementById ("number1").value * 1
    var number2 = document.getElementById ("number2").value * 1
    var number3 = document.getElementById ("number3").value * 1
    var number4 = document.getElementById ("number4").value * 1
    var number5 = document.getElementById ("number5").value * 1
    giaTriTrungBinh = (number1 + number2 + number3 + number4 + number5) / 5
    document.getElementById("hienThiBai2").innerHTML = `giá trị trung bình của phép tính là ${giaTriTrungBinh}`
}
// BÀI 3
document.getElementById ("ketQuaBai3").onclick = function() {
    var soTienDoi = document.getElementById ("soTien").value * 1
    const giaTri = 23500
    quyDoi = soTienDoi * giaTri
    document.getElementById("hienThiBai3").innerHTML = `Your money is ${quyDoi} vnđ`
}
// BÀI 4
document.getElementById ("ketQuaBai4").onclick = function() {
    var chieuDai = document.getElementById("chieuDai").value * 1
    var chieuRong = document.getElementById("chieuRong").value * 1
    dienTich = chieuDai * chieuRong
    chuVi = (chieuDai + chieuRong) * 2
    document.getElementById ("ketQuaBai4").innerHTML = `Diện tích là ${dienTich} m2, chu vi là ${chuVi} m2`

}
// BÀI 5
document.getElementById ("ketQuaBai5").onclick = function() {
    var soNguyen = document.getElementById ("soNguyen").value * 1
    hangchuc = Math.floor (soNguyen % 100 / 10)
    hangDonVi = soNguyen % 10
    tongKySo = hangchuc + hangDonVi
    if (soNguyen <= 99) {
        document.getElementById("hienThiBai5").innerHTML = `Tổng ký số của ${soNguyen} là ${hangchuc} + ${hangDonVi} = ${tongKySo} đúng chưa :))`
    } else {
        document.getElementById("hienThiBai5").innerHTML = `Nhập 2 số tôi mới tính được còn nhập nhiều quá tôi chưa được học :))`
    }
    
}