// let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollpos = window.pageYOffset;
  if (currentScrollpos === 0) {
    document.getElementById("navbar").style.background = 'rgba(47, 47, 47, 0.227)';
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById('link1').style. color = 'white';
    document.getElementById('link2').style. color = 'white';
    document.getElementById('link3').style. color = 'white';
    document.getElementById('white').style.display = 'block'
    document.getElementById('black').style.display = 'none'
    document.getElementById('fas').style.color = 'white'

  } else {
    document.getElementById("navbar").style.background = "white";
    document.getElementById("navbar").style.boxShadow = "0px 1px 8px #c5c5c5";
    document.getElementById('link1').style.color = 'black'
    document.getElementById('link2').style.color = 'black'
    document.getElementById('link3').style.color = 'black'
    document.getElementById('black').style.display = 'block'
    document.getElementById('white').style.display = 'none'
    document.getElementById('fas').style.color = 'black'
    
  }
};