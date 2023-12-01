function pushPricingToHistory(e) {
  const { target } = e;

  const pricing = target.dataset['pricing'];

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("pricing", pricing);

  const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
  history.pushState(null, '', newRelativePathQuery);
}

document.addEventListener('DOMContentLoaded', () => {
  const pricingButtons = Array.from(document.querySelectorAll('.pricing-button'));

  for (const pricingButton of pricingButtons) {
    pricingButton.addEventListener('click', pushPricingToHistory);
  }
});
