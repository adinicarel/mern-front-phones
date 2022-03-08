
import { Link } from 'react-router-dom';

const ItemsList = ({data, handleDelete}) => {
  
  return (
    <section className='phones_list'>
        {data.length>0 && data.map((entry) => {
          let imgModule=''
          if (entry.imageFileName) imgModule = require(`../../assets/images/${entry.imageFileName}`);
          else imgModule = require(`../../assets/images/iPhone_4.jpg`);
          return (
            <article className='phone_article' key={entry._id}>
                {<Link to={`/view/${entry._id}`}><img src={imgModule} alt={entry.name} height="300px" /></Link>}
                <h2 className='article_title'>{entry.name}</h2>
                <h3 className='article_price'>{entry.price.toFixed(2)}<span>$</span></h3>
                <button className='article_delete_btn' onClick={handleDelete(entry._id)}>X</button>
            </article>
            )
        } ) }
    </section>
  )
}

export default ItemsList;