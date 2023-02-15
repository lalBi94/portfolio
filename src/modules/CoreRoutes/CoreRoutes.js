import { Routes, Route } from 'react-router-dom';
import Presentation from '../pages/Presentation/Presentation';
import Main from '../pages/Main/Main';
import Competances from '../pages/Competances/Competances';
import Projets from '../pages/Projets/Projets';
import Contact from '../pages/Contact/Contact';

function CoreRoutes() {
    return(
        <Routes>
            <Route
                path="/" element={ <Main/> }
            />

            <Route
                path="/presentation" element={ <Presentation/> }
            />

            <Route
                path="/competances" element={ <Competances/> }
            />
            
            <Route
                path="/projets" element={ <Projets/> }
            />

            <Route
                path="/contact" element={ <Contact/> }
            />

            <Route
                path="/*" element={ <Main /> }
            />
        </Routes>
    );
}

export default CoreRoutes;