import { Playlist } from "./Playlist";

export class Mood extends Playlist {
    
    private _humor: string;

    constructor(id: number, nome: string, tipo: number, descricao: string, genero: string, artista: string, humor: string) {
        super(id, tipo, nome, descricao, genero, artista);
        this._humor = humor;
    }

	public get humor(): string {
		return this._humor;
	}

	public set humor(value: string) {
		this._humor = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`\nMOOD: ${this._humor}`);
    }
}