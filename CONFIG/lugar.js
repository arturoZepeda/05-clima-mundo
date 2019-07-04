const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const encodedURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout: 10000,
        headers: { 'X-RapidAPI-Key': 'c2617c4c8emsh24cdf84dceeb397p1e410ajsn39efee98ee71' }
    })
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        direccion,
        lat,
        lon
    }
}
module.exports = {
    getLugarLatLng
}