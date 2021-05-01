$("#update_item").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("id");

    var request = {
        "url" : `http://localhost:3000/api/items/`+c,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/items/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
           
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              alert("Data Deleted Successfully!");
                   location.reload();
            }       
            };
                 xhttp.open(request.method, request.url);
                  xhttp.send();
        }

    })
}

