const axios = require('axios')
const cheerio = require('cheerio')

module.exports = () => axios
  .get('https://www.codigobanco.com/')
  .then(response => response.data)
  .then(cheerio.load)
  .then($ => $('table tbody tr').map((i, elem) => {
    const [code, name, site] = $(elem).find('td').map((i, elem) => $(elem).text()).get()
    return {
      code,
      name,
      site,
    };
  }))
  .then(mapResult => mapResult.get())
