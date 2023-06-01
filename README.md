<h1 align="center">Pulse</h1>

<p align="center">
<img src="https://github.com/SilvanoGPM/pulse/assets/59753526/b1d5184c-8cc8-4ad9-978c-3bfd79cfb7ac" />
</p>

<p align="center">Handler de comandos desenvolvido em TypeScript para facilitar a criação e gerenciamento de comandos no Discord.</p>

## Tecnologias :rocket:

- Discord.js
- TypeScript
- Figlet

## Como utilizar :wrench:

### Criando aplicação do Discord 🖥️:

1. Vá até o [painel de desenvolvedor](https://discord.com/developers/applications) do Discord.
2. Clique em `New Application` e crie uma nova aplicação.
3. Acesse a seção `Bot` e clique em `Reset Token`, copie o token gerado e salve-o.
4. Ative todos as opções em `Privileged Gateway Intents`.

![image](https://github.com/SilvanoGPM/pulse/assets/59753526/3dd94e63-f1d9-4a49-8390-8e79861dfec5)

5. Acesse a seção `OAuth2 -> URL Generator` e ative os escopos `bot` e `applications.commands`, e nas permissões do bot ative a `Adminstrator`, para finalizar, clique em copiar a URL gerada.

![image](https://github.com/SilvanoGPM/pulse/assets/59753526/d8c24c27-1d87-448b-aa60-f495a51d58c0)
![image](https://github.com/SilvanoGPM/pulse/assets/59753526/2266c48c-b8d2-4e89-97f2-c4992a136c97)
![image](https://github.com/SilvanoGPM/pulse/assets/59753526/e3a3d0cf-7bae-41f0-94d1-acb8005f20ed)

6. Cole a URL gerada no navegador ou no discord e selecione o servidor que deseja adicionar o Bot.

### Configurando o BOT 🤖:

1. Clone este repositório.
2. Copie o arquivo `.env.example` e renomei-o para `.env`: `cp .env.example .env`
3. Cole o token gerado no arquivo `.env`, logo após `DISCORD_TOKEN=`.
4. Coloque o nome do seu bot no arquivo `.env`, logo após `NAME=`. 
5. Execute o comando `npm install` para instalar todas as dependências do projeto.
6. Para iniciar o bot, execute o comand `npm run dev`.

## Agradecimentos :heart:

- [Este Handler é totalmente inspirado neste vídeo](https://www.youtube.com/watch?v=3Xj-h4RLnqM).
