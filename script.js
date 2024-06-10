// **********************users****************************
class User {
  constructor(name, surname, age, location) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.location = location;
  }
  static showName(user1, user2) {
    if (user1.age > user2.age) {
      console.log(`${user1.name} ha ${user1.age} anni ed è piu grande di ${user2.name} che ha ${user2.age} anni`);
    } else if (user1.age === user2.age) {
      console.log(`${user1.name} e ${user2.name} hanno la stessa età`);
    } else {
      console.log(`${user2.name} ha ${user2.age} anni ed è piu grande di ${user1.name} che ha ${user1.age} anni`);
    }
  }
}
const gabriel = new User("Gabriel", "Azamfiri", 26, "Milano");
const valentin = new User("Valentin", "Azamfiri", 28, "Milano");
const raul = new User("Raul", "Roca", 26, "Milano");

User.showName(raul, valentin);

// **********************pet******************************
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static sameOwner(owner) {
    return this.ownerName === owner.ownerName;
  }
}

// const DynamicPet = function (petName, ownerName, species, breed) {
//   this.petName = petName;
//   this.ownerName = ownerName;
//   this.species = species;
//   this.breed = breed;
// };

// const newPet = new DynamicPet("Leutu", "Gabriel", "Cane", "Pitbull");
// console.log(newPet);

const form = document.querySelector("form");
const pets = [];
form.onsubmit = function (e) {
  // importantissimo il preventDefault per evitare il refresh della pagina!
  e.preventDefault();
  // sotto ad esso possiamo creare la nostra logica
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  form.reset(); // eventualmente alla fine possiamo resettare i campi
  pets.forEach((pet) => {
    const sameOwners = pets.filter((pet) => pet.ownerName === newPet.ownerName);

    // if (pets.length > 1 && newPet.ownerName === pet.ownerName) {
    //   console.log(`${newPet.petName} ha lo stesso owner di ${pet.petName}`);
    // }
    console.log(`animali con lo stesso padrone ${sameOwners}`);
  });
};
