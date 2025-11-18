let city1=document.getElementById('city1');
let city2=document.getElementById('city2');


var button=document.getElementById('btn');
        button.addEventListener('click',function(){
            if(!city1.value||!city2.value){
                alert(" Please Select  City! ");
            return;
            }
              let selectedDate = document.getElementById('travelDate').value;

    if(selectedDate === "" || selectedDate === null){
        alert("Please Select Journey Date!");
        return;
    }

    localStorage.setItem("date", selectedDate);
       let fromcity = city1.value;
let tocity = city2.value;

if (fromcity === tocity) {
    alert("Error : Choose Different Destination");
} 
else {

    const routes = {
        "delhi-kolkata": {
            train1name: "RAJDHANI EXPRESS",
            train2name: "VANDHE BHARAT",
            train1num: "#110255",
            train2num: "#112003",
            price_sl1: "350",
            price_sl2: "450",
            price_3a1: "1070",
            price_3a2: "1350",
            price_2a1: "2250",
            price_2a2: "2550",
            price_1a1: "4150",
            price_1a2: "4550"
        },
        "delhi-mumbai": {
            train1name: "MUMBAI EXPRESS",
            train2name: "VANDHE BHARAT",
            train1num: "#110256",
            train2num: "#112003",
            price_sl1: "450",
            price_sl2: "550",
            price_3a1: "1050",
            price_3a2: "1350",
            price_2a1: "2250",
            price_2a2: "2550",
            price_1a1: "4250",
            price_1a2: "4550"
        },
        "delhi-chennai": {
            train1name: "CHENNAI EXPRESS",
            train2name: "DELHI EXPRESS",
            train1num: "#110255",
            train2num: "#112803",
            price_sl1: "450",
            price_sl2: "550",
            price_3a1: "1050",
            price_3a2: "1250",
            price_2a1: "2250",
            price_2a2: "2550",
            price_1a1: "4150",
            price_1a2: "4550"
        },

        "mumbai-kolkata": {
            train1name: "RAJDHANI EXPRESS",
            train2name: "SHATABDI EXPRESS",
            train1num: "#110255",
            train2num: "#114503",
            price_sl1: "350",
            price_sl2: "450",
            price_3a1: "1150",
            price_3a2: "1250",
            price_2a1: "2150",
            price_2a2: "2750",
            price_1a1: "4150",
            price_1a2: "4350"
        },

        "chennai-kolkata": {
            train1name: "CHENNAI EXPRESS",
            train2name: "TEJAS EXPRESS",
            train1num: "#110755",
            train2num: "#112403",
            price_sl1: "450",
            price_sl2: "550",
            price_3a1: "1050",
            price_3a2: "1250",
            price_2a1: "2250",
            price_2a2: "2550",
            price_1a1: "4250",
            price_1a2: "4550"
        },

        "kolkata-delhi": {
            train1name: "RAJDHANI EXPRESS",
            train2name: "VANDHE BHARAT",
            train1num: "#110255",
            train2num: "#112003",
            price_sl1: "450",
            price_sl2: "550",
            price_3a1: "1150",
            price_3a2: "1250",
            price_2a1: "2350",
            price_2a2: "2550",
            price_1a1: "4150",
            price_1a2: "4550"
        },

        "chennai-delhi": {
            train1name: "GATIMAN EXPRESS",
            train2name: "HUMSAFAR EXPRESS",
            train1num: "#110255",
            train2num: "#112003",
            price_sl1: "350",
            price_sl2: "450",
            price_3a1: "1070",
            price_3a2: "1350",
            price_2a1: "2250",
            price_2a2: "2550",
            price_1a1: "4250",
            price_1a2: "4550"
        },

        "mumbai-chennai": {
            train1name: "CHENNAI EXPRESS",
            train2name: "HUMSAFAR EXPRESS",
            train1num: "#110255",
            train2num: "#112003",
            price_sl1: "450",
            price_sl2: "570",
            price_3a1: "1050",
            price_3a2: "1250",
            price_2a1: "2250",
            price_2a2: "2550",
            price_1a1: "4250",
            price_1a2: "4750"
        },

        "mumbai-delhi": {
            train1name: "MUMBAI EXPRESS",
            train2name: "HUMSAFAR EXPRESS",
            train1num: "#110255",
            train2num: "#112003",
            price_sl1: "750",
            price_sl2: "850",
            price_3a1: "1050",
            price_3a2: "1250",
            price_2a1: "2250",
            price_2a2: "2550",
            price_1a1: "4250",
            price_1a2: "5550"
        },

        "chennai-mumbai": {
            train1name: "CHENNAI EXPRESS",
            train2name: "HUMSAFAR EXPRESS",
            train1num: "#110255",
            train2num: "#112003",
            price_sl1: "450",
            price_sl2: "650",
            price_3a1: "1050",
            price_3a2: "1250",
            price_2a1: "2250",
            price_2a2: "2550",
            price_1a1: "4350",
            price_1a2: "4550"
        },

        "kolkata-mumbai": {
            train1name: "RAJDHANI EXPRESS",
            train2name: "VANDHE BHARAT",
            train1num: "#110255",
            train2num: "#112003",
            price_sl1: "450",
            price_sl2: "750",
            price_3a1: "1050",
            price_3a2: "1450",
            price_2a1: "2250",
            price_2a2: "2550",
            price_1a1: "4250",
            price_1a2: "4850"
        }
    };

    let key = `${fromcity}-${tocity}`;

    if (routes[key]) {
        // store everything automatically
        Object.entries(routes[key]).forEach(([k, v]) => {
            localStorage.setItem(k, v);
        });

        localStorage.setItem("fromcity", fromcity);
        localStorage.setItem("tocity", tocity);

        window.location.href = "nextpage.html";
    }
    else {
        alert("No Train found!");
    }
}
        });