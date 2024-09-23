let arr = [];

while (true) {
    let command = prompt("Komanda kiriting (add element, Ali yoki del element, Ali yoki stop):");

    if (command === 'stop') {
        console.log("Oxirgi resultat:", arr);
        break;
    }

    let [action, element] = command.split(" ");

    if (action === 'add') {
        arr.push(element);
        console.log(`${element} massivga qo'shildi.`);
    } else if (action === 'del') {
        let index = arr.indexOf(element);
        if (index !== -1) {
            arr.splice(index, 1);
            console.log(`${element} massivdan o'chirildi.`);
        } else {
            console.log(`${element} massivda topilmadi.`);
        }
    } else {
        console.log("Noto'g'ri komanda.");
    }
}
