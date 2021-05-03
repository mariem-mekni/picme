window.onload=function(){

    navHome = document.getElementById("navHome")
    navProduct = document.getElementById("navProduct")
    navDelevery = document.getElementById("navDelevery")
    navContact = document.getElementById("navContact")
    navAbout = document.getElementById("navAbout")

    bodyPage = document.getElementById("body-page")


    navHome.addEventListener("click", function ($event){
        document.getElementById("home").classList.remove('d-none');
        document.getElementById("home").classList.add('active');
        if(document.getElementById("products").classList.contains('active')) {
            document.getElementById("products").classList.remove('active')
            document.getElementById("products").classList.add('d-none')
        }
        if(document.getElementById("contact-us").classList.contains('active')) {
            document.getElementById("contact-us").classList.remove('active')
            document.getElementById("contact-us").classList.add('d-none')
        }
        if(document.getElementById("delevery").classList.contains('active')) {
            document.getElementById("delevery").classList.remove('active')
            document.getElementById("delevery").classList.add('d-none')
        }
        if(document.getElementById("about").classList.contains('active')) {
            document.getElementById("about").classList.remove('active')
            document.getElementById("about").classList.add('d-none')
        }
        this.classList.add('active')
        navDelevery.classList.remove('active')
        navContact.classList.remove('active')
        navProduct.classList.remove('active')
        navAbout.classList.remove('active')
    });
    navProduct.addEventListener("click", function ($event){
        document.getElementById("products").classList.remove('d-none');
        document.getElementById("products").classList.add('active');
        if(document.getElementById("home").classList.contains('active')) {
            document.getElementById("home").classList.remove('active')
            document.getElementById("home").classList.add('d-none')
        }
        if(document.getElementById("contact-us").classList.contains('active')) {
            document.getElementById("contact-us").classList.remove('active')
            document.getElementById("contact-us").classList.add('d-none')
        }
        if(document.getElementById("about").classList.contains('active')) {
            document.getElementById("about").classList.remove('active')
            document.getElementById("about").classList.add('d-none')
        }
        if(document.getElementById("delevery").classList.contains('active')) {
            document.getElementById("delevery").classList.remove('active')
            document.getElementById("delevery").classList.add('d-none')
        }
        this.classList.add('active')
        navHome.classList.remove('active')
        navContact.classList.remove('active')
        navAbout.classList.remove('active')
        navDelevery.classList.remove('active')
    });
    navDelevery.addEventListener("click", function ($event){
        document.getElementById("delevery").classList.remove('d-none');
        document.getElementById("delevery").classList.add('active');

        if(document.getElementById("products").classList.contains('active')) {
            document.getElementById("products").classList.remove('active')
            document.getElementById("products").classList.add('d-none')
        }
        if(document.getElementById("about").classList.contains('active')) {
            document.getElementById("about").classList.remove('active')
            document.getElementById("about").classList.add('d-none')
        }
        if(document.getElementById("contact-us").classList.contains('active')) {
            document.getElementById("contact-us").classList.remove('active')
            document.getElementById("contact-us").classList.add('d-none')
        }
        if(document.getElementById("home").classList.contains('active')) {
            document.getElementById("home").classList.remove('active')
            document.getElementById("home").classList.add('d-none')
        }
        this.classList.add('active')
        navHome.classList.remove('active')
        navContact.classList.remove('active')
        navAbout.classList.remove('active')
        navProduct.classList.remove('active')

    });
    navContact.addEventListener("click", function ($event) {
        document.getElementById("contact-us").classList.remove('d-none');
        document.getElementById("contact-us").classList.add('active');
        if(document.getElementById("home").classList.contains('active')) {
            document.getElementById("home").classList.remove('active')
            document.getElementById("home").classList.add('d-none')
        }
        if(document.getElementById("products").classList.contains('active')) {
            document.getElementById("products").classList.remove('active')
            document.getElementById("products").classList.add('d-none')
        }
        if(document.getElementById("about").classList.contains('active')) {
            document.getElementById("about").classList.remove('active')
            document.getElementById("about").classList.add('d-none')
        }
        if(document.getElementById("delevery").classList.contains('active')) {
            document.getElementById("delevery").classList.remove('active')
            document.getElementById("delevery").classList.add('d-none')
        }
        this.classList.add('active')
        navHome.classList.remove('active')
        navDelevery.classList.remove('active')
        navAbout.classList.remove('active')
        navProduct.classList.remove('active')
    });
    navAbout.addEventListener("click", function ($event) {
        document.getElementById("about").classList.remove('d-none');
        document.getElementById("about").classList.add('active');
        if(document.getElementById("home").classList.contains('active')) {
            document.getElementById("home").classList.remove('active')
            document.getElementById("home").classList.add('d-none')
        }
        if(document.getElementById("contact-us").classList.contains('active')) {
            document.getElementById("contact-us").classList.remove('active')
            document.getElementById("contact-us").classList.add('d-none')
        }
        if(document.getElementById("products").classList.contains('active')) {
            document.getElementById("products").classList.remove('active')
            document.getElementById("products").classList.add('d-none')
        }
        if(document.getElementById("delevery").classList.contains('active')) {
            document.getElementById("delevery").classList.remove('active')
            document.getElementById("delevery").classList.add('d-none')
        }
        this.classList.add('active')
        navHome.classList.remove('active')
        navDelevery.classList.remove('active')
        navContact.classList.remove('active')
        navProduct.classList.remove('active')
    });




    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.responseType = 'json'

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            this.onload  = function() {
                let jsonResponse = this.response;
                document.getElementById("new-case").innerHTML = jsonResponse.response[0].cases.new
                document.getElementById("total-case").innerHTML = jsonResponse.response[0].cases.total
                document.getElementById("total-recovered").innerHTML = jsonResponse.response[0].cases.recovered
                document.getElementById("new-death").innerHTML = jsonResponse.response[0].deaths.new
                document.getElementById("total-death").innerHTML = jsonResponse.response[0].deaths.total
                document.getElementById("total-number").innerHTML = jsonResponse.response[0].tests.total
            };
        }
    });

    xhr.open("GET", "https://covid-193.p.rapidapi.com/statistics?country=tunisia");
    xhr.setRequestHeader("x-rapidapi-key", "a1f1d80947mshbb15f12a60c107dp18515bjsnd0cbd7396c8f");
    xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");

    xhr.send(data);

}
