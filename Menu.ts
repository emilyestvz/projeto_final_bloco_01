import readlineSync from 'readline-sync';
import { colors } from './src/util/Colors';



export function main(){

    let opcao, id, nome, artista, genero, musica, playlist;
    let rock, pop: string;
    const generos = ['Rock', 'Pop']

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

                keypress();
                break;
            case 2:
                // Listagem de músicas
                console.log('\n🌙 Música: ');

                keypress();
                break;

            case 3:
                // Adc nova música
                console.log('\n🌙 Digite o nome da música: ');
                nome = readlineSync.question('');

                // Genêro
                console.log('\n- Digite o gênero: ');
                genero = readlineSync.question('');

                // Artista
                console.log('\n- Digite o artista: ');
                artista = readlineSync.question('');

                // Criando a música para adicionar
                switch (musica) {
                    case 1:
                        //
                        break;
                    case 2:
                        
                        break;
                    default:
                        console.log(colors.fg.red);
                        console.log('\nGênero inválido! Por favor, escolha entre Rock ou Pop.');
                        console.log(colors.reset);
                        keypress();
                        break;

                }
                
                console.log('\nMúsica adicionada com sucesso!');

                keypress();
                break;

            case 4:
                // Atualizar a playlist
                console.log('\n🌙 Digite a música que deseja alterar: ');
                //id = readlineSync.question('');

                keypress();
                break;


            //Continuação do Switch Opção
            case 5:
                // Deletar uma música
                console.log('\n👾 Qual musica deseja remover? ');
                //id = readlineSync.question('');
                    
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