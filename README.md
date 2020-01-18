# omnistack10
Código feito durante a semana omnistack 10

Resolução de erro no ReactJS :
    SecurityError: Failed to construct 'WebSocket': An insecure WebSocket connection may not be initiated from a page loaded over HTTPS.

Resolução: 

    For folks waiting react-sripts for a patch you can manually edit

    node_modules/react-dev-utils/webpackHotDevClient.js
    Here’s the code you’ll want at line 62 of that file:

    protocol: window.location.protocol === 'https:' ? 'wss' : 'ws',

Codigo:

    // Connect to WebpackDevServer via a socket.
    var connection = new WebSocket(
        url.format({
            protocol: 'ws',
            protocol: window.location.protocol === 'https:' ? 'wss' : 'ws',
            hostname: window.location.hostname,
            port: window.location.port,
            // Hardcoded in WebpackDevServer
            pathname: '/sockjs-node',
        })
    );


Fonte: https://icetutor.com/question/react-app-error-failed-to-construct-websocket-an-insecure-websocket-connection-may-not-be-initiated-from-a-page-loaded-over-https/


# Cors

A aplicacao web está na porta 3000 e o backend na porta 3333, o node tem o comportamento padrão de barrar o acesso por outras portas, para isso utilizamos o cors, para permitir esse acesso "Cross origin"

    Dessa forma libera o acesso apenas para o origin
    app.use(cors({origin: 'http://localhost:3000'}))
    
    Dessa forma libera o acesso externo para todo tipo de aplicacao
    app.use(cors())