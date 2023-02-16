import pic from './ChenyiXuPic.jpg'

const AboutMe = props => {
    return (
        <>
            <h1>About Me</h1>
            <p> Hi, I’m Chenyi Xu.</p>
            <p> 
                I’m a junior student at NYU Shanghai majoring data science.
                And this year I’m studying away at New York University as part of the global study away program.
                My main programming language is python. But I also started use c last semester in the CS 201 course.
                My experience with SQL started from last semester where I learnt the course databases back in NYU Shanghai campus.
                And for the final project, we design and implement a moderately complex web-based database application program using python Flask.
            </p>
            <img src={pic} alt='Chenyi Xu' />
        </>
    )
}

export default AboutMe;