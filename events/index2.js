// Array containing details of recent 3 events


const dat = [
    {
        id:0,
        pic: "images/upcoming.jpg",
        title:"Let's App It",
        venue:"Youtube",
        link:"https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-lets-app-it/"
    
    },
    {
      id:1,
      pic: "images/upcoming.jpg",
      title:"Let's Android",
      venue:"Youtube",
      link:"https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-lets-android/"
  
  },
  {
    id:2,
    pic: "images/upcoming.jpg",
    title:"Android 101",
    venue:"Youtube",
    link:"https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-android-101/"

}
];


const buildCard = event => {
    // Create elements needed to build a card
const div = document.createElement('div');
const h3 = document.createElement('h3');
const a = document.createElement('a');
const img = document.createElement('img');
const p = document.createElement('p');
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

h3.setAttribute('class','card-title');
h3.innerHTML=event.title;

p.setAttribute('class','card-text');
p.innerHTML='<i class="fab fa-youtube"></i>';

a.setAttribute('class','event-link');
a.innerHTML= "Read More";
a.setAttribute('href',event.link);

h4.innerHTML= "Completed";
h4.setAttribute('class','badge')
};

  dat.forEach(event => buildCard(event));
  


