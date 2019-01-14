'use strict';

var Buffer = require('buffer').Buffer;
const Constants = require('../values/constants');

/**
 *	Available encoding:
 *	'ascii', 
 *	'utf8',
 *	'utf16le',
 *	'usc2',
 *	'base64',
 *	'binary',
 *	'hex'
 *	Refer to https://nodejs.org/api/buffer.html (origin nodejs buffer api).
 */

const convert = function(str, srcEncode, destEncode) {
	let buf = new Buffer(str, srcEncode);
	return buf.toString(destEncode);
};

function MaskedString (data) {
	if (data){
		this.value = maskString(data);
		this.unmask = ()=>{
			return data;
		};
	} else {
		this.value = '';
		this.unmask = ()=>'';
	}
  this.toString = ()=>this.value;
}

const isMaskedString = (str) => (str && typeof str === 'object' && str.unmask);
const maskString = (str)=>{
	if (str){
		let maskLen = str.length /2;
		return '*'.repeat(maskLen).concat(str.slice(maskLen));
	}
	return '';
};

module.exports = {
	
	convert: convert,
	
	toBase64: function(utf8str) {
		return convert(utf8str, 'utf8', 'base64');
	},
	
	toUtf8: function(base64str) {
		return convert(base64str, 'base64', 'utf8');
	},

	toHex: function(utf8str) {
		return convert(utf8str, 'utf8', 'hex');
	},

	createMaskedString(str) {
		return new MaskedString(str);
	},

	isMaskedString,

	unmaskString(str){
		if (isMaskedString(str)){
			return str.unmask();
		}
		return null;
	},

	maskString,

	getTestID(tag, desc){
		if (Constants.ENV_TYPE === 'PROD'){
			return;
		}
		let testID = '';
		if (tag){
			testID = testID.concat(tag, ':');
		}
		if (desc){
			testID = testID.concat(desc);
		}
		return testID;
	},

	parseFeatureVersion(appVersion){
		if (appVersion){
			let array = appVersion.split('.');
			if (array[0] && array[1]){
				return array[0] + '.' + array[1].charAt(0);
			}
		}
		return null;
	}
};