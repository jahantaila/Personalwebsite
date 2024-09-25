// template_v5t6i3c
// service_1vemkrc
// _QbB9Ij0UCeJ8-a8c

function contact(event) {
    event.preventDefault()

    const loading = document.querySelector(".modal__overlay-loading")
    const success = document.querySelector(".modal__overlay-success")

    loading.classList += ' modal__overlay--visible'
    
    emailjs.sendForm (
        'service_1vemkrc', 'template_v5t6i3c', event.target, 
        '_QbB9Ij0UCeJ8-a8c'
    ).then( () => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += ' modal__overlay--visible'

        console.log('this worked1');
    })
    
}

let isModalOpen = false; 


function toggleModal() {
    

    if (isModalOpen) {
        isModalOpen = false; 

        return document.body.classList.remove('modal--open')
    }

    isModalOpen = true; 

    


    document.body.classList += " modal--open"; 

}