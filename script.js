document.addEventListener('DOMContentLoaded', function() {
    const latinMap = {
        'А': 'A', 'а': 'a',
        'Б': 'B', 'б': 'b',
        'В': 'V', 'в': 'v',
        'Г': 'H', 'г': 'h',
        'Д': 'D', 'д': 'd',
        'Е': 'Je', 'е': 'je',
        'Ё': 'Jo', 'ё': 'jo',
        'Ж': 'Ž', 'ж': 'ž',
        'З': 'Z', 'з': 'z',
        'І': 'I', 'і': 'i',
        'Й': 'J', 'й': 'j',
        'К': 'K', 'к': 'k',
        'Л': 'Ł', 'л': 'ł',
        'М': 'M', 'м': 'm',
        'Н': 'N', 'н': 'n',
        'О': 'O', 'о': 'o',
        'П': 'P', 'п': 'p',
        'Р': 'R', 'р': 'r',
        'С': 'S', 'с': 's',
        'Т': 'T', 'т': 't',
        'У': 'U', 'у': 'u',
        'Ў': 'Ŭ', 'ў': 'ŭ',
        'Ф': 'F', 'ф': 'f',
        'Х': 'Ch', 'х': 'ch',
        'Ц': 'C', 'ц': 'c',
        'Ч': 'Č', 'ч': 'č',
        'Ш': 'Š', 'ш': 'š',
        'Ы': 'Y', 'ы': 'y',
        'Ь': "'", 'ь': "'",
        'Э': 'E', 'э': 'e',
        'Ю': 'Ju', 'ю': 'ju',
        'Я': 'Ja', 'я': 'ja'
    };

    document.getElementById('convert-btn').addEventListener('click', function() {
        const inputText = document.getElementById('input').value;
        let outputText = '';
        
        for (let i = 0; i < inputText.length; i++) {
            const char = inputText[i];
            outputText += latinMap[char] || char; // Подставляем символ из словаря или оставляем оригинал
        }
        
        document.getElementById('output').value = outputText;
    });

    document.getElementById('copy-btn').addEventListener('click', function() {
        const outputText = document.getElementById('output');
        outputText.select();
        document.execCommand('copy');
        alert('Тэкст скапіяваны!');
    });
});
