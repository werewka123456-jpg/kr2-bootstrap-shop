document.addEventListener('DOMContentLoaded', () => {
  const orderDialog = document.getElementById('order-dialog');
  const orderButtons = document.querySelectorAll('[data-product]');
  const closeDialogButton = document.getElementById('close-order-dialog');
  const selectedProductInput = document.getElementById('selected-product');
  const orderForm = document.getElementById('order-form');
  const successMessage = document.getElementById('success-message');

  // Открытие модалки
  if (orderDialog && orderButtons.length > 0) {
    orderButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const productName = button.dataset.product;
        if (selectedProductInput) selectedProductInput.value = productName;
        orderDialog.showModal();
      });
    });
  }

  // Закрытие модалки
  if (closeDialogButton) {
    closeDialogButton.addEventListener('click', () => {
      orderDialog.close();
    });
  }

  // Отправка формы
  if (orderForm) {
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      if (!orderForm.checkValidity()) {
        orderForm.reportValidity();
        return;
      }

      if (successMessage) successMessage.hidden = false;
      orderForm.reset();
      orderDialog.close();
    });
  }
});

// === ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ТЕМЫ ===
document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const htmlElement = document.documentElement;

  // 1. Проверяем, сохранил ли пользователь тему ранее
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-bs-theme', savedTheme);
  
  // Если тема была темной, ставим переключатель в положение "включено"
  if (themeSwitch) {
    themeSwitch.checked = (savedTheme === 'dark');

    // 2. Слушаем клики по переключателю
    themeSwitch.addEventListener('change', () => {
      if (themeSwitch.checked) {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Запоминаем выбор
      } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light'); // Запоминаем выбор
      }
    });
  }
});