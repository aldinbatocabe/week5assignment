class Continent {
    constructor (continentList){
        this.continentList = continentList
    }
}

class Country {
    constructor (countryList) {
        this.countryList = countryList;
    }
}

class Menu {
    constructor() {
        this.continentList = [];
        this.countryList = null;
    }
    
    start () {
        let selection = this.mainMenu();
        while (selection != 0){
            switch (selection) {
                case '1':
                    this.createContinent();
                    break;
                case '2':
                    this.createCountry();
                    break;
                case '3':
                    this.removeList();
                    break;
                case '4':
                    this.displayList();
                    break;
                default:
                    selection = 0;
            }
            selection = this.mainMenu();
        }
        alert("Goodbye!");
    }
    
    mainMenu() {
        return prompt (`
            0 Exit
            1 Enter continent
            2 Enter country
            3 Remove entry 
            4 Display list
        `)
    }

    displayList () {
        let display = '';
        for (let i= 0; i < this.continentList.length && this.countryList.length; i++){
            dipslay += this.continentList[i] + this.countryList[i];
        }
        display(displayList());
    }

    removeList() {
        let nameRemoved = this.continentList.pop() + this.countryList.pop();
        alert('entry removed');
    }

    createContinent () {
        let name = prompt (`Enter Continent Name:`)
        this.createContinent.push(continentList());
    }

    createCountry() {
        let name = prompt (`Enter Country Name:`)
        this.createCountry.push(countryList() );
    }
}

let menu = new Menu();
menu.start();