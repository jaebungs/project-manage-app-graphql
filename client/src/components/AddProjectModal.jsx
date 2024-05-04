import { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { useMutation, useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../query/projectQuery'
import { GET_CLIENTS } from '../query/clientQuery'
import Spinner from './Spinner'

export default function AddProjectModal() {
    const [ name, setName ]= useState('')
    const [ description, setDescription ]= useState('')
    const [ clientId, setClientId ]= useState('')
    const [ status, setStatus ] = useState('new')
    
    // Get clients to select
    const { loading, error, data } = useQuery(GET_CLIENTS)

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(name, description, status)
    }

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

  return (
    <>
        { !loading && !error && (
            <>
                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addProject">
                            <div className='d-flex align-items-center'>
                                <FaList className='icon'/>
                                <div>Add Project</div>
                            </div>
                        </button>

                        <div className="modal fade" id="addProject" aria-labelledby="addProjectLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="addProjectLabel">New Project</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={onSubmit}>
                                            <div className="mb-3">
                                                <label className='form-label'>Name</label>
                                                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                                            </div>
                                            <div className="mb-3">
                                                <label className='form-label'>Description</label>
                                                <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)}>
                                                </textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label className='form-label'>Status</label>
                                                <select name="status" id="status" className="form-select" value={status} onChange={ (e) => setStatus(e.target.value)}>
                                                    <option value="new">Not Started</option>
                                                    <option value="progress">In Progress</option>
                                                    <option value="completed">Completed</option>
                                                </select>
                                            </div>
                                            <div className='mb-3'>
                                                <label className='form-label'>Client</label>
                                                <select className='form-select' id="clientId" value={clientId} onChange={(e) => setClientId(e.target.id)}>
                                                    <option value="">Select Client</option>
                                                    { data.clients.map(client => (
                                                        <option key={client.id} value={client.id}>{client.name}</option>
                                                    )) }
                                                </select>
                                            </div>

                                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
            </>
        )}
        
    </>
  )
}
