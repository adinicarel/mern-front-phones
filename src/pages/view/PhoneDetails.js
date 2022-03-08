import { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import ItemDetails from '../../lib-crud/itemDetails/ItemDetails';
import './phoneDetails.css';


const PhoneDetails = () => {

  const [state, setState] = useState({ phone: {}, isFetching: true });
  const [imgModule, setImgModule] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const response = await fetch(`https://mern-server-phones.herokuapp.com/api/phones/${id}`, {
        signal: signal
      });
      let resJson = await response.json();
      setState((state) => ({ ...state, phone: resJson, isFetching: false }));
    }
    fetchData();
    return () => abortController.abort();
  },[id])  

  
  useEffect(()=> {
    
    const loadImage = (fileName='iPhone_4.jpg') => {
      
      import(`../../assets/images/${fileName}`)
        .then(image => {          
          setImgModule({src: image.default});
        })
    } 
    Object.hasOwn(state.phone,'imageFileName') ? loadImage(state.phone.imageFileName) : loadImage();
  
}, [state.phone]);

  return (
    <main>
      <ItemDetails data={state.phone} imgModule = {imgModule}/>
      <div className="back_link_wrapper">
          <Link className="back_link" to="/">BACK</Link>
        </div>
    </main>
  )
}

export default PhoneDetails