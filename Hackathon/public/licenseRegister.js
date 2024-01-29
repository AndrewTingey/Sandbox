class LotSpot {
    constructor(date, time, dayOfWeek, location, row, available) {
        this.date = date;
        this.time = time;
        this.dayOfWeek = dayOfWeek;
        this.location = location;
        this.row = row;
        this.available = available;
    }
}


const lotSpots = [
    new LotSpot("Jan 10", "09:00 am", "Mon", "South Campus Isles Y-Lot", "Row 1 & 2", true),
    new LotSpot("Jan 10", "10:00 am", "Mon", "West of Lavell Edwards Stadium", "Row 1 & 2", true),
    new LotSpot("Jan 10", "11:00 am", "Mon", "West of Lavell Edwards Stadium", "Row 1 & 2", true),
    new LotSpot("Jan 10", "12:00 pm", "Mon", "South Campus Isles Y-Lot", "Row 1 & 2", true),
    new LotSpot("Jan 10", "8:00 am", "Mon", "South Campus Isles Y-Lot", "Row 1 & 2", false)
];

const spotList = document.getElementById("spotsList");

// Clear existing list items
spotList.innerHTML = "";

lotSpots.forEach(lotSpot => {
    const li = document.createElement("li");
    li.classList.add('list-group-item')
    li.style.display = "flex"; // Set display to flex
    li.style.alignItems = "center"; // Center align items vertically

    // Left side with flex weight of 1
    const leftSide = document.createElement("div");
    leftSide.style.flex = "1";
    leftSide.style.display = "flex";
    leftSide.style.flexDirection = "column";
    leftSide.style.gap = "4px";

    const dayOfWeek = document.createElement("div");
    dayOfWeek.textContent = lotSpot.dayOfWeek;
    leftSide.appendChild(dayOfWeek);

    const date = document.createElement("div");
    date.textContent = lotSpot.date;
    date.style.fontWeight = "bold";
    leftSide.appendChild(date);

    const time = document.createElement("div");
    time.textContent = lotSpot.time;
    leftSide.appendChild(time);

    li.appendChild(leftSide);

    // Right side with flex weight of 2
    const middleSection = document.createElement("div");
    middleSection.style.flex = "2";
    middleSection.style.display = "flex";
    middleSection.style.flexDirection = "column";
    middleSection.style.gap = "4px";

    const location = document.createElement("div");
    location.textContent = lotSpot.location;
    location.style.fontWeight = "bold";
    middleSection.appendChild(location);

    const rowNumber = document.createElement("div");
    rowNumber.textContent = lotSpot.row;
    middleSection.appendChild(rowNumber);

    li.appendChild(middleSection);

    // Right side with flex weight of 1
    const rightSide = document.createElement("div");
    middleSection.style.flex = "1";
    middleSection.style.display = "flex";
    middleSection.style.flexDirection = "column";
    middleSection.style.gap = "4px";

    // Button
    const availability = document.createElement("button");
    availability.classList.add("reserve-button");
    availability.classList.add("continue");
    availability.style.flex = "1";
    availability.textContent = "Reserve";
    availability.disabled = !lotSpot.available;
    availability.style.pointerEvents = lotSpot.available ? "auto" : "none";

    availability.addEventListener("click", function(event) {
        event.preventDefault();

        var questionairre = document.querySelector('.questionairre');
        shiftAmount -= 100;
        questionairre.style.transform = 'translateX(' + shiftAmount + 'vw)';

        // var map = new google.maps.Map(document.getElementById('map'), {
        //     center: { lat: 40.2518, lng: -111.6493 },
        //     zoom: 14
        // });
    });

    rightSide.appendChild(availability);

    // // Message
    // const message = document.createElement("div");
    // message.textContent = "Some message";
    // message.style.flex = "1";
    // rightSide.appendChild(message);

    li.appendChild(rightSide);

    spotList.appendChild(li);
});

const checkinList = document.getElementById("checkinList");

document.addEventListener("keydown", function(event) {
    let children = checkinList.children;

    if (event.key === "g") {
        for (let i = 0; i < children.length; i++) {
            if (!children[i].classList.contains("good")) {
                children[i].classList.add("good");
                children[i].classList.remove("notGood");
                break;
            }
        }
    } else if (event.key === "b") {
        for (let i = 0; i < children.length; i++) {
            if (!children[i].classList.contains("notGood")) {
                children[i].classList.remove("good");
                children[i].classList.add("notGood");
                break;
            }
        }
    }
});
