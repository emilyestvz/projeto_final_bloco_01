import readlineSync from 'readline-sync';
import { colors } from './src/util/Colors';
import { PlaylistController } from './src/controller/PlaylistController';
import { Mood } from './src/model/Mood';
import { Genero } from './src/model/Genero';


export function main(){

    let opcao, id, tipo: number;
    let mood, genero, nome, artista, descricao: string;
    const categorias = ['Mood', 'Genero'];

    const playlist = new PlaylistController();

    // Intânciando Gênero
    playlist.adicionar(new Genero(playlist.gerarId(), 2, 'Tell Me You Love Me', 'Minha música fav da Demizinha', 'Rock', 'Demi Lovato', 'Sad'));
    playlist.adicionar(new Genero(playlist.gerarId(), 2, 'Over Each Other', 'Para bater cabelo', 'Rock', 'Link Park', 'Curtindo a vibe'));
    playlist.adicionar(new Genero(playlist.gerarId(), 2, 'The Line', 'Entrando em depre...', 'Indie', 'Arcane, Twenty One Pilots', 'Sad'));

    // Instanciando Mood 
    playlist.adicionar(new Mood(playlist.gerarId(), 'Sagrado Profano', 1, 'Para curtir uma noitada', 'Pop', 'Luísa Sonza, KayBlack', 'Curtindo a vibe'));
    playlist.adicionar(new Mood(playlist.gerarId(), 'Cruel Summer', 1, 'Uma vilã?', 'Pop', 'Taylor Swift', 'Para ficar feliz'));
    playlist.adicionar(new Mood(playlist.gerarId(), 'Whatever', 1, 'Saindo louca!', 'Pop/Trash', 'Ava Max, Kygo', 'Para ficar feliz'));

    let continuar = true;

    while(continuar){
        console.log(colors.fg.magenta)
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('                                                     ');
        console.log(colors.fg.whitestrong)
        console.log('                 Midnight Tracks 🌙                  ');
        console.log(colors.fg.magenta);
        console.log('                                                     ');
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log(colors.fg.whitestrong)
        console.log('              "Sintonize na nossa vibe!"             ');
        console.log('                                                     ');
        console.log('\n            1 - Listar todas as músicas            ');
        console.log('\n            2 - Exibir sua música por ID           ');
        console.log('\n            3 - Adicionar uma nova música          ');
        console.log('\n            4 - Atualizar sua playlist             ');
        console.log('\n            5 - Excluir uma música da playlist     ');
        console.log('\n            0 - Sair                               ');
        console.log('                                                     ');
        console.log(colors.fg.magenta)
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log(colors.reset);

        console.log('Digite a opcao desejada: ');
        opcao = readlineSync.questionInt('');


        switch(opcao) {
            case 1:
                // Listar música
                console.log(colors.fg.whitestrong, `\n\t🌙 SUA PLAYLIST `, colors.reset);
                    playlist.listarTodos();

                keypress();
                break;

            case 2:
                // Buscar por ID
                console.log('\n🌙 Digite o ID da música que deseja encontrar: ');
                id = readlineSync.questionInt('');

                playlist.listarPorId(id);

                keypress();
                break;

            case 3:
                // Categoria
                console.log('\n- Escolha a categoria da música: ');
                tipo = readlineSync.keyInSelect(categorias, '', {cancel:false}) + 1;

                // Adc nova música
                console.log('\n🌙 Digite o nome da música: ');
                nome = readlineSync.question('');

                // Genêro
                console.log('\n- Digite o gênero: ');
                genero = readlineSync.question('');

                // Artista
                console.log('\n- Digite o artista: ');
                artista = readlineSync.question('');

                // Descrição
                console.log('\n- Adicione uma descrição: ');
                descricao = readlineSync.question('');

                // Criando a música para adicionar
                switch(tipo){
                    case 1:
                        // Criar por humor
                        console.log('\nNome da sua playlist versão Mood: ')
                        mood = readlineSync.question('');
                        playlist.adicionar(new Mood(playlist.gerarId(), nome, 2, descricao, genero, artista, ''));

                        console.log('\nMúsica adicionada com sucesso!');

                    case 2:
                        // Criar por gênero
                         console.log('\nNome da sua playlist versão Gênero: ')
                        genero = readlineSync.question('');
                        playlist.adicionar(new Genero(playlist.gerarId(), 1, nome, descricao, genero, artista, ''));   

                    default:
                        console.log(colors.fg.red);
                        console.log('\nTente novamente...');
                        console.log(colors.reset);
                        keypress();
                        break;
                    }
                    keypress();
                    break;
                
                
            // Continuação do Switch opcao
            case 4:
                // Atualizar a playlist
                console.log('\n🌙 Digite a música que deseja alterar: ');
                id = readlineSync.questionInt('');

                let musicaAtualizar = playlist.buscarNoArray(id);

                    if(musicaAtualizar){
                        console.log('\n- Escolha a categoria da música: ');
                        tipo = readlineSync.keyInSelect(categorias, '', {cancel:false}) + 1;

                        console.log('\n🌙 Digite o nome da música: ');
                        nome = readlineSync.question('');

                        console.log('\n- Digite o gênero: ');
                        genero = readlineSync.question('');

                        console.log('\n- Digite o artista: ');
                        artista = readlineSync.question('');

                        console.log('\n- Adicione uma descrição: ');
                        descricao = readlineSync.question('');

                        tipo = musicaAtualizar.tipo;
                     
                        switch(tipo){
                            case 1:
                            // Criar por gênero
                            console.log('\n- Digite o gênero você quer adicionar: ')
                            genero = readlineSync.question('');
                            playlist.adicionar(new Genero(playlist.gerarId(), 1, nome, descricao, genero, artista, '')); 
            
                            case 2:
                            // Criar por humor
                                console.log('\n- Digite o mood  que quer adicionar: ')
                                mood = readlineSync.question('');
                                playlist.adicionar(new Mood(playlist.gerarId(), nome, 2, descricao, genero, artista, ''));
            
                            default:
                                console.log(colors.fg.red);
                                console.log('\nTente novamente...');
                                console.log(colors.reset);
                                break;
                                }

                                console.log('\nMúsica adicionada com sucesso!');
                                keypress();
                                break;
                            }
                            keypress();
                            break;

            //Continuação do Switch Opção
            case 5:
                // Deletar uma música
                console.log('\n🌙 Qual musica deseja remover? ');
                id = readlineSync.questionInt('');

                playlist.excluir(id);   
                keypress();
                break;

            case 0:
                console.log(colors.fg.whitestrong);
                console.log('\n\t🌙 Saindo do sistema... volte sempre! 🌙');
                console.log(colors.reset);
                console.log(colors.fg.magentastrong);
                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-=-');
                console.log(colors.reset);

                continuar = false;
                about();
                break;

            default:
                console.log(colors.fg.whitestrong);
                console.log('\n\tOPÇÃO INVÁLIDA! ');
                console.log(colors.reset);
               
                keypress();
                break;
        }
    }
}

function keypress(): void {
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
}

export function about(): void {
    console.log(colors.bg.black, colors.fg.whitestrong)
    console.log('\n             Desenvolvido por: ');
    console.log('           Emily Cristiny Dias ✨');
    console.log('           github.com/emilyestvz 👾');
    console.log(colors.fg.magentastrong);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-=-');
    console.log(colors.reset);
}

main();