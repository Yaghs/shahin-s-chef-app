import LogoImage from "./../images/chef-claude-icon.png"
export default function Header(){
    return(
        <header>
            <img src = {LogoImage} alt="Logo" />
            <h1>Shahin's Chef App</h1>
        </header>
    )
}