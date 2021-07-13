

let header=document.querySelector(".header");


let  headerControl = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if(direction==="down"){
            header.classList.add("shadow")
            header.classList.add("animate__slideInDown")

        }else {
            header.classList.remove("shadow")
            header.classList.remove("animate__slideInDown")
        }

    },
    offset: '76%'
})
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();





