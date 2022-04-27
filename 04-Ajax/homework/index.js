const btnFriends = document.querySelector('#boton');
const friendsList = document.querySelector('#lista');
const loadingImage = document.querySelector('#loading');

const inputSearchFriend = document.querySelector('input');
const btnSearchFriend = document.querySelector('#search');
const displaySearchedFriend = document.querySelector('#amigo');

const inputDeleteFriend = document.querySelector('#inputDelete');
const btnDeleteFriend = document.querySelector('#delete');
const successMessage = document.querySelector('#sucess');

let originalDataLength = 0;
let newDataLength = 0;

btnFriends.addEventListener('click', function(){
    if($('#lista').children().length === 0){
        $.get( "http://localhost:5000/amigos", function( data ) {
            originalDataLength = data.length;
            newDataLength = data.length;
            for(let i=0; i < data.length; i++) {
                //forma normal:
                let friendLI = document.createElement("li"); 
                friendLI.innerHTML = data[i].name;
                friendsList.appendChild(friendLI)
                //forma jquery(no me funciona):
                // let name = data.name
                // let friendLI = $("<li></li>").text(name);
                // console.log(friendLI);
                // $("#lista").append(friendLI);
            }     
            //normal 
            loading.style.display = "none"; 
            //jquery                                   
            //$("#loading").hide(); 
        });
    }else{
            const allLIinUL = friendsList.getElementsByTagName("li");
            $.get( "http://localhost:5000/amigos", function( data ) {
                if(originalDataLength !== newDataLength){
                    for(let i=0; i < allLIinUL.length-1; i++) {
                        //forma normal:
                        allLIinUL[i].innerHTML = data[i].name;
                        //forma jquery:
                    }
                    friendsList.removeChild(friendsList.lastElementChild);
                    originalDataLength = newDataLength;
                    inputDeleteFriend.value = "";
                    successMessage.innerText = "";
                    inputSearchFriend.value = "";
                    displaySearchedFriend.innerText = "";
                }
                
            });
        
    }

});

btnSearchFriend.addEventListener('click', function(){
    //codigo original (cuando empiezas a borrar amigos, no funciona adecuadamente)
    // let id = inputSearchFriend.value;
    // if (id > $('#lista').children().length || id <= 0) {
    //     return displaySearchedFriend.innerText = "Amigo no existe en la lista";
    // }
    // $.get( `http://localhost:5000/amigos/${id}`, function( data ) {
    //     displaySearchedFriend.innerText = data.name;
    // });
    //modificacion:
    const allLIS = friendsList.querySelectorAll("li")
    let id = inputSearchFriend.value;
    if (id > $('#lista').children().length || id <= 0) {
        return displaySearchedFriend.innerText = "Amigo no existe en la lista";
    }
    else{
        //recorrer elementos
        displaySearchedFriend.innerText = allLIS[--id].innerText;
           
    }
    

});

btnDeleteFriend.addEventListener('click', function(){
    let id = inputDeleteFriend.value;
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: function(data) {
            newDataLength = data.length;
            successMessage.innerText = `Tu amigo fue borrado exitosamente`
        }
    });
})