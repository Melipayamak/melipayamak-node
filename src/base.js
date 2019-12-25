class Base
{
    constructor(username,password)
    {
        this.username = username;
        this.password = password;
        this.data = {
            username, password
        };
    }
}

module.exports = Base;