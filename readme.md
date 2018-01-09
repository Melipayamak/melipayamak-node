# Melipayamak JS


<div dir='rtl'>

### معرفی وب سرویس ملی پیامک
ملی پیامک یک وب سرویس کامل برای ارسال و دریافت پیامک و پیامک صوتی و مدیریت کامل خدمات دیگر است که براحتی میتوانید از آن استفاده کنید.

### نصب
<hr>
<p>قبل از نصب نیاز به ثبت نام در سایت ملی پیامک دارید.</p>

[ثبت نام در ملی پیامک](http://www.melipayamak.com/)


<p>پس ازثبت نام  برای نصب از راههای زیر میتوانید اقدام کنید.</p>



</div>


```js
npm install melipayamak-api 
```


<div dir='rtl'>

یا از طریق اضافه کردن خط زیر به فایل 
package.json



</div>


```json
"melipayamak-api": "*"
```


<div dir='rtl'>


و سپس اجرای دستور 



</div>

    npm update


	
<div dir='rtl'>

	
	
#### نحوه استفاده
نمونه کد برای ارسال پیامک



</div>



```js
const MelipayamakApi = require('melipayamak-api')
    const username = 'username';
    const password = 'password';
    const api = new MelipayamakApi(username,password);
    const sms = api.sms();
    const to = '09123456789';
    const from = '5000...';
    const text = 'تست وب سرویس ملی پیامک';
    sms.send(to,from,text).then(res=>{
        //RecId or Error Number 
    }).catch(err=>{
        //
    })

```


<div dir='rtl'>

از آنجا که وب سرویس ملی پیامک تنها محدود به ارسال پیامک نیست  شما از طریق  زیر میتوانید به وب سرویس ها دسترسی کامل داشته باشید:


</div>

```js
// وب سرویس پیامک
const smsRest = api.sms();
const smsSoap = api.sms('soap');
// وب سرویس تیکت پشتیبانی
const ticket = api.ticket();
// وب سرویس برای مدیریت کامل  ارسال انبوه پیامک
const branch = api.branch();
//وب سرویس کاربران
const users = api.users();
//وب سرویس دفترچه تلفن
const contacts = api.contacts();

```


<div dir='rtl'>


#### تفاوت های وب سرویس پیامک rest و soap
از آنجا که ملی پیامک وب سرویس کاملی رو در اختیار توسعه دهندگان میگزارد برای راحتی کار با وب سرویس پیامک علاوه بر وب سرویس اصلی soap وب سرویس rest رو هم در اختیار توسعه دهندگان گزاشته شده تا راحتتر بتوانند با وب سرویس کار کنند. تفاوت اصلی این دو در تعداد متد هاییست که میتوانید با آن کار کنید. برای کار های پایه میتوان از وب سرویس rest استفاده کرد برای دسترسی بیشتر و استفاده پیشرفته تر نیز باید از وب سرویس باید از وب سرویس soap استفاده کرد.
جهت  مطالعه بیشتر وب سرویس ها به قسمت وب سرویس پنل خود مراجعه کنید.
<hr/>


###  اطلاعات بیشتر

برای مطالعه بیشتر و دریافت راهنمای وب سرویس ها و آشنایی با پارامتر های ورودی و خروجی وب سرویس به صفحه معرفی
[وب سرویس ملی پیامک](https://github.com/Melipayamak/Webservices)
مراجعه نمایید .


<hr/>


### وب سرویس پیامک

متد های وب سرویس:


</div>

#### ارسال

```js
smsRest.send(to,from,text,isFlash);
smsSoap.send(to,from,text,isFlash);
```
* در وب سرویس soap به جای ارسال یک شماره آرایه ای از شماره ها نیز قابل قبول است

#### دریافت وضعیت ارسال
```js
smsRest.isDelivered(recId);
smsSoap.isDelivered(recId);
```
* به در وب سرویس soap به جای تک آیدی میتوان آرایه نیز ارسال کرد.
#### لیست پیامک ها
```js
smsRest.getMessages(location,index,count,from);
smsSoap.getMessages(location,index,count,from);
smsSoap.getMessagesStr(location,index,count,from);
// جهت دریافت به صورت رشته ای
smsSoap.getMessagesByDate(location,index,count,from,dateFrom,dateTo);
//جهت دریافت بر اساس تاریخ
smsSoap.getUsersMessagesByDate(location,index,count,from,dateFrom,dateTo);
// جهت دریافت پیام های کاربران بر اساس تاریخ 
```

#### موجودی
```js
smsRest.getCredit();
smsSoap.getCredit();
```

#### تعرفه پایه / دریافت قیمت قبل از ارسال
```js
smsRest.getBasePrice();
smsSoap.getPrice(irancellCount,mtnCount,from,text);
```
#### لیست شماره اختصاصی
```js
smsRest.getNumbers();
```

#### بررسی تعداد پیامک های دریافتی
```js
smsSoap.getInboxCount(isRead);
//پیش فرض خوانده نشده 
```

#### ارسال پیامک پیشرفته
```js
smsSoap.send2(to,from,text,isflash,udh);
```

#### مشاهده مشخصات پیام
```js
smsSoap.getMessagesReceptions(msgId,fromRows);
```


#### حذف پیام دریافتی
```js
smsSoap.remove(msgIds);
```


#### ارسال زماندار
```js
smsSoap.sendSchedule(to,from,text,isflash,scheduleDateTime,period);
```

#### ارسال زماندار متناظر
```js
smsSoap.sendMultipleSchedule(to,from,text,isflash,scheduleDateTime,period);
```


#### ارسال سررسید
```js
smsSoap.addUsance(to,from,text,isflash,scheduleStartDateTime,repeatAfterDays,scheduleEndDateTime);
```

#### مشاهده وضعیت ارسال زماندار
```js
smsSoap.getScheduleStatus(schId);
```

#### حذف پیامک زماندار
```js
smsSoap.removeSchedule(schId);
```


####  ارسال پیامک همراه با تماس صوتی
```js
smsSoap.sendWithSpeech(to,from,text,speech);
```

####  ارسال پیامک همراه با تماس صوتی به صورت زمانبندی
```js
smsSoap.sendWithSpeechSchduleDate(to,from,text,speech,scheduleDate);
```

####  دریافت وضعیت پیامک همراه با تماس صوتی 
```js
smsSoap.getSendWithSpeech(recId);
```
### وب سرویس ارسال انبوه/منطقه ای

#### دریافت شناسه شاخه های بانک شماره
```js
branch.get(owner);
```


#### اضافه کردن یک بانک شماره جدید
```js
branch.add(branchName,owner);
```

#### اضافه کردن شماره به بانک
```js
branch.addNumber(mobileNumbers,branchId);
```

#### حذف یک بانک
```js
branch.remove(branchId);
```

#### ارسال انبوه از طریق بانک
```js
branch.sendBulk(from,title,message,branch,DateToSend,requestCount,bulkType,rowFrom,rangeFrom,rangeTo);
branch.sendBulk2(from,title,message,branch,DateToSend,requestCount,bulkType,rowFrom,rangeFrom,rangeTo);
```

#### تعداد شماره های موجود
```js
branch.getBulkCount(branch,rangeFrom,rangeTo);
```

#### گزارش گیری از ارسال انبوه
```js
branch.getBulkReceptions(bulkId,fromRows);
```


#### تعیین وضعیت ارسال 
```js
branch.getBulkStatus(bulkId);
```

#### تعداد ارسال های امروز
```js
branch.getTodaySent();
```

#### تعداد ارسال های کل

```js
branch.getTotalSent();
```

#### حذف ارسال منطقه ای
```js
branch.removeBulk(id);
```

#### ارسال متناظر
```js
branch.sendMultipleSms(to,from,text,isflash,udh);
```

#### نمایش دهنده وضعیت گزارش گیری

```js
branch.updateBulkDelivery(bulkId);
```
### وب سرویس تیکت

#### ثبت تیکت جدید
```js
ticket.add(title,content,aletWithSms);
```

#### جستجو و دریافت تیکت ها

```js
ticket.getReceived(ticketOwner,ticketType,keyword);
```

#### دریافت تعداد تیکت های کاربران
```js
ticket.getReceivedCount(ticketType);
```

#### دریافت تیکت های ارسال شده
```js
ticket.getSent(ticketOwner,ticketType,keyword);
```

#### دریافت تعداد تیکت های ارسال شده
```js
ticket.getSentCount(ticketType);
```


#### پاسخگویی به تیکت
```js
ticket.response(ticketId,type,content,alertWithSms);
```

### وب سرویس دفترچه تلفن

#### اضافه کردن گروه جدید
```js
contacts.addGroup(groupName,Descriptions,showToChilds);
```

#### اضافه کردن کاربر جدید
```js
contacts.add(options);

```

#### بررسی موجود بودن شماره در دفترچه تلفن
```js
contacts.checkMobileExist(mobileNumber);
```

#### دریافت اطلاعات دفترچه تلفن
```js
contacts.get(groupId,keyword,from,count);
```
#### دریافت گروه ها
```js
contacts.getGroups();
```
#### ویرایش مخاطب
```js
contacts.change(options);
```

#### حذف مخاطب
```js
contacts.remove(mobilenumber);
```
#### دریافت اطلاعات مناسبت های فرد
```js
contacts.getEvents(contactId);
```



### وب سرویس کاربران

#### ثبت فیش واریزی
```js
users.addPayment(options);
```

#### اضافه کردن کاربر جدید در سامانه
```js
users.add(options);

```

#### اضافه کردن کاربر جدید در سامانه(کامل)
```js
users.addComplete(options);
```

#### اضافه کردن کاربر جدید در سامانه(WithLocation)
```js
users.addWithLocation(options);
```
#### بدست آوردن ID کاربر
```js
users.authenticate();
```
#### تغییر اعتبار
```js
users.changeCredit(amount,description,targetUsername,GetTax);
```

#### فراموشی رمز عبور
```js
users.forgotPassword(mobileNumber,emailAddress,targetUsername);
```
#### دریافت تعرفه پایه کاربر
```js
users.getBasePrice(targetUsername);
```

#### دریافت اعتبار کاربر
```js
users.getCredit(targetUsername);
```

#### دریافت مشخصات کاربر
```js
users.getDetails(targetUsername);
```

#### دریافت شماره های کاربر
```js
users.getNumbers();
```

#### دریافت تراکنش های کاربر
```js
users.getTransactions(targetUsername,creditType,dateFrom,dateTo,keyword);
```

#### دریافت اطلاعات  کاربران
```js
users.get();
```


#### دریافت اطلاعات  فیلترینگ
```js
users.hasFilter(text);
```


####  حذف کاربر
```js
users.remove(targetUsername);
```


#### مشاهده استان ها
```js
users.getProvinces();
```

#### مشاهده کد شهرستان 
```js
users.getCities(provinceId);
```


#### مشاهده تاریخ انقضای کاربر 
```js
users.getExpireDate();
```

