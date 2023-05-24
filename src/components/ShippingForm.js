import { memo, useState } from "react";

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1);

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // No hace nada por 500 ms para emular un componente lento
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    };
    onSubmit(orderDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Nota: ¡<code>ShippingForm</code> está artificialmente ralentizado!
        </b>
      </p>
      <label>
        Número de items:
        <button
          type="button"
          onClick={() => setCount(count - 1)}
        >
          –
        </button>
        {count}
        <button
          type="button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </label>
      <label>
        Calle:
        <input name="street" />
      </label>
      <label>
        Ciudad:
        <input name="city" />
      </label>
      <label>
        Código postal:
        <input name="zipCode" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
});

export default ShippingForm;
