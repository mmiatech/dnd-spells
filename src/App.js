import './App.css';
import Header from './Header';
import Form from './Form';
import Error from './Error';
//import Loader from './Loader';
import SpellInfo from './SpellInfo';
import Container from '@mui/material/Container';

import useSpellName from './hooks/useSpellName';
import { Paper } from '@mui/material';

const App = () => {
    const { isError, isLoading, spellInfo, submitRequest } = useSpellName();

    const onSubmit = (value) => {
        submitRequest(value);
    }

    return (
        <>
            <Header />
            <Container
                maxWidth="md"
                class="info-display-container"
            >
                <Paper elevation={3} class="info-display-inner">
                    {!spellInfo && (
                        <div>
                            {isError && <Error searchTerm={isError}/>}
                            {!isLoading && <Form submitSearch={onSubmit}/>}
                            {/* {isLoading && <Loader />} */}
                        </div>
                    )}
                    {spellInfo && <SpellInfo spellInfo={spellInfo} />}
                </Paper>
            </Container>
        </>
    );
}

export default App;
