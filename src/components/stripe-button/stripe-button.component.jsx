import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_reL6erVQZgFHckO5OicU3NGc00O8aIAhZM';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name="CRWN Clothing Dave"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;