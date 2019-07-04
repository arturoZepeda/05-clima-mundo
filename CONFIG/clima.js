const axios = require('axios');


const getClima = async (lat, long) =>{
    // NO SE REQUIERE GENERAR TODA ESTA CONFIGURACION YA QUE ES UN GET Y NO REQUIERE DE OBTENER TODOS LOS VALORES POR UN HEADER
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=e95912e5804e6e6cd19d70a53ff6228b&units=metric`,
        timeout: 10000,
     })
    const resp = await instance.get();
     if (resp.data.length === 0) {
         throw new Error(`No hay resultados para latitud :${lat} y longitud :${long}`);
     }
     return resp.data.main.temp;
}

module.exports={
    getClima
}