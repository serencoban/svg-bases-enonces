(
    function (){
        const app ={
            phoneSVG : document.getElementById('phone'),
            init(){
                this.phoneSVG.addEventListener('click', (evt)=>{

                    this.click(evt);
                });
            },
            click(evt){
                evt.currentTarget.querySelector('rect').style.fill='red';
            },
        };
        app.init();
    }
)();

