var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://18.215.16.26')

client.on('connect', function () {
    console.log("Connect Event");
})

client.on('message', function (topic, message) {
    console.log("Message Event");
})

client.on('reconnect', function (topic, message) {
    console.log("reconnect Event");
})

client.on('close', function (topic, message) {
    console.log("close Event");
})

client.on('disconnect', function (topic, message) {
    console.log("disconnect Event");
})

client.on('offline', function (topic, message) {
    console.log("offline Event");
})

client.on('error', function (topic, message) {
    console.log("error Event");
})

client.on('end', function (topic, message) {
    console.log("end Event");
})
client.on('message', function (topic, message) {
    console.log("message Event");
})
client.on('packetsend', function (topic, message) {
    console.log("packetsend Event");
})
client.on('packetreceive', function (topic, message) {
    console.log("packetreceive Event");
})
client.on('error', function (topic, message) {
    console.log("error Event");
})
client.on('error', function (topic, message) {
    console.log("error Event");
})
client.on('error', function (topic, message) {
    console.log("error Event");
})

client.publish("AAA", "TEST ASA", {}, (aa, bb) => {
    console.log("Published", aa, bb);
})

let index = 0;
setInterval(() => {
    data = {
        temp: "temp-" + index,
        humidity: "humidity-" + index
    }
    client.publish("AAA", JSON.stringify(data), {}, (aa) => {
        console.log("Published", aa);
    })
    index++;
}, 5000)
