// purchase & total price section
let sum = 0
let count = 0;
function cartClick(target) {
  const cartName = target.innerText;
  const parts = cartName.split('\n');

  const name = parts[1]
  const priceString = parts[3].split(' ')[0];
  const price = parseFloat(priceString)

  sum += price
  const totalPrice = document.getElementById('totalPrice')
  totalPrice.innerText = sum.toFixed(2)

  const itemName = document.getElementById('itemName')
  count += 1;
  const p = document.createElement('p');
  p.innerHTML = `${count}. ${name}`;
  itemName.appendChild(p)

  // purchase button disabled & enabled
  const purchaseBtn = document.getElementById('purchaseBtn');
  if (totalPrice > totalPrice.innerText) {
    purchaseBtn.removeAttribute('disabled');
  }
  else {
    purchaseBtn.setAttribute('disabled', true);
  }

  // apply button disabled & enabled
  const applyBtn = document.getElementById('applyBtn');
  const totalPriceApply = document.getElementById('totalPrice');
  const totalPriceValue = parseFloat(totalPriceApply.innerText);
  const payTotal = document.getElementById('payTotal');

  const payTotalAdd = payTotal.innerText = sum

  if (totalPriceValue <= 200) {
    applyBtn.setAttribute('disabled', true);
  } else {
    applyBtn.removeAttribute('disabled');
  }
}


// apply coupon & math
let discountApplied = false;
document.getElementById('applyBtn').addEventListener('click', function () {
  if (discountApplied) {
    return;
  }
 
  const couponField = document.getElementById('couponField');
  const discountPrice = document.getElementById('discountPrice');
  const totalPriceElement = document.getElementById('totalPrice');
  const payTotal = document.getElementById('payTotal');

  const totalPriceString = totalPriceElement.innerText;
  const totalPrice = parseFloat(totalPriceString);

  if (couponField.value === 'SELL200') {
    const save = (totalPrice * 20) / 100;
    discountPrice.innerText = save.toFixed(2);
    const payTotalFinal = payTotal.innerText - save;
    payTotal.innerText = payTotalFinal.toFixed(2);

    discountApplied = true;
  } else {
    alert('Invalid coupon code');
  }
  couponField.value = '';
});


// Modal Section
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('purchaseBtn');
const goHomeBtn = document.getElementById('goHomeBtn');

openModalBtn.addEventListener('click', function () {
  modal.classList.remove('hidden');
});

document.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.classList.add('hidden');
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.classList.add('hidden');
  }
});

goHomeBtn.addEventListener('click', function () {
  // location.reload();
  window.location.href = 'index.html';
});


// Button Click to copy
document.getElementById('copyButton').addEventListener('click', function () {
  const textToCopy = "SELL200";
  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
});


















