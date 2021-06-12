// VideoText
import style from './style/videoText.module.css';

function VideoText({title, color, author, deleteVideo}) {
    return(
        <div style={{ display: 'flex', marginTop: 35 }}>
            <div style={{ padding: '30px', background: color }}>
                <h1 className={ style.image } >Image</h1>
            </div>
            <div>
                <h1 className={ style.title } >Titolo del Libro: "{title}"</h1>
                <h4 className={ style.visual } > Visual e Data: 3m - 6 novembre 2021</h4>
                <h3 className={ style.author }>Autore: {author}</h3>
                <button onClick={deleteVideo} >Cancella Video</button>
            </div>
        </div>
    )
}

export default VideoText;

