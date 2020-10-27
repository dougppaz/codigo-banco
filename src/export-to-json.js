const fs = require('fs')
const codigosBancos = require('.')

const jsonPath = process.argv[3] || './dist/codigo-banco.json'

codigosBancos()
  .then(result => JSON.stringify(result, null, 2))
  .then(content => fs.writeFileSync(jsonPath, content))
