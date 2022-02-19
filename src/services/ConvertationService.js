import BaseMeasureis from './../utils/metrics.json';

const ConvertationService = {

    Convert: function (data) {
        let distance = data["distance"];
        let unit = distance["unit"];
        let value = distance["value"];
        let convertUnit = data["convert_to"];

        for (let key in BaseMeasureis) {
            if (key === unit) {
                for (let item in BaseMeasureis[key]) {
                    if (item === convertUnit) {
                        return { "unit": convertUnit, "value": value * BaseMeasureis[key][item] } ;
                    }
                }
            }
        }
    }
};

export default ConvertationService;