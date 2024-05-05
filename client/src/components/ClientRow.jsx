import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { GET_CLIENTS } from '../query/clientQuery'
import { GET_PROJECTS } from '../query/projectQuery'
import { DELETE_CLIENT } from '../mutation/clientMutation'

// 2 ways to update the FE. Refetch or update the cache
// refetch may get too expensive
export default function ClientRow( { client }) {
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
        refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
        // update(cache, { data: { deleteClient }}) {
        //     // Get clients from the cache, then write into the cache
        //     const { clients } = cache.readQuery({ query: GET_CLIENTS })
        //     cache.writeQuery({
        //         query: GET_CLIENTS,
        //         data: { clients: clients.filter(client => client.id !== deleteClient.id) }
        //     })
        // }
    })

  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={deleteClient}>
                <FaTrash />
            </button>
        </td>
    </tr>
  )
}
