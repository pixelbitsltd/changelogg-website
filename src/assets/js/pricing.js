function selectPricing(e) {
  const { target } = e;

  const pricing = target.dataset['pricing'];

  posthog.capture('user_selected_pricing', {
    pricing,
  });

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("pricing", pricing);

  const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
  history.pushState(null, '', newRelativePathQuery);
}

function assignDynamicPricing(pricing) {
  for (const [category, { monthly, annual }] of Object.entries(pricing)) {
    const categoryId = `${category}-pricing`;
    const monthlyElement = document.querySelector(`#${categoryId} h2.monthly-price`);
    const annualElement = document.querySelector(`#${categoryId} h2.annual-price`);

    monthlyElement.textContent = `$${monthly}`;
    annualElement.textContent = `$${annual}`;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const pricingButtons = Array.from(document.querySelectorAll('.pricing-button'));

  for (const pricingButton of pricingButtons) {
    pricingButton.addEventListener('click', selectPricing);
  }

  posthog.onFeatureFlags(function () {
    if (posthog.getFeatureFlag('pricing-ab') === 'test') {
      const { starter, plus, pro } = posthog.getFeatureFlagPayload('pricing-ab');

      assignDynamicPricing({
        starter,
        plus,
        pro
      });
    }
  });
});
