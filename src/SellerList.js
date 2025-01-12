import React, { useState } from 'react';

const sellersData = [
  { id: 1, name: 'John Doe', rating: 4.5, review: 'Great seller!' },
  { id: 2, name: 'Jane Smith', rating: 5, review: 'Amazing experience!' },
  { id: 3, name: 'Mike Johnson', rating: 4, review: 'Good service.' },
];

function SellerList() {
  const [search, setSearch] = useState('');
  const filteredSellers = sellersData.filter((seller) =>
    seller.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h3>Seller List</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search sellers by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-group">
        {filteredSellers.map((seller) => (
          <li key={seller.id} className="list-group-item">
            <h5>{seller.name}</h5>
            <p>Rating: {seller.rating} / 5</p>
            <p>Review: {seller.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SellerList;
