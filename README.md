# 🌙 Midnight Tracks 🌙

**Midnight Tracks** é um sistema de e-commerce inovador para curadoria e aquisição de playlists musicais. A plataforma permite aos usuários explorar e comprar playlists organizadas por gênero, mood e ocasiões especiais, proporcionando uma experiência única para amantes da música.


## 📌 Objetivo

Este projeto visa implementar um **Sistema de E-commerce** para playlists de músicas, aplicando os conceitos de TypeScript e programação orientada a objetos, em um ambiente de console interativo.


## ⚙️ Funcionalidades

1. **Menu Inicial**
   - Listar todas as músicas
   - Exibibir sua música por ID
   - Adicionar uma nova música
   - Atualizar sua playlist
   - Excluir uma música da playlist
   - Sair

2. **Gerenciamento de Playlists**
   - Cadastro de playlists com ID, nome, gênero, mood e preço.
   - Edição e exclusão de playlists cadastradas.
   - Busca detalhada por ID ou listagem geral.


## 🛠️ Estrutura do Projeto

### 1. Menu Interativo
- Implementado na classe `Menu.ts`, o menu permite interação do usuário com entradas e saídas, laços condicionais e repetitivos.

### 2. Classes e Repositórios
- **Classe Abstrata `Playlist`**: Define os atributos e métodos gerais.
- **Classe Derivada `Genero e Mood`**: Implementa atributos e métodos específicos para playlists.
- **Interface Repository**: Define os métodos essenciais:
  - `listarTodas()`
  - `listarPorId()`
  - `adicionar()`
  - `atualizar()`
  - `excluir()`

### 3. Controlador (Controller)
- Responsável pela lógica de negócio e armazenamento de playlists, implementando os métodos definidos na interface com uso de **Collections** para gerenciar os dados.


## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/emilyestvz/midnight_tracks.git
   cd projeto_final_bloco_01

2. Instale as dependências:
   ```bash	
   npm install

3. Compile o projeto:
   ```bash
   tsc

4. Execute o programa:
   ```bash
   node dist/Menu.ts


## 📂 Estrutura de Diretórios
   ```bash	
midnight_tracks/
├── Menu.ts
├── src/
│   ├── models/
│   │   ├── Playlist.ts
│   │   ├── Genero.ts
|   |   ├── Mood.ts
│   └── repository/
│   |    ├── PlaylistRepository.ts
|   | 
│   └── controller/
|        ├── PlaylistController.ts
|
├── tsconfig.json
└── package.json
```

## 🕒 Etapas e Desenvolvimento
### Etapa 1: Construção do Menu
- Criar a branch 01_Menu.
- Implementar o menu interativo com funcionalidades básicas.

### Etapa 2: Construção das Classes e Repositórios
- Criar a branch 02_Model_Repository.
- Implementar a classe abstrata, classe derivada e interface.
- Testar funcionalidades CRUD básicas.

### Etapa 3: Implementação do Controller
- Criar a branch 03_Controller.
- Desenvolver métodos do CRUD utilizando coleções.
- Atualizar o menu para integração com os métodos do controller.
- Testar a aplicação completa.

***

### Desenvolvido por:
#### [Emily Cristiny Dias](https://github.com/emilyestvz) | 2024 ✨
