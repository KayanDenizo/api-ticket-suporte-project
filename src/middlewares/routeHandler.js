import { routes } from "../routes/index.js"
import { DataBase } from "../database/database.js"

const database = new DataBase() // instancia do banco de dados

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url)
    })
    if (route) {
        const routeParams = request.url.match(route.path)
        console.log(routeParams)

        return route.controller({ request, response, database })
    }

    return response.writeHead(404).end()
}
