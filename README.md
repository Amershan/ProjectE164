# ProjectE164

Dependencies:
Python 2.7.6
Node.js >= V0.10
PostgreSQL >= 9.3
make
gcc
git

#Dependencie installation on Ubuntu or debian based linux: 

```sh
$ sudo apt-get update
$ curl -sL https://deb.nodesource.com/setup | sudo bash -
$ sudo apt-get install python2.7.6 postgresql make gcc git
```

#Database setup
in the dbBackup folder there are two files.
dbwouser.sql - dump without the owner user
testDB.sql - full dump with owner data

If you are importing the 2nd one you need to create project sql user with the password project.
If you are using the first one, you need to alter the config/connections.js accordingly to your sql database settings 

#Usage

```sh
$ git clone https://github.com/Amershan/ProjectE164.git
$ cd ProjectE164
$ npm install -g sails
$ npm install (may require sudo rights for his steps)
$ sails lift
```
open [localhost] - localhost:1337
[localhost]: http://localhost:1337
[ProjectE164]: http://github.com/Amershan/ProjectE164

a [Sails](http://sailsjs.org) application
