# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: defer fará o browser esperar para executar o script até a interpretação do html estar completa
 async fará somente o browser esperar até o script baixar completamente, pode ser
que o script rode antes da interpretação do html ou depois dependendo de quando o download terminar,
se o async for suportado pelo browser tomará o lugar do defer

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: seria para inicializar assincronamente o maps chamando a função que instancia um novo mapa de acordo com as coordenadas passadas

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: a função initMap não é chamada assincronamente, logo não é criada uma nova instancia e o mapa não é inicializado

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: Não precisamos chamar a função initMap assincronamente, podemos tirar as tags async e defer e adicionar um domListener chamando o initMap após a div do map ser renderizado no DOM exemplo: google.maps.event.addDomListener(window, "load", initMap);


### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R:a tag link busca um arquivo criado em outro pasta ou dentro da mesma.
 Na tag meta você definirá o conteúdo do site dentro serão definidas palavras chaves para que o usuário encontre o site ou aplicação, pode ser usada tambem para controlar o viewport


### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R:


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R:lifecycle hooks são numero de fases que você pode definir desde a inicialização do
componente até a finalização, usando os lifecycle hooks podemos definir um determinado comportamento 
para o componente durante a criação, atualização e finalização 

ngOinit é invocado sempre que um componente é inicializado, ele é chamado somnente 1 vez, enquanto
que o ngOnchange é chamado toda vez que há uma mudança em qualquer input

ngOnChanges é invocado toda vez que há uma mudança em um dos inputs do component respectivo


ngOnDestroy é chamado toda vez que o component é finalizado

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: Web Components permiti que possamos  quebrar cada funcionalidade da nossa aplicação e reutiliza-las quando necessário.
Por exemplo: podemos fazer um navbar em um aquivo separado e apenas com uma tag podemos inseri-lo dentro de qualquer página com isso salvamos tempo e podemos criar uma aplicação de forma mais eficaz e rápida.
web component é um termo para 4 especificações:
1 custom elements: que permite criar tag personalizadas
2 html imports: permite que você importe o seu elemento html em outro html.
3 Templates: permite que você crie um pedaço de código que não será renderizado.
4- Shadow-DOM: permiti que você isole o comportamento do compotente, estilos, funções etc não irão interferir em outros elementos ou no restante da aplicação

### c) Para que serve a tag ngFor do angular?
R:é uma diretiva que funciona como um for


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R:Defini que a variavel legends é um Array de string com atribuição de um array vazio, como o tipescript é uma linguagem tipada, toda váriavel tem que ser inicializada com um tipo, poderiamos defini-la
como  nulo ou undefined, pois caso tentarmos usar a váriavel sem definir o tipo, daria um erro

### e) Como funciona a api Events do Ionic? Para que serve?
R: 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: flexbox- é um modo de layout que permiti um jeito fácil e rápido de alinhar itens dentro de um container.
O layout do teste de html e css realizei com flex-box.
ion-grid é uma tag que é utilizada para estruturar o layout da página. o sistema de grid
é composto por 3 unidades: grid, rows e colums, é como o sistema de grid 
do bootstrap, a tela é dividida em 12 colunas e funciona como se fosse uma table
temos 1 elemento grid, é possivel especificar rows e logo após pode se especificar columns

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:- em home.page.ts loadingController estava com nome errado no import
- no try da função setTimeout faltava referenciar o dismissLoading utilizando this.dismissLoading, logo iria aparecer um erro desconhecido para o o usuário

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R:asyn await aguarda a função .create terminar para continuar executando

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: são maneiras de lidar com dados asyncronos, você pode utilizar quando algo está executando, mas voc~e não quer aguardar aquele codigo finalizar para continuar o programa, ou talvez você queira executar uma parte e aguardar até a outra estar finalizada

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts import * as _ from 'lodash';
R:está importando todas as funções da lib lodash para que seja utilizado, é uma forma mais fácil de lidar com arrays,numeros, objetos e strings
