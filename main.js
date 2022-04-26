const app = document.querySelector('.app')
const circleArray = Array.from(new Array(9))
const emojiArray = ['&#128565', '&#128560', '&#128520', '&#128518', '&#128520', '&#128565', '&#128514', '&#128526', '&#128525']

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

const selectedCircleArena = () => {
    const circleSelected = document.createElement('div')

    circleSelected.classList.add('app__container')
    app.appendChild(circleSelected)

    const selectedArena = document.createElement('div')

    selectedArena.classList.add('selected')
    circleSelected.appendChild(selectedArena)

    return selectedArena
}

const selected = selectedCircleArena()
const middleBox = document.querySelector('.arena__middle')

const select = () => {
    let sortedEmoji = []
    const mapSelected = new Map()

    const sortedEmojiArray = () => {
        sortedEmoji = sortedEmoji.concat(emojiArray)
        sortedEmoji.sort((a, b) => 0.5 - Math.random())

        return sortedEmoji
    }
    sortedEmojiArray()

    circleArray.forEach((object, index) => {
        if (index > 1 && index < 8) {

            const circle = document.createElement('div')

            circle.classList.add('arena__circle')
            middleBox.appendChild(circle)

            const leftIcon = document.querySelector('.next__left')

            circle.innerHTML = sortedEmoji[index]
            leftIcon.addEventListener('click', () => {

                if (index === 0) {
                    index = 8
                    circle.innerHTML = sortedEmoji[index]
                }
                    index = index - 1
                    circle.innerHTML = sortedEmoji[index]
            })

            const rightIcon = document.querySelector('.next')

            rightIcon.addEventListener('click', () => {

                if (index === 8) {
                    index = 0
                    circle.innerHTML = sortedEmoji[index]
                }
                    index = index + 1
                    circle.innerHTML = sortedEmoji[index]
            })

            circle.addEventListener('click', (event) => {
                const addedCircle = document.createElement('div')
                const emoji = event.target.innerHTML

                if (!mapSelected.has(emoji)) {
                    mapSelected.set(emoji, addedCircle)
                    addedCircle.classList.add('arena__circle')
                    addedCircle.innerHTML = emoji
                    selected.appendChild(addedCircle)
                }
            })
        }
    })
    return sortedEmoji
}

select()
