document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('download-btn');
  
    // Укажи свои ссылки на файлы
    const links = {
      windows: 'https://www.dropbox.com/scl/fi/nor69g2wkxh4qk4quvk8m/GDPS-Spherium-v1.10-Setup.exe?rlkey=zhhpcjh99k903awjuoo878785&st=v1bkp444&dl=1 ',
      android: 'https://your-site.com/files/your-android-apk.apk',
      ios: 'https://your-site.com/files/your-ios-app.ipa'
    };
  
    // Функция для определения платформы
    function getPlatform() {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      if (/windows phone/i.test(ua)) return 'windows';
      if (/android/i.test(ua)) return 'android';
      if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
      if (/Win/i.test(ua)) return 'windows';
      return 'android'; // По умолчанию Android
    }
  
    // Устанавливаем текст и ссылку
    const platform = getPlatform();
    if (platform === 'windows') {
      btn.textContent = 'Скачать для Windows';
      btn.href = links.windows;
    } else if (platform === 'android') {
      btn.textContent = 'Скачать для Android';
      btn.href = links.android;
    } else if (platform === 'ios') {
      btn.textContent = 'Скачать для iOS';
      btn.href = links.ios;
    }
  
    btn.addEventListener('click', function() {
      window.location.href = links[platform];
    });
  });
  