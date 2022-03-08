import { useState, useEffect } from 'react'
import AddOrUpdateItem from '../../lib-crud/addItem/AddOrUpdateItem'
import { Link, useParams } from 'react-router-dom'
import './addOrUpdatePhone.css'

const AddOrUpdatePhone = () => {

  const initialState = {
    name: '',
    manufacturer: '',
    description: '',
    color: '',
    price: 0,
    imageFileName: '',
    screen: '',
    processor: '',
    ram: 1
  }

  const [state, setState] = useState({ phone: initialState, isFetching: true });

  const successMessage = document.getElementById('success');
  const linkText = document.getElementById('updated_link_add');

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
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

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    const newPhone = {
      name: state.phone.name,
      manufacturer: state.phone.manufacturer,
      description: state.phone.description,
      color: state.phone.color,
      price: state.phone.price,
      imageFileName: initialState.imageFileName,
      screen: state.phone.screen || '',
      processor: state.phone.processor || '',
      ram: state.phone.ram
    }

    if (successMessage!==null) successMessage.style.visibility = 'visible';
    if (linkText!==null) {
      linkText.style.visibility = 'visible';
      linkText.style.backgroundColor = 'white';
      linkText.style.color = 'black';
      linkText.style.border = '0.5px solid #bbb';
      linkText.textContent = 'BACK TO SEE CHANGES';
    }
    
    //IF PAGE IS EDIT ( GOT PARAMS IN THE URL) PERFORM HTTP METHOD PUT
    if (id) {
      fetch(`https://mern-server-phones.herokuapp.com/api/phones/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPhone)
    }).then(response => response.json())
      .then(resJson => {
        if (resJson.ok) {
          console.log(resJson);
          setState(prevState => ({
            ...prevState,
            isFetching: false
          }))
        }}
      )
    } else {
    //PAGE IS ADD SO PERFORM HTTP METHOD POST
    fetch('https://mern-server-phones.herokuapp.com/api/phones/', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPhone)
    }).then(response => response.json())
      .then(resJson => {
        if (resJson.ok) {
          console.log(resJson);
          setState(prevState => ({
            ...prevState,
            isFetching: false
          }))
        }}
      )
    }
  }

  return (
    <main>
      <AddOrUpdateItem data = {state.phone} handleSubmitAdd= {handleSubmitAdd} setState ={setState} id={id ? id : undefined}/>
      
      <div>
        <div className="success_message" id='success'>Changes submitted</div>
        <Link className="link_back" to='/'><span className="link_back_text" id='updated_link_add' >BACK</span></Link>
      </div>
      
    </main>
  )
}

export default AddOrUpdatePhone