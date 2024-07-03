# SetUp

Install create next app, Material UI, react , Typescript packages using npm install or use npx create-next-app@latest
npx next dev - Run the application in Development mode
npm build - Build the production application
npm start - Runs the production build application

# Application

It is a demonstartion of simple Next JS application with server side rendering styled with Material UI library.
The application has two pages Home and postDetails.

# Home Page

The first page shows you the list of all posts fetching from 'https://jsonplaceholder.typicode.com/posts'. The API call is made in the getServerSideProps.
It uses Material UI card component in the view.
Upon clicking on each post card, it routes to the postDetails page with id of the post sent in query.

# Post Details Page

The post details page fetches the data using 'https://jsonplaceholder.typicode.com/comments/{id}' and shows the comments details of the post id.
It uses the Material UI card component.
