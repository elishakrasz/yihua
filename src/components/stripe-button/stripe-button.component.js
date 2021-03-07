import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ISRFvJcZtxAUyigR5wSQB7btpZq7kigN1fPIgcdQ1GF9GU5beRedTFX2fRKJdQte722abtWhHaY5gFmtg23cMky009l2BoxAc'

    const onToken = token => {
        console.log(token)
        alert('pay processed successfully!!')
    }
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

