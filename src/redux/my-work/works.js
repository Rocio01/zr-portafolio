const initialState = {
  works: [{
            name: "Pokemon App",
            description: 'Pokemon is a SPA to show pokemons and retrieve information about each one of them. the app displays a list of 30 Pokemons.',
            technologies: 'React, Redux, Bootstrap, CSS3, Heroku, pokeapi',
            demo: 'https://zr-pokemons.herokuapp.com/',
            image: 'ReactCapstone',
            github: "https://github.com/Rocio01/pokemon-capstone"
          },
          {
            name: "Time Track App",
            description: 'This is an application where you can group your activities and track how many hours you spend on them, you can also create activities without grouping them.',
            technologies: 'Ruby, Ruby on Rails, Bootstrap, CSS3',
            demo: 'https://evening-castle-40558.herokuapp.com/',
            image: 'RailsCapstone',
            github: "https://github.com/Rocio01/capstone-rails"
          },
          {
            name: "Restaurant page",
            description: 'A simple restaurant homepage rendered dynamically by DOM manipulation, and the use of modularized code using webpack.',
            technologies: 'HTML5, CSS3, JavaScript, Webpack',
            demo: 'https://rocio01.github.io/restaurant-page/',
            image: 'JsProject',
            github: "https://github.com/Rocio01/restaurant-page"
          },
          {
            name: "Telegram Bot",
            description: 'In this project, I built a bot using the platform Telegram. This is a bot that will fill your curiosity about our furry friends (dogs and cats), it posts random curiosities about dogs and cats and also images.',
            technologies: 'Ruby, Colorize gem, telegram-bot-ruby gem, rspec gem, Rubocop, telegram',
            demo: '',
            image: 'Copito',
            github: "https://github.com/Rocio01/My-telegram-bot"
          }
          ]
}


const worksReducer = (state = initialState) => {
  return state;
}

export default worksReducer;