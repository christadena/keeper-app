import Header from './Header';
import Footer from './Footer';  
import './App.css';
import Note from './Note';
import noteContent from './noteContent';

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap">
        {noteContent.map((textContent) => (
          <div
            key={textContent.id}
            className="block min-w-[400px] max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <Note
              title={textContent.title}
              content={textContent.content}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;