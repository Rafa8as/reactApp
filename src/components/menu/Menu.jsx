function Menu() {
    return(
      <div className='App' style={{background :'#FF6E31'}}>
        <nav>
          <h1>Supermercado</h1>
          <a href="AiOutlineShoppingCart"></a>
        </nav>
      <label> Supermercado</label>
      
      <div className="App" style={{background: '#C3ACD0'}}>
        <div style={{background: '#FFFBF5'}}>
          <a href="#" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        
        
        <h1>Ecommerce</h1>
        <div className="card" style={{background: '#495579'}}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className='card' style={{background: '#3C79F5'}}> 
           Asado 
           <img src="imagenes/imagenes/asado" alt="" />
           <button onClick={() => setCount((count) => count + 1)} style={{background: '#FB2576'}}>
            Unidades {count}
          </button>
          </p>
          <p className='card'style={{background: '#3C79F5'}}>
           Cerveza
           <button onClick={() => setCount((count) => count + 1)} style={{background: '#FB2576'}}>
            Unidades {count}
          </button>
          </p>
          <p className='card' style={{background: '#3C79F5'}}>
           Gaseosa
           <button onClick={() => setCount((count) => count + 1)} style={{background: '#FB2576'}}>
            count is {count}
          </button>
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      </div>
      </div>
  
    )
  }

  export default Menu