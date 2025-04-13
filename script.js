function updateMadagascarTime() {
  const now = new Date();
  const options = {
    timeZone: 'Indian/Antananarivo',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const timeString = new Intl.DateTimeFormat('fr-MG', options).format(now);
  document.getElementById('madagascar-time').textContent = timeString;
}

// Mettre à jour l'heure toutes les secondes
setInterval(updateMadagascarTime, 1000);

// Initialiser l'heure au chargement de la page
updateMadagascarTime();
