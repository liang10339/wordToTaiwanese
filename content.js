var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace() {
    elementsInsideBody.forEach(element => {
        element.childNodes.forEach(child => {
            if (child.nodeType === 3) {
                replaceText(child);
            }
        });

    });
}

function replaceText(node) {
    let value = node.nodeValue;
    value = value.replace(/視頻/gi, `<u>影片</u>`);
    value = value.replace(/brexit/gi, `<u>breadsticks</u>`);
    node.nodeValue = value;
}

window.onload = findAndReplace();