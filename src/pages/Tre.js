import Footer from "../components/Footer";
import Typewriter from "typewriter-effect";
const Tre = () => {
    const aforisma = "Il più grande spreco nel mondo è la differenza tra ciò che siamo e ciò che potremmo diventare. "
    document.title = 'Paura del Cambiamento - Aforisma';
    return (
        <>
            <h1>Aforisma</h1>
            <div className="center">
            <Typewriter
            onInit={(typewriter)=> {
            typewriter
            .typeString(aforisma)
            .pauseFor(500)
            .start();
            }}
            />
            </div>
            <Footer/>
        </>
    );
}
export default Tre;