// Esta será a Super Classe da aplicação e será definida como Abstrata

export abstract class Playlist {
    private _id: number;
	private _tipo: number;
    private _nome: string;
    private _descricao: string;
    private _genero: string;
    private _artista: string;


	constructor(id: number, tipo: number, nome: string, descricao: string, genero: string, artista: string) {
		this._id = id;
		this._tipo = tipo;
		this._nome = nome;
		this._descricao = descricao;
		this._genero = genero;
		this._artista = artista;
	}

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
    	return this._tipo;
    }

	public get descricao(): string {
		return this._descricao;
	}

	public get genero(): string {
		return this._genero;
	}

	public get artista(): string {
		return this._artista;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}
	
    public set tipo(value: number) {
        this._tipo = value;
    }

	public set descricao(value: string) {
		this._descricao = value;
    }

	public set genero(value: string) {
		this._genero = value;
	}

	public set artista(value: string) {
		this._artista = value;
	}

    // Métodos Auxiliares
    public visualizar(){
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome} `, `- Artista: ${this._artista}`);
        console.log(`Descrição: ${this._descricao}`);
        console.log(`Gênero: ${this._genero}`);
    }
}