import Header from "../components/header"
import HomeItems from "../components/homeItems"

export default function Home(){
      const [cart, setCart] = useState([]);
    return(
        <>
            <Header />
            <HomeItems />

        </>
    )
}