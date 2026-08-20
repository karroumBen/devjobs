## DevJobs
an ongoing project to allow developers and software engineers to
view their desired positions.

### WIP
This project is a monorepo consiting of a backend and frontend
parts.
Backend(server directory) is using Node, Express, MongoDB, Mongoose as ORM
Frontend (client) is using React, SCSS, JWT, Axios

### Run with Docker

MongoDB, the API, and the React app start together:

```bash
docker compose up --build
```

Then open http://localhost:3001. The API is also available at http://localhost:3000.

Copy `server/.env.example` and `client/.env.example` if you run the apps on the host instead of Docker.
