import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioTracking = () => {
  // Exemplo estático de dados do portfólio
  const portfolio = [
    { name: 'Tesouro Direto', value: 5000 },
    { name: 'CDB Banco do Brasil', value: 3500 },
    { name: 'Fundo Imobiliário XPTO', value: 8000 },
    { name: 'Ações Petrobras', value: 12000 },
    { name: 'LCI Itaú', value: 4000 }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Portfolio Tracking</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <ul className="list-group">
                {portfolio.map((investment, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{investment.name}</span>
                    <span className="badge bg-primary rounded-pill">
                      ${investment.value.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTracking;
