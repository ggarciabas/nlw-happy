# Dia 1

## Criar aplicação React

```
yarn create react-app web --template typescript
```

## Executar aplicação

```
yarn start
```

## Pontos destaques

- A extensão *x permite inserir tags HTML dentro do código: tsX ou jsX; 
- Todo componente React é uma função que retorna um HTML;
- Para definir uma classe HTML a uma tag HTML dentro do código via REACT se faz necessário utilizar a tag `className`, dado que `class` é uma palavra reservada da linguagem;
- As propriedades são ferramentas que permitem passar informações para os componentes;
```js
interface TesteProps {
    texto: string;
}
function Teste (props: TesteProps) {
    return (
        <h1>{props.texto}</h1>
    )
}
function App () {
    return (
        <div>
            <Teste texto='Um Teste'/>
        </div>
    )
}
```
- No CSS se faz necessário indicar uma fonte específica para `input`, `button` e `textarea` dado que estes não 'herdam' do `body` esta informação, eles possuem uma própria.
- No react todas as importações de estilos ou imagens vão ser carregadas por um javascript ou typescript. Não são realizadas importações via HTML, para manter ele sempre limpo.
- Para forçar o uso de 100% da página:
```css
height: 100vh;
width: 100vw;
```
- O componente `Link` do `react-router-dom` permite mudar de página reproveitando o conteúdo que já havia sido carregado.