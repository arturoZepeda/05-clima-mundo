const colors = require('colors');
const argv = require('./CONFIG/yargs').argv;
const coordenadas = require('./CONFIG/lugar');
const clima = require('./CONFIG/clima');
//argv.direccion
const direccion = argv.direccion;

const getInfo = async (dir) => {
    try {
        const coor = await coordenadas.getLugarLatLng(direccion);
        const lat = coor.lat;
        const lon = coor.lon;
        // debug de coordenadas console.log(coor.lat);
        // debug de coordenadas console.log(coor.lon);
        const temp = await clima.getClima(coor.lat, coor.lon);
        return temp;
    } catch (e) {
        //return `No se pudo obtener el clioma de ${ dir }`;
        throw new Error(`No se pudo obtener el clioma de ${ dir }`);
    }
}

getInfo(direccion)
.then(resp=>{
    console.log(`La temperatura en ${direccion} es de ${resp}`)
})
.catch(console.log);