var c=1;
class Pet{
    constructor(name,age,type,breed,price,quantity,gender,services,owner,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.price=price;
        this.quantity=quantity;
        this.gender=gender;
        this.services=services;
        this.owner=owner;
        this.contactPhone=contactPhone;
        this.id=c;
        c++;

    }
}
var store = {
    namestore:"Robert´s Pets",
    address: {
        street: "Las Golondrinas, Mexicali BC",
        country: "Mexico",
        State: "Baja California",
        City: "Mexicali",
        number: "346"
    },
    hours:{
        open: "7 am",
        close: "5 pm"
    },
    pets:[

    ]
}

var Kaiser = new Pet("Kaiser",5,"Dog","Aleman", "Male", "Full services", "Roberto", GetServicesPrices("Full services"));
var Elma = new Pet("Elma",5,"Dog","Aleman", "Female", "Full services", "Roberto", GetServicesPrices("Full services"));
var Sabu = new Pet("Sabu",5,"Aleman", "Male", "Full services", "Roberto", GetServicesPrices("Full services"));
var Guardian = new Pet("Guardian",5,"Dog","Aleman", "Male", "Full services", "Roberto", GetServicesPrices("Full services"));
var Rocky = new Pet("Rocky",5,"Aleman", "Male", "Full services", "Roberto", GetServicesPrices("Full services"));

/*store.pets.push(Kaiser);
store.pets.push(Elma);
store.pets.push(Sabu);
store.pets.push(Guardian);
store.pets.push(Rocky);

console.log(store.pets);
*/

//console.log(store.pets);
//get the inputs and store them in variables
var txtName = document.getElementById("name");
var txtage = document.getElementById("age");
var txttype = document.getElementById("type");
var txtbreed = document.getElementById("breed");
//var txtprice = document.getElementById("price");
var txtquantity = document.getElementById("quantity");
var txtgender = document.getElementById("gender");
var txtservices = document.getElementById("services");
var txtowner = document.getElementById("owner");
var txtcontactphone = document.getElementById("contactphone");

function clear(){
    txtName.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    //txtprice.value="";
    //txtquantity.value="";
    txtgender.value="";
    txtservices.value="";
    txtowner.value="";
    txtcontactphone.value=""
}


function GetServicesPrices(Services){
    var Price=0;

    if(Services==="Aesthetics and Spa"){
        Price = 50;
    }else if(Services==="Gym"){
        Price = 100;
    }else if(Services==="Hotel"){
        Price = 200;    
    }else if(Services==="Full services"){
        Price = 500;
    }
    return Number(Price);
}

function register(){
    //create the Pet

    var NewPet = new Pet(txtName.value,txtage.value,txttype.value,txtbreed.value,txtgender.value, txtservices.value, txtowner.value, txtcontactphone.value, GetServicesPrices(txtservices.value));

    //Push the new pet
    store.pets.push(NewPet);

    clear();

    //console.log(store.pets);
    
    display(NewPet);
}

function deletePet(petId){

      // select the element
    var tr=$("#"+petId);
    var indexDelete;
    console.log('Delete' + tr);
  
    // travel the array (search function) --> petId ===salon.pets[i].id 
    for(var i=0;i<store.pets.length;i++){
        var selected=store.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }    
    }

   // delete the pet from the array splice()
   store.pets.splice(indexDelete,1);
    // delete the pet from the html
    tr.remove();
}

function searchPet(){
    var ss=$('#petsearch').val();

    console.log(ss);

    var searchString=ss.toLowerCase();

    for(var i=0;i<store.pets.length;i++){
        var selected=store.pets[i];
        if(selected.name.toLowerCase()===searchString ){ //|| selected.services.toLowerCase()===searchString){
            $('#'+selected.id).addClass('active');
        }
        else{
            $('#'+selected.id).removeClass('active');  
        }
    
    }
}

function init(){

    //hook events 
    store.pets.push(Kaiser);
    store.pets.push(Elma);
    store.pets.push(Sabu);
    store.pets.push(Guardian);
    store.pets.push(Rocky);
    
    display(Kaiser);
    display(Elma);
    display(Sabu);
    display(Guardian);
    display(Rocky);


    //profitCalculation();
    // hook events
    $('#register-btn').on('click', register);
    $('#search-btn').on('click',searchPet);
}

window.onload=init;
