"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const http_1 = __importDefault(require("http"));
// for each http request, send an http response with status 200 and content type text/html
http_1.default.createServer((req, res) => {
    // in the response, use the axios get method to make an API call to https:jsonplaceholder.typicode.com/todos/1 & store the result in a variable called apiData
    // Axio GET Request
    axios_1.default.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) {
        //console.log('response');
        //const apiData = response;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // write an <h2> tag to the HTTP response with the text "Sample API Data"
        res.write(`<h2>Sample API Data</h2>`);
        res.write(`<pre>${response.data}</pre>`);
        res.end();
        // .data will parse json data
        // apiData.data;
    });
}).listen(4000);
