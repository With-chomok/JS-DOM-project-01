const framework = document.querySelector("#framework");
const btnAdd = document.querySelector("#btnAdd");

const list = document.querySelector("#list");
const btnRemove = document.querySelector("#btnRemove");

btnAdd.addEventListener("click", (event) => {
    event.preventDefault()


    if(framework.value == ""){
        alert("Input Field Is Empty");

        return;
    }

    const option = new Option(framework.value, framework.value);

    list.add(option, undefined);

    framework.value = "";
    
})

btnRemove.addEventListener("click", (e) => {
    e.preventDefault();
    let selected = [];

    for ( let i = 0; i <list.options.length; i++ ){
        selected[i] = list.options[i].selected;

    }


    // remove all selection options
    let index = list.options.length; 

    while(index--){
        if(selected[index]){
            list.remove(index);
        }
    }
})