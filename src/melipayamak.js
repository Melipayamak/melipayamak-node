var Soap = require('./sms/soap')
var SoapAsync = require('./sms/soapAsync')
var Rest = require('./sms/rest')
var RestAsync = require('./sms/restAsync')
var Branch = require('./branch')
var BranchAsync = require('./branchAsync')
var Contacts = require('./contacts')
var ContactsAsync = require('./contactsAsync')
var Ticket = require('./ticket')
var TicketAsync = require('./ticketAsync')
var Users = require('./users')
var UsersAsync = require('./usersAsync')

class MelipayamakApi {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    sms(method = 'rest', type = 'async') {
        if(method == 'rest'){
            if(type == 'async')
                return new RestAsync(this.username, this.password);
            else return new Rest(this.username, this.password);
        }
        else {
            if(type == 'async')
                return new SoapAsync(this.username, this.password);
            else return new Soap(this.username, this.password);
        }
    }

    branch() {
        return new Branch(this.username, this.password);
    }

    branchAsync() {
        return new BranchAsync(this.username, this.password);
    }

    contacts() {
        return new Contacts(this.username, this.password);
    }

    contactsAsync() {
        return new ContactsAsync(this.username, this.password);
    }

    ticket() {
        return new Ticket(this.username, this.password);
    }
    
    ticketAsync() {
        return new TicketAsync(this.username, this.password);
    }

    users() {
        return new Users(this.username, this.password);
    }

    usersAsync() {
        return new UsersAsync(this.username, this.password);
    }
}

module.exports = MelipayamakApi;