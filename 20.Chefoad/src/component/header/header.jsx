import chef from '/Users/jaisal/repos/TheOdinProject/20.Chefoad/src/assets/chef.png'
import './header.css'
export default function Header(){
    return(
        <header>
            <img src={chef} height={75} width={75} alt="" />
            <h3>Chefoad</h3>
        </header>
    )
}