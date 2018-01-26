Handlebars.registerHelper('capitalize', function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
});

Handlebars.registerHelper('uncapitalize', function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
});

Handlebars.registerHelper('lowercase', function(string) {
    return string.toLowerCase();
});

Handlebars.registerHelper('classify', function(thing) {
    return thing.charAt(0).toUpperCase() + thing.slice(1);
});

Handlebars.registerHelper('camel', function(thing) {
    return thing.charAt(0).toLowerCase() + thing.slice(1);
});

Handlebars.registerHelper('tablize', function(thing) {
    return thing.replace(/ /g, '_');
});
