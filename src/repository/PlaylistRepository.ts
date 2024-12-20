import { Playlist } from '../model/Playlist';

export interface PlaylistRepository {

    listarTodos(): void;
    listarPorId(numero: number): void;
    adicionar(playlist: Playlist): void;
    atualizar(id: number, playlist: Playlist): void;
    excluir(id: number): void;
}