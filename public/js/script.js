const clickMe = () => {
    alert("thanks for clicking me");
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
});