
function search() {

    var username = document.getElementById("inputUserName").value;

    var url = ` https://api.github.com/users/${username}`;

    $.getJSON(url, (user) => {

        document.getElementById("name").innerHTML =         user.name;
        document.getElementById("html_url").innerHTML =     user.html_url;
        document.getElementById("company").innerHTML =      user.company;

        document.getElementById("avatar_url").innerHTML = `

        <img src="${user.avatar_url}" id="avatar_url" width="220" height="220"
        class="shadow rounded"></img>`

    });

}