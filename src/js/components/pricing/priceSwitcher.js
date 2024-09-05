export const usePriceSwitcher = () => {
    const switcher = document.querySelector('[data-price="switcher"]');
    const starterPrice = document.querySelector('[data-price="starter"');
    const popularPrice = document.querySelector('[data-price="popular"');
    const enterpricePrice = document.querySelector('[data-price="enterprice"');

    const priceList = {
        starter: {
            default: 120,
            withSale: 100,
        },
        popular: {
            default: 1600,
            withSale: 1400,
        },
        enterprice: {
            default: 2500,
            withSale: 2100,
        },
    };

    const setPricesDefault = () => {
        starterPrice.textContent = priceList.starter.default;
        popularPrice.textContent = priceList.popular.default;
        enterpricePrice.textContent = priceList.enterprice.default;
    };

    const setPricesWitchSale = () => {
        starterPrice.textContent = priceList.starter.withSale;
        popularPrice.textContent = priceList.popular.withSale;
        enterpricePrice.textContent = priceList.enterprice.withSale;
    };

    switcher.checked = true;
    setPricesWitchSale();
    setPricesDefault();

    switcher.addEventListener('click', () => {
        if (switcher.checked) {
            setPricesWitchSale();
        } else {
            setPricesDefault();
        }
    });
};
