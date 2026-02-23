import { randomUUID } from "node:crypto"
export function create({ request, response }) {
    // passar parametros entre chavez nao importa a ordem dos parametros, apenas uma questao de prevenção
    const { equipment, description, user_name } = request.body

    const ticket = {
        id: randomUUID(), // gera um id aleatorio
        equipment, 
        description, 
        user_name, // nome do usuario que esta abrindo o ticket
        status: "open",
        created_at: new Date(), // data de criacao do ticket
        updated_at: new Date(), // data de atualizacao do ticket
    }

    return response.end(JSON.stringify(ticket))


}