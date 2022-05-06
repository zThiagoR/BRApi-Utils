# BRApi-Utils
### Uma lib que facilita para retornar os dados especifico vindo do [Brasil API](https://brasilapi.com.br/docs#tag/Brasil-API).
A intenção da criação desta lib foi para meus estudos de criar o primeiro lib e publicar em NPM. 👨‍💻
 
## Tecnologias
Tecnologias usados para fazer lib:
- Axios
- TypeScript

## Instalação

Para instalar a dependência, basta ir no seu projeto e digitar:
```sh
npm i brapi-utils or yarn add brapi-utils
```

##Exemplos de uso
```js
import { BRApiUtils } from 'brapi-utils'

const brApiUtils = new BRApiUtils()

/* Tipos disponiveis: 'CEP' | 'BANKS' | 'DDD' | 'CNPJ'; */

async function fetchCEP() {
  try {
    const response = await brApiUtils.fetch({ type: 'CEP', code: '01001000' })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

fetchCEP()

/* SAIDA: 
{
  cep: '01001000',
  state: 'SP',
  city: 'São Paulo',
  neighborhood: 'Sé',
  street: 'Praça da Sé',
  service: 'correios',
  location: {
    type: 'Point',
    coordinates: {
      longitude: '-46.633080956332904',
      latitude: '-23.550389799999998'
    }
  }
}
*/
```

## License
MIT