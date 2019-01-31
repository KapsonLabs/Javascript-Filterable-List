//target filter search input field
let filterSearch = document.getElementById('filter-search')

//add event listener
filterSearch.addEventListener('keyup', filterNames)

function filterNames(){
    //get value of input
    let filterName = document.getElementById('filter-search').value.toUpperCase();
    
    //get contact list
    let ul = document.getElementById('contacts');

    //get individual contacts from contact list
    let li = ul.querySelectorAll('li.collection-item');

    //loop through the contacts
    for(let i = 0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];

        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterName) > -1){
            li[i].style.display='';
        } else{
            li[i].style.display='none';
        }
    }
};