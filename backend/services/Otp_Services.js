const crypto = require('crypto');
const hash_Services = require('./hash_Services');



const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const twilio = require('twilio')(smsSid, smsAuthToken,{
    lazyLoading : true,

});
class OtpServices {

    async generateOtp() {
        const otp = await crypto.randomInt(1000,9999);

        return otp;
    }

    async sendBySms(phone , otp) {
        return await twilio.messages.create({
            to : phone,
            from : process.env.SMS_FROM_NUMBER,
            body : `your are chatRoom verification otp ${otp}`
        })
    }

    verifyOtp(hashedOtp,data) {
        const ComputedHahs = hash_Services.hashOtp(data);

        if(ComputedHahs === hashedOtp) {
            return true;
        }
        return false;
    }

}

module.exports = new OtpServices();