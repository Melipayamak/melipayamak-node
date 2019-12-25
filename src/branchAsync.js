var BaseSoap = require('./baseSoap');

class BranchAsync extends BaseSoap {
    
    constructor(username, password) {
        super(username, password);
        this.path = 'http://api.payamak-panel.com/post/Actions.asmx?wsdl'
    }
    execute(funcName, params) {
        return super.executeAsync(this.path, funcName, params);
    }
    get(owner) {
        return this.execute('GetBranchs', {
            ...this.data,
            owner
        });
    }
    remove(branchId) {
        return this.execute('RemoveBranch', {
            ...this.data,
            branchId
        });
    }
    add(branchName, owner) {
        return this.execute('AddBranch', {
            ...this.data,
            branchName,
            owner
        });
    }
    addNumber(mobileNumbers, branchId) {
        return this.execute('AddNumber', {
            ...this.data,
            mobileNumbers,
            branchId
        });
    }
    sendBulk(from, title, message, branch, DateToSend, requestCount, bulkType, rowFrom, rangeFrom, rangeTo) {
        return this.execute('AddBulk', {
            ...this.data,
            from: from,
            title,
            message,
            branch,
            DateToSend,
            requestCount,
            bulkType,
            rowFrom,
            rangeFrom,
            rangeTo
        });
    }
    sendBulk2(from, title, message, branch, DateToSend, requestCount, bulkType, rowFrom, rangeFrom, rangeTo) {
        return this.execute('AddBulk2', {
            ...this.data,
            from: from,
            title,
            message,
            branch,
            DateToSend,
            requestCount,
            bulkType,
            rowFrom,
            rangeFrom,
            rangeTo
        });
    }
    getBulkCount(branch, rangeFrom, rangeTo) {
        return this.execute('GetBulkCount', {
            ...this.data,
            branch,
            rangeFrom,
            rangeTo
        });
    }
    getBulkReceptions(bulkId, fromRows) {
        return this.execute('GetBulkReceptions', {
            ...this.data,
            bulkId,
            fromRows
        });
    }
    getBulkStatus(bulkId) {
        return this.execute('GetBulkStatus', {
            ...this.data,
            bulkId
        });
    }
    getTodaySent() {
        return this.execute('GetTodaySent', this.data);
    }
    getTotalSent() {
        return this.execute('GetTotalSent', this.data);
    }
    removeBulk(bulkId) {
        return this.execute('RemoveBulk', {
            ...this.data,
            bulkId
        });
    }
    sendMultipleSms(to, from, text, isflash, udh) {
        const data = {
            ...this.data,
            to,
            from: from,
            text,
            isflash,
            udh
        }
        return Array.isArray(from) ? this.execute('SendMultipleSMS2', data) : this.execute('SendMultipleSMS', data)
    }
    updateBulkDelivery(bulkId) {
        return this.execute('UpdateBulkDelivery', {
            ...this.data,
            bulkId
        });
    }
}
module.exports = BranchAsync;