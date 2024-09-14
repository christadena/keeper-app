import Header from './Header';
import Note from './Note';
import Footer from './Footer';  
import './App.css'

function App() {
    return (
    <div>
      <Header />
      <div>
      <Note title="My Note Title" content="This is the content of the note." />
      </div>
      <Footer />
    </div>
  )
}

export default App
