async function send() {
    fio = document.getElementById("FIO").value
    lesson = document.getElementById("predmet").value
    comment = document.getElementById("comment").value
    // 7796270109:AAEAKjkRxzeJ3gS7jsEX4wMlkAa3fOGBxnY
    url = "https://api.telegram.org/bot7796270109:AAEAKjkRxzeJ3gS7jsEX4wMlkAa3fOGBxnY/sendMessage"
    text = "*USER*: _${fio}_\n\n*Lesson*: _${lesson}_\n\n*Comment*: _${comment}_"
    const response = await fetch(url, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            'chat_id': "5251851420",
            'text': text,
            'parse_mode':"MarkdownV2"
        })
    });
}