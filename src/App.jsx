import title_image from './assets/title_image.jpeg';

import { CORE_GAMES } from './data.js'



function Header () {
  
  return (
    <header>
        <img src= {title_image} alt="Video Games Title" />
        <h1>Video Games</h1>
        <p>
          Games you need to play if you want to understand the 80's and 90's generation !
        </p>
      </header>
  );
}


function CoreGames(props){
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>      
    </li>
  );
}

function App() {

  return (
    <div>      
      <Header/>
      <main>
        <h2>Let's begin!</h2>
        <section id="core-concepts">
          <h2>Top Titles</h2>
          <ul>
            <CoreGames 
            image={CORE_GAMES [0].image}
            title='Classic Games'
            description = 'Clasic Games you should play in your free time!'
            />
            <CoreGames 
            image= {CORE_GAMES[1].image}
            title = {CORE_GAMES[1].title}
            description = {CORE_GAMES[1].description}
            />
            <CoreGames 
            image= {CORE_GAMES[2].image}
            title = {CORE_GAMES[2].title}
            description = {CORE_GAMES[2].description}
            />
             <CoreGames 
            image= {CORE_GAMES[3].image}
            title = {CORE_GAMES[3].title}
            description = {CORE_GAMES[3].description}
            />
           
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;