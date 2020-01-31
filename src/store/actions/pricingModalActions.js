export const PRICING_MODAL_OPEN = 'PRICING_MODAL_OPEN';
export const PRICING_MODAL_CLOSE = 'PRICING_MODAL_CLOSE';

export const pricingModalOpen = () => dispatch =>
  dispatch({
    type: PRICING_MODAL_OPEN
  });

export const pricingModalClose = () => dispatch =>
  dispatch({
    type: PRICING_MODAL_CLOSE
  });
