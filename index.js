let express = require("express")
let app = express()
let path = require("path")
console.log("kler:asim")
app.get("/",(req,res) => { 
     res.sendfile(path.join(__dirname,'src/index.html'))
})
app.get("/video",(req,res) => {
    res.sendfile(path.join(__dirname,'src/.html'))
    })
app.get("/rules",(req,res) => {
    res.sendfile(path.join(__dirname,'/src/rules.html'))
})
app.get("/wut",(req,res) => {
    res.sendfile(path.join(__dirname,'/src/wut.html'))
})
app.get("*",(req,res) => {
    res.send(`
<head>
<title>404 nut fund 💀</title>
<meta property="og:image" content="https://files.jcmainclr.xyz/uploads/gamers.gif"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://files.jcmainclr.xyz/scripts/loader.css">

</head>
<div class='hiddenv2'>
<h1>404 page not found ${req.url}<br><br></h1>
</div>
<div class="hiddenv2">

<h1>blake-kyle</h1>  <br>
<img src='https://files.jcmainclr.xyz/uploads/wat.PNG' width='400'><br>
<p>redirect on home page in 3 seconds if doent work <a href='/'>home page </a> </p>

<script>
window.setTimeout(function(){


window.location.href = "/";

}, 5000);
</script>
<h1>sorry im listening to <img src='https://spotify-github-profile.vercel.app/api/view.svg?uid=odul82kwgnci0steg1h0nftsz&cover_image=true&theme=novatorem&show_offline=true&background_color=520000&bar_color=53b14f&bar_color_cover=true' width='400'> -dev</h1>
</div>
<style>
body{
background:#111;
color:#FFF;
font-family: 'Roboto',sans-serif;
}
a{
font-size: 20px;
}
p{
font-size: 20px;
}
</style>

<script src="https://files.jcmainclr.xyz/scripts/loader.js"></script>
    `,404)
})
app.listen(3000)
