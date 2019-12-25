var BaseSoap = require('./baseSoap');

class ContactsAsync extends BaseSoap {
    
    constructor(username, password) {
        super(username, password);
        this.path = 'http://api.payamak-panel.com/post/contacts.asmx?wsdl'
    }
    execute(funcName, params) {
        return super.executeAsync(this.path, funcName, params);
    }
    addGroup(groupName, Descriptions, showToChilds) {
        return this.execute('AddGroup', {
            ...this.data,
            groupName,
            Descriptions,
            showToChilds
        });
    }
    add(params) {
        return this.execute('AddContact', {
            ...this.data,
            ...params
        });
    }
    checkMobileExist(mobileNumber) {
        return this.execute('CheckMobileExistInContact', {
            ...this.data,
            mobileNumber
        });
    }
    get(groupId, keyword, from, count) {
        return this.execute('GetContacts', {
            ...this.data,
            groupId,
            keyword,
            from: from,
            count
        });
    }
    getGroups() {
        return this.execute('GetGroups', this.data);
    }
    change(params) {
        return this.execute('ChangeContact', {
            ...this.data,
            ...params
        });
    }
    remove(mobilenumber) {
        return this.execute('RemoveContact', {
            ...this.data,
            mobilenumber
        });
    }
    getEvents(contactId) {
        return this.execute('GetContactEvents', {
            ...this.data,
            contactId
        });
    }
}
module.exports = ContactsAsync;