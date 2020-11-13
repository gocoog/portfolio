import moneyImg from '../images/money_and_sense.png'
import ivote from '../images/ivote.png'
import runningImg from '../images/running_man.png'

const project_data = [
    {
        project_name: "Money and Sense",
        backend: "https://github.com/gocoog/Mod5-backend",
        frontend: "https://github.com/gocoog/Mod5-frontend",
        demo: "https://www.youtube.com/embed/XZHbUNugnhg",
        screenshot: moneyImg,
        about: "This application was created to help teach children the importance of being able to manage finances. For this project I created the backend with Ruby on Rails and a Postgres database, and JavaScript/React for the frontend. I utilized JSON Web Tokens and localStorage to store encrypted user information. Biggest challenge while creating this project"
    },
    {
        project_name: "i,vote",
        backend: "https://github.com/gocoog/Mod4-backend",
        frontend: "https://github.com/gocoog/Mod4-frontend",
        demo: "https://www.youtube.com/embed/NOH9Y7ZYS-c",
        screenshot: ivote,
        about: "i,vote was created to be a fun application to vote for your new robot leader. It takes place in a world where Will Smith couldn't save us and robots have finally taken over. Ruby on rails was used for the backend with a Postgres database. I utilized React and JavaScript for the front end. An analytics page was added to keep track of voter demographics for each candidate. I also built a results page that shows an array of the top 10 candidates. "
    },
    {
        project_name: "Running Man",
        backend: "https://github.com/gocoog/Running-man-project",
        demo: "https://www.youtube.com/embed/6xQ3MMlbjTA",
        screenshot: runningImg,
        about: "Running Man was designed using vanilla JavaScript for the frontend and Ruby on Rails for the backend to keep track of users and user scores. I also have a page that generates the top 10 scores amongs every user that has played the game. Users also have CRUD actions available to them in case any information changes."
    }
]

export default project_data