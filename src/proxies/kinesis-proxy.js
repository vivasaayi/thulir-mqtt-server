const {
    KinesisClient,
    PutRecordCommand
} = require("@aws-sdk/client-kinesis");

class KinesisProxy {
    constructor(streamName) {
        this.streamName = streamName;
        this.client = new KinesisClient({
            region: "us-east-1"
        });
    }

    async putRecord(record) {
        console.log(record);
        try {
            const putRecordParams = {
                Data: Buffer.from(record),
                PartitionKey: "test",
                StreamName: this.streamName
            }
            const command = new PutRecordCommand(putRecordParams);
            const data = await this.client.send(command);
            console.log("Record added successfully");
        } catch (error) {
            console.log("error adding the record");
            console.log(error)
        }
        finally {
            console.log("Swollow error for testing");
        }
    }
}

module.exports = KinesisProxy;