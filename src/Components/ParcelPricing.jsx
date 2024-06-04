import  { useState } from 'react';
import { Input, Typography } from "@material-tailwind/react";

function ParcelPricing() {
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState(0);

  const calculatePrice = (weight) => {
    let price = 0;
    if (weight === 1) {
      price = 50;
    } else if (weight === 2) {
      price = 100;
    } else if (weight > 2) {
      price = 150;
    }
    setPrice(price);
  };

  const handleWeightChange = (event) => {
    const newWeight = parseFloat(event.target.value);
    setWeight(newWeight);
    calculatePrice(newWeight);
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h2" className="mb-4">Parcel Pricing</Typography>
      <form>
        <div className="mb-4">
          <Input
            type="number"
            id="weight"
            name="weight"
            min="1"
            label="Parcel Weight (kg)"
            value={weight}
            onChange={handleWeightChange}
            size="lg"
          />
        </div>

        <div className="mb-4">
          <Input
            type="number"
            id="price"
            name="price"
            label="Price (Tk)"
            value={price}
            readOnly
            size="lg"
          />
        </div>
      </form>
    </div>
  );
}

export default ParcelPricing;
