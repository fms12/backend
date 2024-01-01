const express = require("express");
const {PORT} = require("./config/serverConfig")
const cors = require("cors");
const ApiRoutes = require("./routes/index");

const  setupAndStartService = ()=>{

    const app = express();
    app.use(cors());
    app.use(express.json()); //For JSON requests
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes)
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });

}

setupAndStartService();