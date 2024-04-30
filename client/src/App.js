import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Header from './components/Header'
import Client from './components/Client';
import AddClientsModal from './components/AddClientsModal';

// remove cache write error on the browser
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:7000/graphql',
  cache
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientsModal />
          <Client />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
