/* GEM - decklist print page - checkboxes */

/// Equipment checkboxes
const equipmentElements = document.getElementsByClassName('deck-print__equipment-grid');
createCheckbox(equipmentElements[0].children);

/// Pitch 0/1 checkboxes
const firstColumn = document.getElementsByClassName('deck-print__main-cards-grid-col deck-print__main-cards-grid-col--1');
createCheckbox(firstColumn[0].children);

/// Pitch 2 checkboxes
const secondColumn = document.getElementsByClassName('deck-print__main-cards-grid-col deck-print__main-cards-grid-col--2');
createCheckbox(secondColumn[0].children);

/// Pitch 3 checkboxes
const thirdColumn = document.getElementsByClassName('deck-print__main-cards-grid-col deck-print__main-cards-grid-col--3');
createCheckbox(thirdColumn[0].children);

// Function to create and insert checkboxes
function createCheckbox(elementList) {
    for (let index = 0; index < elementList.length; index++) {
        const element =  elementList[index];
        /// Skip element if length is 1 (Not Count + Name) OR if Total cell is found
        if(element.children.length==1 || element.className=="deck-print__card-item deck-print__card-item--total"){
            continue;
        }
        let count = Number(element.children[0].innerHTML);
        /// Add a line break 
        element.children[1].innerHTML +="<br>";
        /// Insert checkboxes
        for(let checkBoxCount =0; checkBoxCount < count;checkBoxCount++){
            element.children[1].innerHTML+="   <input type='checkbox'>";
        }
    }
}