
const readFile = require('./read/readFile')
const readFileProm = require('./read/readFileProm')
const readChucks = require('./read/readChucks')
const readChucksProm = require('./read/readChucksProm')
const writeFile = require('./write/writeFile')
const writeFileProm = require('./write/writeFileProm')
const { rename } = require('./other/other')
const { concatBuffer } = require('./util/util')
const constants = require('./constants/constants')


var FileJS = {
	readFile,
	readFileProm,
	readChucks,
	readChucksProm,
	writeFile,
	writeFileProm,
	concatBuffer,
	rename,
	types: {
		READ_AS_TEXT: constants.READ_AS_TEXT,
        READ_AS_ARRAY_BUFFER: constants.READ_AS_ARRAY_BUFFER,
        READ_AS_BINARY_STRING: constants.READ_AS_BINARY_STRING
	},
	bufferTypes: {
		INT8: constants.INT8,
        INT16: constants.INT16,
		INT32: constants.INT32,
        UINT8: constants.UINT8,
        UINT16: constants.UINT16,
        UINT32: constants.UINT32,
        FLOAT32: constants.FLOAT32,
        FLOAT64: constants.FLOAT64
	}
}
    
module.exports = FileJS