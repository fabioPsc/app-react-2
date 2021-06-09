// VideoText

function VideoText({title, color}) {
    return(
        <div style={{ display: 'flex' }}>
            <div style={{ padding: '30px', background: color }}>
                <h1>Image</h1>
            </div>
            <div>
                <h1>{title}</h1>
                <h4>3m - 6 novembre</h4>
                <h3>Vivaldi</h3>
            </div>
        </div>
    )
}

export default VideoText;
