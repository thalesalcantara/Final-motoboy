function startTracking() {
  if (!navigator.geolocation) {
    document.getElementById('status').innerText = "Geolocalização não suportada.";
    return;
  }
  navigator.geolocation.getCurrentPosition(pos => {
    document.getElementById('status').innerText = 
      `Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`;
  });
}