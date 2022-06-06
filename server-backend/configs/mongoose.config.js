const mongoose = require('mongoose')

//change the password before you upload on github
mongoose.connect('mongodb+srv://root:rootroot@Winner.38al9.mongodb.net/Winner?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));