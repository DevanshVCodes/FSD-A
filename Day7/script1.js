async function fetchdata() {
    try{
        let response = await fetch('https://api.github.com/users?per_page=10');
        let data = await response.json();
        data.forEach((element) => {
            console.log(
                `Node Id : ${element.node_id} and html URL : ${element.html_url}`
            );
        });
    }
    catch(error){
        console.log(error);
    }
}
fetchdata();