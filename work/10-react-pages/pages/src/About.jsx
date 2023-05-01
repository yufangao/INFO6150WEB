import './static/css/About.css'
function About() {
    return (
        <div className="about">
            <dl>
                <dt><strong>Breed:</strong></dt>
                <dd>Some breeds of cat are more sociable than others. Research your cats’ breeds to find out how likely it is that your pets will get along—and how much training it’s likely to take to get them to coexist peacefully.</dd>
                <br />
                <dt><strong>Size:</strong></dt>
                <dd>If one of your cats as much larger than the other, there may be a greater chance of bullying or injury. There are always exceptions, of course, but size is an important factor when it comes to safely introducing these furry friends.</dd>
                <br />
                <dt><strong>Socialization history:</strong></dt>
                <dd>If your cat is super-friendly and interacts with other animals gently, they’re likely to behave similarly toward a new pet in your home. If your cat is fearful, or hasn’t been exposed to other animals before, a new housemate may be scary to them, leading to aggressive behaviors.</dd>
            </dl>
        </div>
    );
}

export default About;