# swars

Backend URL: https://swars-production.up.railway.app

FrontEnd URL: https://swarsfront-production.up.railway.app/

## File structure
- `client`: contains frontend consuming the graphql endpoints
- `server`: contains backend API

## Backend
```
cd server && npm i && npm run server
```
To run backend tests use this command
```
npm run test
```
### Queries
1. Get Characters
```
{
  people (page: $number) {
    next,
    previous,
    count,
    people {
      name,
      height,
      mass,
      homeworld,
      gender
    }
  }
}
```
2. Get single Character
```
{
  person(name: $string) {
    name,
    height,
    mass,
    homeworld,
    gender
  }
}
```
#### `.env` file
```
BASE_URL=paste-URL-here
```

## Frontend
```
cd client && npm i && npm run dev
```
To run frontend tests use this command
```
npm run test
```
