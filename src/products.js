export default {
    name: 'catalogue',
    products: [
        {
            id: 1,
            title: "Lasagne alla siciliana",
            description: "Sauce tomate, sauce bolognese, champignons, parmigiano, petits pois, œuf dur",
            image_path: "lasagnes.png",
            image_alt: "Plat de Lasagne",
            price: "7.50",
            top: true
        },
        {
            id: 2,
            title: "Arancini al ragù",
            description: "Spécialité sicilienne boule de riz panée farcie de viande petit pois ,œuf dur et provolone",
            image_path: "arancini.png",
            image_alt: "",
            price: "4.50",
            top: true
        },
        {
            id: 3,
            title: "Arancini spinaci",
            description: "Boule de riz farci aux épinards et provolone",
            image_path: "arancini.png",
            image_alt: "",
            price: "4.50",
            top: false
        },
        {
            id: 4,
            title: "Patons de pizza",
            description: "",
            image_path: "patons.png",
            image_alt: "",
            price: "2.50",
            top: true
        }
    ]
}