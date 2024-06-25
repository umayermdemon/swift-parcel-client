import { Button, Dialog, DialogFooter } from "@material-tailwind/react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { toast } from "react-toastify";

const Payment = ({ price, _id, payment_status, refetch, status }) => {
  const [open, setOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [trans_id, setTrans_id] = useState("");
  useEffect(() => {
    if (price) {
      axiosSecure
        .post("/create-payment-intent", { charge: price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, price]);

  const handleOpen = () => setOpen(!open);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setErrorMessage("");
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "Unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTrans_id(paymentIntent.id);
        const paymentInfo = {
          paymentStatus: "Paid",
          trans_id: paymentIntent.id,
        };
        axiosSecure
          .patch(`/parcels/payment/${_id}`, paymentInfo)
          .then((res) => {
            refetch();
            if (res.data.modifiedCount) {
              toast.success("Payment Complete");
            }
          });
      }
    }
  };
  return (
    <div>
      <button
        disabled={payment_status === "Paid" || status === "Cancel"}
        onClick={handleOpen}
      >
        {status != "Cancel" ? (
          payment_status ? (
            <span className="text-green-600 font-semibold text-sm">Paid</span>
          ) : (
            <RiSecurePaymentFill className="text-xl mx-auto" />
          )
        ) : (
          <h3 className="font-medium text-red-800">Canceled</h3>
        )}
      </button>

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="px-8 pt-8"
      >
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />

          <DialogFooter className="mt-6">
            <Button
              variant="text"
              color="red"
              onClick={
                errorMessage
                  ? () => handleOpen(setErrorMessage(""))
                  : () => handleOpen(setTrans_id(""))
              }
              className="mr-1"
            >
              Close
            </Button>
            <Button type="submit" variant="gradient" color="green">
              Pay
            </Button>
          </DialogFooter>
          <div className="flex justify-center pb-2">
            {errorMessage && (
              <p className="text-red-600 text-base font-medium">
                {errorMessage}
              </p>
            )}
          </div>
          <div className="flex justify-center pb-2">
            {trans_id && (
              <p className="text-black font-semibold text-lg">
                Your Transaction Id is:{" "}
                <span className="text-green-600 text-md">{trans_id}</span>
              </p>
            )}
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default Payment;
