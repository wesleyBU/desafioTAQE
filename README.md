# desafioTAQE

O objetivo desse aplicativo é propor ao usuário uma forma de calcular valores usando as operações básicas da matemática. 
Respeitando as regras propostas pelo desafio da vaga, o aplicativo permite calcular a somar de dois números e também outras operações.

## Sobre o aplicativo.

O programa foi desenvolvido com o framework IONIC tendo como base dependências como cordova para acesso às funcionalidades do sistema do dispositivo, e o Angular para desenvolvimento de aplicações SPA (Single-page aplication).

## Como executar


## Visualizando pelo browser

Execute o seguinte comando dentro da pasta do projeto

> ionic serve --lab

O comando acima compilará e executará um servidor o qual exibe o resultado do projeto em “tempo real” a qualquer modificação feita.
Esse servidor estará no endereço de loopback no porto 8100.
O parâmetro --lab exibira o resultado das telas nas 3 plataformas; Android, IOS e Windows Phone


## Visualizando no celular com android

Ative a depuração USB do dispositivo e conecte-o ao computador.

Execute o seguinte comando:

> cordova build android --device