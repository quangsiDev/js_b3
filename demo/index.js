// data type

// boolean : true false

var isLogin = true;
isLogin = false;

// biểu thức so sánh
var ss1 = 2 > 10;
// ss bằng ~ trùng
var ss2 = 2 == "2";
var ss3 = 2 === "2";

// ss khác

var ss4 = "alice" != "tommy";
console.log("😀 - ss4", ss4);

var ss5 = 14 <= 14;
var ss6 = 15 >= 12;

//  đúng hết 3/3 tiêu chí => pass => so sánh &&

// đúng 1/3 tiêu chí => pass => so sánh ||

// phép so sánh AND ( && ) ~ chỉ true khi tất cả đều true
// var ss7 = 2 > 1 && 2 > 3;
var ss7 = true && false && true && true;
console.log("😀 - ss7", ss7);

// phep so sánh OR (hoặc ||) ~ chỉ sai khi tất cả đều sai

var ss8 = true || true || false || false || false;

/**
 Cấu trúc điều khiện

 if( điều kiện )
   {
        Hành động chỉ chạy khi điều kiện đúng
   }

 */

var isValid = true;
isValid = false;
// isValid = falses;
console.log("-----");
// if (isValid == true) {
if (isValid) {
  console.log("Đăng kí thành công");
  console.log("Đăng kí thành công");
  console.log("Đăng kí thành công");
  console.log("Đăng kí thành công");
  console.log("Đăng kí thành công");
}
// if (isLogin == false) {
if (!isLogin) {
  console.log("Đăng kí thất bại !!!");
}
console.log("-----");

/**
 Cấu trúc điều khiện

 if( điều kiện )
   {
    hành động 1
   }else {
    hành động 2
   }
  //  so sánh 2 số có dùng được if else ko ? => lớn, bé , bằng => ko dùng được

 */

isValid = true;

if (isValid) {
  console.log("Login success");
} else {
  console.log("Login fail");
}

// else if => áp dụng khi có 3 trường hợp trở lên

var n1 = 2;
var n2 = 5;

if (n1 > n2) {
  console.log("n1 lớn hơn");
} else if (n1 < n2) {
  console.log("n1 bé hơn");
} else {
  console.log("n1 bằng n2");
}

// toán tử 3 ngôi
isValid = true;
// var message = "";
// if (isValid) {
//   message = "success";
// } else {
//   message = "fail";
// }
var message = isValid == true ? "success" : "fail";
console.log("😀 - message", message);

// switch case ~"Chỉ" so sánh bằng

var luaChon = "baooooo";

switch (luaChon) {
  case "búa": {
    console.log("user chọn búa");
    break;
  }
  case "kéo": {
    console.log("user chọn kéo");
    break;
  }
  case "bao": {
    console.log("user chọn bao");
    break;
  }
  default: {
    console.log("Lựa chọn không hợp lệ");
  }
}
// xếp loại học sinh bằng witch case

// dc 1
// ko dc 0
