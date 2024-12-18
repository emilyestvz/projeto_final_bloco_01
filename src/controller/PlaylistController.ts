import { PlaylistRepository } from "../repository/PlaylistRepository";
import { Playlist } from "../model/Playlist";
import { colors } from "../util/Colors"

// Métodos CRUD abaixo
export class PlaylistController implements PlaylistRepository {
    
    // Array
    private playlists: Playlist[] = [];

    // Para controlar o ID
    public id: number = 0;

     // Listar todas as playlists
     listarTodos(): void {

        if (this.playlists.length === 0) {
            console.log('\nNenhuma playlist cadastrada.');

        } else {
            console.log(colors.fg.whitestrong,'\nListando todas as playlists:');
            
            this.playlists.forEach((playlist) => {
            console.log(colors.fg.whitestrong, 
                `ID: ${playlist.id}
                \nNome: ${playlist.nome} - Artista: ${playlist.artista}
                \nGênero: ${playlist.genero}`)
            console.log(colors.reset);
            console.log('\n-----------------------------------------------')});
        }
     }

     // Listar playlist pelo ID
     listarPorId(numero: number): void {
        const playlist = this.buscarNoArray(numero);

        if (playlist) {
            playlist.visualizar();
        } else {
            console.log('\nPlaylist não encontrada.');
        }
     }

     // Adicionar uma playlist
     adicionar(playlist: Playlist): void {
        this.playlists.push(playlist);
        console.log('\n🌙 Playlist cadastrada com sucesso!')
     }

     // Atualizar uma playlist
     atualizar(id: number, playlist: Playlist): void {
         const index = this.playlists.findIndex(p => p.id === id);

         if(index !== -1) {
             this.playlists[index] = playlist;
             console.log('\n🌙 Playlist atualizada com sucesso!');
         } else {
             console.log('\nPlaylist não encontrada.');
         }
     }


     // Deletar playlist
     excluir(id: number): void {
        const index = this.playlists.findIndex(p => p.id === id);
        if (index !== -1) {
            this.playlists.splice(index, 1);
            console.log("\n🌙 Playlist deletada com sucesso.");
        } else {
            console.log(`\nPlaylist com ID ${id} não encontrada.`);
        }
    }

    // Métodos Auxiliares
    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(numero: number): Playlist | null {
        for(let playlists of this.playlists){
            if(playlists.id === numero)
                return playlists;
        }
        return null;
    }

}