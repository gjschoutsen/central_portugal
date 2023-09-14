export type mokGovernementLocationsTypes = {
        id: number
        name: string;
        typeOfOffice: string;
        activity: string[];
        adress: {
            street: string;
            number: number;
            postalCode: string;
            city: string;
            municipality: string;
         };
         coordinats: [number, number];
         speakingEnglish: true;
         img: string;
}[]

// {    
//     id: 1
//     name:"Junta de freguesia",
//     typeOfOffice:"townhall",
//     Activity:["registration", "permits"],
//     adress: {
//         street:"rua do estremadouro",
//         number:"78",
//         postalCode:"1234-12",
//         City:"Penela",
//         Municipality:"Penela",
//         },
//     coordinats: [-8.385684,40.027410],
//     speakingEnglish: true,
//     img:"../img/town-hall.jpg"

// }