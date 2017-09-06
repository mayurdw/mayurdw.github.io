/*
    Created By: Mayur D Wadhwani
    License: MIT
*/

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