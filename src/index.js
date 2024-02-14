const express = require("express");
const fs = require("fs");

const app = express();

const port = 3000;

app.get("/video", (req, res)=>{
    
    const path = "/home/jaesung/jaesung/development/video_streamer/videos/SampleVideo_1280x720_1mb.mp4";
    fs.stat(path, (err, stats) =>{
        if (err) {
            console.error("An error occured");
            res.sendStatus(500);
            return;
        }

        res.writeHead(200, {
            "Content-Length": stats.size,
            "Content-Type": "video/mp4",
        });
        fs.createReadStream(path).pipe(res); // createReadStream -> Reading large files in chunks // pipe -> The contents of the file can be delivered as an HTTP response
    });
});

app.listen(port, ()=>{
    console.log('app listening on port ${port}, point your browser at http://localhost:3000/video');
});