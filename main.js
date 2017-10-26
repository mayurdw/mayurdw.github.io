/*
    Created By: Mayur D Wadhwani
    License: MIT
*/

$(document).ready(function() {
    $("#nav").load("navbar.html");
});

function AboutDisplay() {
    $("#aboutMe").show();
    $("#contact").hide();
    $("#Projects").hide();
}

function ProjectDisplay() {
    $("#aboutMe").hide();
    $("#contact").hide();
    $("#Projects").show();
}

function ContactDisplay() {
    $("#aboutMe").hide();
    $("#Projects").hide();
    $("#contact").show();
}