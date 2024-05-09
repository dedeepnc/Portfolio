import self from "../img/self.png";




export let colors = ["rgb(181, 221, 255)", "rgb(217, 152, 255)"];

/*
 https://gradientgenerator.paytonpierce.dev/ 
 */

export const info = {
    firstName: "DEDEE (Phonnatcha)",
    lastName: "Chantaro",
    initials: "js", 
    position: "a Website Development Student.",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌎',
            text: 'based in the Melb'
        },
        {
            emoji: "💼",
            text: "Holmesglen Student"
        },
        {
            emoji: "📧",
            text: "dedee.pnc@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
        
    ],
    bio: "Hi, I'm Dedee, a Holmesglen student studying website development. Let's build the future together!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        }
    ,
    hobbies: [
        {
            label: 'walking',
            emoji: '🚶🏻‍♀️'
        },
        {
            label: 'eating',
            emoji: '🍕'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🍳'
        }

    ]
}