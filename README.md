<h1>Campeonato</h1>
<p>Sistema criado em laravel e angular para simular campeonatos de futebol aleatoriamente</p>
<p>Esse módulo do projeto se trata da interface de usuário do sistema.</p>

<h2>Instalação</h2>

<p>Inicie a API conforme as instruções da mesma</p>

<p>Instale o Angular globalmente na versão 16.1.6</p>
<pre>> npm install -g @angular/cli@16.1.6</pre>

<p>Dentro do projeto, baixe os pacotes necessários com NPM</p>
<pre>> npm install</pre>

<p>Altere o arquivo src/environments/environment.ts e coloque o endereço em que serão feitas as chamadas para a api</p>
<p>Se foi optado pelo padrão da API, não precisa alterar essa parte</p>
<pre>
export const environment = {

  apiUrl: 'http://localhost:8000/api',
  authTokenKey: 'auth_token'
};
</pre>

<p>Inicie o servidor</p>
<pre>> ng serve</pre>

<p>A porta padrão é a 4200, portanto, a API pode ser acessada através do endereço localhost:4200</p>
<p>Para usufruir das funcionalidade, é necessário primeiro se cadastrar e depois cadastrar os times.</p>


