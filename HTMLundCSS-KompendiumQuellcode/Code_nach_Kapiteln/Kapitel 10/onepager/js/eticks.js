function jump(a, b) {
    "undefined" == typeof b && (b = $(".fullpic").height()), $("html, body").animate({ scrollTop: $(a).offset().top - $("header").height() + 20 - b }, 500);
}
function toggle_imprint() {
    $("#imprint").fadeIn("fast"), $("html, body").animate({ scrollTop: $("#imprint").offset().top }, 500);
}
function submit_contact() {
    $("#form_submit").addClass("clicked");
    var a = { name: $("#form_name").val(), email: $("#form_email").val(), phone: $("#form_phone").val(), message: $("#form_message").val() };
    return (
        $.ajax({
            url: "mailus.php",
            type: "POST",
            dataType: "json",
            data: a,
            success: function (a) {
                400 == a.code
                    ? ($("#form_error").html(a.message), $("#form_error").removeClass("ok"), $("#form_error").addClass("error"), $("#form_error").fadeIn("fast"), $("#form_submit").removeClass("clicked"))
                    : 200 == a.code
                    ? ($("#form_error").html(a.message), $("#form_error").removeClass("error"), $("#form_error").addClass("ok"), $("#form_error").fadeIn("fast"), $("#contact_form").fadeOut("fast"))
                    : (console.log("mailus responds in an unforeseen way..."), $("#form_submit").removeClass("clicked"));
            },
            error: function (a, b) {
                console.log(a, b), $("#form_submit").removeClass("clicked");
            },
        }),
        !1
    );
}
