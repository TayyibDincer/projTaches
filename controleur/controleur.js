let listeTaches = [];
let idCounter = 0; // Pour générer des identifiants uniques

// Fonction pour ajouter une tâche
function ajouterTache() {
    const libelle = document.getElementById('libelle').value;
    const difficulte = parseInt(document.getElementById('difficulte').value, 10);
    const description = document.getElementById('description').value;
    const dateFin = document.getElementById('dateFin').value || null;

    if (libelle && difficulte >= 1 && difficulte <= 10) {
        const nouvelleTache = new Tache(idCounter++, libelle, difficulte, description, dateFin);
        listeTaches.push(nouvelleTache);
        afficherTaches();

        // Réinitialiser les champs du formulaire
        document.getElementById('libelle').value = '';
        document.getElementById('difficulte').value = '';
        document.getElementById('description').value = '';
        document.getElementById('dateFin').value = '';
    } else {
        alert("Veuillez entrer un libellé et une difficulté entre 1 et 10.");
    }
}

function afficherTaches() {
    const ulTaches = document.getElementById('taches');
    ulTaches.innerHTML = ''; // Vider la liste avant d'afficher

    listeTaches.forEach(tache => {
        const li = document.createElement('li');
        li.textContent = `${tache.libelle} - Difficulté : ${tache.difficulte} - Deadline : ${tache.dateFin || 'Pas de date'}`;
        ulTaches.appendChild(li);
    });
}
