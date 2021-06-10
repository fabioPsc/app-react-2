
import {useState} from 'react';
import VideoText from './VideoText'
import { v4 as uuidv4 } from 'uuid';

function App(){
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [author, setAuthor] = useState("");
  const [videoList, setVideoList] = useState([]);
  
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const HandleColor = (e) => {
    setColor(e.target.value)
  }
  const HandleAuthor = (e) => {
    console.log(e.target)
    setAuthor(e.target.value)
  }
  
  // 1. creiamo la lista di video con le loro proprietà
  // 2. facciamo vedere nella UI i nostri video
  
  const createVideoHandler = () => {
    setVideoList([...videoList, {title: title, color: color, author: author, id: uuidv4()}])
    setTitle("");
    setColor("");
    setAuthor("")
  }

  const deleteVideo = (id) => {
    /* console.log(id) */
    setVideoList( videoList.filter(function(video){
      return video.id !== id
    }))

  }
  
  return (
    <div className="App">
    <h3>Scrivi il Titolo</h3>
    <input type="text" onChange={handleTitle} value={title} />
    <h3>Scrivi il Colore</h3>
    <input type="text" onChange={HandleColor} value={color} />
    <h3>Chi è l'autore?</h3>
    <input type="text" onChange={HandleAuthor} value={author} />
    <button onClick={createVideoHandler}>Crea Nuovo Video</button>
    {videoList.map(function(video){
      return <VideoText deleteVideo={() => deleteVideo(video.id)} key={video.id} title={video.title} color={video.color} author={video.author}/>
    })}
    </div>
    );
    
  }      
  
  export default App;
  