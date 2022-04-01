/* We initialize the global variables and use it to help us get the document that we want.*/
var content = document.getElementById("BusinessNews1");
var M = document.getElementById("ShortIntro1");
var S = document.getElementById("ShowLess1");
var btn2 = document.getElementById("VideoButton2");
var btn3 = document.getElementById("VideoButton3");
var btn4 = document.getElementById("VideoButton4");
var source = document.getElementById("VideoPlayer");
var source1 = "Video/pexels-los-muertos-crew-7947688.mp4";
var source2 = "Video/video.mp4";
var source3 = "Video/Simpsons.mp4";
var MenuToggle = document.getElementById("NavigationDiv");
var World = document.getElementById("WorldNewsContainer");
var Technology = document.getElementById("TechnologyNewsContainer");
var Business = document.getElementById("BusinessNewsContainer");
var Other = document.getElementById("OtherNewsContainer");
var mmObj = window.matchMedia("(min-width:1000px)");
var mmObj2 = window.matchMedia("(min-width:0px) and (max-width:1000px)");
var buttonBacktoTop = document.getElementById("BacktoTopBtn")


/* This is the function for the button to return to the top of the page. */

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        buttonBacktoTop.style.display = "block";
    }
    else {
        buttonBacktoTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/* The Change Video 1,2,3 function is used to change video. by clicking on the buttons, we change the source of the video from the video displaying to the one that is displayed as none and it swaps the source, description of the video and header of the video when it is clicked on. */
function changeVideo() {
    var p = source1;
    var g = source.src;
    source.src = p;
    source1 = g;
    var xy = document.getElementById("Pic1").src;
    var yx = document.getElementById("Pic0").src;
    document.getElementById("Pic0").src = xy;
    document.getElementById("Pic1").src = yx;


    var x = document.getElementById("OtherVideoTitle1").innerHTML;
    var y = document.getElementById("VideoNewsTitle").innerHTML;
    document.getElementById("OtherVideoTitle1").innerHTML = y;
    document.getElementById("VideoNewsTitle").innerHTML = x;
    var z = document.getElementById("ParagraphVideo").innerHTML;
    var l = document.getElementById("OtherVideoParagraph1").innerHTML;
    document.getElementById("ParagraphVideo").innerHTML = l;
    document.getElementById("OtherVideoParagraph1").innerHTML = z;
}

function changeVideo2() {
    var u = source2
    var t = source.src
    source.src = u
    source2 = t

    var xy = document.getElementById("Pic2").src;
    var yx = document.getElementById("Pic0").src;
    document.getElementById("Pic0").src = xy;
    document.getElementById("Pic2").src = yx;

    var w = document.getElementById("OtherVideoTitle2").innerHTML;
    var v = document.getElementById("VideoNewsTitle").innerHTML;
    document.getElementById("OtherVideoTitle2").innerHTML = v;
    document.getElementById("VideoNewsTitle").innerHTML = w;
    var n = document.getElementById("ParagraphVideo").innerHTML;
    var i = document.getElementById("OtherVideoParagraph2").innerHTML;
    document.getElementById("ParagraphVideo").innerHTML = i;
    document.getElementById("OtherVideoParagraph2").innerHTML = n;
}




function changeVideo3() {
    var a = source3;
    var b = source.src;
    source.src = a;
    source3 = b;

    var xy = document.getElementById("Pic3").src;
    var yx = document.getElementById("Pic0").src;
    document.getElementById("Pic0").src = xy;
    document.getElementById("Pic3").src = yx;


    var c = document.getElementById("OtherVideoTitle3").innerHTML;
    var d = document.getElementById("VideoNewsTitle").innerHTML;
    document.getElementById("OtherVideoTitle3").innerHTML = d;
    document.getElementById("VideoNewsTitle").innerHTML = c;
    var e = document.getElementById("ParagraphVideo").innerHTML;
    var f = document.getElementById("OtherVideoParagraph3").innerHTML;
    document.getElementById("ParagraphVideo").innerHTML = f;
    document.getElementById("OtherVideoParagraph3").innerHTML = e;
};



/* This function brings you to the various pages when clicked onto */

function HipHopNews() {
    location.href = "HipHopNews.html";
};


function TechnologyNews() {
    location.href = "ChipMakerNews.html";
};

function UkraineTensionNews() {
    location.href = "UkraineTensionNews.html";
};

function BearMarketNews() {
    location.href = "BearMarketNews.html";
};

function InterestRateNews() {
    location.href = "InterestRateRiseNews.html";
}



/* The function to help users use the toggle menu button. If the toggle menu button is clicked onto, it will show up the 5 links that will bring you to home and other news site.*/


function ToggleMenu() {

    if (mmObj2.matches) {
        if (MenuToggle.style.display == "none") {
            MenuToggle.style.display = "grid";
        }
        else if (MenuToggle.style.display = "grid") {
            MenuToggle.style.display = "none";
        }

    }

}
/* The function to help users use the toggle menu button. If the toggle menu button is clicked onto, it will show up the links in world news.*/
function ToggleWorld() {
    if (mmObj2.matches) {
        if (World.style.display == "none") {
            World.style.display = "block";
        }
        else if (World.style.display = "block") {
            World.style.display = "none";
        }
    }


}


/* The function to help users use the toggle menu button. If the toggle menu button is clicked onto, it will show up the links in Business news.*/
function ToggleBusiness() {

    if (mmObj2.matches) {
        if (Business.style.display == "none") {
            Business.style.display = "block";
        }
        else if (Business.style.display = "block") {
            Business.style.display = "none";
        }
    }
}

/* The function to help users use the toggle menu button. If the toggle menu button is clicked onto, it will show up the links in Technology news.*/
function ToggleTechnology() {

    if (mmObj2.matches) {
        if (Technology.style.display == "none") {
            Technology.style.display = "block";
        }
        else if (Technology.style.display = "block") {
            Technology.style.display = "none";
        }
    }
}

/* The function to help users use the toggle menu button. If the toggle menu button is clicked onto, it will show up the links in Other news.*/
function ToggleOther() {
    if (mmObj2.matches) {
        if (Other.style.display == "none") {
            Other.style.display = "block";
        }
        else if (Other.style.display = "block") {
            Other.style.display = "none";
        }

    }
}


/* The function to help the webpage identify when its width is above 1000 px, so that it will not be displayed as none.*/
function MenuAppear(x) {
    if (x.matches) {
        MenuToggle.style.display = "inline-block";
        MenuToggle.textAlign = "center";

    }
    else {
        MenuToggle.style.display = "none";
    }

}
/* The function to help the webpage identify when its width is above 1000 px, so that it will not be displayed as none.*/
mmObj.addListener(MenuAppear)


/* the variables used for handlebars. */
/*  <!-- Handlebarsjs.com. 2019. Introduction | Handlebars. [online] Available at: <https://handlebarsjs.com/guide/#partials> [Accessed 27 March 2022]. --> */
var HandleBarSideInfo = document.getElementById("HandleBarSide-template").innerHTML;
var SideTemplate = Handlebars.compile(HandleBarSideInfo);
var dataSide = SideTemplate({
    Business: "Bear Market In Sights!",
    Business2: "Interest Rates To Rise",
    Technology: "Chipmakers Facing A Shortage Of Resources",
    HipHop: "HipHop Making Big Bucks",
    SideNewsHeader: "Other Articles",
    SideImageSource1: "Image/jamie-street-VP4WmibxvcY-unsplash.jpg",
    SideImageSource2: "Image/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg",
    SideImageSource3: "Image/elza-kurbanova-f8MLY_HKwqQ-unsplash.jpg",
    SideImageSource4: "Image/ibrahim-boran-_aUwE2DnIPg-unsplash.jpg",
    UkraineTension: "Ukraine And Russia at Conflict",
    SideImageSource5: "Image/ux-gun-5Mj4PO7KIFc-unsplash.jpg",
    SideImageAlt1: "FTSE -6.83%",
    SideImageAlt2: "computer chips",
    SideImageAlt3: "HipHop Old Magazines",
    SideImageAlt4: "dollar bills",
    SideImageAlt5: "A picture of fighter jet",
})

document.getElementById("HandleBarSideNews1").innerHTML += dataSide;

/* <!-- Handlebarsjs.com. 2019. Introduction | Handlebars. [online] Available at: <https://handlebarsjs.com/guide/#partials> [Accessed 27 March 2022]. --> */
var HandleBarUkraineTensionNewsinfo = document.getElementById("HandleBar-template").innerHTML;
var Template = Handlebars.compile(HandleBarUkraineTensionNewsinfo);
var data = Template({
    NewsHeader: "World News",
    Time: "630PM SGT",
    NewsTitle: "Ukraine's Tension With Russia",
    ImageDescription:"Fighter Jet",
    ImageAlt:"FighterJet",
    DescriptionParagraph: "Ukraine's Tension With Russia has escalated since 2014, whereby a pro-Russian president was elected for Ukraine and protests were ongoing as people were unhappy with the then president. Fast forward to 2021, Ukrainian President Volodymyr Zelenskyy asked Joe Biden to join the NATO alliance. Russian troops then began to gather around Ukraine's borders as Russia was opposed to Ukraine joining Nato which will signify losses for the Soviet Union.",
    DescriptionParagraph2: "Thousands of lives will be at risk if Russia decide to carry on with their aggression towards Ukraine and if NATO does not step in to defend Ukraine, Ukraine might be taken over by Russia again. Will we see the rise of another Soviet Union or will countries from NATO step in to defend Ukraine from the big bully Russia.",
    DescriptionParagraph3: "Countries such as US,Taiwan and several other NATO country have come together to put a sanction to impair Russia's economic situation as Russia has been seen as an aggressor by these countries. Russia's Stock Index immediately plunged 50% after receiving such a negative news. Political instability, ongoing wars are one of the most common factor which led to a decrease in a country's stock index. Will Russia be gaining more from this war or will they lose out from the attacks to Ukraine? We are anticipating a further plunge in Russia's Stock Index as the conflicts are still ongoing and investors do not like additional risks.",
    ImageSource: "Image/ux-gun-5Mj4PO7KIFc-unsplash.jpg",
})


document.getElementById("HandleBarUkraineTension").innerHTML += data;

/* The function to move back and forth in the pictures in chipmakernews */
/* GitHub. 2021. WebDevSimplified - Overview. [online] Available at: <https://github.com/WebDevSimplified> [Accessed 27 March 2022]. I have thought about it by watching his video and think about how to do it in a simpler way and this is the result of having two buttons which goes back and forth. */

function nextslide() {
    let x = document.querySelector("[data-slides]");
    let y = document.querySelector("[data-active]");
    let z = [...x.children].indexOf(y);
    console.log(z);
    console.log(x.children.length);
    z = z + 1

    if (z >= x.children.length) {
        z = 0;
    }

    x.children[z].setAttribute("data-active", "")
    y.removeAttribute("data-active");
    console.log(z)

}


function previousSlide() {
    let x = document.querySelector("[data-slides]");
    let y = document.querySelector("[data-active]");
    let z = [...x.children].indexOf(y);
    console.log(z);
    console.log(x.children.length);
    z = z - 1

    if (z < 0) {
        z = 2;
    }

    x.children[z].setAttribute("data-active", "")
    y.removeAttribute("data-active");
    console.log(z)

}



