# Plano de Implementacao - Alpha Fitness

## 1. Objetivo do Plano

Organizar o desenvolvimento do site Alpha Fitness em fases claras, seguindo os requisitos definidos no PRD. O projeto deve resultar em um website responsivo, moderno, intuitivo e funcional para apresentar a academia, seus planos, treinos, equipe, calculadora de IMC e canais de contato.

## 2. Escopo Geral

O site sera desenvolvido com HTML5, CSS3 e JavaScript e bootstrap, mantendo codigo organizado, responsivo e compativel com navegadores modernos.

Paginas e secoes previstas:

- Home
- Sobre a Academia
- Planos
- Treinos
- Equipe
- Calculadora de IMC
- Contato

## 3. Fases de Desenvolvimento

### Fase 1 - Planejamento e Estrutura Inicial

**Objetivo:** preparar a base do projeto e definir a organizacao dos arquivos.

**Atividades:**

- Revisar o PRD e confirmar as funcionalidades principais.
- Definir a estrutura de pastas do projeto.
- Criar ou revisar os arquivos principais: `index.html`, `style.css` e `main.js`.
- Definir a estrutura semantica inicial do HTML.
- Configurar links entre HTML, CSS e JavaScript.
- Definir padroes de nomeacao de classes CSS.

**Entregaveis:**

- Estrutura inicial do projeto organizada.
- Arquivo HTML com as secoes principais criadas.
- CSS e JavaScript conectados corretamente.

**Criterios de conclusao:**

- O projeto abre corretamente no navegador.
- Todas as secoes principais existem no HTML.
- A estrutura esta pronta para receber conteudo e estilos.

---

### Fase 2 - Layout Base e Identidade Visual

**Objetivo:** construir a aparencia principal do site seguindo a paleta de cores definida no PRD.

**Paleta de cores:**

- `#121212`
- `#1E1E1E`
- `#FFC107`
- `#FFFFFF`
- `#BDBDBD`

**Atividades:**

- Definir estilos globais: fontes, cores, margens, espacamentos e comportamento responsivo.
- Criar o cabecalho com menu de navegacao.
- Criar rodape com informacoes basicas e redes sociais.
- Aplicar a identidade visual escura com destaque em amarelo.
- Definir botoes, cards, titulos e textos padronizados.
- Criar comportamento visual consistente para desktop e mobile.

**Entregaveis:**

- Layout base visualmente consistente.
- Cabecalho, menu e rodape estilizados.
- Classes CSS reutilizaveis para secoes, cards e botoes.

**Criterios de conclusao:**

- O site possui identidade visual clara.
- O layout nao apresenta quebras visuais nas larguras principais de tela.
- A navegacao principal esta visivel e funcional.

---

### Fase 3 - Desenvolvimento da Home

**Objetivo:** criar a primeira impressao do site com banner, frase de impacto e chamada para os planos.

**Atividades:**

- Criar banner principal com imagem relacionada a academia.
- Inserir frase de impacto.
- Adicionar botao de chamada para visualizar planos.
- Configurar o botao para levar o usuario ate a secao de planos.
- Ajustar o banner para desktop e dispositivos moveis.

**Entregaveis:**

- Secao Home finalizada.
- Botao de chamada funcionando.
- Banner responsivo.

**Criterios de conclusao:**

- A Home comunica rapidamente a proposta da academia.
- O usuario consegue acessar os planos a partir do banner.
- A secao funciona bem em telas pequenas e grandes.

---

### Fase 4 - Secao Sobre a Academia

**Objetivo:** apresentar a historia, missao, visao e valores da Alpha Fitness.

**Atividades:**

- Escrever o texto institucional da academia ficticia.
- Criar blocos para historia, missao, visao e valores.
- Organizar o conteudo com boa hierarquia visual.
- Aplicar estilo consistente com o restante do site.

**Entregaveis:**

- Secao Sobre completa.
- Conteudo institucional revisado.

**Criterios de conclusao:**

- O usuario entende a proposta da academia.
- Missao, visao e valores estao claros.
- A leitura e confortavel em desktop e mobile.

---

### Fase 5 - Secao Planos

**Objetivo:** apresentar os planos de assinatura e comparar seus beneficios.

**Atividades:**

- Criar cards para Plano Basico, Plano Intermediario e Plano Premium.
- Definir beneficios de cada plano.
- Destacar visualmente o plano recomendado, se aplicavel.
- Criar comparacao simples entre beneficios.
- Adicionar botoes de acao nos planos.

**Entregaveis:**

- Secao Planos com tres opcoes.
- Beneficios organizados e comparaveis.
- Botoes de interesse ou contato.

**Criterios de conclusao:**

- O usuario consegue comparar os planos facilmente.
- Os cards mantem boa leitura em mobile.
- A secao incentiva o usuario a entrar em contato ou escolher um plano.

---

### Fase 6 - Secao Treinos

**Objetivo:** apresentar os principais tipos de treino oferecidos pela academia.

**Atividades:**

- Criar conteudo para Hipertrofia, Emagrecimento e Condicionamento Fisico.
- Explicar brevemente o objetivo de cada modalidade.
- Criar cards ou blocos visuais para cada treino.
- Adicionar imagens ou elementos visuais relacionados, se disponiveis.

**Entregaveis:**

- Secao Treinos com tres modalidades.
- Conteudo simples, objetivo e bem apresentado.

**Criterios de conclusao:**

- O usuario entende quais treinos a academia oferece.
- Cada modalidade tem descricao clara.
- A secao segue a identidade visual do site.

---

### Fase 7 - Secao Equipe

**Objetivo:** apresentar os profissionais da academia e suas especialidades.

**Atividades:**

- Criar perfis ficticios para os profissionais.
- Informar nome, cargo e especialidade de cada membro.
- Organizar os profissionais em cards responsivos.
- Incluir imagens, avatares ou placeholders adequados.

**Entregaveis:**

- Secao Equipe completa.
- Cards de profissionais com especialidades.

**Criterios de conclusao:**

- A equipe transmite confianca e profissionalismo.
- As especialidades estao claras.
- O layout funciona bem em telas menores.

---

### Fase 8 - Calculadora de IMC

**Objetivo:** implementar a ferramenta interativa de calculo de IMC.

**Atividades:**

- Criar formulario com campo de peso.
- Criar formulario com campo de altura.
- Validar se os campos foram preenchidos corretamente.
- Calcular o IMC usando JavaScript.
- Exibir o resultado automaticamente ou apos acao do usuario.
- Exibir a classificacao do IMC.
- Tratar erros de entrada, como valores vazios, negativos ou invalidos.

**Classificacoes previstas:**

- Abaixo do peso
- Peso normal
- Sobrepeso
- Obesidade

**Entregaveis:**

- Calculadora de IMC funcional.
- Resultado numerico do IMC.
- Classificacao exibida ao usuario.

**Criterios de conclusao:**

- O calculo retorna valores corretos.
- Entradas invalidas sao tratadas.
- A experiencia e simples e clara para o usuario.

---

### Fase 9 - Secao Contato

**Objetivo:** permitir que o usuario envie uma mensagem e encontre os canais de contato da academia.

**Atividades:**

- Criar formulario com nome, e-mail, telefone opcional e mensagem.
- Validar campos obrigatorios.
- Exibir mensagem de sucesso ou erro.
- Adicionar informacoes de contato da academia.
- Adicionar links para redes sociais.
- Preparar possivel futura integracao com WhatsApp.

**Entregaveis:**

- Formulario de contato criado.
- Validacoes basicas funcionando.
- Informacoes de contato e redes sociais exibidas.

**Criterios de conclusao:**

- O usuario consegue preencher e enviar o formulario.
- Campos obrigatorios sao validados.
- O contato da academia e facil de encontrar.

---

### Fase 10 - Responsividade e Acessibilidade

**Objetivo:** garantir boa experiencia em computadores, tablets e celulares.

**Atividades:**

- Ajustar layout para telas pequenas, medias e grandes.
- Revisar menu mobile.
- Garantir contraste adequado entre textos e fundos.
- Verificar tamanho de fontes e botoes para uso em celular.
- Adicionar textos alternativos em imagens.
- Garantir navegacao simples por links e botoes.

**Entregaveis:**

- Site responsivo.
- Ajustes de acessibilidade basica aplicados.

**Criterios de conclusao:**

- O site funciona bem em desktop e mobile.
- Textos permanecem legiveis.
- Botoes e links sao faceis de tocar em dispositivos moveis.

---

### Fase 11 - Testes e Correcao de Problemas

**Objetivo:** validar todas as funcionalidades e corrigir falhas antes da entrega.

**Atividades:**

- Testar navegacao entre secoes.
- Testar botoes e links.
- Testar calculadora de IMC com diferentes valores.
- Testar formulario de contato.
- Verificar responsividade no navegador.
- Revisar erros no console do navegador.
- Corrigir problemas de layout, conteudo ou JavaScript.

**Entregaveis:**

- Lista de testes executados.
- Bugs corrigidos.
- Versao final revisada.

**Criterios de conclusao:**

- Todas as funcionalidades principais operam corretamente.
- Nao ha erros relevantes no console.
- O site esta pronto para apresentacao.

---

### Fase 12 - Documentacao e Publicacao

**Objetivo:** preparar o projeto para entrega e publicacao no GitHub.

**Atividades:**

- Revisar organizacao dos arquivos.
- Atualizar documentacao do projeto, se necessario.
- Garantir que o codigo esteja comentado apenas onde for util.
- Criar ou atualizar `README.md` com descricao, tecnologias e instrucoes de uso.
- Versionar o projeto com Git.
- Publicar no GitHub.
- Opcionalmente publicar com GitHub Pages.

**Entregaveis:**

- Projeto documentado.
- Repositorio atualizado no GitHub.
- Site pronto para publicacao ou publicado.

**Criterios de conclusao:**

- O projeto esta organizado e documentado.
- O codigo final esta salvo no repositorio.
- O site pode ser acessado ou apresentado facilmente.

## 4. Ordem Recomendada de Execucao

1. Planejamento e estrutura inicial.
2. Layout base e identidade visual.
3. Home.
4. Sobre a Academia.
5. Planos.
6. Treinos.
7. Equipe.
8. Calculadora de IMC.
9. Contato.
10. Responsividade e acessibilidade.
11. Testes e correcoes.
12. Documentacao e publicacao.

## 5. Prioridades do MVP

Para uma primeira versao funcional, as prioridades sao:

- Home com chamada para planos.
- Secao de planos.
- Calculadora de IMC funcional.
- Formulario de contato com validacao basica.
- Layout responsivo.

As demais secoes, como equipe, treinos e conteudo institucional, complementam a experiencia e devem ser implementadas na sequencia.

## 6. Riscos e Cuidados

- Garantir que a calculadora de IMC trate valores invalidos.
- Evitar excesso de conteudo visual que prejudique o carregamento.
- Manter contraste adequado para leitura.
- Testar o layout em telas pequenas desde o inicio.
- Organizar o CSS para evitar repeticao e dificuldade de manutencao.

## 7. Melhorias Futuras

As melhorias abaixo podem ser planejadas apos a entrega da primeira versao:

- Sistema de cadastro de alunos.
- Area do aluno.
- Agendamento de treinos.
- Integracao com WhatsApp.
- Modo escuro ou alternancia de tema.
