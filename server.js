const express = require('express')
const app = express()
const cors = require('cors')

const posts = require("./post.json")

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    // res.setHeader('Content-Type', 'application/json')

    res.json(posts)
})

app.get('/post/:id', (req, res) => {
    const id = req.params.id
    const post = posts.find(post => post.id === Number(id))
    
    if(!post) return res.json("User not found")
    res.json(post)
    
})


app.listen(3000, function(){
    console.log('listening on port 3000') 
})
