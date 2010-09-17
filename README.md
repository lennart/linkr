# linkr

mix del.icio.us with twitter.
add replication to it.

## installation

um, 
u need a running [couchdb][couchdb] and
clone the git [repository](https://lennart@github.com/lennart/linkr.git).

use [a set up](http://www.couchapp.org/page/getting-started)
[couchapp](http://github.com/couchapp/couchapp.git) and

    couchapp push

or without configuration

    couchapp push http://localhost:5984


in this case visit `http://localhost:5984/_dbname_/_design/linkr/index.html`
and pray it works…


usage
-----



[couchdb]: http://couchdb.apache.org
