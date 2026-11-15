var Base = require('../base');
var https = require('https');
var querystring = require('querystring');


class RestAsync extends Base {

    smartEndpoint = 'SmartSMS';
    sharedEndpoint = 'ShareService';
    voiceEndpoint = 'Voice';


    constructor(username, password) {
        super(username, password);
        this.options = {
            host: 'rest.payamak-panel.com',
            path: 'api'
        }
    }
    request(method, params, endpoint = 'SendSMS') {
        var path = `https://${this.options.host}/${this.options.path}/${endpoint}/${method}`;
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
            var req = https.request(post_options, function (e) {
                e.setEncoding('utf8');
                e.on('data', function (data) {
                    resolve(JSON.parse(data));
                });
            });
            req.write(postdata, "utf8");
            req.on("error", function (e) {
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


    sendOTP(to, from, code) {
        return this.request('SendOTP', { to, from, code });
    }

    sendMultipleSMS(to, from, text) {
        return this.request('SendMultipleSMS', { to, from, text });
    }

    sendSchedule(text, to, from, scheduleDate, period) {
        return this.request('SendSchedule', { to, from, text, scheduleDate, period });
    }

    getSchedule(scheduleId) {
        return this.request('GetSchedule', { scheduleId });
    }

    getDeliveries(recID) {
        return this.request('GetDeliveries', { recID });
    }

    getNewDeliveries(recID) {
        return this.request('GetNewDeliveries', { recID });
    }

    getInboxCount(isRead) {
        return this.request('GetInboxCount', { isRead });
    }

    getCredit2() {
        return this.request('GetCredit2', {});
    }

    getSmsPrice(irancellCount, mciCount, from, text) {
        return this.request('GetSmsPrice', { irancellCount, mciCount, from, text });
    }


    baseServiceNumberSchedule(text, to, bodyId, scheduleDate) {
        return this.request('BaseServiceNumberSchedule', { text, to, bodyId, scheduleDate });
    }

    sendSmartSMS(to, from, text, fromSupportOne, fromSupportTwo) {
        return this.request('Send',
            { to, from, text, fromSupportOne, fromSupportTwo },
            this.smartEndpoint);
    }

    sendMultipleSmartSms(to, from, text, fromSupportOne, fromSupportTwo) {
        return this.request('SendMultiple',
            { to, from, text, fromSupportOne, fromSupportTwo },
            this.smartEndpoint);
    }

    getDeliveries2SmartSms(Id) {
        return this.request('GetDeliveries2',
            { Id },
            this.smartEndpoint);
    }

    getDeliveriesSmartSms(Ids) {
        return this.request('GetDeliveries',
            { Ids },
            this.smartEndpoint);
    }

    addBody(title, body) {
        return this.request('AddBody', { title, body }, this.sharedEndpoint);
    }

    editBody(bodyId, title, body) {
        return this.request('EditBody', { bodyId, title, body }, this.sharedEndpoint);
    }

    deleteBody(bodyId) {
        return this.request('DeleteBody', { bodyId }, this.sharedEndpoint);
    }

    getBodies(keyword, status) {
        return this.request('GetBodies', { keyword, status }, this.sharedEndpoint);
    }

    sendSpeechText(text, to) {
        return this.request('SendSpeechText', { text, to }, this.voiceEndpoint);
    }

    sendVoiceOtp(to, code) {
        return this.request('SendVoiceOtp', { code, to }, this.voiceEndpoint);
    }

    sendSMSWithSpeechText(smsBody, speechBody, from, to) {
        return this.request('SendSMSWithSpeechText', { smsBody, speechBody, from, to }, this.voiceEndpoint);
    }

    sendSMSWithSpeechTextBySchduleDate(smsBody, speechBody, from, to, scheduleDate) {
        return this.request('SendSMSWithSpeechTextBySchduleDate', { smsBody, speechBody, from, to, scheduleDate }, this.voiceEndpoint);
    }

    getSendSpeechTextStatus(recId) {
        return this.request('GetSendSpeechTextStatus', { recId }, this.voiceEndpoint);
    }

    getSendSpeechTextStatuses(recIds) {
        return this.request('GetSendSpeechTextStatuses', { recIds }, this.voiceEndpoint);
    }

    getSendSMSWithSpeechTextStatus(recId) {
        return this.request('GetSendSMSWithSpeechTextStatus', { recId }, this.voiceEndpoint);
    }

    sendBulkSpeechText(title, body, receivers, DateToSend, RepeatCount) {
        return this.request('SendBulkSpeechText', { title, body, receivers, DateToSend, RepeatCount }, this.voiceEndpoint);
    }

    sendBulkVoiceSMS(title, voiceFileId, receivers, DateToSend, repeatCount) {
        return this.request('SendBulkVoiceSMS', { title, voiceFileId, receivers, DateToSend, repeatCount }, this.voiceEndpoint);
    }

    uploadVoiceFile(title, base64StringFile) {
        return this.request('UploadVoiceFile', { title, base64StringFile }, this.voiceEndpoint);
    }

    uploadVoiceFileByte(title, file) {
        return this.request('UploadVoiceFileByte', { title, file }, this.voiceEndpoint);
    }

}

module.exports = RestAsync;