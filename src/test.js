var Api = require('./melipayamak')
var api = new Api('9122088891','5658')
console.log("test Rest")
api.sms().getCredit().then(res=>console.log(res)).catch(error=>console.log(error))
console.log("=================")
console.log("test Soap")
api.sms('soap').getInboxCount().then(res=>console.log(res)).catch(error=>console.log(error))
console.log("=================")
console.log("test Branch")
api.branch().get(0).then(res=>console.log(res)).catch(error=>console.log(error))
console.log("=================")
console.log("test Contacts")
api.contacts().getGroups().then(res=>console.log(res)).catch(error=>console.log(error))
console.log("=================")
console.log("test Ticket")
api.ticket().getSentCount('All').then(res=>console.log(res)).catch(error=>console.log(error))
api.ticket().getReceivedCount('All').then(res=>console.log(res)).catch(error=>console.log(error))
console.log("=================")
console.log("test users")
api.users().getExpireDate().then(res=>console.log(res)).catch(error=>console.log(error))
console.log("=================")


// var rest = new Rest('9122088891','5658')

// rest.getCredit().then(res=>console.log(res)).catch(error=>console.log(error));
// rest.getBasePrice().then(res=>console.log(res)).catch(error=>console.log(error));
// rest.getNumbers().then(res=>console.log(res)).catch(error=>console.log(error));
// rest.getMessages('1','0','3').then(res=>console.log(res)).catch(error=>console.log(error));
// soap = new Soap('9122088891','5658');
// soap.isDelivered(['5761309809260371649','5660750134374358936']).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log("Error");
//     console.log(err);
// })
// soap.getInboxCount(true).then(res=>{
//         console.log(res);
//     }).catch(err=>{
//         console.log("Error");
//         console.log(err);
//     })

// let b  = new Branch('9122088891','5658');
// b.addNumber('09093335544',940053).then(res=>{
//             console.log(res);
//         }).catch(err=>{
//             console.log("Error");
//             console.log(err);
//         })
// let c  = new Contacts('9122088891','5658');
// c.getGroups().then(res=>console.log(res)).catch(err=>{
//     console.log('err...')
//     console.log(err)
// })
// let t = new Ticket('9122088891','5658');
// t.getReceivedCount('All').then(res=>console.log(res)).catch(err=>{
//     console.log('err...')
//     console.log(err)
// })
// t.getSentCount('All').then(res=>console.log(res)).catch(err=>{
//     console.log('err...')
//     console.log(err)
// })
// let u = new Users('9122088891','5658');
// u.getCities(8).then(res=>console.log(res)).catch(err=>{
//     console.log('err...')
//     console.log(err)
// })
