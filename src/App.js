import './App.css';
import Header from './Header';
import Form from './Form';

const App = () => {
    return (
        <>
            <Header />
            <div>
                <Form />
                <Error />
                <Loading />
            </div>
        </>
    );
}

export default App;
