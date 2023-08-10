export const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: "VND"
    }).format(price);
}

export const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };