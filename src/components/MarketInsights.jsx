import React, { useEffect, useState } from 'react';
import { getMarketInsights } from '../services/firebaseService';

const MarketInsights = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMarketInsights();

      // Filtra o array para remover valores nulos
      const validData = data.filter(item => item !== null);

      setInsights(validData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Market Insights</h2>
      <ul className="list-group">
        {insights.map((insight, index) => (
          <li key={index} className="list-group-item">
            <h5>{insight.description}</h5>
            {/* Renderiza a imagem se ela existir */}
            {insight.urlImage && (
              <img 
                src={insight.urlImage} 
                alt="Market Insight" 
                style={{ maxWidth: '100%' }} 
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketInsights;
