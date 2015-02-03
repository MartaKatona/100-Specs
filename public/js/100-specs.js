var $estr = function() { return js.Boot.__string_rec(this,''); };
var HundredSpecs = function() {
	js.mocha.M.describe("Unicorn",$bind(this,this.step1));
	js.mocha.M.describe("Videogame System",$bind(this,this.step2));
	js.mocha.M.describe("Sahara Animal",$bind(this,this.step3));
	js.mocha.M.describe("Planets",$bind(this,this.step4));
	js.mocha.M.describe("Galilean Moons",$bind(this,this.step5));
	js.mocha.M.describe("Golden Ratio φ",$bind(this,this.step6));
	js.mocha.M.describe("Water Comprising Earth's Surface",$bind(this,this.step7));
	js.mocha.M.describe("Club Name",$bind(this,this.step8));
	js.mocha.M.describe("Gender",$bind(this,this.step9));
	js.mocha.M.describe("Princess Leia",$bind(this,this.step10));
	js.mocha.M.describe("Domains",$bind(this,this.step11));
	js.mocha.M.describe("Browsers",$bind(this,this.step12));
	js.mocha.M.describe("Rainbow",$bind(this,this.step13));
	js.mocha.M.describe("Step 20",$bind(this,this.step20));
	js.mocha.M.describe("Step 50",$bind(this,this.step50));
	js.mocha.M.describe("Step 51",$bind(this,this.step51));
	js.mocha.M.describe("Step 52",$bind(this,this.step52));
	js.mocha.M.describe("Step 53",$bind(this,this.step53));
	js.mocha.M.describe("Step 54",$bind(this,this.step54));
	js.mocha.M.describe("Step 55",$bind(this,this.step55));
	js.mocha.M.describe("Step 56",$bind(this,this.step56));
	js.mocha.M.describe("Step 57",$bind(this,this.step57));
	js.mocha.M.describe("Step 58",$bind(this,this.step58));
	js.mocha.M.describe("Step 59",$bind(this,this.step59));
	js.mocha.M.describe("Step 60",$bind(this,this.step60));
	js.mocha.M.describe("Step 61",$bind(this,this.step61));
	js.mocha.M.describe("Step 62",$bind(this,this.step62));
	js.mocha.M.describe("Step 63",$bind(this,this.step63));
	js.mocha.M.describe("Step 64",$bind(this,this.step64));
	js.mocha.M.describe("Step 65",$bind(this,this.step65));
	js.mocha.M.describe("Step 66",$bind(this,this.step66));
	js.mocha.M.describe("Step 67",$bind(this,this.step67));
	js.mocha.M.describe("Step 68",$bind(this,this.step68));
	js.mocha.M.describe("Step 69",$bind(this,this.step69));
	js.mocha.M.describe("Step 70",$bind(this,this.step70));
	js.mocha.M.describe("Step 71",$bind(this,this.step71));
	js.mocha.M.describe("Step 72",$bind(this,this.step72));
	js.mocha.M.describe("Step 73",$bind(this,this.step73));
	js.mocha.M.describe("Step 74",$bind(this,this.step74));
	js.mocha.M.describe("Step 75",$bind(this,this.step75));
	js.mocha.M.describe("Step 76",$bind(this,this.step76));
	js.mocha.M.describe("Step 77",$bind(this,this.step77));
	js.mocha.M.describe("Step 78",$bind(this,this.step78));
	js.mocha.M.describe("Step 79",$bind(this,this.step79));
	js.mocha.M.describe("Step 81",$bind(this,this.step81));
	js.mocha.M.describe("Step 82",$bind(this,this.step82));
	js.mocha.M.describe("Step 83",$bind(this,this.step83));
	js.mocha.M.describe("Step 84",$bind(this,this.step84));
	js.mocha.M.describe("Step 85",$bind(this,this.step85));
	js.mocha.M.describe("Step 86",$bind(this,this.step86));
	js.mocha.M.describe("Step 87",$bind(this,this.step87));
	js.mocha.M.describe("Step 88",$bind(this,this.step88));
	js.mocha.M.describe("Step 89",$bind(this,this.step89));
	js.mocha.M.describe("Step 90",$bind(this,this.step90));
	js.mocha.M.describe("Step 91",$bind(this,this.step91));
	js.mocha.M.describe("Step 92",$bind(this,this.step92));
	js.mocha.M.describe("Step 93",$bind(this,this.step93));
	js.mocha.M.describe("Step 94",$bind(this,this.step94));
	js.mocha.M.describe("Step 95",$bind(this,this.step95));
	js.mocha.M.describe("Step 96",$bind(this,this.step96));
	js.mocha.M.describe("Step 97",$bind(this,this.step97));
	js.mocha.M.describe("Step 98",$bind(this,this.step98));
	js.mocha.M.describe("Step 99",$bind(this,this.step99));
	js.mocha.M.describe("Step 100",$bind(this,this.step100));
};
HundredSpecs.__name__ = true;
HundredSpecs.main = function() {
	js.mocha.Mocha.setup({ ui : js.mocha.Ui.BDD});
	new HundredSpecs();
	js.mocha.Mocha.run();
}
HundredSpecs.prototype = {
	step100: function() {
		js.mocha.M.it("'badForYou' should contain at least one junk food item",function() {
			js.expect.E.expect(badForYou).to.equal(true);
		});
		js.mocha.M.it("'goodForYou' should only contain healthy food items",function() {
			js.expect.E.expect(goodForYou).to.equal(false);
		});
	}
	,step99: function() {
		js.mocha.M.it("'cookieMonsterPwns' means the Cookie Monster stole your cookies",function() {
			js.expect.E.expect(cookieMonsterPwns).to.equal(true);
		});
		js.mocha.M.it("'cookieMonsterBlocked' means the Cookie Monster missed his chance",function() {
			js.expect.E.expect(cookieMonsterBlocked).to.equal(false);
		});
	}
	,step98: function() {
		js.mocha.M.it("'kitchenLightsOn' should be switched on",function() {
			js.expect.E.expect(kitchenLightsOn).to.equal(true);
		});
		js.mocha.M.it("'porchLightsOff' should be switched off",function() {
			js.expect.E.expect(porchLightsOff).to.equal(false);
		});
	}
	,step97: function() {
		js.mocha.M.it("'farTooTallAStory' should be a tall story",function() {
			js.expect.E.expect(farTooTallAStory).to.equal(true);
		});
		js.mocha.M.it("'shortStory' should be a short story",function() {
			js.expect.E.expect(shortStory).to.equal(false);
		});
	}
	,step96: function() {
		js.mocha.M.it("'redShoesSize7' should contain 'Found red shoes of size 7'",function() {
			js.expect.E.expect(redShoesSize7).to.equal("Found red shoes of size 7");
		});
		js.mocha.M.it("'blackShoesSize10' should contain 'Found black shoes of size 10'",function() {
			js.expect.E.expect(blackShoesSize10).to.equal("Found black shoes of size 10");
		});
	}
	,step95: function() {
		js.mocha.M.it("'openAClosedDoor' should open the door",function() {
			js.expect.E.expect(openAClosedDoor).to.equal(true);
		});
		js.mocha.M.it("'closeAnOpenDoor' should close the door",function() {
			js.expect.E.expect(closeAnOpenDoor).to.equal(false);
		});
	}
	,step94: function() {
		js.mocha.M.it("'openAClosedBox' should open the box",function() {
			js.expect.E.expect(openAClosedBox).to.equal(true);
		});
		js.mocha.M.it("'closeAnOpenBox' should not close the box",function() {
			js.expect.E.expect(closeAnOpenBox).to.equal(false);
		});
	}
	,step93: function() {
		js.mocha.M.it("'decagon' should be a decagon",function() {
			js.expect.E.expect(decagon).to.equal("decagon");
		});
		js.mocha.M.it("'polygon' should contain 'Could not determine type'",function() {
			js.expect.E.expect(polygon).to.equal("Could not determine type");
		});
	}
	,step92: function() {
		js.mocha.M.it("'streetDriving' should contain 'Driving on {streetName}'",function() {
			js.expect.E.expect(streetDriving).to.contain("Driving on ");
		});
		js.mocha.M.it("'forwardDriving' should contain 'Driving forward'",function() {
			js.expect.E.expect(forwardDriving).to.equal("Driving forward");
		});
	}
	,step91: function() {
		js.mocha.M.it("'warmBloodedAnimal' should be warm-blooded",function() {
			js.expect.E.expect(warmBloodedAnimal).to.equal(true);
		});
		js.mocha.M.it("'coldBloodedAnimal' should not be warm-blooded",function() {
			js.expect.E.expect(coldBloodedAnimal).to.equal(false);
		});
		js.mocha.M.it("'notWarmOrColdAnimal' should not be warm- or cold-blooded",function() {
			js.expect.E.expect(notWarmOrColdAnimal).to.equal("Could not determine if warm-blooded");
		});
	}
	,step90: function() {
		js.mocha.M.it("containsJunkFood should be a function.",function() {
			var dishes = new Meal(['pizza', 'pie', 'fish', 'shrimp', 'pasta']);
			js.expect.E.expect(dishes.containsJunkFood).to.be.a("function");
		});
		js.mocha.M.it("should return true if foods array contains at least one of the junk foods.",function() {
			var snacks = new Meal(['ice cream', 'chips', 'salad']);
			js.expect.E.expect(snacks.containsJunkFood()).to.equal(true);
		});
		js.mocha.M.it("should return false if foods array does not contain any junk food item.",function() {
			var dishes = new Meal(['pizza', 'pie', 'fish', 'shrimp', 'pasta']);
			js.expect.E.expect(dishes.containsJunkFood()).to.equal(false);
		});
	}
	,step89: function() {
		js.mocha.M.it("swipedByCookieMonster should be a function.",function() {
			js.expect.E.expect(Cookie).to.be.a("function");
		});
		js.mocha.M.it("should return true if the flavor is 'chocolate' and the day of the week is 'Monday'.",function() {
			var chocoCookie = new Cookie('chocolate');
			js.expect.E.expect(chocoCookie.swipedByCookieMonster("Monday")).to.equal(true);
		});
		js.mocha.M.it("should return false if the flavor is not 'chocolate' and/or the day of the week is not 'Monday'.",function() {
			var chocoCookie = new Cookie('chocolate');
			js.expect.E.expect(chocoCookie.swipedByCookieMonster("Saturday")).to.equal(false);
			js.expect.E.expect(new Cookie('Oreo').swipedByCookieMonster("Monday")).to.equal(false);
			js.expect.E.expect(new Cookie('sugar').swipedByCookieMonster("Sunday")).to.equal(false);
		});
	}
	,step88: function() {
		js.mocha.M.it("flipSwitch should be a function.",function() {
			js.expect.E.expect(Lightbulb).to.be.a("function");
		});
		js.mocha.M.it("should flip the switch on if 'on' is passed in as a param.",function() {
			var light = new Lightbulb(false);
			js.expect.E.expect(light.flipSwitch("on")).to.equal(true);
			js.expect.E.expect(light.isOn).to.equal(true);
		});
		js.mocha.M.it("should flip the switch off if anything other than 'on' is passed in.",function() {
			var light = new Lightbulb(false);
			js.expect.E.expect(light.flipSwitch("off")).to.equal(false);
			js.expect.E.expect(light.isOn).to.equal(false);
		});
	}
	,step87: function() {
		js.mocha.M.it("isATallStory should be a function.",function() {
			js.expect.E.expect(House).to.be.a("function");
		});
		js.mocha.M.it("should return true if stories is greater than or equal to storiesTooTall.",function() {
			var house = new House(3);
			js.expect.E.expect(house.isATallStory(3)).to.equal(true);
			js.expect.E.expect(house.isATallStory(2)).to.equal(true);
		});
		js.mocha.M.it("should return false if stories is less than storiesTooTall.",function() {
			var house = new House(3);
			js.expect.E.expect(house.isATallStory(4)).to.equal(false);
		});
	}
	,step86: function() {
		js.mocha.M.it("findShoes should be a function.",function() {
			js.expect.E.expect(Shoe).to.be.a("function");
		});
		js.mocha.M.it("should return 'Found {color} shoes of size {size}'.",function() {
			var shoes = new Shoe(7, 'silver');
			js.expect.E.expect(shoes.findShoes()).to.equal("Found silver shoes of size 7");
		});
	}
	,step85: function() {
		js.mocha.M.it("openClose should be a function.",function() {
			js.expect.E.expect(Door).to.be.a("function");
		});
		js.mocha.M.it("should open the door if it is closed.",function() {
			var door = new Door(false);
			js.expect.E.expect(door.openClose()).to.equal(true);
			js.expect.E.expect(door.isOpen).to.equal(true);
		});
		js.mocha.M.it("should close the door if it is open.",function() {
			var door = new Door(false);
			js.expect.E.expect(door.openClose()).to.equal(false);
			js.expect.E.expect(door.isOpen).to.equal(false);
		});
	}
	,step84: function() {
		js.mocha.M.it("openBox should be a function.",function() {
			js.expect.E.expect(Box).to.be.a("function");
		});
		js.mocha.M.it("should open the box if it is closed.",function() {
			var garfieldBox = new Box(new Animal('Cat', 'male'), false);
			js.expect.E.expect(garfieldBox.openBox()).to.equal(true);
			js.expect.E.expect(garfieldBox.isOpen).to.equal(true);
		});
		js.mocha.M.it("should not close the box if it is open.",function() {
			var garfieldBox = new Box(new Animal('Cat', 'male'), false);
			js.expect.E.expect(garfieldBox.openBox()).to.equal(false);
			js.expect.E.expect(garfieldBox.isOpen).to.equal(true);
		});
	}
	,step83: function() {
		js.mocha.M.it("getType should be a function.",function() {
			js.expect.E.expect(Shape).to.be.a("function");
		});
		js.mocha.M.it("should return the correct types for sides 3 to 10.",function() {
			js.expect.E.expect(new Shape(3).getType()).to.equal("triangle");
			js.expect.E.expect(new Shape(4).getType()).to.equal("quadrilateral");
			js.expect.E.expect(new Shape(5).getType()).to.equal("pentagon");
			js.expect.E.expect(new Shape(6).getType()).to.equal("hexagon");
			js.expect.E.expect(new Shape(7).getType()).to.equal("heptagon");
			js.expect.E.expect(new Shape(8).getType()).to.equal("octagon");
			js.expect.E.expect(new Shape(9).getType()).to.equal("nonagon");
			js.expect.E.expect(new Shape(10).getType()).to.equal("decagon");
		});
		js.mocha.M.it("should return 'Could not determine type' for any other number of sides.",function() {
			js.expect.E.expect(new Shape(11).getType()).to.equal("Could not determine type");
		});
	}
	,step82: function() {
		js.mocha.M.it("drive should be a function.",function() {
			js.expect.E.expect(Vehicle).to.be.a("function");
		});
		js.mocha.M.it("should return 'Driving on {streetName}' if param is a string and not empty",function() {
			var cruiser = new Vehicle('Toyota', 'FJ Cruiser');
			js.expect.E.expect(cruiser.drive("University Avenue")).to.equal("Driving on University Avenue");
		});
		js.mocha.M.it("should return 'Driving forward' if param is not a string and/or is empty",function() {
			var cruiser = new Vehicle('Toyota', 'FJ Cruiser');
			js.expect.E.expect(cruiser.drive("")).to.equal("Driving forward");
			js.expect.E.expect(cruiser.drive(null)).to.equal("Driving forward");
		});
	}
	,step81: function() {
		js.mocha.M.it("isWarmBlooded should be a function.",function() {
			js.expect.E.expect(Animal).to.not.be.a("function");
		});
		js.mocha.M.it("'Monkey' and 'Bird' should return true.",function() {
			js.expect.E.expect(new Animal('Monkey', 'male').isWarmBlooded()).to.equal(true);
			js.expect.E.expect(new Animal('Bird', 'female').isWarmBlooded()).to.equal(true);
		});
		js.mocha.M.it("'Fish' should return false.",function() {
			var dory = new Animal('Fish', 'female');
			js.expect.E.expect(dory.isWarmBlooded()).to.equal(false);
		});
		js.mocha.M.it("any other species should return 'Could not determine if warm-blooded'.",function() {
			js.expect.E.expect(new Animal('Cat', 'male').isWarmBlooded()).to.equal("Could not determine if warm-blooded");
		});
	}
	,step79: function() {
		js.mocha.M.it("'dinner' should be a Meal.",function() {
			js.expect.E.expect(dinner).to.be.a(Meal);
		});
		js.mocha.M.it("should have fish and vegegtables.",function() {
			js.expect.E.expect(dinner.foods).to.contain("fish");
			js.expect.E.expect(dinner.foods).to.contain("vegetables");
			js.expect.E.expect(dinner.foods.length).to.be.above(1);
		});
	}
	,step78: function() {
		js.mocha.M.it("'breakfast' should be a Meal.",function() {
			js.expect.E.expect(breakfast).to.be.a(Meal);
		});
		js.mocha.M.it("should have cereal and milk.",function() {
			js.expect.E.expect(breakfast.foods).to.contain("cereal");
			js.expect.E.expect(breakfast.foods).to.contain("milk");
			js.expect.E.expect(breakfast.foods.length).to.be.above(1);
		});
	}
	,step77: function() {
		js.mocha.M.it("'gingerbread' should be a Cookie.",function() {
			js.expect.E.expect(gingerbread).to.be.a(Cookie);
		});
		js.mocha.M.it("should have chocolate flavor.",function() {
			js.expect.E.expect(gingerbread.flavor).to.equal("gingerbread");
		});
	}
	,step76: function() {
		js.mocha.M.it("'chocolateChip' should be a Cookie.",function() {
			js.expect.E.expect(chocolateChip).to.be.a(Cookie);
		});
		js.mocha.M.it("should have chocolate flavor.",function() {
			js.expect.E.expect(chocolateChip.flavor).to.equal("chocolate");
		});
	}
	,step75: function() {
		js.mocha.M.it("'halogen' should be a Lightbulb.",function() {
			js.expect.E.expect(halogen).to.be.a(Lightbulb);
		});
		js.mocha.M.it("should be off.",function() {
			js.expect.E.expect(halogen.isOn).to.equal(false);
		});
	}
	,step74: function() {
		js.mocha.M.it("'incandescent' should be a Lightbulb.",function() {
			js.expect.E.expect(incandescent).to.be.a(Lightbulb);
		});
		js.mocha.M.it("should be on.",function() {
			js.expect.E.expect(incandescent.isOn).to.equal(true);
		});
	}
	,step73: function() {
		js.mocha.M.it("'twoStory' should be a House.",function() {
			js.expect.E.expect(twoStory).to.be.a(House);
		});
		js.mocha.M.it("should have one story.",function() {
			js.expect.E.expect(twoStory.stories).to.equal(2);
		});
	}
	,step72: function() {
		js.mocha.M.it("'singleStory' should be a House.",function() {
			js.expect.E.expect(singleStory).to.be.a(House);
		});
		js.mocha.M.it("should have one story.",function() {
			js.expect.E.expect(singleStory.stories).to.equal(1);
		});
	}
	,step71: function() {
		js.mocha.M.it("'dressShoes' should be a Shoe.",function() {
			js.expect.E.expect(dressShoes).to.be.a(Shoe);
		});
		js.mocha.M.it("should be size 10.",function() {
			js.expect.E.expect(dressShoes.size).to.equal(10);
		});
		js.mocha.M.it("should be black.",function() {
			js.expect.E.expect(dressShoes.color).to.equal("black");
		});
	}
	,step70: function() {
		js.mocha.M.it("'rubySlippers' should be a Shoe.",function() {
			js.expect.E.expect(rubySlippers).to.be.a(Shoe);
		});
		js.mocha.M.it("should be size 7.",function() {
			js.expect.E.expect(rubySlippers.size).to.equal(7);
		});
		js.mocha.M.it("should be red.",function() {
			js.expect.E.expect(rubySlippers.color).to.equal("red");
		});
	}
	,step69: function() {
		js.mocha.M.it("'bankVault' should be a Door.",function() {
			js.expect.E.expect(bankVault).to.be.a(Door);
		});
		js.mocha.M.it("should be closed.",function() {
			js.expect.E.expect(bankVault.isOpen).to.equal(false);
		});
	}
	,step68: function() {
		js.mocha.M.it("'automaticDoor' should be a Door.",function() {
			js.expect.E.expect(automaticDoor).to.be.a(Door);
		});
		js.mocha.M.it("should be open.",function() {
			js.expect.E.expect(automaticDoor.isOpen).to.equal(true);
		});
	}
	,step67: function() {
		js.mocha.M.it("'christmasPresent' should be a Box.",function() {
			js.expect.E.expect(christmasPresent).to.be.a(Box);
		});
		js.mocha.M.it("content should exist.",function() {
			js.expect.E.expect(christmasPresent.contents).to.not.equal(undefined);
		});
		js.mocha.M.it("should be closed.",function() {
			js.expect.E.expect(christmasPresent.isOpen).to.equal(false);
		});
	}
	,step66: function() {
		js.mocha.M.it("'catBox' should be a Box.",function() {
			js.expect.E.expect(catBox).to.be.a(Box);
		});
		js.mocha.M.it("contents should be a cat.",function() {
			js.expect.E.expect(catBox.contents).to.be.a(Animal);
			js.expect.E.expect(catBox.contents.species).to.equal("Cat");
		});
		js.mocha.M.it("should be open.",function() {
			js.expect.E.expect(catBox.isOpen).to.equal(true);
		});
	}
	,step65: function() {
		js.mocha.M.it("'hexagon' should be a Shape.",function() {
			js.expect.E.expect(hexagon).to.be.a(Shape);
		});
		js.mocha.M.it("sides should be a 4.",function() {
			js.expect.E.expect(hexagon.sides).to.equal(6);
		});
	}
	,step64: function() {
		js.mocha.M.it("'square' should be a Shape.",function() {
			js.expect.E.expect(square).to.be.a(Shape);
		});
		js.mocha.M.it("sides should be a 4.",function() {
			js.expect.E.expect(square.sides).to.equal(4);
		});
	}
	,step63: function() {
		js.mocha.M.it("'forte' should be a Vehicle.",function() {
			js.expect.E.expect(forte).to.be.a(Vehicle);
		});
		js.mocha.M.it("make should be a KIA.",function() {
			js.expect.E.expect(forte.make).to.equal("KIA");
		});
		js.mocha.M.it("model should be Forte.",function() {
			js.expect.E.expect(forte.model).to.equal("Forte");
		});
	}
	,step62: function() {
		js.mocha.M.it("'civic' should be a Vehicle.",function() {
			js.expect.E.expect(civic).to.be.a(Vehicle);
		});
		js.mocha.M.it("make should be a Honda.",function() {
			js.expect.E.expect(civic.make).to.equal("Honda");
		});
		js.mocha.M.it("model should be Civic.",function() {
			js.expect.E.expect(civic.model).to.equal("Civic");
		});
	}
	,step61: function() {
		js.mocha.M.it("'nemo' should be an Animal.",function() {
			js.expect.E.expect(nemo).to.be.a(Animal);
		});
		js.mocha.M.it("species should be a Fish.",function() {
			js.expect.E.expect(nemo.species).to.equal("Fish");
		});
		js.mocha.M.it("gender should be male.",function() {
			js.expect.E.expect(nemo.gender).to.equal("male");
		});
	}
	,step60: function() {
		js.mocha.M.it("'george' should be an Animal.",function() {
			js.expect.E.expect(george).to.be.a(Animal);
		});
		js.mocha.M.it("species should be a Monkey.",function() {
			js.expect.E.expect(george.species).to.equal("Monkey");
		});
		js.mocha.M.it("gender should be male.",function() {
			js.expect.E.expect(george.gender).to.equal("male");
		});
	}
	,step59: function() {
		js.mocha.M.it("should define a class named 'Meal'.",function() {
			js.expect.E.expect(Meal).to.be.a("function");
		});
		js.mocha.M.it("should have a foods property.",function() {
			js.expect.E.expect(new Meal(['sandwich', 'chips', 'cola'])).to.have.property("foods");
		});
	}
	,step58: function() {
		js.mocha.M.it("should define a class named 'Cookie'.",function() {
			js.expect.E.expect(Cookie).to.be.a("function");
		});
		js.mocha.M.it("should have a flavor property.",function() {
			js.expect.E.expect(new Cookie('vanilla')).to.have.property("flavor");
		});
	}
	,step57: function() {
		js.mocha.M.it("should define a class named 'Lightbulb'.",function() {
			js.expect.E.expect(Lightbulb).to.be.a("function");
		});
		js.mocha.M.it("should have a isOn property.",function() {
			js.expect.E.expect(new Lightbulb(false)).to.have.property("isOn");
		});
	}
	,step56: function() {
		js.mocha.M.it("should define a class named 'House'.",function() {
			js.expect.E.expect(House).to.be.a("function");
		});
		js.mocha.M.it("should have a stories property.",function() {
			js.expect.E.expect(new House(6)).to.have.property("stories");
		});
	}
	,step55: function() {
		js.mocha.M.it("should define a class named 'Shoe'.",function() {
			js.expect.E.expect(Shoe).to.be.a("function");
		});
		js.mocha.M.it("should have a size property.",function() {
			js.expect.E.expect(new Shoe(6, 'red')).to.have.property("size");
		});
		js.mocha.M.it("should have a color property.",function() {
			js.expect.E.expect(new Shoe(6, 'red')).to.have.property("color");
		});
	}
	,step54: function() {
		js.mocha.M.it("should define a class named 'Door'.",function() {
			js.expect.E.expect(Door).to.be.a("function");
		});
		js.mocha.M.it("should have a isOpen property.",function() {
			js.expect.E.expect(new Door(false)).to.have.property("isOpen");
		});
	}
	,step53: function() {
		js.mocha.M.it("should define a class named 'Box'.",function() {
			js.expect.E.expect(Box).to.be.a("function");
		});
		js.mocha.M.it("should have a contents property.",function() {
			js.expect.E.expect(new Box({}, false)).to.have.property("contents");
		});
		js.mocha.M.it("should have a isOpen property.",function() {
			js.expect.E.expect(new Box({}, true)).to.have.property("isOpen");
		});
	}
	,step52: function() {
		js.mocha.M.it("should define a class named 'Shape'.",function() {
			js.expect.E.expect(Shape).to.be.a("function");
		});
		js.mocha.M.it("should have a sides property.",function() {
			js.expect.E.expect(new Shape(5)).to.have.property("sides");
		});
	}
	,step51: function() {
		js.mocha.M.it("should define a class named 'Vehicle'.",function() {
			js.expect.E.expect(Vehicle).to.be.a("function");
		});
		js.mocha.M.it("should have a make property.",function() {
			js.expect.E.expect(new Vehicle('Mazda', 'RX-4')).to.have.property("make");
		});
		js.mocha.M.it("should have a model property.",function() {
			js.expect.E.expect(new Vehicle('Mazda', 'RX-4')).to.have.property("model");
		});
	}
	,step50: function() {
		js.mocha.M.it("should define a class named 'Animal'.",function() {
			js.expect.E.expect(Animal).to.be.a("function");
		});
		js.mocha.M.it("should have a species property.",function() {
			js.expect.E.expect(new Animal('Frog', 'male')).to.have.property("species");
		});
		js.mocha.M.it("should have a gender property.",function() {
			js.expect.E.expect(new Animal('Frog', 'male')).to.have.property("gender");
		});
	}
	,step20: function() {
		js.mocha.M.it("should define a function named 'sahara_river'.",function() {
			js.expect.E.expect(sahara_river).to.be.a("function");
		});
		js.mocha.M.it("'sahara_river' should return the string 'Nile River'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(sahara_river()),"Nile River");
		});
	}
	,step13: function() {
		js.mocha.M.it("should declare a literal object named 'rainbow'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(rainbow).not,null);
		});
		js.mocha.M.it("should have 2 properties",function() {
			js.expect.E.expect(Reflect.fields(rainbow)).to.have.length(2);
		});
		js.mocha.M.it("colors should have 7 properties",function() {
			js.expect.E.expect(Reflect.fields(rainbow.colors)).to.have.length(7);
		});
		js.mocha.M.it("colors should define 7 colors in hexadecimal format",function() {
			js.expect.E.expect(rainbow.colors.red).to.eql("#F0280A");
			js.expect.E.expect(rainbow.colors.orange).to.eql("#FF8800");
			js.expect.E.expect(rainbow.colors.yellow).to.eql("#FFDD00");
			js.expect.E.expect(rainbow.colors.green).to.eql("#51AB0C");
			js.expect.E.expect(rainbow.colors.blue).to.eql("#1593ED");
			js.expect.E.expect(rainbow.colors.indigo).to.eql("#5215ED");
			js.expect.E.expect(rainbow.colors.violet).to.eql("#A915ED");
		});
		js.mocha.M.it("should be a double rainbow",function() {
			js.expect.E.expect(Reflect.fields(rainbow.isDouble)).to.be.ok();
		});
	}
	,step12: function() {
		js.mocha.M.it("should declare a literal object named 'browsers'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(browsers).not,null);
		});
		js.mocha.M.it("should have 8 properties",function() {
			js.expect.E.expect(Reflect.fields(browsers)).to.have.length(8);
		});
		js.mocha.M.it("should define browsers and their developer.",function() {
			js.expect.E.expect(browsers.Chrome).to.eql("google");
			js.expect.E.expect(browsers.Chromium).to.eql("google");
			js.expect.E.expect(browsers.Safari).to.eql("apple");
			js.expect.E.expect(browsers.Opera).to.eql("opera");
			js.expect.E.expect(browsers.Firefox).to.eql("mozilla");
			js.expect.E.expect(browsers.Sleipnir).to.eql("fenrir");
			js.expect.E.expect(browsers.Konqueror).to.eql("KDE");
			js.expect.E.expect(browsers.Links).to.eql("GPLv2+");
		});
	}
	,step11: function() {
		js.mocha.M.it("should declare a literal object named 'domains'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(domains).not,null);
		});
		js.mocha.M.it("should have 4 properties",function() {
			js.expect.E.expect(Reflect.fields(domains)).to.have.length(4);
		});
		js.mocha.M.it("should define domain names mapped to ip addresses.",function() {
			js.expect.E.expect(domains["ycombinator.com"]).to.eql("198.41.190.47");
			js.expect.E.expect(domains["laughingsquid.com"]).to.eql("162.159.247.97");
			js.expect.E.expect(domains["slumlordhosting.com"]).to.eql("198.61.179.126");
			js.expect.E.expect(domains["jsonformatter.curiousconcept.com"]).to.eql("104.28.5.70");
		});
	}
	,step10: function() {
		js.mocha.M.it("should declare a literal object named 'princess_leia'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(princess_leia).not,null);
		});
		js.mocha.M.it("should have 4 properties",function() {
			js.expect.E.expect(Reflect.fields(princess_leia)).to.have.length(4);
		});
		js.mocha.M.it("should define princess_leia's properties: name, money, age, and gender.",function() {
			js.expect.E.expect(princess_leia.name).to.eql("Leia Organa");
			js.expect.E.expect(princess_leia.money).to.eql(890);
			js.expect.E.expect(princess_leia.age).to.eql(20);
			js.expect.E.expect(princess_leia.gender).to.eql("female");
		});
	}
	,step9: function() {
		js.mocha.M.it("should declare a literal object named 'Gender'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(Gender).not,null);
		});
		js.mocha.M.it("should have 3 properties",function() {
			js.expect.E.expect(Reflect.fields(Gender)).to.have.length(3);
		});
		js.mocha.M.it("should define genders female, male, and unknown.",function() {
			js.expect.E.expect(Gender.female).to.eql("female");
			js.expect.E.expect(Gender.male).to.eql("male");
			js.expect.E.expect(Gender.unknown).to.be.an("undefined");
		});
	}
	,step8: function() {
		js.mocha.M.it("should declare a variable named 'club_name' with a value of 'Fight Club'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(club_name),"Fight Club");
		});
	}
	,step7: function() {
		js.mocha.M.it("should declare a variable named 'earths_water_composition' with a value representing 71%.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(earths_water_composition),0.71);
		});
	}
	,step6: function() {
		js.mocha.M.it("should declare a variable named 'golden_ratio' with a value of '1.61803398874'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(golden_ratio),1.61803398874);
		});
	}
	,step5: function() {
		js.mocha.M.it("should declare a variable named 'galilean_moons' that is an array.",function() {
			js.expect.E.expect(galilean_moons).to.be.an(Array);
		});
		js.mocha.M.it("should have 4 items",function() {
			js.expect.E.expect(galilean_moons).to.have.length(4);
		});
		js.mocha.M.it("should contain the name of each galilean moon of Jupiter",function() {
			var lowercase_moons = ["io","europa","ganymede","callisto"];
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[0].toLowerCase());
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[1].toLowerCase());
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[2].toLowerCase());
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[3].toLowerCase());
		});
	}
	,step4: function() {
		js.mocha.M.it("should declare a variable named 'planets' that is an array.",function() {
			js.expect.E.expect(planets).to.be.an(Array);
		});
		js.mocha.M.it("should have 8 items",function() {
			js.expect.E.expect(planets.length).to.eql(8);
		});
		var lowercase_planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];
		js.mocha.M.it("should contain the name of each of our solar system's planets",function() {
			js.expect.E.expect(lowercase_planets[0]).to.eql(planets[0]);
			js.expect.E.expect(lowercase_planets[1]).to.eql(planets[1]);
			js.expect.E.expect(lowercase_planets[2]).to.eql(planets[2]);
			js.expect.E.expect(lowercase_planets[3]).to.eql(planets[3]);
			js.expect.E.expect(lowercase_planets[4]).to.eql(planets[4]);
			js.expect.E.expect(lowercase_planets[5]).to.eql(planets[5]);
			js.expect.E.expect(lowercase_planets[6]).to.eql(planets[6]);
			js.expect.E.expect(lowercase_planets[7]).to.eql(planets[7]);
		});
		js.mocha.M.it("should have each planet listed in order",function() {
			js.expect.E.expect(planets[0].toLowerCase()).to.eql("mercury");
			js.expect.E.expect(planets[1].toLowerCase()).to.eql("venus");
			js.expect.E.expect(planets[2].toLowerCase()).to.eql("earth");
			js.expect.E.expect(planets[3].toLowerCase()).to.eql("mars");
			js.expect.E.expect(planets[4].toLowerCase()).to.eql("jupiter");
			js.expect.E.expect(planets[5].toLowerCase()).to.eql("saturn");
			js.expect.E.expect(planets[6].toLowerCase()).to.eql("uranus");
			js.expect.E.expect(planets[7].toLowerCase()).to.eql("neptune");
		});
	}
	,step3: function() {
		js.mocha.M.it("should declare a variable named 'sahara_animal' with a value of 'The Addax'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(sahara_animal),"The Addax");
		});
	}
	,step2: function() {
		js.mocha.M.it("should declare a variable named 'videogame_system' with a value of 'Atari'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(videogame_system),"Atari");
		});
	}
	,step1: function() {
		js.mocha.M.it("should declare a variable named 'unicorn' with no value set.",function() {
			js.expect.E.expect(unicorn).to.be.a("null");
		});
	}
	,__class__: HundredSpecs
}
var HxOverrides = function() { }
HxOverrides.__name__ = true;
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
}
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var IntIter = function(min,max) {
	this.min = min;
	this.max = max;
};
IntIter.__name__ = true;
IntIter.prototype = {
	next: function() {
		return this.min++;
	}
	,hasNext: function() {
		return this.min < this.max;
	}
	,__class__: IntIter
}
var Reflect = function() { }
Reflect.__name__ = true;
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && (v.__name__ || v.__ename__);
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
}
var Std = function() { }
Std.__name__ = true;
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	return x | 0;
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
var js = js || {}
js.Boot = function() { }
js.Boot.__name__ = true;
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.isClass = function(o) {
	return o.__name__;
}
js.Boot.isEnum = function(e) {
	return e.__ename__;
}
js.Boot.getClass = function(o) {
	return o.__class__;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		if(cl == Class && o.__name__ != null) return true; else null;
		if(cl == Enum && o.__ename__ != null) return true; else null;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Lib = function() { }
js.Lib.__name__ = true;
js.Lib.debug = function() {
	debugger;
}
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
if(!js.expect) js.expect = {}
js.expect.E = function() { }
js.expect.E.__name__ = true;
js.expect.E.__properties__ = {get_version:"get_version"}
js.expect.E.expect = function(actual) {
	return js.expect.E._expect(actual);
}
js.expect.E.should = function(actual) {
	return js.expect.E._expect(actual);
}
js.expect.E.get_version = function() {
	return js.expect.E._expect.version;
}
js.expect.ExpectMixins = function() { }
js.expect.ExpectMixins.__name__ = true;
js.expect.ExpectMixins.toBe = function(e,expected) {
	return e.be(expected);
}
js.expect.ExpectMixins.match = function(e,pattern,modifiers) {
	return e.match(new RegExp(pattern,modifiers));
}
js.expect.ExpectMixins.throwExceptionMatch = function(e,pattern,modifiers) {
	return e.throwException(new RegExp(pattern,modifiers));
}
if(!js.mocha) js.mocha = {}
js.mocha.Ui = { __ename__ : true, __constructs__ : ["BDD","EXPORTS","QUNIT","TDD"] }
js.mocha.Ui.BDD = ["BDD",0];
js.mocha.Ui.BDD.toString = $estr;
js.mocha.Ui.BDD.__enum__ = js.mocha.Ui;
js.mocha.Ui.EXPORTS = ["EXPORTS",1];
js.mocha.Ui.EXPORTS.toString = $estr;
js.mocha.Ui.EXPORTS.__enum__ = js.mocha.Ui;
js.mocha.Ui.QUNIT = ["QUNIT",2];
js.mocha.Ui.QUNIT.toString = $estr;
js.mocha.Ui.QUNIT.__enum__ = js.mocha.Ui;
js.mocha.Ui.TDD = ["TDD",3];
js.mocha.Ui.TDD.toString = $estr;
js.mocha.Ui.TDD.__enum__ = js.mocha.Ui;
js.mocha.Reporter = { __ename__ : true, __constructs__ : ["DOC","DOT","HTML","HTMLCOV","JSON","JSONCOV","JSONSTREAM","LANDING","LIST","MIN","NYAN","PROGRESS","SPEC","TAP","TEAMCITY","XUNIT"] }
js.mocha.Reporter.DOC = ["DOC",0];
js.mocha.Reporter.DOC.toString = $estr;
js.mocha.Reporter.DOC.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.DOT = ["DOT",1];
js.mocha.Reporter.DOT.toString = $estr;
js.mocha.Reporter.DOT.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.HTML = ["HTML",2];
js.mocha.Reporter.HTML.toString = $estr;
js.mocha.Reporter.HTML.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.HTMLCOV = ["HTMLCOV",3];
js.mocha.Reporter.HTMLCOV.toString = $estr;
js.mocha.Reporter.HTMLCOV.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.JSON = ["JSON",4];
js.mocha.Reporter.JSON.toString = $estr;
js.mocha.Reporter.JSON.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.JSONCOV = ["JSONCOV",5];
js.mocha.Reporter.JSONCOV.toString = $estr;
js.mocha.Reporter.JSONCOV.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.JSONSTREAM = ["JSONSTREAM",6];
js.mocha.Reporter.JSONSTREAM.toString = $estr;
js.mocha.Reporter.JSONSTREAM.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.LANDING = ["LANDING",7];
js.mocha.Reporter.LANDING.toString = $estr;
js.mocha.Reporter.LANDING.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.LIST = ["LIST",8];
js.mocha.Reporter.LIST.toString = $estr;
js.mocha.Reporter.LIST.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.MIN = ["MIN",9];
js.mocha.Reporter.MIN.toString = $estr;
js.mocha.Reporter.MIN.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.NYAN = ["NYAN",10];
js.mocha.Reporter.NYAN.toString = $estr;
js.mocha.Reporter.NYAN.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.PROGRESS = ["PROGRESS",11];
js.mocha.Reporter.PROGRESS.toString = $estr;
js.mocha.Reporter.PROGRESS.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.SPEC = ["SPEC",12];
js.mocha.Reporter.SPEC.toString = $estr;
js.mocha.Reporter.SPEC.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.TAP = ["TAP",13];
js.mocha.Reporter.TAP.toString = $estr;
js.mocha.Reporter.TAP.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.TEAMCITY = ["TEAMCITY",14];
js.mocha.Reporter.TEAMCITY.toString = $estr;
js.mocha.Reporter.TEAMCITY.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.XUNIT = ["XUNIT",15];
js.mocha.Reporter.XUNIT.toString = $estr;
js.mocha.Reporter.XUNIT.__enum__ = js.mocha.Reporter;
js.mocha.Mocha = function() { }
js.mocha.Mocha.__name__ = true;
js.mocha.Mocha.setup = function(opts) {
	opts.ui = Std.string(opts.ui).toLowerCase();
	if(Reflect.hasField(opts,"reporter")) opts.reporter = Std.string(opts.reporter).toLowerCase();
	js.mocha.Mocha._mocha.setup(opts);
}
js.mocha.Mocha.run = function() {
	js.mocha.Mocha._mocha.run();
}
js.mocha.Mocha.timeout = function(milliseconds) {
	return js.mocha.Mocha._mocha.timeout(milliseconds);
}
js.mocha.Mocha.reporter = function(reporter) {
	return js.mocha.Mocha._mocha.reporter(reporter);
}
js.mocha.Mocha.bail = function() {
	js.mocha.Mocha._mocha.bail();
}
js.mocha.M = function() { }
js.mocha.M.__name__ = true;
js.mocha.M.describe = function(description,spec) {
	describe(description, spec);
}
js.mocha.M.describeOnly = function(description,spec) {
	describe.only(description, spec);
}
js.mocha.M.describeSkip = function(description,spec) {
	describe.skip(description, spec);
}
js.mocha.M.it = function(description,func) {
	it(description, func);
}
js.mocha.M.itOnly = function(description,func) {
	it.only(description, func);
}
js.mocha.M.itSkip = function(description,func) {
	it.skip(description, func);
}
js.mocha.M.before = function(func) {
	before(func);
}
js.mocha.M.after = function(func) {
	after(func);
}
js.mocha.M.beforeEach = function(func) {
	beforeEach(func);
}
js.mocha.M.afterEach = function(func) {
	afterEach(func);
}
js.mocha.M.suite = function(description,suite) {
	suite(description, suite);
}
js.mocha.M.setup = function(func) {
	setup(func);
}
js.mocha.M.test = function(description,test) {
	test(description, test);
}
js.mocha.M.teardown = function(func) {
	teardown(func);
}
var $_;
function $bind(o,m) { var f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
}; else null;
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.prototype.__class__ = Array;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
var Void = { __ename__ : ["Void"]};
if(typeof document != "undefined") js.Lib.document = document;
if(typeof window != "undefined") {
	js.Lib.window = window;
	js.Lib.window.onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if(f == null) return false;
		return f(msg,[url + ":" + line]);
	};
}
if(typeof expect !== 'undefined') js.expect.E._expect = expect; else if(typeof require !== 'undefined') js.expect.E._expect = require('expect.js'); else throw "make sure to include expect.js";
js.mocha.Mocha._mocha = mocha;
HundredSpecs.main();
