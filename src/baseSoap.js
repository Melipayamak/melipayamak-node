var Base = require('./base')
var soap = require('soap');


class BaseSoap extends Base {

    executeAsync(url, funcName, params, returnResult = true) {
        return new Promise((resolve, reject) => {
            soap.createClientAsync(url).then((client) => {
                return client[funcName + 'Async'](params);
            }).then((result) => {
                returnResult ? resolve(result[funcName + 'Result']) : resolve(result);

            }).catch(err => {
                reject(err)
            });
        })

    }


    execute(url, funcName, params) {
        soap.createClient(url, function(err, client) {
            client[funcName](params, function(err, result) {
                if(err)
                    console.log(err);
                else console.log(result);
            });
        });

    }

    getPath(method) {
        return `http://api.payamak-panel.com/post/${method}.asmx?wsdl`;
    }
}

module.exports = BaseSoap;
