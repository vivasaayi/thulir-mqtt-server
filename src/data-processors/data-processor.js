class DataProcessor {
    processData(strData) {
        const timestamp = Date.now();
        try {
            const jsonRecord = JSON.parse(strData);
            jsonRecord.timestamp = timestamp;
            return jsonRecord;
        } catch (err) {
            console.log("Error converting record to JSON format");
        }
        return {
            timestamp,
            originalRecord: strData,
            error: "JSON Parse Error"
        };
    }
}

module.exports = DataProcessor;