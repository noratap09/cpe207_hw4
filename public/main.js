const myForm = document.querySelector('#my-form');
show_data = document.getElementById('show_data');
subject = document.getElementById('Subject');
ck_subject = document.getElementById('ck_subject');
massage = document.getElementById('Massage');
ck_massage = document.getElementById('ck_massage');
Name = document.getElementById('Name');
ck_Name = document.getElementById('ck_name');
gender = document.getElementById('Gender');
phone = document.getElementById('Phone');
ck_phone = document.getElementById('ck_phone');
email = document.getElementById('Email');
ck_email = document.getElementById('ck_email');
myForm.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    console.log(e);
    console.log(myForm);
    if(subject.value!="" && massage.value!="" && Name.value!="" && phone.value!="" && email.value!="")
    {
        ck_subject.innerHTML = "";
        ck_massage.innerHTML = "";
        ck_Name.innerHTML = "";
        ck_phone.innerHTML = "";
        ck_email.innerHTML = "";
        var d = new Date();
        var key = d.getTime();
        //alert(n);
        var data = "<table id='"+key+"' style='background-color:orange;color:black'><tr ><td width='10%'>Subject:</td><td>"+subject.value+"</td></tr>";
        data = data + "<tr><td width='10%'>Massage:</td><td>"+massage.value.replace(/\n/g, '<br>')+"</td></tr>";
        data = data + "<tr><td width='10%'>Name:</td><td>"+Name.value+"</td></tr>";
        data = data + "<tr><td width='10%'>Gender:</td><td>"+gender.value+"</td></tr>";
        data = data + "<tr><td width='10%'>Phone:</td><td>"+phone.value+"</td></tr>";
        data = data + "<tr><td width='10%'>Email:</td><td>"+email.value+"</td></tr>";
        data = data + "<tr><td align='center' colspan='2'><input onclick='remove("+key+")' type='button' value='Remove'/></td></tr></table>";
        var old_data = show_data.innerHTML+data;
        show_data.innerHTML = old_data;
        save_data();
        subject.value = "";
        massage.value = "";
        Name.value = "";
        gender.value = "male"
        phone.value = "";
        email.value = "";
        
    }
    else
    {
        ck_subject.innerHTML = "";
        ck_massage.innerHTML = "";
        ck_Name.innerHTML = "";
        ck_phone.innerHTML = "";
        ck_email.innerHTML = "";
        if(subject.value=="")
        {
            //alert("Subject is Empty !!!");
            ck_subject.innerHTML = "Subject is Empty !!!";
            subject.focus();
        }
        if(massage.value=="")
        {
            //alert("Massage is Empty !!!");
            ck_massage.innerHTML = "Massage is Empty !!!";
            massage.focus();
        }
        if(Name.value=="")
        {
            //alert("Name is Empty !!!");
            ck_Name.innerHTML = "Name is Empty !!!";
            Name.focus();
        }
        if(Phone.value=="")
        {
            //alert("Phone is Empty !!!");
            ck_phone.innerHTML = "Phone is Empty !!!";
            phone.focus();
        }
        if(email.value=="")
        {
            //alert("Email is Empty !!!");
            ck_email.innerHTML = "Email is Empty !!!";
            email.focus();
        }
    }
}

function remove(key)
{
    //alert(key);
    document.getElementById(key).remove();
    save_data();
}

function a1()
{
    //alert("OK");  
    read_data();
}

function save_data()
{
    var playersRef = firebase.database().ref("data/");

    playersRef.set ({
           data : document.getElementById("show_data").innerHTML
        });
}

function read_data()
{
    var ref = firebase.database().ref();

    ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    show_data.innerHTML = snapshot.val().data.data;
    console.log(snapshot.val().data.data);
    }, function (error) {
    console.log("Error: " + error.code);
    });
}
