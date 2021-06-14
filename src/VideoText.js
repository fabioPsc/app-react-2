// VideoText
import style from './style/videoText.module.css';
import './style/myStyle.scss';
import styled, {css} from 'styled-components';

function VideoText({title, color, author, deleteVideo}) {
    return(
        <div id="container" style={{ display: 'flex', marginTop: 35 }}>
            <div style={{ padding: '30px', background: color }}>
                <h1 className={ style.image } ></h1>
            </div>
            <div>
                <h1 className={ style.titleUno }>Titolo del Libro:</h1>
                <h1 className={ style.title }>"{title}"</h1>
                <h4 className={ style.visual }> Visual e Data: 3m - 6 novembre 2021</h4>
                <h3 className={ style.author }>Autore: {author}</h3>
                <MyButton onClick={ deleteVideo }>Cancella Video</MyButton>
            </div>
        </div>
    )
}


const MyButton =  styled.button `
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
box-shadow: 3px 3px 3px black;
`


export default VideoText;

