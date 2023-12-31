/*
{
    flightNumber: 100,
    mission:'Kepler Exploration X',
    rocket: 'Expo IS1',
    launchDate: new Date('January 27, 2030'),
    destination: 'Kepler-422 b',
    customer: ['joe','ztm'],
    upcoming:true,
    success:true,
}
*/
const launches = [];
let latestflightNumber = 0;

function getAllLaunches(){
    return launches;   
}

function addNewLaunch(launch){
    latestflightNumber++
    launches.push(Object.assign(launch,{
        flightNumber:latestflightNumber,
        success: true,
        customer: ['mix', 'min'],
        upcoming: true,}));
}

function deleteLaunch(id){
    const index = launches.findIndex(launch => launch.flightNumber === parseInt(id));
    launches.splice(index,1);
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    deleteLaunch,
}