
document.getElementById ('login-btn').addEventListener ('click', function (event) {
    event.preventDefault ();
    const phone = document.getElementById ('phone').value;
    const pin = document.getElementById ('pin').value;
    console.log (phone, pin);
})
