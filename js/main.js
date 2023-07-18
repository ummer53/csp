console.log("page is loaded")


/*

    mode switching button

*/

const btn = document.querySelector('#dark-mode-toggle')
btn.style.borderRadius = '15px'
btn.style.width = '50px'
btn.style.height = '40px'
let bgColor =  document.body.classList.contains('dark-mode') ? 'white' : 'black'
let color = document.body.classList.contains('dark-mode') ? 'black' : 'white'
btn.style.backgroundColor=bgColor
btn.style.color = color
btn.addEventListener('click', function() {
    bgColor =  document.body.classList.contains('dark-mode') ? 'black' : 'white'
    color = document.body.classList.contains('dark-mode') ? 'white' : 'black'
    btn.style.backgroundColor=bgColor
    btn.style.color = color
    document.body.classList = document.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode'
    btn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode'
})





/*     

    left-bar content

*/

const leftBar = document.querySelector('#left-bar')
const rightBar = document.querySelector('#right-bar')
const mainBody = document.querySelector('#main-body')
// leftBar.style.backgroundColor="black"    //verified that correct element is selected using code

const careerPaths = [
    {
        pathName: 'Java Developer',
        id: 0,
        pathDescription: 'Java is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. Java is more than capable of handling almost any development need, and a skilled Java developer can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/article-why-learn-java.jpg',
        pathLink: 'https://www.codingdojo.com/blog/why-learn-java',
        blog : 
            {
                title: 'Java Basics',
                link: 'https://www.codingdojo.com/blog/java-basics',
                content : `Java is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. Java is more than capable of handling almost any development need, and a skilled Java developer can capitalize on these features to create high-performing websites, apps, and software.
                Java is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. Java is more than capable of handling almost any development need, and a skilled Java developer can capitalize on these features to create high-performing websites, apps, and software.
                You will find that this Java roadmap answers many burning questions like which technologies a Java developer should learn? What tools make you a better Java developer? And, which framework a Java developer must absolutely learn.

One of the things I tried with this roadmap is to keep the exposure as short as possible, I have avoided mentioning many alternatives, particularly when it comes to libraries and tools, and stick with industry-standard tools and libraries.

I have kept it simple so that most of the people can follow it and only included the essential stuff, but if there is enough desire, I am thinking to post The Java Developer RoadMap 2.0 to add some advanced things like JVM internals, Profiling, Java 9 Modules, Cloud Native Java, different cloud platforms like AWS, GCP, or Azure, and more advanced tools like Chef for DevOps and much more.

If you are interested, you can find a more exhaustive list of separate blog pots, which I have listed in the further learning section. Anyway, let’s go through this Java Developer RoadMap to understand how to become a Java developer in 2023.

Btw, you by no means need to understand everything on this roadmap to become a rockstar developer. In fact, you don’t even need to take them that seriously if you don’t want to. Instead, use these maps as a starting point to help guide your learning as you go.`
            },
        
    },
    {
        pathName: 'Python Developer',
        id: 1,
        pathDescription: 'Python is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. Python is more than capable of handling almost any development need, and a skilled Python developer can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/article-why-learn-python.jpg',
        pathLink: 'https://www.python.org'
    },
    {
        pathName: 'C# Developer',
        id: 2,
        pathDescription: 'C# is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. C# is more than capable of handling almost any development need, and a skilled C# developer can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/article-why-learn-c-sharp.jpg',
        pathLink: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
    },
    {
        pathName: 'MEAN Stack Developer',
        id: 3,
        pathDescription: 'MEAN is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. MEAN is more than capable of handling almost any development need, and a skilled MEAN developer can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/article-why-learn-mean.jpg',
        pathLink: 'https://www.mongodb.com/mean-stack'
    },
    {
        pathName: 'Ruby on Rails Developer',
        id: 4,
        pathDescription: 'Ruby on Rails is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. Ruby on Rails is more than capable of handling almost any development need, and a skilled Ruby on Rails developer can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/article-why-learn-ruby-on-rails.jpg',
        pathLink: 'https://rubyonrails.org'
    },
    {
        pathName: 'MERN Stack Developer',
        id: 5,
        pathDescription: 'MERN is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. MERN is more than capable of handling almost any development need, and a skilled MERN developer can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/article-why-learn-mern.jpg',
        pathLink: 'https://www.mongodb.com/mern-stack'
    },
    {
        pathName: 'iOS Developer',
        id: 6,
        pathDescription: 'iOS is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. iOS is more than capable of handling almost any development need, and a skilled iOS developer can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/article-why-learn-ios.jpg',
        pathLink: 'https://developer.apple.com/develop/'
    },
    {
        pathName: 'Android Developer',
        id: 7,
        pathDescription: 'Android is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. Android is more than capable of handling almost any development need, and a skilled Android developer can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/article-why-learn-android.jpg',
        pathLink: 'https://developer.android.com'
    },
    {
        pathName: 'Data Scientist',
        id: 8,
        pathDescription: 'Data Science is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. Data Science is more than capable of handling almost any development need, and a skilled Data Scientist can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/article-why-learn-data-science.jpg',
        pathLink: 'https://www.codingdojo.com/blog/why-learn-data-science'
    },
    {
        pathName: 'Software Engineer',
        id: 9,
        pathDescription: 'Software Engineering is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. Software Engineering is more than capable of handling almost any development need, and a skilled Software Engineer can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/article-why-learn-software-engineering.jpg',
        pathLink: 'https://www.codingdojo.com/blog/why-learn-software-engineering'
    },
    {
        pathName: 'UX/UI Designer',
        id: 10,
        pathDescription: 'UX/UI Design is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. UX/UI Design is more than capable of handling almost any development need, and a skilled UX/UI Designer can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/ux-ui-design.jpg',
        pathLink: 'https://www.codingdojo.com/blog/why-learn-ux-ui-design'
    },
    {
        pathName: 'Cyber Security',
        id: 11,
        pathDescription: 'Cybersecurity is a general-purpose, object-oriented, high-level programming language with several features that make it ideal for web-based development. Cybersecurity is more than capable of handling almost any development need, and a skilled Cybersecurity professional can capitalize on these features to create high-performing websites, apps, and software.',
        pathImage: 'https://www.codingdojo.com/blog/wp-content/uploads/cybersecurity.jpg',
        pathLink: 'https://www.codingdojo.com/blog/why-learn-cybersecurity'
    }
]

leftBar.innerHTML = `
    
    <div class="career-paths">
    <h2 style="text-align: center;">Career Paths</h2>
        ${careerPaths.map(function(path) {
            return `
                <div class="career-path" id=${path.id}>
                <details>
                    <summary style="text-align: center;">${path.pathName}</summary>
                </details>
                </div>
            `
        }).join('')}
    </div>
`

const careerPath = document.querySelectorAll('.career-path')
console.log(careerPath)
careerPath.forEach(function(p) {
    p.addEventListener('click', function() {
        
        let pathId = p.id
        let  path  = careerPaths[pathId]
        
        mainBody.innerHTML = `
        <h2>${path.pathName}</h2>
            <div class="path-description">
                <p>${path.pathDescription}</p>
            </div>
            <div class="path-image">
                <img src=${path.pathImage} alt="path image">
            </div>
            <div>
            <fieldset class="blog">
            <legend>${path.pathName}</legend>

            <div class="blog-content">
                <h3>${careerPaths[0].blog.title}</h3>
                <p>${careerPaths[0].blog.content}</p>
            </div>
            </fieldset>
            </div>
            

            <div class="path-link">
                <a href=${path.pathLink}>Learn More</a>
            </div>
        `

        rightBar.innerHTML = `
            <h2 style="text-align: center;">${path.pathName}</h2>
            <h4> Related Videos</h4>
        `

    })
}
)




