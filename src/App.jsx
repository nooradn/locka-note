function App() {
  const textComponents = [];

  for (let i = 0; i < 7; i++) {
    textComponents.push(<Text key={i} />);
  }

  return <>{textComponents}</>;
}

function Text() {
  return (
    <>
      <h1>Simple Looping</h1>
    </>
  );
}

export default App;
