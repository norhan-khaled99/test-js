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


   // }

   // function printText() {
   //    const textInput = document.getElementById("textInput").value;
   //    const textInput1 = document.getElementById("textInput1").value;
   //    const canvas = document.createElement("canvas");
   //    var dwn = document.createElement('a');
   //    const ctx = canvas.getContext("2d");
   //    const img = document.getElementById('image');
   //    var dept = document.getElementById('dept').value;
   //    switch (dept) {
   //       case "A":
   //          var background = 'Screenshot 2023-04-18 143809.png';
   //          var textcolor = '#7E8080';
   //          var arabicfont = '100px arabicmts';
   //          var englishfont = '100px englishmts';
   //          break;
   //       case 'B':
   //          var background = 'Screenshot_20230110_043030.png';
   //          var textcolor = '#00007A';
   //          var arabicfont = '100px arabicmts';
   //          var englishfont = '100px englishmts';
   //          break;
   //       case "C":
   //          var background = 'Screenshot_20230110_041431.png';
   //          var textcolor = '#4AC1E0';
   //          var arabicfont = '100px arabicmts';
   //          var englishfont = '100px englishmts';
   //          break;
   //    }

   //    //img.src = "bg.jpg";
   //    img.setAttribute('src', background);
   //    console.log(img.getAttribute('src'));

   //    img.onload = function () {
   //       canvas.width = img.width;
   //       canvas.height = img.height;
   //       ctx.clearRect(0, 0, canvas.width, canvas.height);
   //       ctx.drawImage(img, 0, 0);
   //       ctx.fillStyle = textcolor;
   //       ctx.textAlign = "center";
   //       ctx.font = arabicfont;
   //       /*Specific diminsions for x,y to keep up with my pictures*/
   //       ctx.fillText(textInput, canvas.width / 2, (canvas.height / 2) + 50);
   //       ctx.font = englishfont;
   //       ctx.fillText(textInput1, canvas.width / 2, (canvas.height / 2) + 200);


   //       /**************************************************************/


   //       // ctx.fillText(textInput, canvas.width / 2, (canvas.height / 2) + 2200);
   //       // ctx.font = englishfont;
   //       // ctx.fillText(textInput1, canvas.width / 2, (canvas.height / 2) + 2500);
   //       dwnimg = document.getElementById("image").src = canvas.toDataURL();
   //       test = dwnimg;
   //    }
   //    document.getElementById('download').style.display = 'inline';
   // }

   //it works but image not changing
   // function printText() {
   //    const textInput = document.getElementById("textInput").value;
   //    const textInput1 = document.getElementById("textInput1").value;
   //    const canvas = document.createElement("canvas");
   //    var dwn = document.createElement('a');
   //    const ctx = canvas.getContext("2d");
   //    const img = document.getElementById('image');
   //    var dept = document.getElementById('dept').value;
   //    switch (dept) {
   //       case "A":
   //          var background = 'Screenshot 2023-04-18 143809.png';
   //          var textcolor = '#7E8080';
   //          var arabicfont = '100px arabicmts';
   //          var englishfont = '100px englishmts';
   //          break;
   //       case 'B':
   //          var background = 'Screenshot_20230110_043030.png';
   //          var textcolor = '#00007A';
   //          var arabicfont = '100px arabicmts';
   //          var englishfont = '100px englishmts';
   //          break;
   //       case "C":
   //          var background = 'Screenshot_20230110_041431.png';
   //          var textcolor = '#4AC1E0';
   //          var arabicfont = '100px arabicmts';
   //          var englishfont = '100px englishmts';
   //          break;
   //    }

   //    img.setAttribute('src', background);
   //    console.log(img.getAttribute('src'));

   //    img.onload = function () {
   //       canvas.width = img.width;
   //       canvas.height = img.height;
   //       ctx.clearRect(0, 0, canvas.width, canvas.height);
   //       ctx.drawImage(img, 0, 0);
   //       ctx.fillStyle = textcolor;
   //       ctx.textAlign = "center";
   //       ctx.font = arabicfont;
   //       ctx.fillText(textInput, canvas.width / 2, (canvas.height / 2) + 50);
   //       ctx.font = englishfont;
   //       ctx.fillText(textInput1, canvas.width / 2, (canvas.height / 2) + 200);

   //       var imgDataUrl = canvas.toDataURL();
   //       var imgObj = new Image();
   //       imgObj.onload = function() {
   //           img.src = imgObj.src;
   //           document.getElementById('download').style.display = 'inline';
   //       };
   //       imgObj.src = imgDataUrl;
   //    }
   //   }




   // function printText() {
   //   const textInput = document.getElementById("textInput").value;
   //   const textInput1 = document.getElementById("textInput1").value;
   //   const canvas = document.createElement("canvas");
   //   var dwn = document.createElement('a');
   //   const img = document.getElementById('image');
   //   var dept = document.getElementById('dept').value;
   //   switch (dept) {
   //     case "A":
   //       var background = 'Screenshot 2023-04-18 143809.png';
   //       var textcolor = '#7E8080';
   //       var arabicfont = '100px arabicmts';
   //       var englishfont = '100px englishmts';
   //       break;
   //     case 'B':
   //       var background = 'Screenshot_20230110_043030.png';
   //       var textcolor = '#00007A';
   //       var arabicfont = '100px arabicmts';
   //       var englishfont = '100px englishmts';
   //       break;
   //     case "C":
   //       var background = 'Screenshot_20230110_041431.png';
   //       var textcolor = '#4AC1E0';
   //       var arabicfont = '100px arabicmts';
   //       var englishfont = '100px englishmts';
   //       break;
   //   }

   //   img.setAttribute('src', background);
   //   console.log(img.getAttribute('src'));

   //   img.onload = function () {
   //     console.log('Image loaded successfully');

   //     canvas.width = img.width;
   //     canvas.height = img.height;
   //     document.body.appendChild(canvas); // Append the canvas element to the DOM
   //     var ctx = canvas.getContext("2d"); // Get the context of the canvas
   //     ctx.clearRect(0, 0, canvas.width, canvas.height);


   //     ctx.drawImage(img, 0, 0);
   //     ctx.fillStyle = textcolor;
   //     ctx.textAlign = "center";
   //     ctx.font = arabicfont;
   //     ctx.fillText(textInput, canvas.width / 2, (canvas.height / 2) + 50);
   //     ctx.font = englishfont;
   //     ctx.fillText(textInput1, canvas.width / 2, (canvas.height / 2) + 200);

   //     document.getElementById('download').style.display = 'inline';
   //   }



   // }


   // function printText() {
   //   const textInput = document.getElementById("textInput").value;
   //   const textInput1 = document.getElementById("textInput1").value;
   //   const canvas = document.createElement("canvas");
   //   var dwn = document.createElement('a');
   //   const img = document.getElementById('image');
   //   var dept = document.getElementById('dept').value;
   //   switch (dept) {
   //     case "A":
   //       var background = 'Screenshot 2023-04-18 143809.png';
   //       var textcolor = '#7E8080';
   //       var arabicfont = '100px arabicmts';
   //       var englishfont = '100px englishmts';
   //       break;
   //     case 'B':
   //       var background = 'Screenshot_20230110_043030.png';
   //       var textcolor = '#00007A';
   //       var arabicfont = '100px arabicmts';
   //       var englishfont = '100px englishmts';
   //       break;
   //     case "C":
   //       var background = 'Screenshot_20230110_041431.png';
   //       var textcolor = '#4AC1E0';
   //       var arabicfont = '100px arabicmts';
   //       var englishfont = '100px englishmts';
   //       break;
   //   }

   //   img.setAttribute('src', background);
   //   console.log(img.getAttribute('src'));

   //   img.onload = function () {
   //     console.log('Image loaded successfully');

   //     canvas.width = img.width;
   //     canvas.height = img.height;
   //     var ctx = canvas.getContext("2d"); // Get the context of the canvas
   //     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

   //     ctx.drawImage(img, 0, 0);
   //     ctx.fillStyle = textcolor;
   //     ctx.textAlign = "center";
   //     ctx.font = arabicfont;
   //     ctx.fillText(textInput, canvas.width / 2, (canvas.height / 2) + 50);
   //     ctx.font = englishfont;
   //     ctx.fillText(textInput1, canvas.width / 2, (canvas.height / 2) + 200);

   //     var existingCanvas = document.querySelector('canvas'); // Find any existing canvas element
   //     if (existingCanvas) {
   //       existingCanvas.remove(); // Remove existing canvas element if found
   //     }

   //     document.getElementById('download').style.display = 'inline';
   //   }
   // }
   //this is the best


   function printText() {
      document.getElementById('image').style.display = 'none';

      const textInput = document.getElementById("textInput").value;
      const textInput1 = document.getElementById("textInput1").value;
      const canvas = document.createElement("canvas");
      canvas.style.display = "block";
      canvas.style.margin = "0 auto";
      canvas.style.width = "-webkit-fill-available";

      var dwn = document.createElement('a');
      const img = document.getElementById('image');

      var dept = document.getElementById('dept').value;

      const prevCanvas = document.querySelector("canvas");
      if (prevCanvas) {
         prevCanvas.parentNode.removeChild(prevCanvas);
      }
      switch (dept) {
         case "A":
            var background = 'Screenshot 2023-04-18 143809.png';
            var textcolor = '#7E8080';
            var arabicfont = '100px arabicmts';
            var englishfont = '100px englishmts';
            break;
         case 'B':
            var background = 'Screenshot_20230110_043030.png';
            var textcolor = '#00007A';
            var arabicfont = '100px arabicmts';
            var englishfont = '100px englishmts';
            break;
         case "C":
            var background = 'Screenshot_20230110_041431.png';
            var textcolor = '#4AC1E0';
            var arabicfont = '100px arabicmts';
            var englishfont = '100px englishmts';
            break;
      }

      img.setAttribute('src', background);
      console.log(img.getAttribute('src'));

      img.onload = function () {
         console.log('Image loaded successfully');

         const inputText = textInput; // Store input values in variables
         const inputText1 = textInput1;

         canvas.width = img.width;
         canvas.height = img.height;
         var ctx = canvas.getContext("2d"); // Get the context of the canvas

         ctx.drawImage(img, 50, 50);
         ctx.fillStyle = textcolor;
         ctx.textAlign = "center";
         ctx.font = arabicfont;
         ctx.fillText(inputText, canvas.width / 2, (canvas.height / 2) + 50); // Use stored input values
         ctx.font = englishfont;
         ctx.fillText(inputText1, canvas.width / 2, (canvas.height / 2) + 200);

         // var existingCanvas = document.querySelector('canvas'); // Find any existing canvas element
         // if (existingCanvas) {
         //   existingCanvas.remove(); // Remove existing canvas element if found
         // }

         document.body.appendChild(canvas); // Append the canvas element to the DOM
         document.getElementById('download').style.display = 'inline';
      }
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
}