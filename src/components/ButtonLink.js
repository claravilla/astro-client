function ButtonLink(props) {
    return(
        <a className={props.class} href={props.url}>{props.text}</a>
    )
}

export default ButtonLink;