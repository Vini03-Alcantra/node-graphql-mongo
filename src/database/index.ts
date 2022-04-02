import mongoose from 'mongoose';
const URL_CONNECT = process.env.URL_MONGODB!

mongoose.connect(URL_CONNECT)
    .then(() => {
        console.log("Conetcado")
    })     
    .catch((err) => console.log(err))



    

export {mongoose}