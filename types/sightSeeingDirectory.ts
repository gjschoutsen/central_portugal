export type mokSightSeeingDirectoryTypes = {
    id: number;
    name: string;
    typeOfAttraction: string;
    activity: string;
    difficulty: string;
    imgs: string[];
    coordinats: [number, number]
}[]

//         id:1,
//         name:"mountain fall trail",
//         typeOfAttraction:"waterfall",
//         activity:"hiking",
//         difficulty:"very",
//         imgs:["../img/hike-mountain.jpg","../img/mountain.jpg","../img/waterfall.jpg"],
//         coordinats: [-8.40829,40.20122]