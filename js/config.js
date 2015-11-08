/*
  Todo: Make this so that you don't have to know JavaScript.
  Should look like a stylesheet, or MarkDown.
*/
var datasets = {
    all: {
        api_endpoint: 'http://dev.localground.org/api/0/markers/',
        page_size: 50,
        filter: "WHERE project = 24"
    },
    oakland: {
        api_endpoint: 'http://dev.localground.org/api/0/markers/',
        page_size: 50,
        filter: "WHERE project = 24 and tags = 'oakland'"
    }
};
var pages = [
    {
        url: "places/oakland",
        type: "mapbox",
        accessToken: "pk.eyJ1IjoibGF1cmVuYmVuaWNob3UiLCJhIjoiQ1BlZGczRSJ9.EVMieITn7lHNi6Ato9wFwg",
        mapStyleID: "laurenbenichou.54e91cf8",
        click: "",
        dataset: "oakland"
    },
    {
        url: "places/oakland",
        collection_template_path: "place-list.html",
        item_template_path: "place-item.html",
        region: '#infoBoxGrid',
        type: "list",
        dataset: "oakland"
    }
];