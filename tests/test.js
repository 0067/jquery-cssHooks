test("width", function() {
    ok( jQuery("#test").css("width"), "10px" );
    equals( jQuery("#test").css("width"), "10px", "returns correct values" );
});

test("padding", function() {
    ok( jQuery("#test").css("padding"), "1px 2px 3px 4px" );
    equals( jQuery("#test").css("padding"), "1px 2px 3px 4px", "returns values in the correct order" );
});

test("margin", function() {
    ok( jQuery("#test").css("margin"), "1px 2px 3px 4px" );
    equals( jQuery("#test").css("margin"), "1px 2px 3px 4px", "returns values in the correct order" );
});

test("backgroundPosition", function() {
    ok( jQuery("#test").css("backgroundPosition"), "3px 5px" );
    equals( jQuery("#test").css("backgroundPosition"), "3px 5px", "returns values in the correct order" );
});

test("backgroundPositionX", function() {
    ok( jQuery("#test").css("backgroundPositionX"), "3px" );
    equals( jQuery("#test").css("backgroundPositionX"), "3px", "returns proper value" );
});

test("backgroundPositionY", function() {
    ok( jQuery("#test").css("backgroundPositionY"), "5px" );
    equals( jQuery("#test").css("backgroundPositionY"), "5px", "returns proper value" );
});
