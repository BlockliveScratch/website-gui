import './style.css'

export function Username({username,picUrl}) {
    return <div className="usernameTop">
        <img className="image" src={picUrl}></img>
        <span className="profName">{username}</span>

    </div>
}