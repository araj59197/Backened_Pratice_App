require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000
const githubdata = {
    "login": "adityaraj",
    "id": 1852986,
    "node_id": "MDQ6VXNlcjE4NTI5ODY=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1852986?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/adityaraj",
    "html_url": "https://github.com/adityaraj",
    "followers_url": "https://api.github.com/users/adityaraj/followers",
    "following_url": "https://api.github.com/users/adityaraj/following{/other_user}",
    "gists_url": "https://api.github.com/users/adityaraj/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/adityaraj/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/adityaraj/subscriptions",
    "organizations_url": "https://api.github.com/users/adityaraj/orgs",
    "repos_url": "https://api.github.com/users/adityaraj/repos",
    "events_url": "https://api.github.com/users/adityaraj/events{/privacy}",
    "received_events_url": "https://api.github.com/users/adityaraj/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2012-06-15T06:54:53Z",
    "updated_at": "2016-02-27T02:28:36Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('adityawwwdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
