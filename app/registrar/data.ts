export let departamentos: {
    departamento: string;
    provincias: string[];
    localidades: string[];
}[] = [
        {
            departamento: "La Paz",
            provincias: [
                "Aroma",
                "Bautista Saavedra",
                "Caranavi",
                "Franz Tamayo",
                "Gualberto Villarroel",
                "Ingavi",
                "Inquisivi",
                "José Manuel Pando",
                "Larecaja",
                "Loayza",
                "Los Andes",
                "Manco Kapac",
                "Muñecas",
                "Nor Yungas",
                "Omasuyos",
                "Pacajes",
                "Pedro Domingo Murillo",
                "Sud Yungas",
            ],
            localidades: [
                "La Paz",
                "El Alto",
                "Viacha",
                "Achocalla",
                "Mecapaca",
                "Palca",
                "Patacamaya",
                "Coroico",
                "Chulumani",
                "Copacabana",
                "Sorata",
                "Charazani",
                "Puerto Acosta",
                "Desaguadero",
                "Apolo",
            ],
        },
        {
            departamento: "Cochabamba",
            provincias: [
                "Arani",
                "Arque",
                "Ayopaya",
                "Bolívar",
                "Carrasco",
                "Cercado",
                "Chapare",
                "Esteban Arce",
                "Germán Jordán",
                "Mizque",
                "Punata",
                "Quillacollo",
                "Tapacarí",
                "Tiraque",
            ],
            localidades: [
                "Cochabamba",
                "Sacaba",
                "Quillacollo",
                "Colcapirhua",
                "Tiquipaya",
                "Vinto",
                "Arani",
                "Punata",
                "Cliza",
                "Arque",
                "Aiquile",
                "Totora",
                "Tarata",
                "Villa Tunari",
                "Chimore",
                "Entre Ríos",
            ],
        },
        {
            departamento: "Santa Cruz",
            provincias: [
                "Andrés Ibáñez",
                "Ángel Sandoval",
                "Chiquitos",
                "Cordillera",
                "Florida",
                "Germán Busch",
                "Guarayos",
                "Ichilo",
                "Ignacio Warnes",
                "José Miguel de Velasco",
                "Ñuflo de Chávez",
                "Obispo Santistevan",
                "Sara",
                "Vallegrande",
            ],
            localidades: [
                "Santa Cruz de la Sierra",
                "Warnes",
                "Montero",
                "Cotoca",
                "San Ignacio de Velasco",
                "Camiri",
                "Puerto Suárez",
                "Riberalta",
                "Guayaramerín",
                "Roboré",
                "San José de Chiquitos",
                "San Matías",
                "Ascensión de Guarayos",
                "Yapacaní",
                "Comarapa",
                "Samaipata",
                "Vallegrande",
                "Buena Vista",
                "Charagua",
                "Concepción",
            ],
        },
        {
            departamento: "Potosí",
            provincias: [
                "Alonso de Ibáñez",
                "Antonio Quijarro",
                "Bernardino Bilbao",
                "Charcas",
                "Chayanta",
                "Cornelio Saavedra",
            ],
            localidades: [
                "Potosí",
                "Tinguipaya",
                "Villa de Yocalla",
                "Villa Imperial",
                "Uyuni",
                "Porco",
                "San Pedro de Buena Vista",
                "Llallagua",
                "Chuquiuta",
                "Catavi",
                "Colcha K",
                "Toro Toro",
                "Ravelo",
                "Sacaca",
                "Chaquí",
                "Ocurí",
                "Tupiza",
                "Atocha",
                "Mojinete",
            ],
        },
        {
            departamento: "Tarija",
            provincias: [
                "Aniceto Arce",
                "Burnet O'Connor",
                "Cercado",
                "Eustaquio Méndez",
                "Gran Chaco",
                "José María Avilés",
            ],
            localidades: [
                "Tarija",
                "Bermejo",
                "Padcaya",
                "Entre Ríos",
                "Yacuiba",
                "Villamontes",
                "Caraparí",
                "Cuevo",
                "Yunchará",
                "El Puente",
                "San Lorenzo",
            ],
        },
        {
            departamento: "Chuquisaca",
            provincias: [
                "Oropeza",
                "Jaime Zudáñez",
                "Luis Calvo",
                "Hernando Siles",
                "Yamparáez",
                "Tomina",
                "Belisario Boeto",
            ],
            localidades: [
                "Sucre",
                "Yotala",
                "Poroma",
                "Camargo",
                "Villa Abecia",
                "Villa Alcalá",
                "Tarabuco",
                "Padilla",
                "Monteagudo",
                "Icla",
                "Sopachuy",
                "Mojos",
                "Villa Serrano",
                "Las Carreras",
                "Incahuasi",
                "Huacareta",
            ],
        },
        {
            departamento: "Beni",
            provincias: [
                "Cercado",
                "Moxos",
                "Marbán",
                "Yacuma",
                "Carrasco",
                "Mamoré",
                "Iténez",
                "José Ballivián",
            ],
            localidades: [
                "Trinidad",
                "Riberalta",
                "Guayaramerín",
                "Santa Ana del Yacuma",
                "San Borja",
                "Rurrenabaque",
                "Reyes",
                "San Ignacio de Moxos",
                "San Ramón",
                "Magdalena",
                "Santa Rosa del Sara",
                "Baures",
                "Puerto Siles",
            ],
        },
        {
            departamento: "Pando",
            provincias: ["Federico Román", "Manuripi", "Nicolás Suárez", "Abuná"],
            localidades: [
                "Cobija",
                "Riberalta",
                "Guayaramerín",
                "Porvenir",
                "Filadelfia",
                "Bella Flor",
                "Santa Rosa",
                "San Lorenzo",
                "Puerto Rico",
                "El Sena",
            ],
        },
        {
            departamento: "Oruro",
            provincias: [
                "Cercado",
                "Sud Carangas",
                "Pantaleón Dalence",
                "Poopó",
                "Sajama",
                "San Pedro de Totora",
                "Sebastián Pagador",
                "Saucarí",
                "Litoral",
            ],
            localidades: [
                "Oruro",
                "Huanuni",
                "Caracollo",
                "Machacamarca",
                "Poopó",
                "Eucaliptus",
                "Challapata",
                "Sabaya",
                "Turco",
                "Chipaya",
                "Huachacalla",
                "Salinas de Garcí Mendoza",
                "Corque",
                "Toledo",
            ],
        },
    ];