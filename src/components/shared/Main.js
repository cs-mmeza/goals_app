function  Main({children}) {
    return ( // a tag without name  in html is called a fragment.
      <>  
          <sidenav>
            <a href="/lista">Lista</a>
            <a href="/crear">Crear</a>
          </sidenav>
          <main>
            {children}
          </main>
      </>
    );
  }
  
  export default Main