var Base = require('./base')
var soap = require('soap'); 

class BaseSoap extends Base
{
    execute(url,funcName,params,returnResult=true)
    {
        return new Promise((resolve,reject)=>{
            // soap.createClient(url, function(err, client) {
            //     client[funcName](params, function(err, result) {
            //         if(err) reject(err)
            //         resolve(result);
            //     });
            // });
            soap.createClientAsync(url).then((client) => {
                return client[funcName+'Async'](params);
              }).then((result) => {
                returnResult? resolve(result[funcName+'Result']):resole(result);
                
              }).catch(err=>{
                  reject(err)
              });
        })

    }
    getPath(method)
    {
        return `http://api.payamak-panel.com/post/${method}.asmx?wsdl`;
    }
}

module.exports = BaseSoap;