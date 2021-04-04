// Array containing details of recent 3 events


const dat = [

    {
        id: 0,
        pic: "../assets/images/solution_challenge.png",
        title: "Design Sprint | Session 3",
        venue: "Youtube",
        link: "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-design-sprint-session-3/",
        ylink: "https://www.youtube.com/channel/UCfDFc_J9x-yCE2Sr0eOJWuQ"

    },
    {
        id: 1,
        pic: "../assets/images/solution_challenge.png",
        title: "Design Sprint | Session 2",
        link: "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-design-sprint-session-2/",
        ylink: "https://www.youtube.com/channel/UCfDFc_J9x-yCE2Sr0eOJWuQ"
    },
    {
        id: 2,
        pic: "../assets/images/solution_challenge.png",
        title: "Design Sprint | Session 1",
        link: "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-design-sprint-session-1/",
        ylink: "https://www.youtube.com/channel/UCfDFc_J9x-yCE2Sr0eOJWuQ"

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