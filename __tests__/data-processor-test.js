const DataProcessor = require("../src/data-processors/data-processor");
const dataProcessor = new DataProcessor();

describe("DataProcessor", () => {
    it("should parse json data", () => {
        const jsonStr = JSON.stringify({
            aaa: "aaa",
            bbb: "bbb"
        });
        const result = dataProcessor.processData(jsonStr);

        expect(result.aaa).toBe("aaa");
        expect(result.bbb).toBe("bbb");
        expect(result.timestamp).toBeDefined();
    });

    it("should not fail for non json data", () => {
        const data = "This is a simple string";
        const result = dataProcessor.processData(data);

        expect(result.error).toBe("JSON Parse Error");
        expect(result.timestamp).toBeDefined();
        expect(result.originalRecord).toBe(data);
    })
});