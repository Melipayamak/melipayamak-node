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

    addContact2(groupIds, firstname, lastname, gender, corporation, mobilenumber) {
        return this.execute('AddContact2', {
            ...this.data, groupIds, firstname, lastname, gender, corporation, mobilenumber
        });
    }

    addContactEvents(contactId, eventName, eventType, eventDate) {
        return this.execute('AddContactEvents', {
            ...this.data, contactId, eventName, eventType, eventDate
        });
    }

    changeContact2(contactId, mobilenumber, firstname, lastname, nickname, corporation, phone, fax, email, gender,
        province, city, address, postalCode, additionaltext, descriptions, contactStatus, birthdate
    ) {
        return this.execute('ChangeContact2', {
            ...this.data, contactId, mobilenumber, firstname, lastname, nickname, corporation, phone, fax, email, gender,
            province, city, address, postalCode, additionaltext, descriptions, contactStatus, birthdate
        });
    }

    changeGroup(groupId, groupName, Descriptions, showToChilds, groupStatus) {
        return this.execute('ChangeGroup', {
            ...this.data, groupId, groupName, Descriptions, showToChilds, groupStatus
        });
    }

    removeContact2(contactId, groupId) {
        return this.execute('RemoveContact2', {
            ...this.data, contactId, groupId
        });
    }

    removeGroup(groupId) {
        return this.execute('RemoveGroup', {
            ...this.data, groupId
        });
    }
}
module.exports = ContactsAsync;