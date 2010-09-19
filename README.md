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


## usage & hacking

there are currently three main views of shared links

* public – shows all shared links with the 'public' flag
* home – shows all your shared links including private ones
* replies – shows all links directed at your nickname (including @nickname in the message) (public and private)

Each link can have some other links glued to it. Glued links don't show up in public timeline but are shown when viewing the _details_ of a link.

I thought about adding some kind of voting system for links but didn't like the idea of having numbers telling me how _important_ a link might be. I thought about a push/pull system allowing you to _reshare_ a link and define whether you want to push or pull this link to top or bottom. Reshared links bubble up or fall down in the timeline. This is however not fully implemented, yet.

Currently there is no search mechanism planned and all navigation relies on the tag and domain clouds.

To personalize the _linkr_ experience one could overlay user defined tags added to a link by others (or yourself), since posted links __should not__ be editable. This is however not implemented, yet.



[couchdb]: http://couchdb.apache.org
