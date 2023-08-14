let countValue1 = 0
let autoPLay=document.getElementById('increamentPlay')
let decrementAutoPLay=document.getElementById('decreamentPlay')
let resetAutoPLay=document.getElementById('resetPlay')
let rangeProgress1 = document.getElementById('rangeProgress1')
let errorContent = document.getElementById('errorContent')
let errorBox = document.getElementById('errorBox')

// #762d2d4a
// green-- #00800047

document.getElementById('btnIncrement1').addEventListener('click', function () {
    countValue1 += 1;
    autoPLay.currentTime=0
    autoPLay.play()
    if (countValue1 <= 33) {
        document.getElementById('numberCount1').innerText = countValue1;
        rangeProgress1.value = countValue1;
        rangeProgress1.classList.replace('range-error', 'range-primary')
       
    }
    if (countValue1 === 33) {
        rangeProgress1.classList.replace('range-primary', 'range-success')
        errorContent.innerText='Please start saying " আলহামদুলিল্লাহ "'
        errorContent.style.background='#00800047'
        errorBox.classList.remove('hidden')
      
    }
    if (countValue1 > 33) {
       
        countValue1 = 33
        
    }
})
document.getElementById('btnDecrement1').addEventListener('click', function () {
    countValue1 -= 1;
    autoPLay.currentTime=0
    decrementAutoPLay.play()
    if (countValue1 >= 0) {
        document.getElementById('numberCount1').innerText = countValue1;
        rangeProgress1.value = countValue1;
        rangeProgress1.classList.replace('range-success', 'range-primary')
    }
    if (countValue1 === 0) {
        rangeProgress1.classList.replace('range-primary', 'range-error')
    }
    if (countValue1 < 0) {
        errorContent.innerText='Say " সুবহানাল্লাহ " and start clicking Increment'
        errorContent.style.background='#762d2d4a'
        errorBox.classList.remove('hidden')
        countValue1 = 0
    }
})



let countValue2 = 0
let rangeProgress2 = document.getElementById('rangeProgress2')
document.getElementById('btnIncrement2').addEventListener('click', function () {
    countValue2 += 1;
    autoPLay.currentTime=0
    autoPLay.play()
    if(countValue1!==33){
        countValue2=0
        errorBox.classList.remove('hidden')
        errorContent.innerText='Say " সুবহানাল্লাহ " 33 times first';
        errorContent.style.background='#762d2d4a'
        return
        
    }
    if (countValue2 <= 33) {
        document.getElementById('numberCount2').innerText = countValue2;
        rangeProgress2.value = countValue2;
        rangeProgress2.classList.replace('range-error', 'range-primary')
       
    }
    if (countValue2 === 33) {
        rangeProgress2.classList.replace('range-primary', 'range-success')
    }
    if (countValue2 > 33) {
        errorContent.innerText='Please start saying " আল্লাহু আকবার "'
        errorContent.style.background='#00800047'
        countValue2 = 33
    }
})
document.getElementById('btnDecrement2').addEventListener('click', function () {
    countValue2 -= 1;
    autoPLay.currentTime=0
    decrementAutoPLay.play()
    if (countValue2 >= 0) {
        document.getElementById('numberCount2').innerText = countValue2;
        rangeProgress2.value = countValue2;
        rangeProgress2.classList.replace('range-success', 'range-primary')
    }
    if (countValue2 === 0) {
        rangeProgress2.classList.replace('range-primary', 'range-error')
    }
    if (countValue2 < 0) {
        errorContent.innerText='Say " আলহামদুলিল্লাহ " and start clicking Increment';
        errorContent.style.background='#762d2d4a'
        errorBox.classList.remove('hidden')
        countValue2 = 0
    }
})




let countValue3 = 0
let rangeProgress3 = document.getElementById('rangeProgress3')
document.getElementById('btnIncrement3').addEventListener('click', function () {
    countValue3 += 1;
    autoPLay.currentTime=0
    autoPLay.play()
    if(countValue2!==33){
        errorBox.classList.remove('hidden')
       errorContent.innerText='Say " আলহামদুলিল্লাহ " 33 times first';
       errorContent.style.background='#762d2d4a'
       countValue3=0
       return
    }
    if (countValue3 <= 34) {
        document.getElementById('numberCount3').innerText = countValue3;
        rangeProgress3.value = countValue3;
        rangeProgress3.classList.replace('range-error', 'range-primary')
    }
    if (countValue3 === 34) {
        rangeProgress3.classList.replace('range-primary', 'range-success')
        errorContent.innerText='Please click on reset button'
        errorContent.style.background='#00800047'
    }
    if (countValue3 > 34) {
        countValue3 = 34
    }
})
document.getElementById('btnDecrement3').addEventListener('click', function () {
    countValue3 -= 1;
    autoPLay.currentTime=0
    decrementAutoPLay.play()
    if (countValue3 >= 0) {
        document.getElementById('numberCount3').innerText = countValue3;
        rangeProgress3.value = countValue3;
        rangeProgress3.classList.replace('range-success', 'range-primary')
    }
    if (countValue3 === 0) {
        rangeProgress3.classList.replace('range-primary', 'range-error')
    }
    if (countValue3 < 0) {
        errorContent.innerText='Say " আল্লাহু আকবার " and start clicking Increment';
        errorContent.style.background='#762d2d4a'
        errorBox.classList.remove('hidden')
        countValue3 = 0
    }
})



// reset Button
document.getElementById('resetBtn').addEventListener('click',function(){
    resetAutoPLay.currentTime=0
    resetAutoPLay.play()
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
    errorContent.innerText='Reset complete'
    errorContent.style.background='#00800047'
    errorBox.classList.remove('hidden')
})