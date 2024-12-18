import { Playlist } from "./Playlist";

export class Genero extends Playlist {
   
    private _tipo: string;

    constructor(id: number, nome: string, descricao: string, genero: string, tipo: string) {
        super(id, nome, descricao, genero, tipo);
        this._tipo = tipo;
    }

	public get tipo(): string {
		return this._tipo;
	}

	public set tipo(value: string) {
		this._tipo = value;
	}

    visualizar(): void {
        super.visualizar();
        console.log(`Gênero: ${this._tipo}`);
    }

}