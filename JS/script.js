
function search() {

    var username = document.getElementById("inputUserName").value;

    var url = `https://api.github.com/users/${username}`;

    $.getJSON(url, (user) => {
        showUserData(user);
        clearError();

    }).fail(() => {
        showUserData({});
        showError("Usuário não encontrado!");

    });

}

function showError(msg) {
    document.getElementById("error").innerHTML = `<div class='alert alert-danger mt-2' role='alert'>${msg}</div>`
}

function clearError() {
    document.getElementById("error").innerHTML = "";
}


function showUserData(user) {
    document.getElementById("name").innerHTML = user.name || "";
    document.getElementById("html_url").innerHTML = user.html_url || "";
    document.getElementById("company").innerHTML = user.company || "";

    document.getElementById("avatar_url").innerHTML = user.avatar_url ?
        `

                                                       <img src="${user.avatar_url}" id="avatar_url" width="220" height="220"
                                                       class="shadow rounded"></img>
                                                       ` :
        "";
}