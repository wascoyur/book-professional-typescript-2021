import './App.css';

function App(): JSX.Element {
  const fetchWithAuth = (
    id: string | number | boolean,
  ): string | number | boolean => {
    if (typeof id === 'string') {
      return id.toLowerCase();
    }
    return id;
  };
  const out = fetchWithAuth(5);
  return (
    <div className='App'>
      <h1>Ready to develop</h1>
      <div>{out}</div>
    </div>
  );
}

export default App;
