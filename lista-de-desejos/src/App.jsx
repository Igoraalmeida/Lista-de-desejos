import './App.css'
import Items from './components/Items'
import Add from './components/Add';

function App() {

  const items = [
    {id: 1, name: 'Headset'},
    {id: 2, name: 'Smartwatch'},
    {id: 3, name: 'Notebook'},
    {id: 4, name: 'Tablet'},
    {id: 5, name: 'Smartphone'},
  ]

  return (
    
      <div className='app'>

        <h1 className='title'>WishList</h1>
        
        <form>
          <input type='text' placeholder='Write here your wish...'></input>
          <input type='submit' id='inputSearch' value='Add Item'></input>
        </form>
        
        
        {items.map((item) => (

          <Items key={item.id} products={item}/>
          
        ))}

        <Add/>
      </div>
  )
}

export default App
