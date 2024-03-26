
import './App.css'
import Home from './pages/Home'
import ListedBooks from './pages/ListedBooks'
import PagesToRead from './pages/PagesToRead'
import SpecialBook from './pages/SpecialBook'
import WantToBuy from './pages/WantToBuy'

function App() {

  return (
    <>
    <div className='container mx-auto'>
      <Home></Home>
      <ListedBooks></ListedBooks>
      <PagesToRead></PagesToRead>
      <WantToBuy></WantToBuy>
      <SpecialBook></SpecialBook>
    </div>
     
    </>
  )
}

export default App
