# Publicar o İstanbul · A dois gratuitamente e instalar no iPhone

Use o pacote `istanbul-guide-github-pages-pwa-v5.zip`, preparado para publicação direta. Você não precisa instalar Node, usar terminal ou contratar Netlify. O visual, os três idiomas e as funções do roteiro são os mesmos; nesta edição, o checklist e as edições ficam salvos em cada aparelho.

A versão 5 inclui o saque de liras no aeroporto, depois da mala e antes do Istanbulkart: Ziraat nas chegadas internacionais, perto da Porta 4; Kuveyt Türk como alternativa cuja presença e localização no IST precisam ser confirmadas. Há instruções para escolher TRY, recusar a conversão do ATM e conferir a tarifa antes de aceitar. Veja `REVISAO-2026-09-14.md`.

Continuam os 14 dias e os 58 locais distribuídos no roteiro, incluindo Emek Börek e Lades Menemen. Os passeios após as aulas consideram pelo menos 1h para Zeynep chegar ao Airbnb e mais 15min para se preparar. Os circuitos entre aulas terminam na faculdade até 13h20; os passeios do dia terminam no Airbnb. Veja `REVISAO-2026-09-12.md`. A configuração e as restrições de domínio do Google Maps continuam necessárias.

## O que é gratuito e o que depende do Google

| Recurso | Como funciona |
| --- | --- |
| Hospedagem GitHub Pages | Gratuita com repositório público no GitHub Free. Use o endereço `github.io`, sem comprar domínio. |
| Instalação no iPhone ou Android | Gratuita, pelo navegador. Não exige App Store nem conta de desenvolvedor Apple. |
| Visual do guia | Sem banner ou marca d’água de hospedagem adicionados pelo app. |
| Checklist, calendário, lixeira e inclusão de lugares | Salvos localmente, em cada aparelho. |
| Abertura sem internet | Roteiro e checklist, depois do primeiro carregamento completo com internet. |
| Google Maps dentro do guia e cálculo de trajetos | Exigem internet, chave autorizada e faturamento ativo no projeto Google. Há franquias gratuitas; o uso excedente pode ser cobrado. |
| Identificação Google e dados cartográficos | Permanecem no mapa: fazem parte da integração oficial. |

GitHub Pages aceita sites estáticos e é gratuito em repositórios públicos. **O repositório e o site serão públicos**, incluindo as informações de viagem que já aparecem no guia. Suas novas marcações e edições locais não são enviadas para o repositório. [Documentação GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

**Não é possível prometer Google Maps integrado com uso ilimitado e custo zero.** O Google exige faturamento para Maps JavaScript API. As franquias variam conforme o serviço usado; a instalação como PWA não muda essa cobrança. [Regras do Google Maps](https://developers.google.com/maps/documentation/javascript/usage-and-billing), [franquias por categoria](https://developers.google.com/maps/billing-and-pricing/pricing-categories).

## 1. Baixar e extrair

1. Baixe `istanbul-guide-github-pages-pwa-v5.zip` fornecido junto deste tutorial.
2. No Windows, clique com o botão direito → **Extrair tudo**.
3. Abra a pasta extraída. Você deve ver `index.html`, a pasta `assets`, `maps-config.json`, `manifest.webmanifest`, `sw.js`, os ícones e este tutorial.

Você enviará **esses arquivos e a pasta assets**, não o ZIP e não a pasta externa que contém tudo. O `index.html` precisa ficar no primeiro nível do repositório.

## 2. Criar o repositório gratuito

1. Entre ou crie uma conta em [github.com](https://github.com/).
2. Abra [criar repositório](https://github.com/new).
3. Em **Repository name**, escreva `istanbul-a-dois`.
4. Selecione **Public**.
5. Marque **Add a README file**, para facilitar o primeiro envio.
6. Clique em **Create repository**.

Não é necessário contratar GitHub Pro.

## 3. Enviar os arquivos

1. No repositório, clique em **Add file → Upload files**.
2. Arraste o conteúdo da pasta extraída, incluindo a pasta `assets` inteira.
3. Clique em **Commit changes**. Se aparecer a escolha, mantenha o envio direto para `main`.
4. Confirme que `index.html` está ao lado de `maps-config.json` e da pasta `assets`.

O pacote pronto tem menos de 100 arquivos e pode ser enviado de uma vez pelo navegador. A pasta de código-fonte do projeto é um pacote diferente e não deve substituir este pacote compilado neste procedimento. [Como enviar arquivos no GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

## 4. Autorizar o Google Maps para seu endereço GitHub

Esse passo é necessário porque uma chave que funciona no localhost ou no Netlify pode não estar autorizada para outro domínio.

1. Abra [Google Cloud → Credenciais](https://console.cloud.google.com/apis/credentials).
2. Selecione o projeto da sua chave atual, que começa com `AIza`.
3. Na [Biblioteca de APIs](https://console.cloud.google.com/apis/library), confirme que **Maps JavaScript API** e **Routes API** estão habilitadas no mesmo projeto. Habilitar somente Maps Embed API não atende ao mapa interativo desta versão.
4. Confirme que o projeto está vinculado a uma conta de faturamento ativa.
5. Em **Credenciais**, abra sua chave. Em **Restrições de aplicativo**, escolha **Sites / Websites**.
6. Adicione este endereço, trocando `SEU_USUARIO` pelo seu nome de usuário GitHub:

   ```text
   https://SEU_USUARIO.github.io/*
   ```

7. Em **Restrições de API**, permita **Maps JavaScript API** e **Routes API**. Se reutilizar a chave em outras aplicações suas, mantenha também as APIs que elas precisam.
8. Salve. A alteração pode levar alguns minutos para entrar em vigor.

Na revisão de 10/09/2026, a chave configurada na prévia respondeu **403 — “Requests from referer ... are blocked”** para `localhost`. Isso identifica uma restrição de endereço, e não uma falha no roteiro. Para testar a prévia desta pasta, autorize também `http://localhost:4173/*`. No site publicado, autorize o seu domínio real `https://SEU_USUARIO.github.io/*`. As autorizações são distintas; permitir apenas o antigo endereço do site não libera o novo.

Autorize o domínio com `/*`: o navegador pode enviar apenas a origem, sem o nome do repositório. A chave de navegador será visível no site publicado; a proteção apropriada são essas restrições de domínio e API. Não use a chave secreta do “Gerador de Secrets”, que serve para assinatura de URLs. [Orientações oficiais sobre chaves](https://developers.google.com/maps/api-security-best-practices).

Para controlar consumo, abra cada API em **APIs e serviços → Quotas e limites do sistema** e configure os limites disponíveis de acordo com a franquia dos serviços utilizados. Atingir a quota pode interromper mapas ou rotas. Alertas de orçamento avisam sobre gastos, mas **não bloqueiam cobranças automaticamente**. [Controle de custos do Google Maps](https://developers.google.com/maps/billing-and-pricing/manage-costs).

## 5. Informar a chave uma única vez

1. No repositório GitHub, clique em `maps-config.json`.
2. Clique no lápis **Edit this file**.
3. Substitua o conteúdo por:

   ```json
   {
     "googleEmbedKey": "COLE_AQUI_SUA_CHAVE_QUE_COMECA_COM_AIza"
   }
   ```

4. Cole a chave inteira entre as aspas, sem espaços extras, sem `key=` e sem a chave de assinatura.
5. Clique em **Commit changes** e confirme.

O nome `googleEmbedKey` é mantido por compatibilidade com o guia: ele também alimenta o mapa interativo. Não existe tela de configuração de chave dentro do app. O ZIP contém um campo vazio para que nenhuma credencial sua seja distribuída junto do arquivo.

## 6. Ligar o GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
3. Em **Branch**, escolha **main** e **/(root)**.
4. Clique em **Save**.
5. Aguarde a publicação. A página **Settings → Pages** mostrará o endereço quando estiver pronto; em **Actions**, a publicação deve terminar em verde.
6. Acesse o endereço exibido, parecido com:

   ```text
   https://SEU_USUARIO.github.io/istanbul-a-dois/
   ```

Use HTTPS. Não escolha `GitHub Actions` como fonte neste tutorial: você já enviou o site pronto. [Configurar a publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 7. Conferir antes de viajar

Abra seu endereço publicado com internet e confira:

- O mapa exibe as ruas do Google e os locais numerados.
- Uma caminhada mostra os traços verdes e as instruções de chegada.
- Ao escolher transporte público, a data corresponde ao dia do roteiro; informe a hora. Quando disponíveis, aparecem opções com linha, embarque, desembarque e trecho roxo contínuo.
- O botão de volta ao Airbnb funciona.
- Marque um lugar e recarregue: a marcação deve permanecer. Desmarque se foi apenas teste.
- Aguarde o carregamento completo. Depois, feche o app e teste a abertura em modo avião.

Transporte público depende dos dados e do horizonte de horários fornecidos pelo Google. Uma data futura ou uma combinação de filtros pode não ter resultado. Isso não deve ser confundido com um mapa bloqueado; consulte novamente perto da viagem ou use o botão que abre o aplicativo Google Maps.

## 8. Instalar no iPhone

1. Abra **seu endereço publicado** no **Safari do iPhone**, com internet.
2. Toque em **Compartilhar**.
3. Toque em **Adicionar à Tela de Início**.
4. Se aparecer **Abrir como App / Open as Web App**, deixe ativado.
5. Toque em **Adicionar**.
6. Abra o novo ícone **İstanbul** com internet e aguarde o carregamento completo antes de testar offline.

Em versões do iOS com menus diferentes, a opção continua dentro das ações de compartilhamento do Safari. [Passo a passo da Apple](https://support.apple.com/pt-pt/guide/iphone/iphea86e5236/ios).

Para testar, ative o modo avião depois desse primeiro carregamento e reabra pelo ícone. O roteiro e o checklist devem abrir; **Google Maps, cálculo de rotas, horários de transporte e fotos externas precisam de internet**. Reative a conexão para navegar.

GPS e direção do celular exigem permissões do aparelho. O acompanhamento é feito com o guia aberto; não há promessa de navegação contínua com a tela bloqueada ou de equivalência completa ao aplicativo Google Maps.

No Android: abra no Chrome → menu **⋮ → Adicionar à tela inicial / Instalar app**.

## 9. Uso em dois celulares e atualizações

O celular de Samuel e o de Zeynep mantêm cópias independentes do checklist. Não há sincronização automática nesta edição estática. Safari e app instalado também podem manter dados separados. As marcações ficam no aparelho: evite navegação privada e não limpe os dados do site para atualizar.

**Ao enviar uma versão nova para o GitHub, mantenha o `maps-config.json` que já está configurado no repositório.** O arquivo do ZIP é um modelo vazio: substituí-lo apagaria a configuração do Google Maps. Envie os demais arquivos, aguarde a publicação e reabra o app com internet.

Você pode instalar o PWA e continuar usando-o sem manter o navegador aberto. Apenas copiar os arquivos do site para o app Arquivos do iPhone não substitui a publicação HTTPS nem oferece o mesmo funcionamento de PWA, mapa e permissões.

## Se algo não abrir

| Sintoma | O que verificar |
| --- | --- |
| Página 404 | Publicação concluída; `main` + `/(root)`; `index.html` no primeiro nível, sem uma pasta extra por fora. |
| Página sem cores ou vazia | A pasta `assets` precisa estar inteira, ao lado de `index.html`. |
| “Mapa temporariamente indisponível” | Abra `SEU_ENDERECO/maps-config.json`: deve existir e conter a chave preenchida. Confirme domínio autorizado, APIs e faturamento no Google Cloud. Depois recarregue e use **Tentar novamente**. |
| Mapa abre, mas transporte não retorna | Confira data, hora e filtros; a disponibilidade de horários é definida pelo Google. |
| Não localiza o celular | Use HTTPS e permita Localização no Safari/app. No iPhone, confirme os serviços de localização nas configurações. |
| Mudança ainda não apareceu | Aguarde o deploy terminar e feche todas as abas e o app instalado; reabra com internet. Não apague os dados do site: isso também apagaria o checklist. |
| Checklist diferente em outro aparelho | Cada instalação salva localmente e tem seu próprio checklist. |

O erro da publicação anterior no Netlify só pode ser identificado com o endereço dela. Esta edição do GitHub Pages não depende de Netlify Functions ou variáveis de ambiente do Netlify: carrega sua configuração de mapa pelo arquivo `maps-config.json`.

## Para quem for editar o código no futuro

No pacote de código-fonte, `pnpm install --frozen-lockfile` instala as dependências e `pnpm run build:pages` gera `dist-pages`. Publique o conteúdo dessa pasta. Cada build gera o modelo de `maps-config.json` vazio; preserve ou preencha sua configuração antes de publicar uma atualização. Não substitua acidentalmente a chave já configurada por um campo vazio.

O build Netlify original permanece disponível com `pnpm run build:netlify`, descrito em `NETLIFY.md`. Ele usa armazenamento no servidor; esta edição Pages usa armazenamento no aparelho. Os dois formatos preservam a interface principal do guia.
