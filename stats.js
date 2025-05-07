fetch('https://spherium.ps.fhgdps.com/dashboard/api/stats.php')
  .then(response => response.json())
  .then(data => {
    document.getElementById('users-total').textContent = data.stats.users.total;
    document.getElementById('levels-total').textContent = data.stats.levels.total;
  })
  .catch(error => {
    document.getElementById('users-total').textContent = '??';
    document.getElementById('levels-total').textContent = '??';
    console.error('Ошибка загрузки статистики:', error);
  });
