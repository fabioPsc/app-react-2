// VideoText
import style from './style/videoText.module.css';

function VideoText({title, color, author, deleteVideo}) {
    return(
        <div style={{ display: 'flex', marginTop: 35 }}>
            <div style={{ padding: '30px', background: color }}>
                <h1 className={ style.image } >Image</h1>
            </div>
            <div>
                <h1 className={ style.title } >{title}</h1>
                <h4>3m - 6 novembre</h4>
                <h3>{author}</h3>
                <button onClick={deleteVideo} >Cancella Video</button>
            </div>
        </div>
    )
}

export default VideoText;

