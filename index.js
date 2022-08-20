const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const cors = require('cors')
app.use(cors())


const articles = []

const autismArticles = []

const mindsetArticles = []

const legalArticles = []

const stylesArticles = []

const quotes = []

const prenatalArticles = []

const singleArticles = []

const educationArticles = []

const autismResources = [
    {
        name: 'autismparentingmagazine',
        address: 'https://www.autismparentingmagazine.com/category-archives',
        base: 'https://www.autismparentingmagazine.com/'
    },
    {
        name: 'autism',
        address: 'https://autismsociety.org/may-2021-toolkit/?hilite=teenage',
        base: 'https://autismsociety.org/may-2021-toolkit/?hilite=teenage'
    },
    {
        name: 'verywellfamily',
        address: 'https://www.verywellfamily.com/search?q=autism',
        base: 'https://www.verywellfamily.com/search?q=autism'
    },
]

const mindsetResources = [
    {
        name: 'khanacademy',
        address: 'https://www.khanacademy.org/college-careers-more/learnstorm-growth-mindset-activities-us/high-school-activities',
        base: 'https://www.khanacademy.org/college-careers-more/learnstorm-growth-mindset-activities-us/high-school-activities'
    },
    {
        name: 'verywellmind',
        address: 'https://www.verywellmind.com/meditation-overview-4581783',
        base: 'https://www.verywellmind.com'
    },
        {
        name: 'verywellmind',
        address: 'https://www.verywellmind.com/stress-management-overview-4581770',
        base: 'https://www.verywellmind.com'
    },
     {
        name: 'verywellmind',
        address: 'https://www.verywellmind.com/happiness-4157200',
        base: 'https://www.verywellmind.com'
    },
          {
        name: 'verywellmind',
        address: 'https://www.verywellmind.com/best-online-therapy-4691206',
        base: 'https://www.verywellmind.com'
    },
]

const legalResources = [
    {
        name: 'findlaw',
        address: 'https://www.findlaw.com/family.html',
        base: ''
    },
 ]

const stylesResources = [
    {
        name: 'verywellmind',
        address: 'https://www.verywellmind.com/parenting-styles-2795072',
        base: ''
    },
    {
        name: 'frontiersin',
        address: 'https://www.frontiersin.org/journals/psychology/articles?query=parenting%20styles',
        base: 'https://www.frontiersin.org/journals/psychology/articles?query=parenting%20styles'
    }
]

const parentQuotes = [
    {
        name: 'momtastic',
        address: 'https://www.momtastic.com/parenting/541137-40-amazing-quotes-parenthood/',
        base: 'https://www.momtastic.com/parenting/541137-40-amazing-quotes-parenthood/'
    }
]


const prenatalResources = [
    {
        name: 'babylist',
        address: 'https://www.babylist.com/hello-baby/pregnancy',
        base: 'https://www.babylist.com/hello-baby/pregnancy'
    }
]

const singleResources = [
    // {
    //     name: 'singlemom',
    //     address: 'http://www.singlemom.com/',
    //     base: ''
    // },
    {
        name: 'singlemom',
        address: 'http://www.singlemom.com/get-advice/',
        base: ''
    },
    {
        name: 'single',
        address: 'https://www.imom.com/category/motherhood/single-moms',
        base: ''
    }
]

const eductionResources = [
    {
        name: 'blendspace',
        address: 'https://www.blendspace.com/lessons/gallery',
        base: ''
    },
    {
        name: 'blendspace',
        address: 'https://www.blendspace.com/lessons/search/technology',
        base: ''
    },
    {
        name: 'blendspace',
        address: 'https://www.blendspace.com/lessons/search/math',
        base: ''
    }
]

eductionResources.forEach(resource => {
    axios.get(resource.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("lessons")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                educationArticles.push({
                    title,
                    url: resource.base + url,
                    source: resource.name
                })
            })

        })
})

singleResources.forEach(resource => {
    axios.get(resource.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("single")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                singleArticles.push({
                    title,
                    url: resource.base + url,
                    source: resource.name
                })
            })

        })
})

parentQuotes.forEach(resource => {
    axios.get(resource.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('p:contains("parent")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                quotes.push({
                    title,
                    url: resource.base + url,
                    source: resource.name
                })
            })

        })
})


autismResources.forEach(resource => {
    axios.get(resource.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("autism")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                autismArticles.push({
                    title,
                    url: resource.base + url,
                    source: resource.name
                })
            })

        })
})


mindsetResources.forEach(resource => {
    axios.get(resource.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("mind")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                mindsetArticles.push({
                    title,
                    url: resource.base + url,
                    source: resource.name
                })
            })
            console.log(mindsetArticles)
        })
})

legalResources.forEach(resource => {
    axios.get(resource.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("family")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                legalArticles.push({
                    title,
                    url: resource.base + url,
                    source: resource.name
                })
            })
            console.log(legalArticles)
        })
})


stylesResources.forEach(resource => {
    axios.get(resource.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("parenting")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                stylesArticles.push({
                    title,
                    url: resource.base + url,
                    source: resource.name
                })
            })
            console.log(stylesArticles)
        })
})


prenatalResources.forEach(resource => {
    axios.get(resource.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("baby")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                prenatalArticles.push({
                    title,
                    url: resource.base + url,
                    source: resource.name
                })
            })
            console.log(prenatalArticles)
        })
})


app.get('/', (req, res) => {
    res.json('Welcome to my Parent Resource API')
})

app.get('/resources', (req, res) => {
    res.json(articles)
})

app.get('/resources/autism', (req, res) => {
    res.json(autismArticles)
})

app.get('/resources/styles', (req, res) => {
    res.json(stylesArticles)
})

app.get('/resources/legal', (req, res) => {
    res.json(legalArticles)
})

app.get('/resources/happymind', (req, res) => {
    res.json(mindsetArticles)
})

app.get('/resources/quotes', (req, res) => {
    res.json(quotes)
})

app.get('/resources/prenatal', (req, res) => {
    res.json(prenatalArticles)
})

app.get('/resources/single', (req, res) => {
    res.json(singleArticles)
})

app.get('/resources/education', (req, res) => {
    res.json(educationArticles)
})




app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
