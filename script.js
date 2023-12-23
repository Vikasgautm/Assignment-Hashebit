function bookTicket(movieId){
    document.getElementById('Movies').style.display='none';
    document.getElementById('booking-form').style.display='block';
    const form=document.getElementById('form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        const name=document.getElementById('name').Value;
        const phone=document.getElementById('phone').Value;
        const email=document.getElementById('email').Value;
        alert('Booking confirmed for ${name} (${phone}) (${email})for movie ${movieId}');
    });
}