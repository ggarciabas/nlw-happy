# Dia 3

- Arquivo `.tsx` somente é necessário quando vai-se criar algum componente ou utilizar html dentro do código.
- Pacote `axios` para solicitações.
- UseEffect, realiza o controle das chamadas de funções:
```js
useEffect(() => {}, []) // () => {} qual ação? // [] quando?
```
- UseState, realiza o controle das informações dos componentes (variável):
    - `useState<Orphanage[]>([]);`: define o tipo da lista por Template.
```js
const [orphanages, setOrphanages] = useState([]);
// [a variáel, função para modificar a variável]
```
- `forEach` vs `map`:
    - `forEach` percorre algo
    - `map` percorre algo e retorna algo
- Segurança para uso do `a` html:
    - `rel='noopener noreferrer'`
- `htmlFor`, permite uma tag agir como outra:
```html
<div className="images-container">
    <label className="new-image" htmlFor='image[]'>
    <FiPlus size={24} color="#15b6d6" />
</label>
</div>
<input type='file' id='image[]'/>
```
- Recurso global de todo navegador para gerar uma URL de um objeto: `URL.createObjectURL(Blob)`.