var Soap = require('./sms/soap')
var Rest = require('./sms/rest')
var Branch = require('./branch')
var Contacts = require('./contacts')
var Ticket = require('./ticket')
var Users = require('./users')

class MelipayamakApi
{
    constructor(username,password)
    {
        this.username = username;
        this.password = password;
    }
    sms(type="rest")
    {
        return type=="rest" ?
            new Rest(this.username,this.password) :
            new Soap(this.username,this.password);
    }
    branch()
    {
        return new Branch(this.username,this.password);
    }
    contacts()
    {
        return new Contacts(this.username,this.password);
    }
    ticket()
    {
        return new Ticket(this.username,this.password);
    }
    users()
    {
        return new Users(this.username,this.password);
    }
}

module.exports = MelipayamakApi;