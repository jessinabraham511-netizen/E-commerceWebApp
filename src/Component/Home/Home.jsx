import './Home.css'

function Home(){
    return(
        <div>
    <nav class="nav-bar"/>
        <h3 class="logo">FANTASY WORLD</h3>
        <ul class="list">
            <li><a href="#">HOME</a></li>
            <li><a href="#">EVENTS</a></li>
            <li><a href="#">BOOK TICKETS</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT US</a></li>
        </ul>
        <img src="./menu_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg" class="menu-btn"/>
    <nav/>
    <header>
        <div class="header-container">
            <h1>WELCOME TO DISNEYLAND</h1>

            <h2>A WONDERFUL WORLD</h2>
            <div class="line"></div>
            <a class="btn" href="#">Learn More</a>
        </div>
    </header>
    <section>
        <div class="title">
            <h1>Upcoming Events</h1>
            <div class="line1"></div>
        </div><br/><br/>
        <div class="row">
            <div class="col">
                <img src="https://www.wdw-magazine.com/wp-content/uploads/2023/07/090121_Disneyland_Town-Square_Mickey-Mouse-Pumpkin_Dom-Tabon-scaled.webp" alt="" width="350px"/>
                <h4>Halloween Time</h4>
                <p>Are you ready for some seriously spellbinding fun? Halloween Time at Disneyland Resort offers
                    everything you need to get in the spirit or welcome some ghostly spirits!during the fall. </p>
                <a class="btn" href="#">Learn More</a>
            </div>
            <div class="col">
                <img src="https://wallpapercave.com/wp/wp4859644.jpg" alt="" width="350px"/>
                <h4>Christmass </h4>
                <p>Celebrate Christmass with us experiencing Fun and Activities like Christmass Carols. Meet our Santa
                    and his Reindeers,collect Gifts and much More </p>
                <a class="btn" href="#">Learn More</a>
            </div>
        </div><br/>
    </section>
    <section>
        <div class="title">
            <h1>Rides and Adventures</h1>
            <div class="line1"></div>

        </div>
        <div class="row">
            <div class="col-content">
                <h2>Enjoy the Rides and Activities</h2>
                <p>Ejoy the Rides and Fun activities with your family,friends and your loved ones.Visit your favourite
                    fantasy worlds and favourite characters and have more fun,keep your soul happy &#128525</p>
                <a class="btn" href="#">Learn More</a>

            </div>
            <div class="col-img">
                <img src="https://www.tripsavvy.com/thmb/LCINurZ9u4CBjUgNKH4-4o0lJNE=/2048x1365/filters:fill(auto,1)/12372879563_d7d347f9e5_k-5c40d51a46e0fb0001d4a2e6.jpg" alt="" width="300px"/>
                <img src="https://www.travelandleisure.com/thmb/4er7IQDgyiwrHd3fmgaj4kh17OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gadget-go-coaster-DLANDRANK1216-2ee03e4bae114fdb9317a0d58c547033.jpg" alt="" width="300px"/>
                <img src="https://i.pinimg.com/originals/ad/ff/cb/adffcb4c6814451c44843e2a8e1920ff.jpg" alt="" width="300px"/>
                <img src="https://www.disneytouristblog.com/wp-content/uploads/2016/02/nemo-submarine-disneyland-sony-a7rii_1.jpg" alt="" width="300px"/>
            </div>

        </div>
    </section>
    <section class="sec">
        
        <div class="title">
            <h1>Explore The Adventures</h1>
            <div class="line1"></div>
        </div>
        <div class="Adv">
            <h2>More Adventures are Awaiting</h2>
            <p>Disneyland brings you many more Adventures, from Children to Grans,Enjoy and do the Adventures like
                Starwars,Tomorrowland,Indiana Jones Adventure and many more </p>
            <a class="btn" href="#">Know more</a>
        </div>
    </section>
    <section class="footer">
        <div class="row2">
        <div>
            <ul class="links">
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li>©Disney. All Rights Reserved.</li>
            </ul>
            </div>
            <div>
                <ul class="links">
                    <li><a href="#">Disney Experiences</a></li>
                    <li><a href="#">Disney Plans</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div>
                  <p><a href="#"><img src="./youtube-brands-solid-full.svg" alt="" width="50px"/></a> <a href="#"><img src="./x-twitter-brands-solid-full (1).svg" alt="" width="50px"/></a><a href="#"><img src="./instagram-brands-solid-full.svg" alt="" width="50px"/></a></p>
            </div>
        </div>
    </section>


    

</div>

    )

    
}

export default Home