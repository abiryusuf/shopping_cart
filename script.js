const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function(){
    //console.log("click btn")
    const increase = document.getElementById("phone-count");
    const increaseCount = parseInt(increase.value);
    const newCount = increaseCount + 1;
    increase.value = newCount;
    const phoneTotal = newCount * 1219;
    const total = document.getElementById("phone-total").innerText = "$" + phoneTotal;
    //console.log(total);
});

document.getElementById("minusBtn").addEventListener("click", function(){
    const decrease = document.getElementById("phone-count");
    const phoneCount = parseInt(decrease.value);
    const newCount = phoneCount - 1;
    decrease.value = newCount;
    const total = newCount * 1219;
    document.getElementById("phone-total").innerText = "$" + total;
})
