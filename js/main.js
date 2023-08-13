let countValue1 = 0
let rangeProgress1 = document.getElementById('rangeProgress1')
document.getElementById('btnIncrement1').addEventListener('click', function () {
    countValue1 += 1;
    if (countValue1 <= 33 && countValue1 >= 1) {
        document.getElementById('numberCount1').innerText = countValue1;
        rangeProgress1.value = countValue1;
        rangeProgress1.classList.replace('range-error', 'range-primary')
    }
    if (countValue1 === 33) {
        rangeProgress1.classList.replace('range-primary', 'range-success')
    }
    if (countValue1 > 33) {
        alert('please start saying আলহামদুলিল্লাহ')
        countValue1 = 33
    }
})
document.getElementById('btnDecrement1').addEventListener('click', function () {
    countValue1 -= 1;
    if (countValue1 <= 33 && countValue1 >= 0) {
        document.getElementById('numberCount1').innerText = countValue1;
        rangeProgress1.value = countValue1;
        rangeProgress1.classList.replace('range-success', 'range-primary')
    }
    if (countValue1 === 0) {
        rangeProgress1.classList.replace('range-primary', 'range-error')
    }
    if (countValue1 < 0) {
        alert('please count must be more than 0')
        countValue1 = 0
    }
})



let countValue2 = 0
let rangeProgress2 = document.getElementById('rangeProgress2')
document.getElementById('btnIncrement2').addEventListener('click', function () {
    countValue2 += 1;
    if(countValue1!==33){
        return alert('say সুবহানাল্লাহ 33 times first')
    }
    if (countValue2 <= 33 && countValue2 >= 1) {
        document.getElementById('numberCount2').innerText = countValue2;
        rangeProgress2.value = countValue2;
        rangeProgress2.classList.replace('range-error', 'range-primary')
    }
    if (countValue2 === 33) {
        rangeProgress2.classList.replace('range-primary', 'range-success')
    }
    if (countValue2 > 33) {
        alert('please start saying আল্লাহু আকবার')
        countValue2 = 33
    }
})
document.getElementById('btnDecrement2').addEventListener('click', function () {
    countValue2 -= 1;
    if (countValue2 <= 33 && countValue2 >= 0) {
        document.getElementById('numberCount2').innerText = countValue2;
        rangeProgress2.value = countValue2;
        rangeProgress2.classList.replace('range-success', 'range-primary')
    }
    if (countValue2 === 0) {
        rangeProgress2.classList.replace('range-primary', 'range-error')
    }
    if (countValue2 < 0) {
        alert('please count must be more than 0')
        countValue2 = 0
    }
})




let countValue3 = 0
let rangeProgress3 = document.getElementById('rangeProgress3')
document.getElementById('btnIncrement3').addEventListener('click', function () {
    countValue3 += 1;
    if(countValue2!==33){
       return alert('say আলহামদুলিল্লাহ 33 times first');
        
    }
    if (countValue3 <= 33 && countValue3 >= 1) {
        document.getElementById('numberCount3').innerText = countValue3;
        rangeProgress3.value = countValue3;
        rangeProgress3.classList.replace('range-error', 'range-primary')
    }
    if (countValue3 === 33) {
        rangeProgress3.classList.replace('range-primary', 'range-success')
    }
    if (countValue3 > 33) {
        alert('please click on reset button')
        countValue3 = 33
    }
})
document.getElementById('btnDecrement3').addEventListener('click', function () {
    countValue3 -= 1;
    if (countValue3 <= 33 && countValue3 >= 0) {
        document.getElementById('numberCount3').innerText = countValue3;
        rangeProgress3.value = countValue3;
        rangeProgress3.classList.replace('range-success', 'range-primary')
    }
    if (countValue3 === 0) {
        rangeProgress3.classList.replace('range-primary', 'range-error')
    }
    if (countValue3 < 0) {
        alert('please count must be more than 0')
        countValue3 = 0
    }
})



// reset Button
document.getElementById('resetBtn').addEventListener('click',function(){
    countValue1=0
    countValue2=0
    countValue3=0
    document.getElementById('numberCount1').innerText=0
    document.getElementById('numberCount2').innerText=0
    document.getElementById('numberCount3').innerText=0
    rangeProgress1.value=0
    rangeProgress2.value=0
    rangeProgress3.value=0
    rangeProgress1.classList.replace('range-primary', 'range-error')
    rangeProgress2.classList.replace('range-primary', 'range-error')
    rangeProgress3.classList.replace('range-primary', 'range-error')
})