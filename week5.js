class Country {
    constructor (name, language) {
        this.name = name;
        this.language = language;
    } 
       describe() {
        return `${this.name} has this language: ${this.language}.`;
    }
}

class ContinentGroup {
    constructor (continent) {
        this.continent = continent;
        this.countries = [];
    } 
       addnpc(name, language) {
           this.countries.push(new Country(name, language));

       }
       getAllCountryNames() {
           return this.countries.map((abd) => abd.name);
       }
       
       describe() {
           return `${this.countries} has this language ${this.continent}.`;
       }
    }

    class Menu {
        constructor() {
            this.continentGroups = [];
            this.selectedContinentGroup = null;
        }
        start() {
            let selection = this.showMainMenuOptions();
            while (selection != 0) {
                switch (selection) {
                    case "1":
                        this.createContinentGroup();
                        break;
                    case "2":
                        this.viewContinentGroup();
                        break;
                    case "3":
                        this.deleteContinentGroup();
                        break;
                    case "4":
                        this.displayContinentGroup();
                        break;
                    default:
                        selection = 0;
                }
                selection = this.showMainMenuOptions();
            }
            alert("Goodbye!");
        }

        showMainMenuOptions() {
            return prompt(`
            0) Exit
            1) Create new continent 
            2) View continent 
            3) Delete continent 
            4) Display all continent 
            `);
        }

        showcontinentMenuOptions(continentInfo) {
            return prompt(`
                0) Back
                1) Create Country
                2) Delete Country
                -----------------------
                ${continentInfo}
                `);
        }
        displayContinentGroup() {
            let continentString = "";
            for (let i = 0; i < this.continentGroups.length; i++) {
                continentString += i + ") " + this.continentGroups[i].continent + "\n";
            }
            alert(continentString);
        }

        createContinentGroup() {
            let continent = prompt("Enter new continent group:");
            this.continentGroups.push(new ContinentGroup(continent));
        }

        viewContinentGroup() {
            let index = prompt("Enter the index of the continent group you wish to view:");
            if (index > -1 && index < this.continentGroups.length) {
                this.selectedContinentGroup = this.continentGroups[index];
                
                let description = "continent Group: " + this.selectedContinentGroup.continent + "\n";
                for (let i = 0; i < this.selectedContinentGroup.countries.length; i++) {
                    description += i + ") " + this.selectedContinentGroup.countries[i].name
                     + " - " + this.selectedContinentGroup.countries[i].language + "\n";
                }
    
                let selection = this.showcontinentMenuOptions(description);
                switch (selection) {
                    case "1": 
                        this.createCountry();
                        break;
                    case "2":
                        this.deleteCountry();
                }
            }
            
        }
 
        deleteContinentGroup() {
            let index = prompt("Enter the index of the continent Group you wish to delete:");
            if (index > -1 && index < this.continentGroups.length) {
                this.continentGroups.splice(index, 1);
            }
        }

        createCountry() {

            let name = prompt("Enter name for new Country:");
            let language = prompt("Enter language for new Country:");
            this.selectedContinentGroup.countries.push(new Country(name, language));
        }

        deleteCountry() {
            let index = prompt("Enter the index of the Country you wish to delete:");
            if (index > -1 && index < this.selectedContinentGroup.countries.length) {
                this.selectedContinentGroup.countries.splice(index, 1);
            }
        }
    }
let menu = new Menu();
menu.start(); 