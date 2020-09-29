function  display(pets){
    var text="";

            typePet = GetTypePet(pets.type, pets.color);

            text=`<tr id="${pets.id}">
                    <td>${pets.name}</td> 
                    <td>${typePet} | ${pets.type}</td>
                    <td>Age:${pets.age}</td>
                    <td>Breed:${pets.breed}</td>                    
                    <td>Price:${pets.price}</td>                    
                    <td>Gender:${pets.gender}</td>                    
                    <td>Services:${pets.services}</td>                    
                    <td>Contact Phone:${pets.contactPhone}</td>                    
                    <td><button id="deletePetbtn" class="btn btn-danger" onclick="deletePet(${pets.id})">Delete</button></td>
                </tr>` ;


    $('#petTable').append(text);
    //display the per on the HTML

}

function GetTypePet(TypePet){
    const dogImg ='<i class="fas fa-dog"></i>';
    const LizardImg = '<i class="fas fa-dragon"></i>';
    const TurtleImg = '<i class="fas fa-turtle"></i>';
    
    if(TypePet==="Dog"){
        TypePet = dogImg;
    }else if(TypePet==="Lizard"){
        TypePet = LizardImg;
    }else if(TypePet==="Turtle"){
        TypePet = TurtleImg;
    }
   
    return TypePet;
}


//display(store);


// CHALLENGE: Display number of pets of the registered]