// Хранилище пользователей
let users = JSON.parse(localStorage.getItem('cosmicUsers')) || {};

// DOM элементы
const authContainer = document.getElementById('authContainer');
const loginContainer = document.getElementById('loginContainer');
const welcomeContainer = document.getElementById('welcomeContainer');

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');
const loginMessage = document.getElementById('loginMessage');

// Переключение между формами
document.getElementById('showLogin').addEventListener('click', (e) => {
    e.preventDefault();
    authContainer.style.display = 'none';
    loginContainer.style.display = 'block';
    welcomeContainer.style.display = 'none';
    message.textContent = '';
    loginMessage.textContent = '';
});

document.getElementById('showRegister').addEventListener('click', (e) => {
    e.preventDefault();
    authContainer.style.display = 'block';
    loginContainer.style.display = 'none';
    welcomeContainer.style.display = 'none';
    message.textContent = '';
    loginMessage.textContent = '';
});

// Регистрация
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    // Валидация
    if (!username || !email || !password || !passwordConfirm) {
        showMessage(message, 'Пожалуйста, заполните все поля', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage(message, 'Пароль должен быть минимум 6 символов', 'error');
        return;
    }

    if (password !== passwordConfirm) {
        showMessage(message, 'Пароли не совпадают', 'error');
        return;
    }

    // Проверка на существующего пользователя
    if (users[email]) {
        showMessage(message, 'Пользователь с таким email уже существует', 'error');
        return;
    }

    // Сохраняем пользователя
    users[email] = {
        username: username,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };

    localStorage.setItem('cosmicUsers', JSON.stringify(users));

    showMessage(message, '✅ Регистрация успешна! Теперь войдите в систему', 'success');
    
    // Очищаем форму
    registerForm.reset();
    
    // Переключаем на форму входа через 1.5 секунды
    setTimeout(() => {
        authContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        message.textContent = '';
    }, 1500);
});

// Вход
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showMessage(loginMessage, 'Пожалуйста, заполните все поля', 'error');
        return;
    }

    const user = users[email];
    
    if (!user) {
        showMessage(loginMessage, 'Пользователь не найден', 'error');
        return;
    }

    if (user.password !== password) {
        showMessage(loginMessage, 'Неверный пароль', 'error');
        return;
    }

    // Успешный вход
    showMessage(loginMessage, '✅ Вход выполнен успешно!', 'success');
    
    // Показываем приветствие
    setTimeout(() => {
        loginContainer.style.display = 'none';
        welcomeContainer.style.display = 'block';
        document.getElementById('welcomeUser').textContent = `👋 Привет, ${user.username}!`;
        loginMessage.textContent = '';
    }, 800);
});

// Выход
document.getElementById('logoutBtn').addEventListener('click', () => {
    welcomeContainer.style.display = 'none';
    authContainer.style.display = 'block';
    document.getElementById('welcomeUser').textContent = '';
});

// Вспомогательная функция для показа сообщений
function showMessage(element, text, type) {
    element.textContent = text;
    element.className = 'message ' + type;
    
    // Автоматическое скрытие через 5 секунд
    clearTimeout(element._timeout);
    element._timeout = setTimeout(() => {
        element.textContent = '';
        element.className = 'message';
    }, 5000);
}

// Проверка авторизации (если пользователь уже вошёл)
// Можно добавить запоминание сессии, но для простоты оставляем как есть

console.log('🚀 Космическая система регистрации загружена!');
console.log(`👥 Зарегистрировано пользователей: ${Object.keys(users).length}`);
