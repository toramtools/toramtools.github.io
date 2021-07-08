const deleteButton = $('#content > div.card-container.mt-15.mb-15.grid-gap-15.stat-calc-save-load > div:nth-child(1) > div > div > button:nth-child(2)');

deleteButton.removeClass("ml-10");
deleteButton.after('<button class="stat-calc-btn ml-10" onclick="expandST()">Expand</button>');

const expandST = function () {
    const skillTrees = $(".title-name > span > span");

    for (let tree of skillTrees) {
        if (tree.innerText > 0) {
            $("#canvas_"+tree.id.substring(3)).show();
        }
        else {
            $("#canvas_"+tree.id.substring(3)).hide();
        }
    }
}

$(".justify-content-between > button:first-child").on("click", expandST);
