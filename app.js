const list = document.querySelector('#acct-list ul');

//delete acct types

list.addEventListener('click', function (e) {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }

    // add accts
    const addItem = document.forms['pick-account'];
    addItem.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = addItem.querySelector('input[type="text"]').value;
        console.log(value);


        // create account types
        const li = document.createElement('li');
        const acctName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add content
        deleteBtn.textContent = 'delete';
        acctName.textContent = value;

        //add classes
        acctName.classList.add('name');
        deleteBtn.classList.add('delete');

        li.appendChild(acctName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        // hide acct types
        const hideBox = document.querySelector('#hide');
        hideBox.addEventListener('change', function (e) {
            e.preventDefault();


            if (hideBox.checked) {
                list.computedStyleMap.display = "none";

            } else {
                list.computedStyleMap.display = "initial"
            }
        })
    })
});