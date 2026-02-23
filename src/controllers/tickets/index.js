/** Padrao 
 * CREATE - Criar
 * INDEX - Listar
 * UPDATE - Atualizar
 * REMVOE - remover
 * SHOW - para exibir um unico registro
 */

export function index({ request, response, database }) {
    const tickets = database.select("tickets")
    
    return response.end(JSON.stringify(tickets))
}