const navbar = document.querySelector('#navbar')
const gifclick = document.querySelector('#anime')
const toggleBtn = document.querySelector('#theme')




document.addEventListener('scroll', change)
document.addEventListener('click', animegirl)
toggleBtn.addEventListener('click', setTheme)


function change() {
    console.log(document.documentElement.scrollTop);


    const scrollCode = document.documentElement.scrollTop


    if (scrollCode > 105) {

        navbar.style.width = '80%'
        navbar.style.left = '10%'
        navbar.style.borderRadious = '50px'
        navbar.style.top = '20px'



    }
    else {

        navbar.style.width = '100%'
        navbar.style.left = '0%'
        navbar.style.borderRadius = '50px'
        navbar.style.top = '0'

    }


}



function animegirl() {

    const modal = document.getElementById('welcome-modal');

    modal.classList.add('hidden')

    modal.style.display = 'none'





}


let flag = 0
function setTheme() {
    const btn = document.getElementById('theme')
    if (flag == 0) {


        document.body.style.backgroundColor = '#000'
        document.body.style.color = '#fff'

        if (btn) {
            btn.innerText = 'light mode'
        }
        flag = 1
    } else {

        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'

        if (btn) {
            btn.innerText = 'dark mode'

        }
        flag = 0


    }

}

let mainData = []
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
let mainchart = document.querySelector('.main-chart')
function getData() {
    fetch(url)
        .then((Response) => {
            if (Response.ok) {
                return Response.json()

            } else {
                throw new Error('error !')

            }

        })
        .then((data) => {
            console.log(data);
            mainData = data;



            data && data.map((item) => {
                let myHtml = `<ul class=" min-w-[600px] md:min-w-full flex items-center border-b text-sm md:text-base  border-pink-400 text-pink-300  *:w-[14%] p-4">
                <li class="text-fuchsia-950">${item.market_cap_rank}</li>
                <li class="flex items-center gap-2"><img src="${item.image}" width="30"><span class=" truncate"> ${item.name.length > 15 ? item.name.slice(0, 15) + "..." : item.name}</span></li>
                <li class="text-indigo-500"> ${item.current_price}</li>
                <li class="text-fuchsia-500">${item.high_24h}</li>
                <li class="text-fuchsia-200">${item.low_24h}</li>
                <li class = "${item.market_cap_change_percentage_24h < 0 ? ' text-red-400' : 'text-green-400'}">${(item.market_cap_change_percentage_24h || 0).toFixed(2)}</li>
                <li class="">chart</li>
            </ul>`
                mainchart.innerHTML += myHtml
            })
            const inpSearch = document.getElementById('search')
            inpSearch.addEventListener('input', filterItems)

            function filterItems() {
                let value = inpSearch.value.toLowerCase()

                let filterResult = mainData.filter((item) => {
                    return item.name.toLowerCase().includes(value)


                })


                mainchart.innerHTML = ''

                filterResult.map((item) => {
                    let myHtml = `<ul class="w-full flex border-b border-pink-400 text-pink-300  *:w-[14%] p-4">
                <li class="text-fuchsia-950">${item.market_cap_rank}</li>
                <li class="flex items-center gap-2"><img src="${item.image}" width="30"><span> ${item.name.length > 15 ? item.name.slice(0, 15) + "..." : item.name}</span></li>
                <li class="text-indigo-500"> ${item.current_price}</li>
                <li class="text-fuchsia-500">${item.high_24h}</li>
                <li class="text-fuchsia-200">${item.low_24h}</li>
                <li class = "${item.market_cap_change_percentage_24h < 0 ? ' text-red-400' : 'text-green-400'}">${item.market_cap_change_percentage_24h.toFixed(2)}</li>
                <li class="">chart</li>
            </ul>`
                    mainchart.innerHTML += myHtml
                })

            }






        })
        .catch((error) => {
            console.log(error)
        })



}

getData()






// clock

function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    const now = new Date();


    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');


    clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}


setInterval(updateClock, 1000);

updateClock();


window.addEventListener('scroll', function () {
    const endMsg = document.getElementById('end-msg');
    if (!endMsg) return; 

    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 10) {
        endMsg.classList.remove('hidden');
    } else {
        endMsg.classList.add('hidden');
    }
});

const cuteMessage = document.getElementById("cuteMessage");
let shown = false;


window.addEventListener("scroll", () => {
    if (shown) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight / 2) {
        cuteMessage.classList.remove("right-[-400px]");
        cuteMessage.classList.add("right-5");
        shown = true;
    }
});


document.addEventListener("click", (e) => {
    if (!cuteMessage.contains(e.target)) {
        cuteMessage.classList.remove("right-5");
        cuteMessage.classList.add("right-[-400px]");
    
    }
});