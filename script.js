// const plusBtn = document.getElementById("plusBtn");
// plusBtn.addEventListener("click", function(){
//     phoneHandlePrice(true);
    //console.log("click btn")
    // const increase = document.getElementById("phone-count");
    // const increaseCount = parseInt(increase.value);
    // const newCount = increaseCount + 1;
    // increase.value = newCount;
    // const phoneTotal = newCount * 1219;
    // const total = document.getElementById("phone-total").innerText = "$" + phoneTotal;
    //console.log(total);
//});

// document.getElementById("minusBtn").addEventListener("click", function(){
//     phoneHandlePrice(false);
    // const decrease = document.getElementById("phone-count");
    // const phoneCount = parseInt(decrease.value);
    // const newCount = phoneCount - 1;
    // decrease.value = newCount;
    // const total = newCount * 1219;
    // document.getElementById("phone-total").innerText = "$" + total;
//})
// iphone
function phoneHandlePrice(count){
    const decrease = document.getElementById("phone-count");
    const phoneCount = parseInt(decrease.value);
    //const newCount = phoneCount - 1;
    let newCount = phoneCount;
    if(count === true){
        newCount = phoneCount + 1;
    }
    else if (count === false && phoneCount > 0){
        newCount = phoneCount -1; 
    }
    decrease.value = newCount;
    const total = newCount * 1219;
    document.getElementById("phone-total").innerText = "$" + total;
}
    
//case

// const caseBtn = document.getElementById("caseBtn");
// caseBtn.addEventListener("click", function(){
    // const caseInput = document.getElementById("case-input");
    // const caseCount = parseInt (caseInput.value);
    // const newCase = caseCount + 1;
    // caseInput.value = newCase;
    // const total = newCase * 59;
    // document.getElementById("price").innerText = "$" + total;
    //console.log(caseCount);
   // handleCasePrice(true);
//});

// const decreaseBtn = document.getElementById("caseDecrease");
// decreaseBtn.addEventListener("click", function(){
    // const caseInput = document.getElementById("case-input");
    // const caseCount = parseInt(caseInput.value);
    // const newCase = caseCount - 1;
    // caseInput.value = newCase; 
    // const total = newCase * 59;
    // document.getElementById("price").innerText = "$" + total;
    //console.log(newCase)
//     handleCasePrice(false);
// })

function handleCasePrice(increase){
    const caseInput = document.getElementById("case-input");
    const caseCount = parseInt(caseInput.value);
    //const newCase = caseCount - 1;
    let newCase = caseCount;
    if(increase === true){
        newCase = caseCount + 1;
    }
    if(increase === false && caseCount > 0){
        newCase = caseCount -1;

    }
    caseInput.value = newCase; 
    const total = newCase * 59;
    document.getElementById("price").innerText = "$" + total;
}