const KinesisProxy = require("../proxies/kinesis-proxy");

class DataPublisher {
    constructor() {
        this.kinesisProxy = new KinesisProxy("test-stream-name");
    }

    async publishRecords(data) {
        await this.kinesisProxy.putRecord(data)
    }
}

module.exports = DataPublisher