import moment from 'moment';

const rate = 0.16; // 16% per year, simple interest
const principal = 1950; // 16% per year, simple interest

window.addEventListener('load', () => {
    const seconds = moment().diff(moment('2017-08-11'), 'seconds');
    const interest = getInterest(seconds);

    let interestElement = document.getElementById('interest');
    interestElement.innerText = '$' + interest;

    let totalElement = document.getElementById('total');
    totalElement.innerText = '$' + (1950 + 85 + 6 + interest);
});

function getInterest(seconds: number): number {
    let annual = principal * rate;
    return +(annual * seconds / 365 / 24 / 60 / 60).toFixed(2);
}
