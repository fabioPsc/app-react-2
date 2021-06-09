
import {useState} from 'react';
import VideoText from './VideoText'

function App(){
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [videoList, setVideoList] = useState([]);
  
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const HandleColor = (e) => {
    setColor(e.target.value)
  }
  
  // 1. creiamo la lista di video con le loro proprietà
  // 2. facciamo vedere nella UI i nostri video
  
  const createVideoHandler = () => {
    setVideoList([...videoList, {title: title, color: color}])
    setTitle("");
    setColor("")
  }
  
  return (
    <div className="App">
    <h3>Scrivi il Titolo</h3>
    <input type="text" onChange={handleTitle} value={title} />
    <h3>Scrivi il Colore</h3>
    <input type="text" onChange={HandleColor} value={color} />
    <button onClick={createVideoHandler} >Crea Nuovo Video</button>
    {videoList.map(function(video){
      return <VideoText title={video.title} color={video.color} />
    })}
    </div>
    );
    
  }      
  
  export default App;
  