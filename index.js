function ktDiemHopLe(a, b, c) {
    let kt = true;
    if ((a === 0) || (b === 0) || (c === 0)) {
        kt = false;
    }
    return kt;
}

function totalDiem(a, b, c, d, e) {
    let tong = 0;
    tong = a + b + c + d + e;
    return tong;
}

function ktKetQuaHT(tongDiem, diemChuan) {
    let kt = false;
    if (tongDiem >= diemChuan) {
        kt = true;
    }
    return kt;
}

document.getElementById("traKetQua").onclick = function () {
    // B1 Đầu vào
    let diemMon1 = +document.getElementById("diemMon1").value;
    let diemMon2 = +document.getElementById("diemMon2").value;
    let diemMon3 = +document.getElementById("diemMon3").value;
    let uTKhuVuc = +document.getElementById("uTienKhuVuc").value;
    let uTDoiTuong = +document.getElementById("uTienDoiTuong").value;
    let diemChuan = +document.getElementById("diemChuan").value;
    let kt = false;
    let thongbao = "";
    let total = 0;
    // B2 Xử lý
    // kiểm tra điểm hợp lệ
    kt = ktDiemHopLe(diemMon1, diemMon2, diemMon3);
    if (kt === true) {
        total = totalDiem(diemMon1, diemMon2, diemMon3, uTKhuVuc, uTDoiTuong);
        kt = ktKetQuaHT(total, diemChuan);
        if (kt === true) {
            thongbao = "Thí sinh đã trúng tuyển";
        } else {
            thongbao = "Thí sinh không trúng tuyển";
        }
    } else {
        total = totalDiem(diemMon1, diemMon2, diemMon3, uTKhuVuc, uTDoiTuong);
        thongbao = "Thí sinh bị điểm liệt";
    }

    // B3 Đầu ra

    let result = "<div>";
    result += "<p>" + " Tổng điểm đạt: " + total + "</p>";
    result += "<p>" + thongbao + "</p>"
    result += "</div>";
    document.getElementById("showKetQuaHt").innerHTML = result;
}

// Tính tiền điện
function ktName(ten) {
    let kt = true
    if (ten === "") {
        kt = false;
    }
    return kt;
}

document.getElementById("btnTinhTien").onclick = function () {

    // B1 Đầu vào
    let dienNangTt = +document.getElementById("dienNangTt").value;
    let tenKh = document.getElementById("nameKh").value;
    let currentForm = new Intl.NumberFormat("vn-VN");
    let tien = 0;
    let kt = false;



    // B2 Xử lý
    kt = ktName(tenKh);
    if (kt === true) {
        if (dienNangTt <= 50) {
            tien += dienNangTt * 500;
        } else if (dienNangTt <= 100) {
            tien += 50 * 500;
            tien += (dienNangTt - 50) * 650;
        } else if (dienNangTt <= 200) {
            tien += 50 * 500;
            tien += 50 * 650;
            tien += (dienNangTt - 100) * 850;
        } else if (dienNangTt <= 350) {
            tien += 50 * 500;
            tien += 50 * 650;
            tien += 100 * 850;
            tien += (dienNangTt - 200) * 1100;
        } else {
            tien += 50 * 500;
            tien += 50 * 650;
            tien += 100 * 850;
            tien += 150 * 1100;
            tien += (dienNangTt - 350) * 1300;
        }
        let result = "<div>";
        result += "<p>" + " Tiền điện phải trả: " + currentForm.format(tien) + "VNĐ</p>";
        result += "</div>";
        document.getElementById("showTienDien").innerHTML = result;
    } else {
        let result = "<div>";
        result += "<p>" + " Tên khách hàng chưa nhập " + "</p>";
        result += "</div>";
        document.getElementById("showTienDien").innerHTML = result;
    }

    // B3 Đầu ra



}