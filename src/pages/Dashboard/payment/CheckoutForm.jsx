import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Loading from './../../../shared/Loading/Loading'

const CheckoutForm = ({booking}) => {
  const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("")
    const [cardError, setCardError] = useState("")
    const [transactionId, setTransactionId] = useState("")
    const [proccessing, setProccessing]  = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const {price, patient, email, _id} = booking;

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/create-payment-intent", {
        method: "POST",
        headers: {
           "Content-Type": "application/json" ,
           autherization: `bearer ${localStorage.getItem("accessToken")}`
          
      },
        body: JSON.stringify({price}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
    
        if(!stripe || !elements ){
            return
        }
        if(proccessing){
          return <Loading/>
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
        if(error){
          console.log(error)
          setCardError(error.message)
        }else{
          setCardError("")
        }
        setSuccess("")
        setProccessing(true);
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: patient,
                email: email
              },
            },
          },
        );
        if(confirmError){
         
          setCardError(confirmError.message)
          return;
        }
        console.log(paymentIntent)
        if(paymentIntent.status==="succeeded"){
        
const payment ={
price,
transactionId: paymentIntent.id,email, bookingId: _id
}
          fetch(`https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/payments`,{
            method: "POST",
            headers: {
              "content-type" : "application/json",
              autherization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(payment)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
              setSuccess(`Congrats! your payment completed`)
              setTransactionId(paymentIntent.id)
            }
            console.log(data)
          })
        }
        setProccessing(false)
      }
 
    return (
<>
<form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !clientSecret || proccessing}>
        Pay
      </button>

    </form>
    <p className="text-red-300">
      {cardError}
      </p>
{
  success && <div>
    <p className="text-green-400">{success}</p>
    <p>Your transaction id: <span className="font-bold">{transactionId}</span></p>
  </div>
}
</>
    )}


export default CheckoutForm;
