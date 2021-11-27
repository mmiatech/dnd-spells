import './App.css';
import Header from './Header';
import Form from './Form';
import Error from './Error';
//import Loader from './Loader';
import SpellInfo from './SpellInfo';

import useSpellName from './hooks/useSpellName';

const App = () => {
    const { isError, isLoading, spellInfo, submitRequest } = useSpellName();

    const onSubmit = (value) => {
        submitRequest(value);
    }

    return (
        <>
            <Header />
            {!spellInfo && (
                <div>
                    {isError && <Error searchTerm={isError}/>}
                    {!isLoading && <Form submitSearch={onSubmit}/>}
                    {/* {isLoading && <Loader />} */}
                </div>
            )}
            {spellInfo && <SpellInfo spellInfo={spellInfo} />}
        </>
    );
}

export default App;
