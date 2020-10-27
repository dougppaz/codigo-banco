# Código Banco

Extrator dos códigos de banco (código FEBRABAN) brasileiros apartir do site [www.codigobanco.com](https://www.codigobanco.com) utilizando Node.

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
