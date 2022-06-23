/*
This is the api you will need to get data from: https://api.imgflip.com/get_memes
The data looks like this:
{
    "success": true,
    "data": {
        "memes": [
            {
                "id": "61579",
                "name": "One Does Not Simply",
                "url": "https://i.imgflip.com/1bij.jpg",
                "width": 568,
                "height": 335,
                "box_count": 2
            },
            {
                "id": "101470",
                "name": "Ancient Aliens",
                "url": "https://i.imgflip.com/26am.jpg",
                "width": 500,
                "height": 437,
                "box_count": 2
            }
            // probably a lot more memes here..
        ]
    }
}

You will need to show all the memes on one page in correct dimensions in the cards as displayed below.
Card should have a border and its width should be set to 500px; Height of the cards should be auto generated.
Image should fit inside of the card.
Cards should be at the center of the page and be one after the other.

*/
const randomInfo = async (name) => {
    try {

        const response = await fetch(`https://catfact.ninja/breeds`);
        const result = await response.json();

        return result.data;

    } catch (error) {
        console.log(error);
    }
};

let infooo = randomInfo();


const contentDiv = document.getElementById("content");

const createCard = (info) => {
    return `<div style="width: 400px; min-height: 100px; border: 1px solid black; margin: 10px;;display:flex;flex-wrap:wrap;">
        <p style="text-align: center;width:45%">breed:${info.breed} </p>
        <p style="text-align: center;width:45%">country:${info.country} </p>
        <p style="text-align: center;width:45%">origin:${info.origin} </p>
        <p style="text-align: center;width:45%">coat:${info.coat} </p>
        <p style="text-align: center;width:45%">pattern:${info.pattern} </p>
    </div>`
}


randomInfo().then((result) => {
    result.forEach(element => {
        console.log(element);
        contentDiv.innerHTML = contentDiv.innerHTML + createCard(element);
    });
});