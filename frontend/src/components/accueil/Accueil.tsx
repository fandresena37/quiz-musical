import Categories from "./Categories";
import Classement from "./Classement";
import Essai from "./Essai";
import Footer from "./Footer";
import Header from "./Header";
import Message from "./Message";
import Score from "./Score";

export default function Accueil(){
    return (
        <>
            <Header/>
            <Message/>
            <Categories/>
            <Essai/>
            <Classement/>
            <Score/>
            <Footer/>
        </>
    )
}