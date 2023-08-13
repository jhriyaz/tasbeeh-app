let countValue = 0
let rangeProgress = document.getElementById('rangeProgress1')
document.getElementById('btnIncrement1').addEventListener('click', function () {
    countValue += 1;
    if (countValue <= 33 && countValue >= 1) {
        document.getElementById('numberCount1').innerText = countValue;
        rangeProgress.value = countValue;
        rangeProgress.classList.replace('range-error', 'range-primary')
    }
    if (countValue === 33) {
        rangeProgress.classList.replace('range-primary', 'range-success')
    }
    if (countValue > 33) {
        alert('please start next Tasbeeh')
        countValue = 33
    }
    if (countValue < 1) {
        alert('please count must be more than 0')
    }
})
document.getElementById('btnDecrement1').addEventListener('click', function () {
    countValue -= 1;
    if (countValue <= 33 && countValue >= 0) {
        document.getElementById('numberCount1').innerText = countValue;
        rangeProgress.value = countValue;
        rangeProgress.classList.replace('range-success', 'range-primary')
    }
    if (countValue === 0) {
        rangeProgress.classList.replace('range-primary', 'range-error')
    }
    if (countValue > 33) {
        alert('please start next Tasbeeh')
    }
    if (countValue < 0) {
        alert('please count must be more than 0')
        countValue = 0
    }
})