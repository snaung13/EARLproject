var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {
		/*
			First an AR.ClientTracker needs to be created in order to start the recognition engine. It is initialized with a URL specific to the target collection. Optional parameters are passed as object in the last argument. In this case a callback function for the onLoaded trigger is set. Once the tracker is fully loaded the function worldLoaded() is called.

			Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
			Use a specific target name to respond only to a certain target or use a wildcard to respond to any or a certain group of targets.

			Adding multiple targets to a target collection is straightforward. Simply follow our Target Management Tool documentation. Each target in the target collection is identified by its target name. By using this target name, it is possible to create an AR.Trackable2DObject for every target in the target collection.
		*/
		this.tracker = new AR.ClientTracker("assets/tracker.wtc", {
			onLoaded: this.worldLoaded
		});

		/*
			The next step is to create the augmentation. In this example an image resource is created and passed to the AR.ImageDrawable. A drawable is a visual component that can be connected to an IR target (AR.Trackable2DObject) or a geolocated object (AR.GeoObject). The AR.ImageDrawable is initialized by the image and its size. Optional parameters allow for position it relative to the recognized target.
		*/

		// Create overlay for page one
		var imgOne = new AR.ImageResource("assets/earlham1.jpg");
		var overlayOne = new AR.ImageDrawable(imgOne, 1, {
			offsetX: -0.15,
			offsetY: 0
		});

		/*
			This combines everything by creating an AR.Trackable2DObject with the previously created tracker, the name of the image target as defined in the target collection and the drawable that should augment the recognized image.
			Note that this time a specific target name is used to create a specific augmentation for that exact target.
		*/
		var pageOne = new AR.Trackable2DObject(this.tracker, "one", {
			drawables: {
				cam: overlayOne
			}
		});

		/*
			Similar to the first part, the image resource and the AR.ImageDrawable for the second overlay are created.
		*/
		var imgTwo = new AR.ImageResource("assets/earlham2.jpg");
		var overlayTwo = new AR.ImageDrawable(imgTwo, 0.5, {
			offsetX: 0.12,
			offsetY: -0.01
		});

		/*
			The AR.Trackable2DObject for the second page uses the same tracker but with a different target name and the second overlay.
		*/
		var pageTwo = new AR.Trackable2DObject(this.tracker, "two", {
			drawables: {
				cam: overlayTwo
			}
		});

        var imgThree = new AR.ImageResource("assets/earlham2.jpg");
        var overlayThree = new AR.ImageDrawable(imgThree, 1, {
        	offsetX: -0.15,
        	offsetY: 0
        });

        var pageThree = new AR.Trackable2DObject(this.tracker, "three", {
        	drawables: {
        	    cam: overlayThree
        	}
        });

        var imgFour = new AR.ImageResource("assets/earlham1.jpg");
        var overlayFour = new AR.ImageDrawable(imgFour, 1, {
            offsetX: -0.15,
            offsetY: 0
        });

        var pageFour = new AR.Trackable2DObject(this.tracker, "four", {
            drawables: {
                cam: overlayFour
           	}
         });

        var imgFive = new AR.ImageResource("assets/earlham2.jpg");
        var overlayFive = new AR.ImageDrawable(imgFive, 1, {
        	offsetX: -0.15,
        	offsetY: 0
        });

        var pageFive = new AR.Trackable2DObject(this.tracker, "five", {
        	drawables: {
        	    cam: overlayFive
        	}
        });

        var imgSeven = new AR.ImageResource("assets/earlham1.jpg");
        var overlaySeven = new AR.ImageDrawable(imgSeven, 1, {
            offsetX: -0.15,
            offsetY: 0
        });

        var pageSeven = new AR.Trackable2DObject(this.tracker, "seven", {
            drawables: {
                cam: overlaySeven
           	}
         });
	},

	worldLoaded: function worldLoadedFn() {
		var cssDivInstructions = " style='display: table-cell;vertical-align: middle; text-align: left; width: 50%;'";
		/*var cssDivSurfer = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px; width: 38px'";
		var cssDivBiker = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px;'";*/
		document.getElementById('loadingMessage').innerHTML =
			"<div" + cssDivInstructions + ">To use this feature, please point your camera at a target object.";
			/*"<div" + cssDivSurfer + "><img src='assets/surfer.png'></img></div>" +
			"<div" + cssDivBiker + "><img src='assets/bike.png'></img></div>";*/

		// Remove Scan target message after 10 sec.
		setTimeout(function() {
			var e = document.getElementById('loadingMessage');
			e.parentElement.removeChild(e);
		}, 10000);
	}
};

World.init();
