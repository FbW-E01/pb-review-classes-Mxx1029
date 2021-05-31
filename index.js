// # Review - Classes

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create a class called "Component". The constructor for Component should take in one parameter "name". There should be one method called "render" that prints `<p>Component _name_  rendering` where `_name_`  is the provided name.

class Component {
    constructor(name) {
        this.name = name;
    };

    render() {
        console.log(`<p>Component ${this.name} rendering`)
    };
};

// 2. Create a child class called UserCard that extends Component. The UserCard should take in only one constructor parameter called "user". Expect the user to be an object with "name", "imageUrl" and "email" properties. The UserCard should override the original "render" method. The new render method should print out something like this: 


//         <div class="card card-user">
//             <img class="card-img-top" src="user imageUrl here" alt>
//             <div class="card-body">
//                 <h5 class="card-title">user name here</h5>
//                 <p class="card-text">To contact, please send a message to</p>
//                 <a
//                     href="mailto:user email here"
//                     class="btn btn-primary"
//                 >
//                     user email here
//                 </a>
//             </div>
//         </div>


class UserCard extends Component {
    constructor({name, imageURL, email}) {
        super(name);
        this.imageURL = imageURL;
        this.email = email;
    };

    render() {
        console.log(`
                    \n <div class="card card-user">
                    \n\t <img class="card-img-top" src="${this.imageURL}" alt>
                    \n\t <div class="card-body">
                    \n\t\t <h5 class="card-title">${this.name}</h5>
                    \n\t\t <p class="card-text">To contact, please send a message to</p>
                    \n\t\t <a
                    \n\t\t\t href="mailto:${this.email}"
                    \n\t\t\t class="btn btn-primary"
                    \n\t\t >
                    \n\t\t\t ${this.email}
                    \n\t\t </a>
                    \n\t </div>
                    \n </div>`)
    }
};

// 3. Create an array of at least 5 user objects.

const userArray = [
    {name: "Weston_60638", imageURL: "https://placekitten.com/200/250", email: "mail@wetsin.com",} , 
    {name: "Cielo_55741-0030", imageURL: "https://placekitten.com/300/250", email: "mailme@gugle.com",} , 
    {name: "Camila_47192-7426", imageURL: "https://placekitten.com/200/350", email: "camilal@gnw.com",} , 
    {name: "Billy_21295-4017", imageURL: "https://placekitten.com/400/250", email: "bill@icud.com",} , 
    {name: "Chelsea_74918-6468", imageURL: "https://placekitten.com/200/150", email: "post@wherever.com",} ,
]

// 4. Using the .map() method, create 5 UserCard instances (objects) based on your users.

const arrayOfUserCards = userArray.map( x => new UserCard(x) );
console.log(arrayOfUserCards);

// 5. Using .forEach(), call the render method of your instances.

arrayOfUserCards.forEach( x => x.render() );

// 6. Print the type of the UserCard class.

console.log(typeof UserCard); // Function

// 7. Print the type of a UserCard instance.

console.log(typeof arrayOfUserCards[0]); // Object
