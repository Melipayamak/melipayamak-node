var Base = require('../base');
var https = require('https');
var querystring = require('querystring');


class RestAsync extends Base {
    
    constructor(username, password) {
        super(username, password);
        this.options = {
            host: 'rest.payamak-panel.com',
            path: 'api/SendSMS'
        }
    }
    request(method, params) {
        var path = `https://${this.options.host}/${this.options.path}/${method}`;
        params = Object.assign({}, this.data, params);
        var postdata = querystring.stringify(params);
        var post_options = {
            host: this.options.host,
            port: '443',
            path: path,
            method: 'POST',
            headers: {
                'Content-Length': postdata.length,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }
        };
        return new Promise((resolve, reject) => {
            var req = https.request(post_options, function(e) {
                e.setEncoding('utf8');
                e.on('data', function(data) {
                    resolve(JSON.parse(data));
                });
            });
            req.write(postdata, "utf8");
            req.on("error", function(e) {
                reject(JSON.stringify({
                    error: e.message
                }));

            });
            req.end();
        });

    }
    send(to, from, text, isFlash = false) {
        return this.request('SendSMS', {
            to,
            from: from,
            text,
            isFlash
        });
    }
    sendByBaseNumber(text, to, bodyId) {
        return this.request('BaseServiceNumber', {
            text,
            to,
            bodyId
        });
    }
    isDelivered(recId) {
        return this.request('GetDeliveries2', {
            recId
        });
    }
    getMessages(location, index, count, from = '') {
        return this.request('GetMessages', {
            location,
            index,
            count
        });
    }
    getCredit() {
        return this.request('GetCredit', {});
    }
    getBasePrice() {
        return this.request('GetBasePrice', {});
    }
    getNumbers() {
        return this.request('GetUserNumbers', {});
    }

}

module.exports = RestAsync;