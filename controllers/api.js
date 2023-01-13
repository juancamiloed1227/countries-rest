import fetch from 'node-fetch';
import Log from '../models/log.js';

// Controller for endpoint "/countries/:name"
const getCountryByName = async (req, res, next) => {
    // Obtain name for params
    const name = req.params.name;
    const url = `https://restcountries.com/v3.1/name/${name}`

    try {
        const response = await fetch(url);
        if (response.status === 404) return res.status(404).json({ message: "This country doesn't exists" });
        const country = await response.json()
        res.status(200).json({
            area: country[0].area,
            population: country[0].population,
        })

        // Create a register of the activity
        const log = new Log(req.connection);
        log.create(`Get country by name: ${name}`, (error, results) => {
            if (error) return next(error);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error })
    }
};

export {
    getCountryByName,
}