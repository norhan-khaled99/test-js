function get(name) {
   if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}
document.getElementById('download').style.display = 'none';
var fname = get('fname');
var lname = get('lname');
if (typeof fname !== 'undefined' && fname !== null) {
   document.getElementById('textInput').value = fname;
   //document.getElementById('textInput1').value = lname;
} else {
   document.getElementById('textInput').value = '';
}
if (typeof lname !== 'undefined' && lname !== null) {
   document.getElementById('textInput1').value = lname;
} else {
   document.getElementById('textInput1').value = '';
}

function printText() {
   const textInput = document.getElementById("textInput").value;
   const textInput1 = document.getElementById("textInput1").value;
   const canvas = document.createElement("canvas");
   var dwn = document.createElement('a');
   const ctx = canvas.getContext("2d");
   const img = document.getElementById('image');
   var dept = document.getElementById('dept').value;
   switch (dept) {
      case "A":
         var background = 'Screenshot 2023-04-18 143809.png';
         var textcolor = '#7E8080';
         var arabicfont = '200px arabic';
         var englishfont = '200px english';
         break;
      case 'B':
         var background = 'Screenshot_20230110_043030.png';
         var textcolor = '#00007A';
         var arabicfont = '200px arabic';
         var englishfont = '200px english';
         break;
      case "C":
         var background = 'Screenshot_20230110_041431.png';
         var textcolor = '#4AC1E0';
         var arabicfont = '200px arabicmts';
         var englishfont = '200px englishmts';
         break;
   }

   //img.src = "bg.jpg";
   img.setAttribute('src', background);
   console.log(img.getAttribute('src'));

   img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = textcolor;
      ctx.textAlign = "center";
      ctx.font = arabicfont;
      ctx.fillText(textInput, canvas.width / 2, (canvas.height / 2) + 2200);
      ctx.font = englishfont;
      ctx.fillText(textInput1, canvas.width / 2, (canvas.height / 2) + 2500);
      dwnimg = document.getElementById("image").src = canvas.toDataURL();
      test = dwnimg;
   }
   document.getElementById('download').style.display = 'inline';
}

function download() {
   printText();
   //var downloadlink = document.createElement()
   setTimeout(function () {
      var dwn = document.createElement('a');
      dwn.download = 'card.png';
      dwn.href = test;
      dwn.click();
   }, 1000);
}