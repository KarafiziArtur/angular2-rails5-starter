## angular2-seed with Rails 5

A simple starter project demonstrating the basic concepts of Angular 2 with Rails 5. Tested only on Windows 10.

This branch uses [Webpack](https://webpack.github.io/) for Development. There is also a SystemJS branch available.

### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed
- Make sure you have [Ruby & DevKit](http://rubyinstaller.org/downloads/) installed
- Make sure you have [PostgreSQL](http://www.enterprisedb.com/products-services-training/pgdownload#windows) installed
- Set password for PostgreSQL in `/config/database.yml` file on line 25
- Run `rails server` in first terminal's window
- Secondly terminal's window run `npm install -g gulp webpack webpack-dev-server typings typescript` to install global dependencies
- Go to `/client` folder
- Run `npm install` to install dependencies
- Run `npm run watch` to start webpack bundling
- Thirdly terminal's window run `gulp`
- Open browser to [`http://localhost:3000`](http://localhost:3000)
