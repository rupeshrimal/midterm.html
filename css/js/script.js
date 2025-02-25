document.getElementById('calculateBtn').addEventListener('click', function() {
    let input = parseInt(document.getElementById('factorialInput').value);
    let result = factorial(input);
    document.getElementById('resultScreen').innerText = `${input}! = ${result}`;
});

document.getElementById('darkModeBtn').addEventListener('click', function() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
});

document.getElementById('lightModeBtn').addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
});

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

