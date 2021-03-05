// Array containing details of recent 3 events


const dat = [

    {
        id: 2,
        pic: "../assets/images/spring-boot.jpg",
        title: "Building Java Project with Spring Boot",
        venue: "Youtube",
        link: "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-building-java-project-with-spring-boot/",
        ylink: "https://www.youtube.com/watch?v=R4KlVtNn7WM"

    },
    {
        id: 1,
        pic: "../assets/images/ML_img.jpg",
        title: "Insights into Machine Learning",
        link: "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-insights-into-machine-learning-dsc-banasthali-vidyapith/",
        ylink: "https://www.youtube.com/watch?v=mccO1R7jxL8"
    },
    {
        id: 0,
        pic: "../assets/images/node-js_img.png",
        title: "Step into the World of NodeJS ",
        link: "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-step-into-the-world-of-nodejs-dsc-banasthali-vidyapith/",
        ylink: "https://www.youtube.com/watch?v=N1b_mJufdAk"

    }

];


const buildCard = event => {
    // Create elements needed to build a card
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('a');
    const h4 = document.createElement('h4');



    // Append newly created elements into the DOM
    const body = document.querySelector('.past-div');
    body.append(div);

    div.append(img)
    div.append(h4)
    div.append(h3)
    div.append(p)
    div.append(a)



    // Set content and attributes
    div.setAttribute('class', 'card')

    img.setAttribute('src', event.pic)

    img.setAttribute('class', 'card-img-top')

    h3.setAttribute('class', 'card-title');
    h3.innerHTML = event.title;

    p.setAttribute('class', 'card-text');
    p.setAttribute('href', event.ylink);
    p.innerHTML = '<i class="fab fa-youtube"></i>';

    a.setAttribute('class', 'event-link');
    a.innerHTML = "Read More";
    a.setAttribute('href', event.link);

    h4.innerHTML = "Completed";
    h4.setAttribute('class', 'badge')
};

dat.forEach(event => buildCard(event));