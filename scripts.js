    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    const toggleThemeBtn = document.getElementById('toggle-theme');
    const body = document.body;
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
      toggleThemeBtn.textContent = '☀️';
    }
    toggleThemeBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
      if (body.classList.contains('dark')) {
        toggleThemeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      } else {
        toggleThemeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      }
    });

    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', (e) => {
      window.location.href = e.target.value;
    });    
document.getElementById('selector').addEventListener('change', function() {
    window.location.href = this.value;
});