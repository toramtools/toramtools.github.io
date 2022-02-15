const api = "https://dot23-api.herokuapp.com/toramcafe"
//const api = "http://localhost:5000/toramcafe"

$("#search").on("click", () => {
    const name = $("#item-name").val()
    const category = $("#item-category").val()

    if (name == "") {
        $("#error-msg").hide()
        $("#results-container").hide()
        $("#loading-container").hide()
        return;
    }

    $("#results-container").hide()
    $("#loading-container").show()
    $.ajax({
        type: "GET",
        dataType: "json",
        url: api+"/"+category+"/"+name,
        success: function (result) {
            $("#error-msg").hide()
            $("#results-container").show()
            $("#loading-container").hide()

            const pattern = /([0-9A-Z\+]+|[\-\[\]★\(\)\&])[a-z\'\.♪\:]*/g
            const translator_affix = $("#translate-api").is(":checked")?"https://translate.google.com/translate?sl=ja&tl=en&u=":""
            let results_html = String()
            for (const link of result["data"]) {
                if (category == "boss") {
                    const bossName = Object.keys(link)[0];
                    const viewName = bossName.match(pattern).join(" ").replace("the ", " the ").replace("of ", " of ").replace(" -", " - ").replace("with ", " with ").replace("- lv", "- Lv")
                    results_html += `<a href="${translator_affix+link[bossName]}" target="_blank">${viewName}</a>`
                }
                else{
                    const viewName = link.substr(link.indexOf("#") + 1).replace("_Crysta", "").match(pattern).join(" ").replace("the ", " the ").replace("of ", " of ").replace(" - ", "-").replace("with ", " with ")
                    results_html += `<a href="${translator_affix+link}" target="_blank">${viewName}</a>`
                }
            }

            if (results_html == "") {
                results_html = "Seems we found nothing."
            }
            
            $("#results").html(results_html)
        },
        error: function (result) {
            $("#error-msg").show()
            $("#loading-container").hide()
        }
    })
})

$("#translate-api").on("change", function() {
    $("#search").click();
})

$(document).ready(() => {
    a$.ajax({
        type: "GET",
        dataType: "json",
        url: "https://dot23-api.herokuapp.com/",
        success: function (result) {
            console.log("ready")
        },
        error: function (result) {
            console.log("error:", result)
        },
        timeout: 5000
    })
}) 