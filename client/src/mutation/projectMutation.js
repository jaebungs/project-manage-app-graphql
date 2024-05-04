import { gql } from '@apollo/client'

// ProjectStatus is from the BE schema.js name: ProjectStatus
const ADD_PROJECT = gql`
    mutation addProject($name: String!, $description: String!, $status: ProjectStatus!, $clientId: ID!) {
        addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }
`

export { ADD_PROJECT }