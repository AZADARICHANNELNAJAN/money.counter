alert("Welcome to in my money count Site")
function generateBill() {
    let fivehundredCount = parseInt(document.getElementById('fivehundred').value) || 0;
    let twohundredCount = parseInt(document.getElementById('twohundred').value) || 0;
    let hundredCount = parseInt(document.getElementById('hundred').value) || 0;
    let fiftyCount = parseInt(document.getElementById('fifty').value) || 0;
    let twentyCount = parseInt(document.getElementById('twenty').value) || 0;
    let tenCount = parseInt(document.getElementById('ten').value) || 0;
    let fiveCount = parseInt(document.getElementById('five').value) || 0;

    let total = (fivehundredCount * 500) + (twohundredCount * 200) + (hundredCount * 100) + (fiftyCount * 50) + (twentyCount * 20) + (tenCount * 10) + (fiveCount * 5);

    document.getElementById('total').innerText = total;
    document.getElementById('bill_fivehundred').innerText = fivehundredCount;
    document.getElementById('bill_twohundred').innerText = twohundredCount;
    document.getElementById('bill_hundred').innerText = hundredCount;
    document.getElementById('bill_fifty').innerText = fiftyCount;
    document.getElementById('bill_twenty').innerText = twentyCount;
    document.getElementById('bill_ten').innerText = tenCount;
    document.getElementById('bill_five').innerText = fiveCount;
    document.getElementById('bill_total').innerText = total;
    document.getElementById('bill').style.display = 'block';

}
