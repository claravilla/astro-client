function ButtonLink(props) {
    return(
        <a className={props.classProp} href={props.url}>{props.text}</a>
    )
}

export default ButtonLink;