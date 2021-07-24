const DataProcessor = require("../src/data-processors/data-processor");
const dataProcessor = new DataProcessor();

describe("DataProcessor", () => {
    it("should parse json data", () => {
        const jsonStr = JSON.stringify({
            aaa: "aaa",
            bbb: "bbb"
        });
        const resultStr = dataProcessor.processData(jsonStr);
        const result = JSON.parse(resultStr);

        expect(result.aaa).toBe("aaa");
        expect(result.bbb).toBe("bbb");
        expect(result.timestamp).toBeDefined();
    });

    it("should not fail for non json data", () => {
        const data = "This is a simple string";
        const resultStr = dataProcessor.processData(data);
        const result = JSON.parse(resultStr);

        expect(result.error).toBe("JSON Parse Error");
        expect(result.timestamp).toBeDefined();
        expect(result.originalRecord).toBe(data);
    })
});