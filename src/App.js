import './App.css';
import React, { useState } from 'react';
import './style.css'
import Panel from './components/Panel';



function App() {

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [fifth, setFifth] = useState('');
  const [sixth, setSixth] = useState('');
  const [seventh, setSeventh] = useState('');
  const [eight, setEight] = useState('');
  const [ninth, setNinth] = useState('');
  const [tenth, setTenth] = useState('');
  const [final, setFinal] = useState([])
  const [ready, setReady] = useState(false);

  const generateComic = () =>{
    let temp  = [first, second, third, fourth, fifth, sixth, seventh, eight, ninth, tenth];
    // let temp = [first];
    setFinal(temp);
    setReady(true)

  }

return (
<div className='app-container'>
    <form className='Form'>
        <textarea className='text-area'
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            placeholder="Enter text for each panel..."
            rows="1"
            cols = "30"
            
        />

        <textarea className='text-area'
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            placeholder="Enter text for each panel..."
            rows="1"
            cols = "30"
        />

        <textarea className='text-area'
            value={third}
            onChange={(e) => setThird(e.target.value)}
            placeholder="Enter text for each panel..."
            rows="1"
            cols = "30"
        />

        <textarea className='text-area'
            value={fourth}
            onChange={(e) => setFourth(e.target.value)}
            placeholder="Enter text for each panel..."
            rows="1"
            cols = "30"
        />

        <textarea className='text-area'
            value={fifth}
            onChange={(e) => setFifth(e.target.value)}
            placeholder="Enter text for each panel..."
            rows="1"
            cols = "30"
        />

        <textarea className='text-area'
            value={sixth}
            onChange={(e) => setSixth(e.target.value)}
            placeholder="Enter text for each panel..."
            rows="1"
            cols = "30"
        />

        <textarea className='text-area'
            value={seventh}
            onChange={(e) => setSeventh(e.target.value)}
            placeholder="Enter text for each panel..."
            rows="1"
            cols = "30"
        />

        <textarea className='text-area'
            value={eight}
            onChange={(e) => setEight(e.target.value)}
            placeholder="Enter text for each panel..."
            rows="1"
            cols = "30"
        />

        <textarea className='text-area'
            value={ninth}
            onChange={(e) => setNinth(e.target.value)}
            placeholder="Enter text for each panel..."
            rows="1"
            cols = "30"
        />


        <textarea className='text-area'
            value={tenth}
            onChange={(e) => setTenth(e.target.value)}
            placeholder="Enter text for each panel..."
            rows="1"
            cols = "30"
        />

        <div className='submit'>
            <div className='submit-btn' type="button" onClick={generateComic}>
                Generate Comic
            </div>
        </div>
    </form>

    <div className='result'>
        {
            !ready ? <div>Comic Panels will be shown here...</div> :  final.map((text, index) => (
            
            (text !== '') &&  
            <Panel key={index} val={text} />
            ))
        
        }
  </div>
  {/* {ready && <Panel val = {final}/>} */}

</div>
);
}

export default App;
