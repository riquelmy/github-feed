class GHFeed extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        
        const component = document.createElement('div');
        component.setAttribute('class', 'component');

        const component_superior = document.createElement('span');
        component_superior.setAttribute('class', 'superior')
        const component_inferior = document.createElement('div');
        component_inferior.setAttribute('class', 'inferior')
        


        component.appendChild(component_superior);
        component.appendChild(component_inferior);


        //superior - start
        const SUP_photo = document.createElement('img');
        const SUP_name = document.createElement('p');
        const SUP_event = document.createElement('p');
        const SUP_circle = document.createElement('p');
        const SUP_time = document.createElement('p');

        component_superior.appendChild(SUP_photo);
        component_superior.appendChild(SUP_name);
        component_superior.appendChild(SUP_event);
        component_superior.appendChild(SUP_circle);
        component_superior.appendChild(SUP_time);
        //superior - end

        //inferior - start
        const INF_top = document.createElement('div');
        const INF_middle = document.createElement('div');
        const INF_bottom = document.createElement('div');

        // declaration inf-top-elements - start
        const INF_photo = document.createElement('img');
        const INF_name = document.createElement('p');
        const INF_bar = document.createElement('p');
        const INF_repname = document.createElement('p');
        // declaration inf-top-elements - end

        // declaration inf-middle-elements - start
        const INF_description = document.createElement('p');
        // declaration inf-middle-elements - end

        // declaration inf-bottom-elements - start
        const INF_shape = document.createElement('p');
        const INF_lang = document.createElement('p');
        // declaration inf-bottom-elements - end

        //appending inferior parts to the inferior - start
        component_inferior.appendChild(INF_top);
        component_inferior.appendChild(INF_middle);
        component_inferior.appendChild(INF_bottom);
        //appending inferior parts to the inferior - end

        //appending inf-top-elements - start
        INF_top.appendChild(INF_photo);
        INF_top.appendChild(INF_name);
        INF_top.appendChild(INF_bar);
        INF_top.appendChild(INF_repname);
        //appending inf-top-elements - end

        //appending inf-middle-elements - start
        INF_middle.appendChild(INF_description);
        //appending inf-middle-elements - end

        //appending inf-bottom-elements - start
        INF_bottom.appendChild(INF_shape);
        INF_bottom.appendChild(INF_lang);
        //appending inf-bottom-elements - end

        /* Setting content and attributes */

        SUP_name.textContent = this.getAttribute('sup-name');
        SUP_name.setAttribute('class', 'superior_name');
        SUP_photo.src = this.getAttribute('sup-photo');
        SUP_photo.setAttribute('class', 'superior_photo');
        SUP_circle.textContent = '';
        SUP_circle.setAttribute('class', 'superior_circle');
        SUP_event.textContent = this.getAttribute('sup-event');
        SUP_event.setAttribute('class', 'superior_event');
        SUP_time.textContent = this.getAttribute('sup-time');
        SUP_time.setAttribute('class', 'superior_time');


        INF_photo.src = this.getAttribute('inf-photo');
        INF_photo.setAttribute('class', 'inferior_photo');
        INF_name.textContent = this.getAttribute('inf-name');
        INF_name.setAttribute('class', 'inferior_name');
        INF_bar.textContent = '/';
        INF_bar.setAttribute('class', 'inferior_bar');
        INF_repname.textContent = this.getAttribute('inf-repname');
        INF_repname.setAttribute('class', 'inferior_repname');


        INF_description.textContent = this.getAttribute('inf-des');
        INF_description.setAttribute('class', 'inferior_description');

        INF_shape.textContent='';
        INF_shape.setAttribute('class', 'inferior_shape');
        INF_lang.textContent = this.getAttribute('inf-lang');
        INF_lang.setAttribute('class', 'inferior_lang');

        return component;
    };
    styles(){

        const style = document.createElement("style");
        style.textContent = `
        
        
.superior {
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin: auto;
    
}


.superior_name {
    color: #1f2328;
    font-weight: bold;
}

.superior_event, .superior_time, .superior_circle {
    color: #7f868e;
}

.superior * {
    display: flex;
    align-items: center;
    margin-right: 5px;
}

.superior_photo {

    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.component {
    display: flex;
    flex-direction: column
}
/* This is the inferior part of the component */

.inferior {
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #d7dde3;
    /* box-shadow: 31px 29px 32px -31px rgba(0,0,0,1);
    -webkit-box-shadow: 31px 29px 32px -31px rgba(0,0,0,1);
    -moz-box-shadow: 31px 29px 32px -31px rgba(0,0,0,1); */
    
}

.inferior * {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
}

.inferior_top {
    display: flex;
    flex-direction: row;
}

.inferior_name, .inferior_repname {
    font-weight: bold;
}
.inferior_top * {
    margin-right: 10px;
}
.inferior_bottom {
    display: flex;
    flex-direction: row;
}
.inferior_shape {
    background-color: #00b4ab;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #088f88;
}

.inferior_photo {

    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.inferior_bottom * {

    margin-right: 5px;
}
        
        `

        return style;
    };
}

customElements.define("gh-feed", GHFeed);
