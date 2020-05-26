let { base64ToArrayBuffer } = require('./util.js');

function getImageFromCache(src) {
    
}

function ImageReader(src, callback) {
    let imageData = getImageFromCache(src);

    if(!imageData) {
        
    } 

    let arrayBuffer = base64ToArrayBuffer(imageData);

    
}

module.exports = ImageReader
