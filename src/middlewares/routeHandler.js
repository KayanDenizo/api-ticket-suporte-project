import { routes } from "../routes/index.js"
import { DataBase } from "../database/database.js"

const database = new DataBase() // instancia do banco de dados

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path === request.url
    })
    if (route) {
        return route.controller({request, response, database}) // passa o request, response e o banco de dados para o controller
    }

    return response.writeHead(404).end()
}