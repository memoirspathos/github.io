
    function updateTime() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      
      var timeString = hours + ':' + minutes + ' ' + ampm;
      
      document.getElementById('clock').innerHTML = timeString;
    }
    
    setInterval(updateTime, 1000);