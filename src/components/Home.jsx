import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Bem-vindo à Solutech</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Seu Portfólio</h5>
              <p className="card-text">Acompanhe o desempenho de seus investimentos em tempo real.</p>
              <a href="/portfolio" className="btn btn-primary">Ver Portfólio</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Insights de Mercado</h5>
              <p className="card-text">Fique atualizado com as últimas tendências do mercado financeiro.</p>
              <a href="/market-insights" className="btn btn-primary">Ver Insights</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
