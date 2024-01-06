function generateQRCode() {
    let website = document.getElementById("website").value;
    let colorInt = document.getElementById("color-pattern-id").value
    let outputImage = document.getElementById('output-image');
    if (website) {
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, {
        text: website,
        width: 177,
        height: 177,
        colorDark: colorInt,
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
      /*With some styles*/
      document.getElementById("qrcode-container").style.display = "block";
      outputImage.style.display = 'block';
    } else {
      alert("Please enter a valid URL");
    }
  }

document.addEventListener('DOMContentLoaded', (e)=>{
  document.getElementById('color-icons-id').addEventListener('click',(e)=>{ 
   document.getElementById('color-pattern').classList.toggle('color-pattern-show') 
  })
})