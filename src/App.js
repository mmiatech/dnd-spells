import './App.css';
import Header from './Header';
import Form from './Form';
//import Error from './Error';
//import Loader from './loader';
//import SpellInfo from './spellInfo';

import useSpellName from './hooks/useSpellName';

const App = () => {
    const { isError, isLoading, isSpellInfo } = useSpellName();

    return (
        <>
            <Header />
            <div>
                {!isLoading && <Form />}
                {isError && <Error />}
                {isLoading && <Loader />}
            </div>
            {isSpellInfo && <SpellInfo />}
        </>
    );
}

export default App;
