const cName = document.getElementById("fname")
const lName = document.getElementById("lname")
const pName = document.getElementById("pname")
const eName = document.getElementById("ename")

function sendMessage(type) {
    const n = cName.value;
    const l = lName.value;
    const p = pName.value;
    const e = eName.value;

    console.log("1234567")
    const apiUrl = `https://api.telegram.org/bot6731251764:AAG50oZW8lZs5KHUSEktWcAL_dyWpbMLZgg/sendMessage`;

    // Формируем данные для отправки сообщения
    const data = {
        chat_id: "1203922466",
        text: `${n}\n ${l} \n ${p} \n ${e} \n ${type}`
    };

    // Отправляем POST-запрос к API Телеграмм с данными сообщения
    axios.post(apiUrl, data)
        .then(response => {
            console.log('Message sent:', response.data);
        })
        .catch(error => {
            console.error('Error sending message:', error.response.data);
        });
}

// Вызываем функцию sendMessage

