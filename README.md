<h1 align="center">
  Registo Neonatal
</h1>

<p align="center">
<a href="#project">Project</a> |
<a href="#technologies">Technologies</a> |
<a href="#how-to-use">How to use</a> |
<a href="#how-to-contribute">How to contribute</a> |
<a href="#license">License</a> |
</p>

![Screenshot (101)](https://user-images.githubusercontent.com/56188470/158884670-dbbfd52c-9383-46ae-88da-5067f4cdd21d.png)

## Project

This projects registers newborns alongside with their moms as its keeps records of their fingerprints for later recognition to avoid kidnappings.

## Technologies

This project was developed with the following technologies:

- Node.js - To build the backend and all infrastructure of the project
- Typescript - To write the code enforcing typing
- EJS - as template engine to build the views
- TypeORM - To connect with the database
- MySQL - as the DBMS

## How to use

To run this project, you must have Node.js and MySQL installed.
**Install the dependencies** - In the root folder of the project, run: `npm install`
**Create the database tables** - run the migrations `npm run typeorm migration:run`
**Start the server** - `npm start`

Go to http://localhost:3333
login using the credentials:
user: admin@neonatal.com
pass: 123456

Browse trough the app.

## How to contribute

All the contributions are welcome, but you should follow this steps to contrinute:

- Open an issue describing your feature suggestion or bug fix
- fork this repo
- Create a new branch with your feature
- Commit your changes
- Open a PR with these changes

After your PR has been merged, you can delete your branch.

## License

This project is under the MIT License. check the file [LICENSE]() for details.

---

Made by Luis Saiete. Find me on [Twitter](https://twitter.com/ltsaiete).
