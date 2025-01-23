# mono-repo

## About

This is a combination backend (https://github.com/heruwaspodov/backend-repo) and frontend (https://github.com/heruwaspodov/frontend-repo) repository for mini apps for login, fetch user, and update the users using firebase. The combination 2 repository is using turbo.build (https://turbo.build/)

## Dependency

- NodeJs v22.10.7
- Firebase
- ExpressJS
- NextJS 15.1.5
- ReactJS
- Typescript
- Redux


## Preparation in backend folder

- copy `.env.example` to `.env` (configuration for firebase credential)
- please register the project setting in the => https://console.firebase.google.com/u/2/project/{your_project}
- generate new private key and rename as `firebase-adminsdk.json`
- Make sure already activate a **firestore database** => https://console.firebase.google.com/u/2/project/{your_project}/firestore/databases 
feature and create new doc, the name is **USERS**
- Make sure already activate a **Authentication** => https://console.firebase.google.com/u/2/project/{your_project}/authentication/users, please select login **email and password** and create a sample for users, because in the frontend has no feature for registration.


## Preparation in frontend folder

- copy `.env.example` to `.env` (configuration for firebase credential)
- please register the project setting in the => https://console.firebase.google.com/u/2/project/{your_project}
- generate new private key and rename as `firebase-adminsdk.json`
- Make sure already activate a **firestore database** => https://console.firebase.google.com/u/2/project/{your_project}/firestore/databases 
feature and create new doc, the name is **USERS**
- Make sure already activate a **Authentication** => https://console.firebase.google.com/u/2/project/{your_project}/authentication/users, please select login **email and password** and create a sample for users, because in the frontend has no feature for registration.
- Make sure the backend repository is running (https://github.com/heruwaspodov/backend-repo)


## Run
in main folder (monorepo) lets run this apps using command below
#### `yarn dev`