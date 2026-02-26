export function extractQueryParams(query) {
    return query
        .slice(1) //retirar o "?" na hora de puxar a query
        .split("&")
        .reduce((queryParams, param) => {
            const [key, value] = param.split("=")

            queryParams[key] = value

            return queryParams
        }, {})
}