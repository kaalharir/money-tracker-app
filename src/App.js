import { useState } from 'react';
import './App.css';
import Transaction from 'api/models/Transaction';  // Update this line

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transactions';
    /* console.log(url);*/
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, description, datetime })
    })
      .then(response => response.json())
      .then(json => {
        console.log('result', json);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
  }
  
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder={'+200 new samsung tv'}
          />
          <input
            value={datetime}
            onChange={ev => setDatetime(ev.target.value)}
            type="datetime-local"
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder={'description'}
          />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung</div>
            <div className='description'>it was time for a new TV</div>
          </div>
          <div className='right'> 
            <div className='price red'>$500</div>
            <div className='datetime'>2023-12-29 16:33</div>
          </div>
        </div>
      </div>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Gig job new website</div>
            <div className='description'>it was time for a new website</div>
          </div>
          <div className='right'> 
            <div className='price green'>+$400</div>
            <div className='datetime'>2023-12-29 16:33</div>
          </div>
        </div>
      </div>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>iPhone 14 Pro Max</div>
            <div className='description'>it was time for a new phone</div>
          </div>
          <div className='right'> 
            <div className='price red'>+$1100</div>
            <div className='datetime'>2023-12-29 16:33</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
