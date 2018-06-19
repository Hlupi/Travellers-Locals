const person = [{
        id: 01,
        name: "Renata",
        age: 30,
        city: "Amsterdam",
        country: "Netherlands",
        email: "renata@gmail.com",
        picture: '../img/person-1.jpg',
        interests: {
            yoga: true,
            dancing: true,
            fishing: false
        },

    },
    {
        id: 02,
        name: "Cris",
        age: 35,
        city: "Berlim",
        country: "Germany",
        email: "cris@gmail.com",
        picture: '../img/person-2.jpg',
        interests: {
            yoga: false,
            dancing: true,
            fishing: true
        }

    }
]

console.log(person[0].name)
