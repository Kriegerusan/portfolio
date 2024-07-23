function afficherHorloge() {

    let maintenant = new Date();
    let heureAct = maintenant.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.getElementById("lblHorloge").innerHTML = "Il est " + heureAct

 }

 /*
  * MAIN
  */
 afficherHorloge()
 window.setInterval(afficherHorloge, 1000)