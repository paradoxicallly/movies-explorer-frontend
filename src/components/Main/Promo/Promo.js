import './promo.css'
import NavTab from "./NavTab/NavTab";

function Promo() {
    return (
        <div className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <NavTab />
            </div>
        </div>
    )
}

export default Promo;