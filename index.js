let listOfTributes = [
    {
        name: "Katniss Everdeen",
        district: 12
    },
    {
        name: "Cato",
        district: 2
    }
]
function announcement (object) {
    element1 = object.name
    element2 = object.district
    return(`${element1} from district ${element2}`)
}

function tributes (arr) {
    const result = arr.map(announcement)
    return result
        }
console.log(tributes(listOfTributes))



const toyInventory2023 = [
    {
        name: "Puzzle Game",
        containsChemicals: true,
    },
    {
        name: "Fidget Spinner",
        containsChemicals: true,
    },
    {
        name: "Teddy Bear",
        containsChemicals: false,
    }
]

function removeFaultyToys (toyInventory) {
    const result = toyInventory.filter(element => (element.containsChemicals === false))
    return result
        }
console.log(removeFaultyToys(toyInventory2023))
