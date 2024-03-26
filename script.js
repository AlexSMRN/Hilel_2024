const averagemenus = document.querySelectorAll('.averagemenu');

averagemenus.forEach((averagemenu) => {
    const listItems = averagemenu.querySelectorAll('li');

    listItems[1].addEventListener('mouseover', () => {
    averagemenu.classList.add('hide-averagemenu');
    });

    listItems[0].addEventListener('mouseover', () => {
    averagemenu.classList.remove('hide-averagemenu');
    });
});