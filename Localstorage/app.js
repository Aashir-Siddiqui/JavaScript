let form = document.querySelector("form");
let main = document.querySelector(".main");
let clearData = document.getElementById("clearData");
let imageInput = document.getElementById("image");
let imagePreview = document.getElementById("image-preview");

imageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            imagePreview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = e.target.uname.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;
    let image = imagePreview.src;

    let userData = JSON.parse(localStorage.getItem("userDetails")) || [];

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all credentials");
        return;
    }

    let check = userData.some(x => x.email === email || x.phone === phone);
    if (check) {
        alert("Email or Phone Number already exists");
        return;
    }

    userData.push({
        name: name,
        email: email,
        phonenumber: phone,
        image: image
    });

    localStorage.setItem("userDetails", JSON.stringify(userData));
    e.target.reset();
    imagePreview.style.display = "none";
    imagePreview.src = "";
    displayData();
});

let displayData = () => {
    let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
    let showData = '';

    userData.forEach((element, i) => {
        showData += `
            <div class="items">
                <span onclick="removeData(${i})">X</span>
                <img src="${element.image}" class="profile-pic" alt="Profile">
                <h2>Name</h2>
                <div>${element.name}</div>
                <h2>Email</h2>
                <div>${element.email}</div>
                <h2>Phone Number</h2>
                <div>${element.phonenumber}</div>
            </div>
        `;
    });
    main.innerHTML = showData;
};

let removeData = (index) => {
    let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
    userData.splice(index, 1);
    localStorage.setItem("userDetails", JSON.stringify(userData));
    displayData();
};

clearData.addEventListener("click", () => {
    localStorage.removeItem("userDetails");
    displayData();
});

displayData();