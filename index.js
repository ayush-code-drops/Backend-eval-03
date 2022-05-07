const app = require('./Routes/user');
const connectToDB = require('./DbConnection/mongoDB')
const PORT = 9008;
const http=require('http')

http.createServer(app).listen(PORT, () => {
    new connectToDB();
    
    console.log(`Server is running on port no ${PORT}`)
});