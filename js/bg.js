var bgls=[
  "/pic/bg_l/1",
  "/pic/bg_l/2",
  "/pic/bg_l/3",
  "/pic/bg_l/4",
  "/pic/bg_l/5",
  "/pic/bg_l/6",
//  "/pic/bg_l/7",
  "/pic/bg_l/8",
  "/pic/bg_l/9",
  "/pic/bg_l/10",
  "/pic/bg_l/11",
  "/pic/bg_l/12"
];

var bgds=[
  "/pic/bg_d/1.jpg"
];

var index1 = Math.floor(Math.random() * bgls.length);

var bgl=bgls[index1];

document.body.style.setProperty('--bg-l', "url('"+bgl+"')");

var index2 = Math.floor(Math.random() * bgds.length);

var bgd=bgds[index2];


document.body.style.setProperty('--bg-d', "url('"+bgd+"')");
