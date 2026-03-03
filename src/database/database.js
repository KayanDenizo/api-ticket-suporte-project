import fs from "node:fs/promises" // importando o modulo fs para leitura e escrita de arquivos

const DATABASE_PATH = new URL("db.json", import.meta.url) // caminho do arquivo de banco de dados

export class DataBase {
    #database = {} // banco de dados em memoria (privado)

    constructor() { // construtor do banco de dados
        fs.readFile(DATABASE_PATH, "utf-8")
            .then((data) => {
                this.#database = JSON.parse(data) // de texto para json
            })
            .catch(() => {
                this.#persist()
            })
    }

    #persist() { // persiste o banco de dados
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database)) // escreve o banco de dados em memoria no arquivo de banco de dados (ele cria o arquivo db.json caso nao tenha, por isso esta se usando o persist)
    }

    insert(table, data) { // insere um registro no banco de dados
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist()

    }

    select(table, filters) { // seleciona os registros com os filtros
        let data = this.#database[table] ?? []

        if (filters) {
            data = data.filter((row) => {
                return Object.entries(filters).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })

        }

        return data
    }

    update(table, id, data) { // atualiza o registro com o id
        const rowIndex = this.#database[table].findIndex((row) => row.id === id) // encontra o index do id

        if (rowIndex > -1) { // se o rowIndex for maior que -1, significa que o id foi encontrado
            this.#database[table][rowIndex] = { // atualiza o rowIndex com os novos dados
                ...this.#database[table][rowIndex], // mantem o que ja existia
                ...data // atualiza com os novos dados
            }

            this.#persist()
        }

    }

    delete(table, id) {
        const rowIndex = this.#database[table].findIndex((row) => row.id === id) // encontra o index do id

        if (rowIndex > -1) { // se o rowIndex for maior que -1, significa que o id foi encontrado
            this.#database[table].splice(rowIndex, 1) // remove o id
            this.#persist() // persiste o banco de dados
        }

    } // remove o registro com o id
}

