function convert() {
    let amount = document.getElementById('amount').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    if (from == to) {
        alert('amount');
    }
    if (from =="vnd" && to =="usd") {
        alert(amount/23000);
    }
    if(from =="usd" && to =="vnd"){
        alert(amount*23000);
    }
}


