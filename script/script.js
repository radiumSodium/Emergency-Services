
let count =0;

//  Heart Count
let heartCountElement = document.getElementById('heart-count');
heartCountElement.innerText = count;
  let heartIcon = document.querySelectorAll('.heart-icon');

  heartIcon.forEach( (heart) => {
    heart.addEventListener('click', () => {
        count += 1;

        heartCountElement.innerText = count;
        console.log(count);
    });
  });

// Copy count
let copy = 0;
let copyCountElement = document.getElementById('copy-text');

let copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
       
        let cardNumber = button.closest('.card').querySelector('.card-number').innerText;

        navigator.clipboard.writeText(cardNumber)
            .then(() => {
                
                copy++;
                copyCountElement.innerText = copy;

                alert(`${cardNumber} is copied to clipboard.`);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });
});


// History section 

let callButtons = document.querySelectorAll('.call-button');
let callHistoryContainer = document.querySelector('.callhistory');



callButtons.forEach(button => {
    button.addEventListener('click', () => {

        let card = button.closest('.card');
        let cardTitle = card.querySelector('.card-heading').innerText;
        let cardNumber = card.querySelector('.card-number').innerText;
        let coinNumber = document.getElementById('coin-count').innerText;

        let coin = parseInt(coinNumber);

        if (coin <= 0){
            alert("Inefficient coin. You need 20 coins to make a call.");
            
        }else{
            alert(`📞 Calling ${cardTitle} (${cardNumber})...`);

            coin-=20;
            document.getElementById('coin-count').innerText = coin;
            

            let currentTime = new Date().toLocaleTimeString();

            // Create a history card dynamically
            let historyCard = document.createElement('div');
            historyCard.className = 'call-card flex bg-[#FAFAFA] p-2 justify-between items-center gap-4 mt-2';

            historyCard.innerHTML = `
                <div>
                    <p class="font-semibold text-lg text-[#5C5C5C]">${cardTitle}</p>
                    <p class="text-[#111111]">${cardNumber}</p>
                </div>
                <div>
                    ${currentTime}
                </div>
            `;
            callHistoryContainer.prepend(historyCard);
        }
        
    });
});


// Clear button
const clearBtn = document.getElementById('clear-button');
const historyContainer = document.getElementById('callhistory');

clearBtn.addEventListener('click', () => {
  historyContainer.innerHTML = '';
  alert('History cleared!');
});