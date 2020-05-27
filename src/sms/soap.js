var BaseSoap = require('../baseSoap');

class Soap extends BaseSoap {

    constructor(username, password) {
        super(username, password);
        this.sendUrl = this.getPath('send');
        this.receiveUrl = this.getPath('receive');
        this.voiceUrl = this.getPath('Voice');
        this.scheduleUrl = this.getPath('Schedule');
    }

    getCredit() {
        return this.execute(this.sendUrl, 'GetCredit', this.data);
    }

    isDelivered(id) {
        const data = {
            'recId': id
        }
        let funcName = Array.isArray(id) ? "GetDeliveries3" : "GetDelivery2";
        return this.execute(this.sendUrl, funcName, {
            ...this.data,
            ...data
        });
    }

    send(to, from, text, isflash = false) {
        let funcName = Array.isArray(to) ? "SendSimpleSMS" : "SendSimpleSMS2";
        return this.execute(this.sendUrl, funcName, {
            ...this.data,
            to,
            from: from,
            text,
            isflash
        });
    }

    send2(to, from, text, isflash = false, udh = "") {
        let _to = Array.isArray(to) ? to : [to];
        return this.execute(this.sendUrl, "SendSms", {
            ...this.data,
            to: _to,
            from: from,
            text,
            isflash,
            udh
        }, false);
    }

    sendWithDomain(to, from, text, isflash, domainName) {
        return this.execute(this.sendUrl, "SendWithDomain", {
            ...this.data,
            to,
            from: from,
            text,
            isflash,
            domainName
        });
    }

    getMessages(location, index, count, from = '') {
        return this.execute(this.sendUrl, "getMessages", {
            ...this.data,
            location,
            index,
            count,
            from: from
        });
    }

    getMessagesStr(location, index, count, from = '') {
        return this.execute(this.receiveUrl, "GetMessageStr", {
            ...this.data,
            location,
            index,
            count,
            from: from
        });
    }

    getMessagesByDate(location, index, count, from, dateFrom, dateTo) {
        return this.execute(this.receiveUrl, "GetMessagesByDate", {
            ...this.data,
            location,
            index,
            count,
            dateFrom,
            dateTo,
            from: from
        });
    }

    getMessagesReceptions(msgId, fromRows) {
        return this.execute(this.receiveUrl, "GetMessagesReceptions", {
            ...this.data,
            msgId,
            fromRows
        });
    }

    getUsersMessagesByDate(location, index, count, from, dateFrom, dateTo) {
        return this.execute(this.receiveUrl, "GetUsersMessagesByDate", {
            ...this.data,
            location,
            index,
            count,
            dateFrom,
            dateTo,
            from: from
        });
    }

    remove(msgIds) {
        return this.execute(this.receiveUrl, "RemoveMessages2", {
            ...this.data,
            msgIds
        });
    }

    getPrice(irancellCount, mtnCount, from, text) {
        return this.execute(this.sendUrl, "GetSmsPrice", {
            ...this.data,
            irancellCount,
            mtnCount,
            from: from,
            text
        });
    }

    getInboxCount(isRead = false) {
        return this.execute(this.sendUrl, "GetInboxCount", {
            ...this.data,
            isRead
        });
    }

    sendWithSpeech(to, from, smsBody, speechBody) {
        return this.execute(this.voiceUrl, "SendSMSWithSpeechText", {
            ...this.data,
            to,
            from: from,
            smsBody,
            speechBody
        });
    }

    sendWithSpeechSchduleDate(to, from, smsBody, speechBody, scheduleDate) {
        return this.execute(this.voiceUrl, "SendSMSWithSpeechTextBySchduleDate", {
            ...this.data,
            to,
            from: from,
            smsBody,
            speechBody,
            scheduleDate
        });
    }

    getSendWithSpeech(recId) {
        return this.execute(this.voiceUrl, "GetSendSMSWithSpeechTextStatus", {
            ...this.data,
            recId
        });
    }

    getMultiDelivery(recId) {
        return this.execute(this.sendUrl, "GetMultiDelivery2", {
            ...this.data,
            recId
        });
    }

    sendMultipleSchedule(to, from, text, isflash, scheduleDateTime, period) {
        return this.execute(this.scheduleUrl, "AddMultipleSchedule", {
            ...this.data,
            to,
            from: from,
            text,
            isflash,
            scheduleDateTime,
            period
        });
    }

    sendSchedule(to, from, text, isflash, scheduleDateTime, period) {
        return this.execute(this.scheduleUrl, "AddSchedule", {
            ...this.data,
            to,
            from: from,
            text,
            isflash,
            scheduleDateTime,
            period
        });
    }

    getScheduleStatus(scheduleId) {
        return this.execute(this.scheduleUrl, "GetScheduleStatus", {
            ...this.data,
            scheduleId
        });
    }

    removeSchedule(scheduleId) {
        return this.execute(this.scheduleUrl, "RemoveSchedule", {
            ...this.data,
            scheduleId
        });
    }
    
    addUsance(to, from, text, isflash, scheduleStartDateTime, repeatAfterDays, scheduleEndDateTime) {
        return this.execute(this.scheduleUrl, "AddUsance", {
            ...this.data,
            to,
            from: from,
            text,
            isflash,
            scheduleStartDateTime,
            repeatAfterDays,
            scheduleEndDateTime
        });
    }

}

module.exports = Soap;
