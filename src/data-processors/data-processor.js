class DataProcessor {
    processData(strData) {
        const timestamp = new Date().toISOString();
        
        try {
            const jsonRecord = JSON.parse(strData);
            jsonRecord.timestamp = timestamp;
            return JSON.stringify(jsonRecord);
        } catch (err) {
            console.log("Error converting record to JSON format");
        }
        return JSON.stringify({
            timestamp,
            originalRecord: strData,
            error: "JSON Parse Error"
        });
    }
}

module.exports = DataProcessor;