class AgendaEvents {
    constructor(date, title) {
        this.date = date;
        this.title = title;
        this.serial = Math.random().toString(36).substring(7); // Génère une chaine de caractères aléatoire de 7 caractères.
    }
}