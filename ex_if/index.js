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
