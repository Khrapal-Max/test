import BaseMeasureis from './../utils/metrics.json';

const ConvertationService = {

    Convert: function (data) {
        try {
            let distance = data["distance"];
            let unit = distance["unit"];
            let value = distance["value"];
            let convertUnit = data["convert_to"];
            

            for (let key in BaseMeasureis) {
                if (key === unit) {
                    for (let item in BaseMeasureis[key]) {
                        if (item === convertUnit) {
                            return { "unit": convertUnit, "value": Math.round((value * BaseMeasureis[key][item]) * 100) / 100 };
                        }
                    }
                }
            }
        }
        catch {
            return null;
        }
    }
};

export default ConvertationService;