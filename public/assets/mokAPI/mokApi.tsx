import { mokBusinessDirectoryTypes } from "@/types/businessDirectory.types";
import { mokSightSeeingDirectoryTypes } from "@/types/sightSeeingDirectory";
import { mokGovernementLocationsTypes } from "@/types/governmentLocationsTypes";

export const mokBusinessDirectory:mokBusinessDirectoryTypes = [
    {
    id:1,
    nameOfBusiness:"De Super Kapper",
    nameOfOwner:"Karin",
    typeOfBusiness:"shop",
    typeOfProduct:"hair",
    phoneNumber: "987654320",
    openingHours:"09:00 - 19:00",
    open: true,
    adress: {
        street:"Rua doce",
        number:"4",
        postalCode:"1234-54",
        city:"Coimbra",
        municipality:"Coimbra",
    },
    coordinats: [-8.40829,40.20122],
    description:"Hairsalon with great koffie",
    review:{
        stars:5,
        author:"GJ",
        description:"karin is a great woman with magical hands, I look amazing again.",
    },
    speakingEnglish: true,
    img:"../img/shop-sign.jpg"
},
    {
    id:2,
    nameOfBusiness:"Madeira Masters",
    nameOfOwner:"Joao verde",
    typeOfBusiness:"shop",
    typeOfProduct:"lumberYard",
    phoneNumber:"987654332",
    openingHours:"09:00 - 19:00",
    open: true,
    adress: {
        street:"Rua do madeira",
        number:"543",
        postalCode:"1245-09",
        city:"Graca",
        municipality:"Pedrogao Grande",
    },
    coordinats:[-8.21689,39.89391],
    description:"Lumber yard selling local wood species.",
    review:{
        stars:5,
        author:"Peter",
        description:"Very expensive, but Joao is a nice man. I wish they had a better variety of wood. I absolutely love woodworking and now i can't make my famous cherrywood toilet seat. ",
    },
    speakingEnglish: true,
    img:"../img/lumber.jpg"
},
    {
    id:3,
    nameOfBusiness:"Clothing Shop",
    nameOfOwner:"Maria",
    typeOfBusiness:"shop",
    typeOfProduct: "clothing",
    phoneNumber:"987123567",
    openingHours:"09:00 - 17:00",
    open: true,
    adress: {
        street:"Rua do pastel de nata",
        number:"45",
        postalCode:"3456-09",
        city:"Serta",
        municipality:"Serta",
    },
    coordinats:[-8.09879,39.80197],
    description:"A shop that sells vintage clothing.",
    review:{
        stars:5,
        author:"Paula",
        description:"It smells, but the clothing is of high quality. I found a great outfit and only payed 10 euros. It was worth the smell",
    },
    speakingEnglish: true,
    img:"../img/clothing-store.jpg"
},
    {
    id:4,
    nameOfBusiness:"Construcao",
    nameOfOwner:"Joe",
    typeOfBusiness:"Shop",
    typeOfProduct:"constructionMaterials",
    phoneNumber:"973435235",
    openingHours:"09:00 - 19:00",
    open: true,
    adress: {
        street:"Rua do dua",
        number:"342",
        postalCode:"2783-46",
        city:"Figueiro dos Vinhos",
        municipality:"Figueiro dos Vinhos",
    },
    coordinats: [-8.27514,39.90315],
    description:"You can buy your construction materials here. Possibility to deliver at home",
    review:{
        stars:5,
        author:"Bob",
        description:"Good stuff, great prices. ",
    },
    speakingEnglish: true,
    img:"../img/portuguese-windows.jpg"
},
    {
    id:5,
    nameOfBusiness:"Angela's roupas",
    typeOfBusiness:"shop",
    typeOfProduct:"clothing",
    nameOfOwner:"Angela",
    phoneNumber:"873435654",
    openingHours:"09:00 - 13:00 / 15:00 - 19:00",
    open:true,
    adress: {
        street:"rua do estremadouro",
        number:"78",
        postalCode:"1234-12",
        city:"Penela",
        municipality:"Penela",
    },
    coordinats: [-8.38996,40.03160],
    description:"Clothing repair shop",
    review:{
        stars:5,
        author:"James",
        description:"Great!",
    },
    speakingEnglish: true,
    img:"../img/sowing-machines.jpg"

  },
]


export const mokSightSeeingDirectory: mokSightSeeingDirectoryTypes = [
    {
        id:6,
        name:"mountain fall trail",
        typeOfAttraction:"waterfall",
        activity:"hiking",
        difficulty:"very",
        imgs:["../img/hike-mountain.jpg","../img/mountain.jpg","../img/waterfall.jpg"],
        coordinats: [-8.40829,40.20122]
    },
    {
        id:7,
        name:"waterfall",
        typeOfAttraction:"",
        activity:"",
        difficulty:"",
        imgs:[],
        coordinats: [-8.118292,39.802527],
    },
    {
        id:8,
        name:"treck",
        typeOfAttraction:"",
        activity:"",
        difficulty:"",
        imgs:[],
        coordinats: [-8.210465,39.872969],
    },
    {
        id:9,
        name:"Boating",
        typeOfAttraction:"",
        activity:"",
        difficulty:"",
        imgs:[],
        coordinats: [-8.321145,40.087226],
    },
]
export const mokGovernmentLocations: mokGovernementLocationsTypes = [
    {
        id: 10,
        name:"Junta de freguesia",
        typeOfOffice:"townhall",
        activity:["registration", "permits"],
        adress: {
            street:"rua do estremadouro",
            number: 78,
            postalCode:"1234-12",
            city:"Penela",
            municipality:"Penela",
            },
        coordinats: [-8.385684,40.027410],
        speakingEnglish: true,
        img:"../img/town-hall.jpg"

    }
]
