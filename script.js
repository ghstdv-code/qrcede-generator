const wrapper = document.querySelector(".wrapper"),
generateBtn = wrapper.querySelector(".form button"),
inputLink = wrapper.querySelector(".form input[type=text]"),
qrImg = wrapper.querySelector(".qr-code img");

let inputValue;

generateBtn.addEventListener("click", () => {
    let qrValue = inputLink.value;
    if(!qrValue) alert('Please complete empty fields');
    else{
        if(qrValue === inputValue) return;
        inputValue = qrValue;
        generateBtn.innerText = "Generating QR Code...";
        qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
        qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate";
        });
    }
    
});

inputLink.addEventListener("keyup", () => {
    if(!inputLink.value) wrapper.classList.remove("active");
});