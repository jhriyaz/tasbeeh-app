let countValue1 = 0
document.getElementById('btnIncrement1').addEventListener('click', function () {
    countValue1 += 1;
    let rangeProgress = document.getElementById('rangeProgress1')
    if (countValue1 <= 33) {
        document.getElementById('numberCount1').innerText = countValue1;
        rangeProgress.value = countValue1;
        rangeProgress.classList.replace('range-error', 'range-primary')
    }
    if (countValue1 === 33) {
        rangeProgress.classList.replace('range-primary', 'range-success')
    }
    if (countValue1 > 33) {
        alert('please start next Tasbeeh')
    }
})