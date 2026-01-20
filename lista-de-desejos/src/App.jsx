import './App.css'
import Items from './components/Items'

function App() {

  const items = [
    {id: 1, name: 'Fone de ouvido', price:100},
    {id: 2, name: 'Smartwatch', price:150},
    {id: 3, name: 'Notebook', price: 2000},
    {id: 4, name: 'Tablet', price: 900},
    {id: 5, name: 'Smartphone', price: 2500},
  ]

  return (
    
      <div className='app'>
        <h1 className='title'>WishLista</h1>
        

        {items.map((item) => (

          <Items key={item.id} products={item}/>
          
        ))}

        
      </div>
  )
}

export default App
