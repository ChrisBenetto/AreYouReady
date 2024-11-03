    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
  
    dropdownToggle.addEventListener('click', (event) => {
      event.stopPropagation(); // Empêche la propagation de l'événement
      dropdownMenu.classList.toggle('show');
    });
  
    // Fermer le menu si l'utilisateur clique à l'extérieur
    window.addEventListener('click', (event) => {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
      }
    });