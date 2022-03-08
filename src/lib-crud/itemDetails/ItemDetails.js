import { Link } from "react-router-dom"
import './itemDetails.css'

const ItemDetails = ({data, imgModule}) => {
  const colors = ['red','white','black','silver'];
  const notAvailable = colors.filter(color => color!== data.color);
   
  return (
    
    <main className='details_page'>
      <div className="wrapper">
        <article className="article">
          <section className="phone_info_section">
            <h1 className="manufacturer_title">{data.manufacturer}</h1>
            <h2 className="phone_title_2">{data.name}</h2>
            
            <ul>
              <li>{data.description}</li>
              <li>display: {data.screen}</li>
              <li>CPU: {data.processor}</li>
              <li>Memory: {data.ram}GB ram</li>
            </ul>

            <p>Colors</p>
            <button className="color_btn_disabled available"><span className="color_circle"></span><span className="color_name">{data.color}</span></button>
            {notAvailable.map((color)=> (
              <button className="color_btn_disabled"><span className={`color_circle ${color}`}></span><span className="color_name">{color}</span></button>
            ))}

          </section>

          <div className="image_wrapper"><img src={imgModule!==null ? imgModule.src: undefined} alt={data.name} height="400px"/></div>

          <section className="price_section">
            <div>
              <p>Buy now your brand new <strong>{data.manufacturer}</strong> phone</p>
              <h3 className="price_title"><span>This week's deal:</span> {data.price}$</h3>
              <button className="order_btn_disabled">Order now</button>
            </div>
            <p className="offer">
              Offer: claim your special gift adding <strong>SPECIAL</strong> discount code. Order now!
            </p>
            
          </section>
        </article>
        <div className="edit_link">
          <Link to={`/edit/${data._id}`} className="link_update_page">Update phone info</Link>
        </div>
      </div>
    </main>
  )
}

export default ItemDetails