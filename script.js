// Definir as variáveis necessárias
const client_id = 'qzh02zung5shiuw24vxf7i6mm12g84';
const redirect_uri = 'https://alexandrew137.github.io/BotTwitch/redirecionamento';
const response_type = 'code';
const scope = 'clips:edit';

// Montar a URL de autorização
const auth_url = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;

// Redirecionar o usuário para a URL de autorização
window.location.replace(auth_url);

function authorize() {
  // Redirecionar o usuário para a URL de autorização
  window.location.replace(auth_url);
}

// Obter o código de autorização após o redirecionamento
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

// Obter o token de acesso com o código de autorização
fetch(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirect_uri}`, {
  method: 'POST',
})
.then(response => response.json())
.then(data => console.log(data));
