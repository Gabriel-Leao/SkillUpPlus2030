# SkillUpPlus2030

Aplicativo mobile voltado para o **desenvolvimento pessoal e profissional**, ajudando o usuário a explorar o **futuro do trabalho** por meio do **aprendizado contínuo**, **trilhas de conhecimento** e **dicas de carreira**.

O objetivo é inspirar e orientar os usuários a se adaptarem às novas transformações do mercado, promovendo o autodesenvolvimento e o equilíbrio entre propósito e produtividade.

---

## Membros do Grupo

| Nome                          | RM     |
| ----------------------------- | ------ |
| **Gabriel Leão da Silva**     | 552642 |
| **Vitor Pinheiro Nascimento** | 553693 |

---

## 🚀 Funcionalidades

- **Criação de Usuário** (com validações completas)
- **Login e Logout**
- **Exclusão de Conta**
- **Armazenamento Local com AsyncStorage**
- **Home personalizada** com saudação pelo nome e atalhos para seções principais
- **Trilhas de Aprendizado** simuladas, com temas sobre inovação, habilidades digitais e crescimento profissional
- **Dicas de Carreira** com orientações práticas e inspiracionais
- **Perfil do Usuário** com informações pessoais, estatísticas e progresso

---

## Telas Principais

### Home

Boas-vindas personalizadas com o nome do usuário, visão geral sobre o tema “Futuro do Trabalho” e atalhos para as principais seções do aplicativo.

### Trilhas de Aprendizado

Lista de trilhas temáticas com conteúdos sobre habilidades digitais, inteligência artificial, comunicação e gestão, permitindo acompanhar o progresso e explorar novas áreas de aprendizado.

### Dicas de Carreira

Coleção de insights e orientações sobre empregabilidade, adaptação tecnológica, trabalho remoto e crescimento pessoal no mercado moderno.

### Perfil

Tela dedicada às informações do usuário, mostrando seus dados cadastrados e oferecendo opções para **sair** ou **excluir conta**.

---

## Estrutura de Diretórios da Aplicação

A organização do projeto segue boas práticas de arquitetura modular e separação de responsabilidades, permitindo fácil manutenção e reutilização dos componentes.

```bash
src/
├── @types/ # Tipagens globais
│ └── user.tsx # Interface do modelo de usuário

├── app/ # Telas e rotas principais
│ ├── (auth)/ # Telas de autenticação
│ │ ├── layout.tsx
│ │ ├── sign-in.tsx # Tela de Login
│ │ └── sign-up.tsx # Tela de Cadastro
│ │
│ ├── (tabs)/ # Telas acessadas por abas
│ │ ├── layout.tsx # Layout de navegação por Tabs
│ │ ├── index.tsx # Tela Home
│ │ ├── learning-tracks.tsx # Trilhas de Aprendizado
│ │ ├── career-tips.tsx # Dicas de Carreira
│ │ └── profile.tsx # Perfil do Usuário
│ │
│ └── layout.tsx # Layout principal do app

├── assets/images/ # Imagens utilizadas no app
│ └── profile-pic.png

├── components/ # Componentes reutilizáveis
│ ├── context/ # Contexto global de autenticação
│ │ ├── UserProvider.tsx
│ │ └── useUserContext.ts
│ │
│ ├── form/ # Componentes de formulários
│ │ ├── CustomButton.tsx
│ │ ├── CustomInput.tsx
│ │ ├── CustomPicker.tsx
│ │ └── FormWrapper.tsx
│ │
│ ├── layout/ # Layout e estrutura visual das telas
│ │ ├── ScreenPageContainer.tsx
│ │ ├── ScreenPageTitle.tsx
│ │ └── Footer.tsx

├── constants/ # Constantes e configurações
│ ├── routes.ts # Definição de rotas
│ └── usersKey.ts # Chaves de armazenamento

├── lib/utils/ # Funções utilitárias
│ └── cn.ts # Função auxiliar para classes de estilo
```

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Gabriel-Leao/SkillUpPlus2030.git
```

### 2. Acessar diretório do projeto

```bash
cd SkillUpPlus2030
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Iniciar o projeto

```bash
npm run start
```

---

## Rodar no Celular (Expo Go)

1. Baixe o **Expo Go** no seu aparelho (Android/iOS)
2. Rode o projeto com `npm run start`
3. Escaneie o **QR Code** exibido no terminal
4. O aplicativo será aberto automaticamente no seu dispositivo

---

## Rodar no Emulador Android

1. Instale o **Android Studio** e configure um dispositivo virtual
2. Rode o projeto:

```bash
npm run start
```

3. No terminal do Expo, pressione: `a`

---

## Tecnologias Utilizadas

- **React Native**
- **Expo Router**
- **NativeWind (Tailwind CSS para React Native)**
- **AsyncStorage** para persistência de dados
- **FontAwesome5** para ícones
- **TypeScript** para tipagem e segurança do código

---

## Licença

Projeto desenvolvido para fins acadêmicos — Licença MIT.
