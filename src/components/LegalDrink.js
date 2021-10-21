import { useState } from "react";

const LegalDrink = () => {
  const [legalAge, setLegalAge] = useState(false);

  if (legalAge === true) {
    return (
      <div>
        <h1> What would you like to drink?</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1> You're too young to drink</h1>
      </div>
    );
  }
};

export default LegalDrink;
