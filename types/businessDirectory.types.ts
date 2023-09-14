export type mokBusinessDirectoryTypes = {
    id: number;
    nameOfBusiness: string;
    nameOfOwner: string;
    typeOfBusiness: string;
    typeOfProduct: string;
    phoneNumber: string;
    openingHours: string;
    open: boolean;
    adress: {
        street: string;
        number: string;
        postalCode: string;
        city: string;
        municipality: string;
    },
    coordinats: [number, number]
    description: string;
    review:{
        stars: number;
        author: string;
        description: string;
    },
    speakingEnglish: boolean;
    img: string;
}[]

// {
//     id:1,
//     nameOfBusiness:"De Super Kapper",
//     nameOfOwner:"Karin",
//     typeOfBusiness:"shop",
//     typeOfProduct:"hair",
//     phoneNumber: "987654320",
//     openingHours:"09:00 - 19:00",
//     open: true,
//     adress: {
//         street:"Rua doce",
//         number:"4",
//         postalCode:"1234-54",
//         city:"Coimbra",
//         municipality:"Coimbra",
//     },
//     coordinats: [-8.40829,40.20122],
//     description:"Hairsalon with great koffie",
//     review:{
//         stars:5,
//         author:"GJ",
//         description:"karin is a great woman with magical hands, I look amazing again.",
//     },
//     speakingEnglish: true,
//     img:"../img/shop-sign.jpg"
// }
