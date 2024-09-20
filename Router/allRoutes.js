import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/html/home.html"),
    new Route("/services", "Les Services", "/pages/html/services.html"),
    new Route("/habitats", "Les Habitats", "/pages/html/habitats.html"),
    new Route("/savane", "La Savane", "/pages/html/savane.html"),
    new Route("/jungle", "La Jungle", "/pages/html/jungle.html"),
    new Route("/marais", "Le Marais", "/pages/html/marais.html"),
    new Route("/signin", "Connexion", "/pages/html/signin.html"),
    new Route("/signup", "inscription", "/pages/html/signup.html"),
    new Route("/savane/simba", "Simba, le lion", "/pages/html/simba.php"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Acardia";