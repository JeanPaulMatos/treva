const toggle = document.getElementById('toggle');
const standarPrice = document.getElementById('standar-price');
const businessPrice = document.getElementById('business-price');
const premiumPrice = document.getElementById('premium-price');
const annual = document.getElementById('annual');
const montly = document.getElementById('montly');
const priceText = document.getElementsByClassName('price__container--cards--card--plan--container--text');

toggle.addEventListener('change', () => {

    if (toggle.checked) {

        toggle.style.backgroundColor = '#DADADA';
        standarPrice.innerHTML = '$199';
        businessPrice.innerHTML = '$257';
        premiumPrice.innerHTML = '$399';
        
    } else {
        
        toggle.style.backgroundColor = '#4A4EDD'
        standarPrice.innerHTML = '$127';
        businessPrice.innerHTML = '$159';
        premiumPrice.innerHTML = '$199';

    }

})

