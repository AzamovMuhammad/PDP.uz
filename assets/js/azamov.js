let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("navbar").style.background = 'rgba(47, 47, 47, 0.227)';
    document.getElementById('link1').style. color = 'white';
    document.getElementById('link2').style. color = 'white';
    document.getElementById('link3').style. color = 'white';
    document.getElementById('white').style.display = 'block'
    document.getElementById('black').style.display = 'none'

  } else {
    document.getElementById("navbar").style.background = "white";
    document.getElementById('link1').style.color = 'black'
    document.getElementById('link2').style.color = 'black'
    document.getElementById('link3').style.color = 'black'
    document.getElementById('black').style.display = 'block'
    document.getElementById('white').style.display = 'none'
  }

  prevScrollpos = currentScrollpos;
};