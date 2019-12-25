var BaseSoap = require('./baseSoap');

class TicketAsync extends BaseSoap {
    
    constructor(username, password) {
        super(username, password);
        this.path = 'http://api.payamak-panel.com/post/Tickets.asmx?wsdl'
    }
    execute(funcName, params) {
        return super.executeAsync(this.path, funcName, params);
    }
    add(title, content, alertWithSms = true) {
        return this.execute('AddTicket', {
            ...this.data,
            title,
            content,
            alertWithSms
        });
    }
    getReceived(ticketOwner, ticketType, keyword) {
        return this.execute('GetReceivedTickets', {
            ...this.data,
            ticketOwner,
            ticketType,
            keyword
        });
    }
    getReceivedCount(ticketType) {
        return this.execute('GetReceivedTicketsCount', {
            ...this.data,
            ticketType
        });
    }
    getSent(ticketOwner, ticketType, keyword) {
        return this.execute('GetSentTickets', {
            ...this.data,
            ticketOwner,
            ticketType,
            keyword
        });
    }
    getSentCount(ticketType) {
        return this.execute('GetSentTicketsCount', {
            ...this.data,
            ticketType
        });
    }
    response(ticketId, type, content, alertWithSms = true) {
        return this.execute('ResponseTicket', {
            ...this.data,
            ticketId,
            type,
            content,
            alertWithSms
        });
    }
}
module.exports = TicketAsync;