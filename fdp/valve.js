var flow = 600;
var dir = 0;
var rot = 0;
var h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11;

setInterval(calH, 1000);

function clickedValve() {
  if (flow < 1700 && dir == 0) {
    flow = flow + 100;
    rot = rot + 45;
  } else if (flow > 600 && dir == 1) {
    flow = flow - 100;
    rot = rot - 45;
  } else if (dir == 1) {
    dir = 0;
    flow = flow + 100;
    rot = rot + 45;
  } else if (dir == 0) {
    dir = 1;
    flow = flow - 100;
    rot = rot - 45;
  }
  console.log(flow);
  document.getElementById("outlet").style.transform = "rotate(" + rot + "deg)";
}

function clickedMot() {
  document.getElementById("motbut").style.transform = "rotate(" + 270 + "deg)";
}
var gate = 1;
function clickedgate() {
  if (gate == 1) {
    document.getElementById("gatebut").style.transform =
      "rotate(" + 270 + "deg)";
    gate = 0;

    document.getElementById("labFlow").innerText = "";

    setTimeout(function () {
      document.getElementById("labFlow").innerText =
        "final height: " + 0.01875 * flow;
    }, 30000);

    i = 30;
    var inter = setInterval(function () {
      document.getElementById("timer").innerText = "" + i;
      i--;
      if (i == 0) {
        i = 30;
        document.getElementById("timer").innerText = "";
        clearInterval(inter);
      }
    }, 1000);
  } else {
    document.getElementById("gatebut").style.transform = "rotate(" + 0 + "deg)";
    gate = 1;
  }
}

function calH() {
  h1 = 28.84 - (2.46 * flow * flow) / 1000000;
  h2 = 28.84 - (2.93 * flow * flow) / 1000000;
  h3 = 28.84 - (3.54 * flow * flow) / 1000000;
  h4 = 28.84 - (4.37 * flow * flow) / 1000000;
  h5 = 28.84 - (6.02 * flow * flow) / 1000000;
  h6 = 28.84 - (7.96 * flow * flow) / 1000000;
  h7 = h5;
  h8 = h4;
  h9 = h3;
  h10 = h2;
  h11 = h1;

  document.getElementById("h1").innerText = "h1:" + h1;
  document.getElementById("h2").innerText = "h2:" + h2;
  document.getElementById("h3").innerText = "h3:" + h3;
  document.getElementById("h4").innerText = "h4:" + h4;
  document.getElementById("h5").innerText = "h5:" + h5;
  document.getElementById("h6").innerText = "h6:" + h6;
  document.getElementById("h7").innerText = "h7:" + h7;
  document.getElementById("h8").innerText = "h8:" + h8;
  document.getElementById("h9").innerText = "h9:" + h9;
  document.getElementById("h10").innerText = "h10:" + h10;
  document.getElementById("h11").innerText = "h11:" + h11;

  console.log(h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11);
}
