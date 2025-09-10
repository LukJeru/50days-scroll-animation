//save boxes in a node list
const boxes = document.querySelectorAll('.box')

//run function to show the first boxes
checkBoxes()

//scroll ==> checkBoxes get fired
window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
  //set triggerBottom 4/5 height inner window height
  const triggerBottom = window.innerHeight/ 5 * 4

  boxes.forEach(box => {
    //get position of box top
    const boxTop = box.getBoundingClientRect().top

    // if position of box top is over trigger bottom box will be shown
    if(boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
