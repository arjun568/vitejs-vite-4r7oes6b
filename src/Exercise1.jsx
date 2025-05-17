function Home() {
  function callFun() {
    alert('function called');
  }
  return (
    <>
      <h1>Arjun Tiwari Todos</h1>
      <img
        src="https://images.app.goo.gl/TSk5GkX4gnS9fsXk9"
        alt="Arjun Tiwari"
        class="photo"
      />
      <ul>
        <li>Invent new traffice lights</li>
        <li>Rehearse a movie scene</li>
        <li>Imporve the specturm technology</li>
      </ul>
      <button onClick={callFun}>Click Me</button>
    </>
  );
}

export default Home
