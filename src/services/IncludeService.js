const IncludeService = {

    Include: function (data) {
        try {
            console.log(data)
            return <h1>IncludeService</h1>
        }
        catch {
            return null;
        }
    }
};

export default IncludeService;