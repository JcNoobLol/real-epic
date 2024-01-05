let express = require("express")
let app = express()
let path = require("path")
console.log("kler:asim")
app.get("/",(req,res) => { 
     res.sendfile(path.join(__dirname,'src/index.html'))
})
app.get("/video",(req,res) => {
    res.sendfile(path.join(__dirname,'src/video.html'))
    })
app.get("/rules",(req,res) => {
    res.sendfile(path.join(__dirname,'/src/rules.html'))
})
app.get("/wut",(req,res) => {
    res.sendfile(path.join(__dirname,'/src/wut.html'))
})
app.get("*",(req,res) => {
    res.send(`404 page not found ${req.url}L<br><br>
     blake-kyle  <br>
     redirect on home page in 3 seconds if doent work <a href='/'>home page </a>
    
    <script>
    window.setTimeout(function(){

    
        window.location.href = "/";

    }, 5000);
     </script>
    <h1>sorry im listening to <img src='https://spotify-github-profile.vercel.app/api/view.svg?uid=odul82kwgnci0steg1h0nftsz&cover_image=true&theme=novatorem&show_offline=true&background_color=520000&bar_color=53b14f&bar_color_cover=true' width='200'> -dev</h1>
    <style>
    body{
        background:#111;
        color:#FFF;
        font-family: 'Roboto',sans-serif;
    }
    </style>
    `,404)
})
app.listen(3000)
