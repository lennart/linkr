var User = {
	run: function(cb, userCtx, widget, app) {
		var self = this;
		self.cb = cb;
		self.userCtx = userCtx;
		self.widget = widget;
		self.app = app;
		$.couch.userDb(function(db) {
			var userDocId = "org.couchdb.user:" + userCtx.name;
			console.debug("preprocess me!");
			db.openDoc(userDocId, {
				success: function(resp) {
					self.userDocLoaded(self, resp)
				}
			});
		});
	},

	userDocLoaded: function(self, userDoc) {
    self.userDoc = userDoc;
		self.profile = userDoc["couch.app.profile"];
		if (self.profile) {
			// we copy the name to the profile so it can be used later
			// without publishing the entire userdoc (roles, pass, etc)
      console.log("User: ");
      console.log(userDoc.name);
			self.profile.name = self.userDoc.name;
			$$(self.widget).profile = self.profile;
			$$(self.widget).lastLogin = self.profile.lastLogin;
			userDoc["couch.app.profile"].lastLogin = new Date();
      
			self.app.view("by-date-and-user", {
				endkey: [$$(self.widget).lastLogin, {}],
				descending: true,
				success: function(resp) {
					self.viewSuccess(self, resp);
				}
			});
		} else {
      console.log("The fucking user ctx");
      console.log(self.userCtx);
      console.log(self.widget);
      self.cb({});
//			self.widget.trigger("noProfile", [self.userCtx]);
		}
	},

	viewSuccess: function(self, resp) {
                 
		var ids = [];
		$.each(resp.rows, function(idx, i) {
			if (i.key[1] != self.profile.name) {
				ids.push(i.id);
			}
		});
		console.log(self.userDoc);
		self.app.db.saveDoc(self.userDoc, {
			error: function(resp) {
				console.log("WTF");
				console.log(resp);
        // fail silently;
        self.cb(self.profile);
			},
			success: function(resp) {
				console.log("do it");
				console.log(profile);

				//widget.trigger("profileReady", [profile]);
				self.cb(self.profile);
			}
		});
	},

	init: {
		unseen: function() {
			if (!userDoc["couch.app.profile"].unseen) {
				userDoc["couch.app.profile"].unseen = {};
			}
			if (!userDoc["couch.app.profile"].unseen["linkr"]) {
				userDoc["couch.app.profile"].unseen["linkr"] = [];
			}
		}
	},

	update: {
		unseen: function(self) {
			self.userDoc["couch.app.profile"].unseen["linkr"] = self.userDoc["couch.app.profile"].unseen["linkr"].concat(ids);
		}
	}
}

exports.profile = function(cb, userCtx, widget, app) {
	// load the profile from the user doc
	User.run(cb, userCtx, widget, app);
};

