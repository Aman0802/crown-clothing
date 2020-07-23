import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //for converting it to cents because stripe accepts payment value in cents
  const publishableKey =
    "pk_test_51H7jhsFnqDkYLAYJdj5aMcS9QfZebNfuxkm8uatrjs58VF6V3fWbCGwGJ8YYOuBC3wpIF0CmCaT2GueuCAvTPZDJ00TKtb4nJT";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
