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

//case
const caseBtn = document.getElementById("caseBtn");
caseBtn.addEventListener("click", function(){
    const caseInput = document.getElementById("case-input");
    const caseCount = parseInt (caseInput.value);
    const newCase = caseCount + 1;
    caseInput.value = newCase;
    const total = newCase * 59;
    document.getElementById("price").innerText = "$" + total;
    //console.log(caseCount);
});

