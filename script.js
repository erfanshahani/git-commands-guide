document.addEventListener('DOMContentLoaded', () => {
  const commandList = document.getElementById('commandList');
  const detailTitle = document.getElementById('detailTitle');
  const detailContent = document.getElementById('detailContent');
  
  // تابع برای نمایش جزئیات
  function displayDetails(command, description) {
      detailTitle.textContent = `جزئیات دستور: ${command}`;
      detailContent.innerHTML = `<p>${description}</p>`;
  }
  
  // گوش دادن به کلیک روی هر دستور
  commandList.addEventListener('click', (event) => {
      const listItem = event.target.closest('li');
      
      if (listItem) {
          // حذف کلاس active از آیتم قبلی
          document.querySelectorAll('#commandList li').forEach(item => {
              item.classList.remove('active');
          });
          
          // افزودن کلاس active به آیتم فعلی
          listItem.classList.add('active');
          
          // گرفتن داده‌ها از data-attributes
          const command = listItem.getAttribute('data-command');
          const description = listItem.getAttribute('data-description');
          
          // نمایش جزئیات
          displayDetails(command, description);
      }
  });

  // نمایش محتوای اولیه (در صورت نیاز)
  // می‌توانید اولین دستور را به صورت پیش‌فرض فعال کنید.
  // const firstCommand = commandList.querySelector('li');
  // if (firstCommand) {
  //     firstCommand.click(); 
  // }
});