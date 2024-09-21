<?php
// Étape 1 : Connexion à la base de données MySQL
try {
    // Les informations de connexion à la base de données
    $pdo = new PDO("mysql:host=localhost;dbname=arcadia", "root", ""); // Change "root" et "" selon ton mot de passe MySQL
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Étape 2 : Préparer les informations de l'administrateur
    $nom = "Dupont";  // Change ici pour le nom du directeur
    $prenom = "Jean"; // Change ici pour le prénom du directeur
    $email = "directeur@zooarcadia.com"; // Change pour l'email du directeur
    $mot_de_passe = "motdepassefort"; // Mot de passe (à personnaliser)
    $role = "Administrateur"; // Rôle du directeur : Administrateur

    // Étape 3 : Hachage du mot de passe pour la sécurité
    $hashedPassword = password_hash($mot_de_passe, PASSWORD_DEFAULT);

    // Étape 4 : Insérer les informations dans la base de données
    $sql = "INSERT INTO utilisateurs (nom, prenom, email, mot_de_passe, role) 
            VALUES (:nom, :prenom, :email, :mot_de_passe, :role)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':nom' => $nom,
        ':prenom' => $prenom,
        ':email' => $email,
        ':mot_de_passe' => $hashedPassword, // On enregistre le mot de passe haché
        ':role' => $role
    ]);

    // Étape 5 : Confirmation que le compte a été créé
    echo "Le compte administrateur pour le directeur a été créé avec succès !";

} catch (PDOException $e) {
    // Si une erreur survient, elle sera affichée ici
    echo "Erreur : " . $e->getMessage();
}
?>
