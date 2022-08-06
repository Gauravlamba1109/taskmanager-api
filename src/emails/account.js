// 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
const sgmail = require('@sendgrid/mail')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

const sendwelcomeemail = (email,name) =>{
    sgmail.send({ // returns a promise 
        to: email,
        from:'gauravlamba1109@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendcancellationemail = (email,name) =>{
    sgmail.send({ // returns a promise 
        to: email,
        from:'gauravlamba1109@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Thanks for using the app, ${name}. Was there anything we could have done to keep you with us longer, let us know.`
    })
}


module.exports= {
    sendwelcomeemail,
    sendcancellationemail
}