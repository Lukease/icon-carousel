const app = document.querySelector('.app')
let emojiArray = new Map()

emojiArray.set(0,'&#128565').set(1,'&#128560').set(2,'&#128520').set(3,'&#128518').set(4,'&#128520').set(5,'&#128565').set(6,'&#128526').set(7,'&#128525').set(8,'&#128514')

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

const createEmoji = () => {
    let selectedMap = new Map()
    const stringsArray = Array.from(emojiArray.values()).sort((a, b) => 0.5 - Math.random())

    stringsArray.forEach((object, index) => {
        if (index > 1 && index < 8) {
            const circle = document.createElement('div')

            circle.classList.add('arena__circle')
            middleBox.appendChild(circle)

            const leftIcon = document.querySelector('.next__left')

            circle.innerHTML = object
            leftIcon.addEventListener('click', () => {

                if (index === 0) {
                    index = 8
                    circle.innerHTML = emojiArray.get(index)
                }

                if (index !== 0){
                    index = index - 1
                    circle.innerHTML = emojiArray.get(index)
                }
            })

            const rightIcon = document.querySelector('.next')

            rightIcon.addEventListener('click', () => {

                if (index === 8) {
                    index = 0
                    circle.innerHTML = emojiArray.get(index)
                }

                if (index !== 8){
                    index = index + 1
                    circle.innerHTML = emojiArray.get(index)
                }
            })

            circle.addEventListener('click', (event) => {

                if (selectedMap.size < 10) {
                    const addedCircle = document.createElement('div')
                    const emoji = event.target.innerHTML
                    const randomKey = Math.random()

                    selectedMap.set(randomKey, emoji)
                    addedCircle.classList.add('arena__circle')
                    addedCircle.innerHTML = emoji
                    selected.appendChild(addedCircle)

                    addedCircle.addEventListener('click', (event) => {
                        selectedMap.delete(randomKey)
                        event.target.remove()
                    })
                }
            })
        }
    })

    return emojiArray
}

createEmoji()
