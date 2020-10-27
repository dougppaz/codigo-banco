# Código Banco
![Release or Update](https://github.com/dougppaz/codigo-banco/workflows/Release%20or%20Update/badge.svg)

Extrator dos códigos de banco (código FEBRABAN) brasileiros apartir do site [www.codigobanco.com](https://www.codigobanco.com) utilizando Node.

[Baixar códigos em JSON](https://github.com/dougppaz/codigo-banco/releases/latest/download/codigo-banco.json)

## Exportador para JSON

```shell
$ yarn run export-to-json
```

Saída em `dist/codigo-banco.json`

```json
[
  {
    "code": "001",
    "name": "Banco do Brasil S.A.",
    "site": "www.bb.com.br"
  },
  ...
]
```
