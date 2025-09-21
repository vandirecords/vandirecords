import React from 'react'

const products = [
  { id: 1, name: 'T-shirt Vandi', price: '25€' },
  { id: 2, name: 'Casquette Vandi', price: '20€' },
]

export default function Shop() {
  return (
    <section>
      <h2>Shop</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name} - {p.price}</li>
        ))}
      </ul>
    </section>
  )
}
