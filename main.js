const reservations = {
        Bob: { claimed: false },
        Ted: { claimed: true }
      }

const name = prompt('Please enter the name for your reservation');
      

arrayName = Object.keys(reservations)
arryClaim = [reservations.Bob,reservations.Ted]

if (name==arrayName[0]||name==arrayName[1]) {
  if (name==arrayName[0]) {
    if (arryClaim[0]) {
      alert("welcome user");
    } else {
      alert("already claimed")
    }
  }
  if (name==arrayName[1]) {
    if (arryClaim[1]) {
      alert("welcome user");
    } else {
      alert("already claimed")
    }
  }
} else {
  alert("there is nothing under your name");
}
