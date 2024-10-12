class Tache {
    constructor(id, libelle, difficulte, description = '', dateFin = null) {
        this.id = id; // Identifiant unique de la tâche
        this.libelle = libelle; // Libellé de la tâche
        this.difficulte = difficulte; // Difficulté de la tâche (1 à 10)
        this.description = description; // Description optionnelle
        this.dateFin = dateFin; // Date de fin optionnelle
    }
}