let balance = 1000; // Initial balance
let transactions = [];
const correctPin = '1234'; // Hardcoded PIN for simplicity

function authenticate() {
    const pin = document.getElementById('pin').value;
    if (pin === correctPin) {
        document.querySelector('.screen').innerHTML = '<p id="message">Welcome to the ATM</p>';
        document.querySelector('.buttons').style.display = 'block';
    } else {
        alert('Incorrect PIN. Please try again.');
    }
}

function checkBalance() {
    document.getElementById('message').textContent = `Your balance is $${balance}`;
    transactions.push(`Checked balance: $${balance}`);
}

function withdraw() {
    let amount = prompt("Enter amount to withdraw:");
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    if (amount > balance) {
        alert("Insufficient funds");
        return;
    }
    balance -= amount;
    document.getElementById('message').textContent = `You have withdrawn $${amount}. New balance is $${balance}`;
    transactions.push(`Withdrew: $${amount}`);
}

function deposit() {
    let amount = prompt("Enter amount to deposit:");
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    balance += amount;
    document.getElementById('message').textContent = `You have deposited $${amount}. New balance is $${balance}`;
    transactions.push(`Deposited: $${amount}`);
}

function showHistory() {
    if (transactions.length === 0) {
        document.getElementById('message').textContent = "No transactions yet.";
    } else {
        document.getElementById('message').innerHTML = transactions.join('<br>');
    }
}
