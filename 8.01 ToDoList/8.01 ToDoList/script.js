var i = 0;

function AddElement() {

    var input = document.getElementById('txtInput').value;
    document.getElementById('txtInput').value = "";
    var list = document.getElementById("listTree");

    if (!list) {
        list = document.createElement("ul");
        list.id = "listTree";
        document.body.appendChild(list);
    }

    var item = document.createElement('li');
    item.innerHTML = input;
    item.id = "li-" + i;

    var btnDelete = document.createElement('button');
    btnDelete.innerHTML = "Delete";
    btnDelete.id = "btn-delete-" + i;
    btnDelete.value = i;
    btnDelete.addEventListener('click', function () { item.parentNode.removeChild(item) })

    item.appendChild(btnDelete);

    list.appendChild(item);

    i++;

}

function ShowList() {
    var list = document.getElementById("listTree");
    list.style.display = 'block';
}

function HideList() {
    var list = document.getElementById("listTree");
    list.style.display = 'none';
}