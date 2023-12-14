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

//  đúng hết 3/3 tiêu chí => pass

// đúng 1/3 tiêu chí => pass

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
