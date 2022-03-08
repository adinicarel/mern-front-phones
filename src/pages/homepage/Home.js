import ItemsList from '../../lib-crud/allItems/readItems';
import './home.css';

const Listings = ({items, handleDelete}) => {

  return (
    <main className='main_page'>
      <h1>Watch out the ultimate mobile gadgets</h1>
      <ItemsList data={items} handleDelete={handleDelete} />
    </main>
  )
}

export default Listings