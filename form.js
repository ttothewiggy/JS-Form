function ProcessForm()
{
    var form_name = document.getElementById('form_name').value;
    var form_address = document.getElementById('form_address').value;
    var form_message = document.getElementById('form_message').value;

    document.getElementById('display').style.display = "block";

    document.getElementById('name').innerHTML = form_name;
    document.getElementById('email').innerHTML = form_address;
    document.getElementById('message').innerHTML = form_message;
}