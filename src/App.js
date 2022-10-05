
import './App.css';
import Body from './components/Body';
import Header from './components/NavBar';
import {useState, useEffect, useRef} from 'react'
const url = 'https://www.mobifone.vn/get-data-micro-esim';

function App() {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const load = useRef(true)
  
  useEffect(() => {
      if(load.current) {

        fetch(url,{
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',// 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic bWlyY29lc2ltOkVzaW1AMjAyMiM='
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })
        .then((res) => {
         if(res.ok) {
           return res.json();
          }
          throw new Error('Server bad response')
        })
        .then(res => {
          setLoaded(true)
          setData(res.data)
          console.log(res.data);
        })
        .catch(err => console.log('Error::::', err))
        
        load.current = false;
      }
  }, []);

  return (
    loaded &&
      <> 
      <Header></Header>
      <Body data = {data}></Body> 
      </>

  );
}

export default App;
