var BaseSoap = require('./baseSoap');

class UsersAsync extends BaseSoap {
   
    constructor(username, password) {
        super(username, password);
        this.path = 'http://api.payamak-panel.com/post/users.asmx?wsdl'
    }
    execute(funcName, params) {
        return super.executeAsync(this.path, funcName, params);
    }
    addPayment(params) {
        return this.execute('AddPayment', {
            ...this.data,
            ...params
        });
    }
    add(params) {
        return this.execute('AddUser', {
            ...this.data,
            ...params
        });
    }
    addComplete(params) {
        return this.execute('AddUserComplete', {
            ...this.data,
            ...params
        });
    }
    addWithLocation(params) {
        return this.execute('AddUserWithLocation', {
            ...this.data,
            ...params
        });
    }
    authenticate() {
        return this.execute('AuthenticateUser', this.data);
    }
    changeCredit(amount, description, targetUsername, GetTax) {
        return this.execute('ChangeUserCredit', {
            ...this.data,
            amount,
            description,
            targetUsername,
            GetTax
        });
    }
    forgotPassword(mobileNumber, emailAddress, targetUsername) {
        return this.execute('ForgotPassword', {
            ...this.data,
            mobileNumber,
            emailAddress,
            targetUsername
        });
    }
    getBasePrice(targetUsername) {
        return this.execute('GetUserBasePrice', {
            ...this.data,
            targetUsername
        });
    }
    remove(targetUsername) {
        return this.execute('RemoveUser', {
            ...this.data,
            targetUsername
        });
    }
    getCredit(targetUsername) {
        return this.execute('GetUserCredit', {
            ...this.data,
            targetUsername
        });
    }
    getDetails(targetUsername) {
        return this.execute('GetUserDetails', {
            ...this.data,
            targetUsername
        });
    }
    getNumbers() {
        return this.execute('GetUserNumbers', this.data);
    }
    getProvinces() {
        return this.execute('GetProvinces', this.data);
    }
    getCities(provinceId) {
        return this.execute('GetCities', {
            ...this.data,
            provinceId
        });
    }
    getExpireDate() {
        return this.execute('GetExpireDate', this.data);
    }
    getTransactions(targetUsername, creditType, dateFrom, dateTo, keyword) {
        return this.execute('GetUserTransactions', {
            ...this.data,
            targetUsername,
            creditType,
            dateFrom,
            dateTo,
            keyword
        });
    }
    get() {
        return this.execute('GetUsers', this.data);
    }
    hasFilter(text) {
        return this.execute('HasFilter', {
            ...this.data,
            text
        });
    }
}
module.exports = UsersAsync;