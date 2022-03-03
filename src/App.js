import Error from './components/Error';
import Forecast from './components/Forecast';
import { Form } from './components/Form';
import Header from "./components/Header";
import useApi from './hooks/useApi';



function App() {

  const { error, forecast, loading, submitRequest } = useApi();

  const onSubmit = (value) => {
    submitRequest(value)
  }

  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center flex-col overflow-hidden">
      <Header />
      <div className={`bg-gray-900 flex flex-col min-w-[50%] min-h-[50%] rounded-3xl shadow-xl text-white items-center justify-center ${forecast && "hidden"}`}>
        {error && <Error message={error} />}
        {loading && <p>Loading...</p>}
        {(!loading && !forecast) && <Form submit={onSubmit} />}
      </div>
      {forecast && <Forecast forecast={forecast} />}

    </div>
  );
}

export default App;
