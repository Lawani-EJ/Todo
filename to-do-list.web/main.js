

const input = document.querySelector('#new-task-input');
const addTask = document.querySelector('#new-task-submit');
const tasksContainer = document.querySelector('#tasks');


addTask.addEventListener('click', function (e) {
    e.preventDefault();
    const taskText = input.value.trim();

    if (taskText !== '') {
        const taskHTML = `
            <div class="task">
                <div class="content">
                    <p class="text">${taskText}</p>
                </div>
                <div class="actions">
                    <button class="delete-button">Delete</button>
                </div>
            </div>
        `;

        tasksContainer.insertAdjacentHTML('afterbegin', taskHTML);
        input.value = '';

        const randomColor = getRandomColor();
        document.body.classList.add('color-transition');
        document.body.style.backgroundColor = randomColor;

        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(function (e) {
            e.addEventListener('click', function () {
                const task = e.closest('.task');
                task.classList.add('fade-out');

                setTimeout(function () {
                    task.remove();
                }, 10000);
            });
        });
    }
});


//if you want to implement a background change set the bakcgorund color to none and remove this comment from this code block
// input.addEventListener('keydown', function () {
//     const randomColor = getRandomColor();
//     document.body.classList.add('color-transition');
//     document.body.style.backgroundColor = randomColor;
// });

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

