import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/services", "Les Services", "/pages/services.html"),
    new Route("/habitats", "Les Habitats", "../pages/habitats.html"),
    new Route("/savane", "La Savane", "../pages/savane.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Acardia";