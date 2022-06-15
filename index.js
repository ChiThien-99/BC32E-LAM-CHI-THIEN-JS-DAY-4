// Bài tập 1
/**
 * Input:
 * a:number;
 * b:number;
 * c:number;
 * soLonNhat:number;
 * soLonHai:number;
 * soLonBa:number
 *
 * Process:
 * a>b && a>c && b>c  => a>b>c
 * a>b && a>c && c>b  => a>c>b
 * b>a && b>c && a>c  => b>a>c
 * b>a && b>c && c>a  => b>c>a
 * c>a && c>b && a>b  => c>a>b
 * c>b && c>a && b>a  => c>b>a
 * Sau đó gán vào soLonNhat,soLonHai,soLonBa
 *
 * output:
 * soLonBa < soLonHai < soLonNhat
 */
document.getElementById("tinhBT1").onclick = function (event) {
  event.preventDefault();
  var a = Number(document.getElementById("soThuNhat").value);
  var b = Number(document.getElementById("soThuHai").value);
  var c = Number(document.getElementById("soThuBa").value);
  var soLonNhat = 0;
  var soLonHai = 0;
  var soLonBa = 0;
  if (a > b && a > c && b > c) {
    soLonNhat = a;
    soLonHai = b;
    soLonBa = c;
  } else if (a > b && a > c && c > b) {
    soLonNhat = a;
    soLonHai = c;
    soLonBa = b;
  } else if (b > a && b > c && a > c) {
    soLonNhat = b;
    soLonHai = a;
    soLonBa = c;
  } else if (b > a && b > c && c > a) {
    soLonNhat = b;
    soLonHai = c;
    soLonBa = a;
  } else if (c > a && c > b && a > b) {
    soLonNhat = c;
    soLonHai = a;
    soLonBa = b;
  } else if (c > b && c > a && b > a) {
    soLonNhat = c;
    soLonHai = b;
    soLonBa = a;
  } else {
    document.getElementById("outputBT1").innerHTML = "Không xác định";
  }
  document.getElementById("outputBT1").innerHTML =
    soLonBa + "<" + soLonHai + "<" + soLonNhat;
};
/**
 * Input:
 * vaiVe:string
 *
 * Process:
 * Sử dùng switch case
 * nếu value là B => vaiVe="Bố"
 * nếu value là M => vaiVe="Mẹ"
 * nếu value là A => vaiVe="Anh Trai"
 * nếu value là E => vaiVe="Em gái"
 *
 * Output
 * "Câu chào hỏi" + vaiVe
 */
// Bài tập 2
document.getElementById("tinhBT2").onclick = function (event) {
  event.preventDefault();
  var vaiVe = document.getElementById("vaiVe").value;
  switch (vaiVe) {
    case "B":
      {
        vaiVe = "Bố";
      }
      break;
    case "M":
      {
        vaiVe = "Mẹ";
      }
      break;
    case "A":
      {
        vaiVe = "Anh Trai";
      }
      break;
    case "E":
      {
        vaiVe = "Em Gái";
      }
      break;
  }
  document.getElementById("outputBT2").innerHTML =
    "Xin chào " + vaiVe + ".Chúc " + vaiVe + " một ngày tốt lành!";
};
// Bài tập 3
/**
 * Input:
 * a:number;
 * b:number;
 * c:number;
 * countSC:number;
 * countSL:number;
 * Process:
 * nếu a%2==0 thì countSC tăng 1 đơn vị (countSC+=1)
 * nếu b%2==0 thì countSC tăng 1 đơn vị (countSC+=1)
 * nếu c%2==0 thì countSC tăng 1 đơn vị (countSC+=1)
 *
 * Output
 * countSC => số chẵn
 * countSL=3-countSC  => số lẻ
 */
document.getElementById("tinhBT3").onclick = function (event) {
  event.preventDefault();
  var a = Number(document.getElementById("soTN").value);
  var b = Number(document.getElementById("soTH").value);
  var c = Number(document.getElementById("soTB").value);
  var countSC = 0;
  var countSL = 0;
  if (a % 2 == 0) {
    countSC += 1;
  }
  if (b % 2 == 0) {
    countSC += 1;
  }
  if (c % 2 == 0) {
    countSC += 1;
  }
  countSL = 3 - countSC;
  document.getElementById("outputBT3").innerHTML =
    "Trong 3 số nguyên trên có " +
    countSC +
    " số chẵn và " +
    countSL +
    " số lẻ.";
};
// Bài tập 4
/**
 * Input:
 * canhA:number;
 * canhB:number;
 * canhC:number;
 * loaiTG:string;
 *
 * Process:
 * nếu canhA=canhB=CanhC
 * => Tam Giác Đều
 * nếu canhA=canhB or canhA=canhC or canhB=canhC
 * => Tam Giác Cân
 * nếu canhA^2=canhB^2 + canhC^2 or canhB^2=canhA^2 + canhC^2 or canhC^2=canhB^2 + canhA^2
 * => Tam giác vuông
 * Gán tên tam giác vào loaiTG
 *
 * Output
 * loaiTG
 */
document.getElementById("tinhBT4").onclick = function (event) {
  event.preventDefault();
  var canhA = Number(document.getElementById("canhA").value);
  var canhB = Number(document.getElementById("canhB").value);
  var canhC = Number(document.getElementById("canhC").value);
  var loaiTG = "";
  if (canhA == canhB || canhA == canhC || canhB == canhC) {
    loaiTG = "Tam Giác Cân";
  }
  if (canhA == canhB && canhA == canhC && canhB == canhC) {
    loaiTG = "Tam Giác Đều";
  }
  if (
    Math.pow(canhA, 2) == Math.pow(canhB, 2) + Math.pow(canhC, 2) ||
    Math.pow(canhB, 2) == Math.pow(canhA, 2) + Math.pow(canhC, 2) ||
    Math.pow(canhC, 2) == Math.pow(canhB, 2) + Math.pow(canhA, 2)
  ) {
    loaiTG = "Tam Giác Vuông";
  }
  if (loaiTG == "") {
    loaiTG = "Tam giác khác";
  }
  document.getElementById("outputBT4").innerHTML = loaiTG;
};
