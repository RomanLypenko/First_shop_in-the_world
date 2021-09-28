// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    $("input[type='submit']").click(function (e) {
        e.preventDefault();
        var controler = $(this).attr("con");
        var number = $(this).siblings("#number").val();

        controler = encodeURIComponent(controler);

        number = encodeURIComponent(number);


        $('#results').load("https://localhost:44369/" + controler + "/result?number=" + number);
    });
});
