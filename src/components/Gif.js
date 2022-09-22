function Gif(props) {
    return(
        <div className="gif">
            <img src={props.gifImg.img_url} alt=""/>
        </div>
    )
}

export default Gif;