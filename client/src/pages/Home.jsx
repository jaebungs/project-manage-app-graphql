import Client from '../components/Client';
import Projects from '../components/Projects';
import AddClientsModal from '../components/AddClientsModal';

export default function Home() {
  return (
    <>
        <div className="d-flex gap-3 mb-4">
            <AddClientsModal />
        </div>
        <Projects />
        <Client />
    </>
  )
}
