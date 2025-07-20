
/* ================= Task-4 ================= */
/* 1.4. Who am I ? */

document.writeln("<h1 style='text-align:center; font-size:3rem'>Who am I ?</h1>");
var doYouFly = confirm("doYouFly");
var areYouWild, doYouLiveUnderSea;

if (doYouFly) {
    document.writeln("<h3 style='text-align:center;'>doYouFly ?</h3>");
    document.writeln("<h3 style='text-align:center;'>Yes</h3>");
    areYouWild = confirm("areYouWild");
    if (areYouWild == "yes") {
        document.writeln("<h3 style='text-align:center;'>areYouWild ?</h3>");
        document.writeln("<h3 style='text-align:center;'>Yes => Eagle</h3>");
        document.writeln("<img src='./images/Eagle.jpg' alt='Eagle' style='width:300px; border-radius:10px;'/>");
    } else {
        document.writeln("<h3 style='text-align:center;'>areYouWild ?</h3>");
        document.writeln("<h3 style='text-align:center;'>No => Parrot</h3>");
        document.writeln("<img src='./images/Parrot.jpeg' alt='Parrot' style='width:300px; border-radius:10px'/>");
    }
} else {
    document.writeln("<h3 style='text-align:center;'>doYouFly ?</h3>");
    document.writeln("<h3 style='text-align:center;'>No</h3>");
    doYouLiveUnderSea = confirm("doYouLiveUnderSea");
    if (doYouLiveUnderSea == "yes") {
        document.writeln("<h3 style='text-align:center;'>doYouLiveUnderSea ?</h3>");
        document.writeln("<h3 style='text-align:center;'>Yes</h3>");
        areYouWild = confirm("areYouWild");
        if (areYouWild == "yes") {
            document.writeln("<h3 style='text-align:center;'>areYouWild ?</h3>");
            document.writeln("<h3 style='text-align:center;'>Yes => Shark</h3>");
            document.writeln("<img src='./images/shark.jpg' alt='Shark' style='width:300px; border-radius:10px'/>");

        } else {
            document.writeln("<h3 style='text-align:center;'>areYouWild ?</h3>");
            document.writeln("<h3 style='text-align:center;'>No => Dolphen</h3>");
            document.writeln("<img src='./images/dolphin.jpg' alt='Dolphen' style='width:300px; border-radius:10px'/>");

        }
    } else {
        document.writeln("<h3 style='text-align:center;'>doYouLiveUnderSea ?</h3>");
        document.writeln("<h3 style='text-align:center;'>No</h3>");
        areYouWild = confirm("areYouWild")
        if (areYouWild == "yes") {
            document.writeln("<h3 style='text-align:center;'>areYouWild ?</h3>");
            document.writeln("<h3 style='text-align:center;'>Yes => Lion</h3>");
            document.writeln("<img src='./images/lion.jpg' alt='Lion' style='width:300px; border-radius:10px'/>");

        } else {
            document.writeln("<h3 style='text-align:center;'>areYouWild ?</h3>");
            document.writeln("<h3 style='text-align:center;'>No => Cat</h3>");
            document.writeln("<img src='./images/cat.webp' alt='Cat' style='width:300px; border-radius:10px'/>");

        }
    }
}