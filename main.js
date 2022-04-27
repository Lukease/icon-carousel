const app = document.querySelector('.app')
const emojiArray = ['&#128565', '&#128560', '&#128520', '&#128518', '&#128520', '&#128565', '&#128526', '&#128525', '&#128514']

const createCircleArena = () => {
    const circleChoice = document.createElement('div')

    circleChoice.classList.add('app__container')
    app.appendChild(circleChoice)

    const circleArena = document.createElement('div')

    circleArena.classList.add('arena')
    circleChoice.appendChild(circleArena)

    const leftBox = document.createElement('div')

    leftBox.classList.add('arena__flank')
    circleArena.appendChild(leftBox)

    const middleBox = document.createElement('div')

    middleBox.classList.add('arena__middle')
    circleArena.appendChild(middleBox)

    const leftIcon = document.createElement('img')

    leftIcon.classList.add('next__left')
    leftBox.appendChild(leftIcon)

    const rightBox = document.createElement('div')

    rightBox.classList.add('arena__flank')
    circleArena.appendChild(rightBox)

    const rightIcon = document.createElement('img')

    rightIcon.classList.add('next')
    rightBox.appendChild(rightIcon)

    return circleArena
}

createCircleArena()

const createSelectContainer = () => {
    const circleSelected = document.createElement('div')

    circleSelected.classList.add('app__container')
    app.appendChild(circleSelected)

    return circleSelected
}

const circleSelected = createSelectContainer()

const createSelectArena = () => {
    const selectedArena = document.createElement('div')

    selectedArena.classList.add('selected')
    circleSelected.appendChild(selectedArena)

    return selectedArena
}

const selected = createSelectArena()
const middleBox = document.querySelector('.arena__middle')

const createEmoji = () => {
    const selectedSet = new Set()
    const stringsArray = emojiArray.sort((a, b) => 0.5 - Math.random())

    stringsArray.forEach((emoji, index) => {
        if (index > 1 && index < 8) {
            const circle = document.createElement('div')

            circle.classList.add('arena__circle')
            middleBox.appendChild(circle)

            const leftIcon = document.querySelector('.next__left')

            circle.innerHTML = emoji
            leftIcon.addEventListener('click', () => {
                if (index === 0) {
                    index = 8
                    circle.innerHTML = emojiArray[index]
                }

                if (index !== 0) {
                    index = index - 1
                    circle.innerHTML = emojiArray[index]
                }
            })

            const rightIcon = document.querySelector('.next')

            rightIcon.addEventListener('click', () => {
                if (index === 8) {
                    index = 0
                    circle.innerHTML = emojiArray[index]
                }

                if (index !== 8) {
                    index = index + 1
                    circle.innerHTML = emojiArray[index]
                }
            })

            circle.addEventListener('click', event => {
                const emojiString = event.target.innerHTML

                selectedSet.add(emojiString)

                const selectedBox = document.querySelector('.selected')

                selectedBox.remove()

                const circleBox = createSelectArena()

                selectedSet.forEach(emoji => {
                    const addedCircle = document.createElement('div')

                    addedCircle.classList.add('selected__circle')
                    addedCircle.innerHTML = emoji
                    circleBox.appendChild(addedCircle)

                    addedCircle.addEventListener('click', event => {
                        selectedSet.delete(emoji)
                        event.target.remove()
                    })
                })
            })
        }
    })

    return emojiArray
}

createEmoji()