const data = { status: "success", message: "Данные успешно обработаны" };

// Создает объект ответа с правильным заголовком Content-Type: application/json
const response = Response.json(data, {
    status: 200,
    statusText: "OK"
});
