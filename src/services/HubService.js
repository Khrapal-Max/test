import IncludeService from "./IncludeService";
import ExcludeService from "./ExcludeService";

const HubService = {

    Distribution: function (data) {
        let result = [];
        let arr = data["data"];
        let condition = data["condition"];
        if ("include" in condition) {
            result = IncludeService.Include(arr);
        }
        if ("exclude" in condition) {
            result = ExcludeService.Exclude(arr);
        }
        console.log(condition);
    }
};

export default HubService;