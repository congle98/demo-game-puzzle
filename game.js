function changeImage(e){
    //bước 1: lấy thẻ đó ra

    // Bước 1.1: lấy src cũ ra
    let srcOld = e.getAttribute("src");
    let sttOld = parseInt(srcOld.charAt(3));
    let part = e.getAttribute("id");

    //bước 2: gán lại giá trị cho thuộc tính src
    let stt;
    if (sttOld == 3) stt = 2
    else if (sttOld == 2) stt =1
        else stt = 3;

    //random min->max
    let src = "./a" + stt + "/"+part+".jpg";
    e.setAttribute("src", src);
    checkWin();
}
function changeImage2(){
    //bước 1: lấy thẻ đó ra
    let element = document.getElementById("p2");

    // Bước 1.1: lấy src cũ ra
    let srcOld = element.getAttribute("src");
    let sttOld = parseInt(srcOld.charAt(3));

    //bước 2: gán lại giá trị cho thuộc tính src
    let stt;
    if (sttOld == 3) stt = 2
    else if (sttOld == 2) stt =1
        else stt = 3;

    //random min->max
    let src = "./a" + stt + "/p2.jpg";
    element.setAttribute("src", src);
}

function checkWin(){
    let src1= document.getElementById("p1").getAttribute("src");
    let src2= document.getElementById("p2").getAttribute("src");
    let src3= document.getElementById("p3").getAttribute("src");
    let t1 = src1.slice(2, 4);
    let t2 = src2.slice(2, 4);
    let t3 = src3.slice(2, 4);
    if (t1==t2 && t2==t3) alert("thang roi");
}