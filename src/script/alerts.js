$(document).on('click', '.catalog-item button', function () {
    let alertsList = document.getElementsByClassName("alerts-list"),
        alertItem = document.createElement("div"),
        span = document.createElement("div"),
        closeButton =document.createElement("button"),
        closeIcon =document.createElement("img")

    alertItem.className = "alert-item"
    closeIcon.src = "/chocolate-fabric/src/resources/close-svgrepo-com.svg"
    closeButton.className = "btn shadow-none"

    var text;

    if ($(this).text().trim() === "В корзине") {
        text = document.createTextNode("Товар удален из корзины")
        $(this).text("В корзину")
        this.className = "btn btn-gold"
    } else {
        text = document.createTextNode("Товар добавлен из корзину")
        $(this).text("В корзине")
        this.className = "btn btn-success mb-2"
    }

    span.appendChild(text)
    closeButton.appendChild(closeIcon)
    alertItem.appendChild(span)
    alertItem.appendChild(closeButton)
    alertsList.item(0).appendChild(alertItem)
    alertItem.classList.add("disappear")

    setTimeout(function () {
        alertItem.remove()
    }, 4000)
})

$(document).on('click', '.alert-item button', function () {
    let btn = $(this),
        alertItem = btn.closest(".alert-item")
    alertItem.remove()
})