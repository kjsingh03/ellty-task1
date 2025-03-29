import { useState } from 'react';
import './App.css'
import { Button, PagesModal } from './components'
import { useModal } from './hooks';

function App() {

  const pagesModal = useModal();

  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  return (
    <div className='flex flex-col gap-3 p-6'>

      <Button variant="primary" handleClick={pagesModal.openModal}>Open Modal</Button>

      <PagesModal {...pagesModal} selectedPages={selectedPages} setSelectedPages={setSelectedPages} />

      <p className="">Selected pages : {selectedPages.length === 0 ? 'None' : selectedPages.join(", ")}</p>
      
    </div>
  )
}

export default App
