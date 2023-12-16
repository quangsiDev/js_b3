function tinhTienPhat() {
  console.log("yes");
  //   s1:  lấy data từ layout
  var tienMuon = document.getElementById("tien-muon").value * 1;
  var tienTra = document.getElementById("tien-tra").value * 1;
  //   *1 => convert string to number
  var content = "";
  //   s2: so sánh 2 khoản tiền
  if (tienMuon > tienTra) {
    var tienPhat = (tienMuon - tienTra) * 0.015;
    content = `Số tiền phạt: ${tienPhat} $`;
  }
  if (tienMuon <= tienTra) {
    content = "Thank you";
  }
  document.getElementById("result").innerText = content;
}

function tinhTienLuong() {
  // s1: lấy data từ form
  var luongMoiGio = document.getElementById("luong-moi-gio").value * 1;
  var soGioLam = document.getElementById("so-gio-lam").value * 1;
  var tienLuong;
  if (soGioLam <= 40) {
    // ko OT
    tienLuong = luongMoiGio * soGioLam;
  } else {
    // 45 giời = 40 + 5
    tienLuong = 40 * luongMoiGio + (soGioLam - 40) * 1.5 * luongMoiGio;
  }
  // show kết quả
  console.log({ tienLuong });
}

function xepLoai() {
  // input: toan 8, ly 4 , hoa 2
  // s1: lấy data từ layout
  var toan = document.getElementById("diem-toan").value * 1;
  var ly = document.getElementById("diem-ly").value * 1;
  var hoa = document.getElementById("diem-hoa").value * 1;
  // tính điểm tb
  var dtb = (toan + ly + hoa) / 3;
  // xep loai
  if (dtb >= 8.5) {
    alert("giỏi ");
    // } else if (6.5 <= dtb && dtb < 8.5) {
  } else if (6.5 <= dtb) {
    alert("Khá");
    // } else if (5 <= dtb && dtb < 6.5) {
  } else if (5 <= dtb) {
    alert("trung bình");
  } else {
    alert("yếu");
  }
}
