document.getElementById('convert-btn').addEventListener('click', function() {
    const input = document.getElementById('input').value;
    let output = '';
    
    // Простейшая конвертация для теста
    output = input.replace(/а/gi, 'a')
                 .replace(/б/gi, 'b')
                 .replace(/в/gi, 'v');
    
    document.getElementById('output').value = output;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
});
