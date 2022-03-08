
import './addOrUpdateItem.css';

const AddOrUpdateItem = ({data, handleSubmitAdd, setState, id}) => {

  const label = id ? 'Edit' : 'Add';

  return (
    <div className='wrapper form_page'>
      <h2 className="form_page_title">{id ? 'Edit phone info' : 'Add new phone'}</h2>
      <form name='addMemberForm' onSubmit={handleSubmitAdd}>
        <div>
          <label htmlFor="addNameInput">{label} name</label>
          <input
            id="addNameInput"
            value={data.name}
            onChange={(e) => setState(prevState => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                name: e.target.value
              }
            }))}
            placeholder="iPhone XX"
            required
          />
        </div>

        <div>
          <label htmlFor="addManufacturerInput">{label} manufacturer</label>
          <input
            id="addManufacturerInput"
            value={data.manufacturer}
            onChange={(e) => setState(prevState => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                manufacturer: e.target.value
              }
            }))}
            placeholder="Apple"
            required
          />
        </div>

        <div>
          <label htmlFor="addDescriptionInput">{label} description</label>
          <input
            id="addDescriptionInput"
            value={data.description}
            onChange={(e) => setState(prevState => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                description: e.target.value
              }
            }))}
            placeholder="tremendous power"
            required
          />
        </div>

        <div>
          <label htmlFor="addColorInput">{label} color</label>
          <input
            id="addColorInput"
            value={data.color}
            onChange={(e) => setState(prevState => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                color: e.target.value
              }
            }))}
            placeholder="red"
            required
          />
        </div>

        <div>
          <label htmlFor="addProcessorInput">{label} processor</label>
          <input
            id="addProcessorInput"
            value={data.processor}
            onChange={(e) => setState(prevState => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                processor: e.target.value
              }
            }))}
            placeholder="I5"
          />
        </div>

        <div>
          <label htmlFor="addScreenInput">{label} screen</label>
          <input
            id="addScreenInput"
            value={data.screen}
            onChange={(e) => setState(prevState => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                screen: e.target.value
              }
            }))}
            placeholder="LED"
          />
        </div>

        <div>
          <label htmlFor="addPriceInput">{label} price</label>
          <input
            id="addPriceInput"
            type="number"
            min="1"
            max="1000"
            value={data.price}
            onChange={(e) => setState(prevState => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                price: e.target.value
              }
            }))}
          />
        </div>
        
        <div>
          <label htmlFor="addRamInput">{label} ram</label>
          <input
            id="addRamInput"
            type="number"
            min="1"
            max="128"
            value={data.ram}
            onChange={(e) => setState(prevState => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                ram: e.target.value
              }
            }))}
          />
        </div>

        <button type="submit">{label.toUpperCase()}</button>
      </form>
      
    </div>
  )
}

export default AddOrUpdateItem