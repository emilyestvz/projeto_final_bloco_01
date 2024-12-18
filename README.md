# 🌙 Midnight Tracks 🌙

**Midnight Tracks** é um sistema de e-commerce inovador para curadoria e aquisição de playlists musicais. A plataforma permite aos usuários explorar e comprar playlists organizadas por gênero, mood e ocasiões especiais, proporcionando uma experiência única para amantes da música.


## 📌 Objetivo

Este projeto visa implementar um **Sistema de E-commerce** para playlists de músicas, aplicando os conceitos de TypeScript e programação orientada a objetos, em um ambiente de console interativo.

---

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

---

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

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/emilyestvz/midnight_tracks.git
   cd midnight_tracks
