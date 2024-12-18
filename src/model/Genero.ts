import { Playlist } from "./Playlist";

export class Genero extends Playlist {
   
    private _estiloMusical: string;

    constructor(id: number, tipo: number, nome: string, descricao: string, genero: string, artista: string, estiloMusical: string) {
        super(id, tipo, nome, descricao, genero, artista);
        this._estiloMusical = estiloMusical;
    }

	public get estiloMusical(): string {
		return this._estiloMusical;
	}

	public set estiloMusical(value: string) {
		this._estiloMusical = value;
	}



    visualizar(): void {
        super.visualizar();
        console.log(`Mood: ${this._estiloMusical}`);
    }

}