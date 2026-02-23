import fs from "node:fs/promises" // importando o modulo fs para leitura e escrita de arquivos

const DATABASE_PATH = new URL("db.json", import.meta.url) // caminho do arquivo de banco de dados

export class DataBase {
    #database = {} // banco de dados em memoria (privado)

    constructor() {
        fs.readFile(DATABASE_PATH, "utf-8")
            .then((data) => {
                this.#database = JSON.parse(data) // de texto para json
            })
            .catch(() => {
                this.#persist()
            })
    }

    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database)) // escreve o banco de dados em memoria no arquivo de banco de dados (ele cria o arquivo db.json caso nao tenha, por isso esta se usando o persist)
    }
}