import Categories from "./Categories";
import Classement from "./Classement";
import Essai from "./Essai";
import Footer from "./Footer";
import Main from "./Main";
import Message from "./Message";
import Score from "./Score";

export default function Accueil(){
    return (
        <>
            <Main/>
            <Message/>
            <Categories/>
            <Essai/>
            <Classement/>
            <Score/>
            <Footer/>
        </>
    )
}