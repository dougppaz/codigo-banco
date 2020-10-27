const fs = require('fs')
const YAML = require('yaml')
const codigosBancos = require('.')

const yamlPath = process.argv[3] || './dist/codigo-banco.yml'

codigosBancos()
  .then(result => YAML.stringify(result))
  .then(content => fs.writeFileSync(yamlPath, content))
