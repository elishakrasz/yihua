import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ISRFvJcZtxAUyigR5wSQB7btpZq7kigN1fPIgcdQ1GF9GU5beRedTFX2fRKJdQte722abtWhHaY5gFmtg23cMky009l2BoxAc'

    const onToken = token => {
        axios({
          url: `http://localhost:5000/payment`,
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };
    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;

