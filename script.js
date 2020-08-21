const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function(){
    //console.log("click btn")
    const increase = document.getElementById("increase");
    const increaseCount = parseInt(increase.value);
    const newCount = increaseCount + 1;
    increase.value = newCount;
    const phoneTotal = newCount * 1219;
    const total = document.getElementById("phone-total").innerText = phoneTotal;
    console.log(phoneTotal);
})
