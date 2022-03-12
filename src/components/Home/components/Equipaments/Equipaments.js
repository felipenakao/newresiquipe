import styled from "styled-components";
import { faFilePdf, faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { tablet, laptopL, laptop } from "../../../../devices";

import BaseSection from "../../../Global/BaseSection";
import BaseTitle from "../../../Global/BaseTitle";
import CTAButton from "../../../Global/Buttons/CTAButton";
import Filter from "./Filter";
import EquipmentCard from "./EquipmentCard";

import products from '../../../../components/Product/products.json'
import filters from '../../../../constants/filters.json'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ActionsBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px auto;

  & > div {
    text-align: center;
    padding: 15px 10px 0px ;
    border: 1px solid #eee;
    border-radius: 15px;
    margin: 10px;
    box-shadow: inset #f1f1f1 0px 0px 5px;
    background: #f8f8f8;
  }

  & span {
    margin: 10px;
    color: var(--textColor);
    font-family: Prompt;
    font-size: 14px;
    font-style: italic;
    font-weight: 400
  }

  @media screen and (min-width: ${tablet}){
    max-width: ${laptopL};

  }
`;

const EquipmentsGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 30px auto;

  @media screen and (min-width: ${tablet}){
    flex-direction: row;
    justify-content: center;
  }

  & a {
    text-decoration: none;
  }

`;

const CatalogGrid = styled.div`
  text-align: center;
  display: none;
`

const Equipaments = () => {
  const [isActive, setIsActive] = useState('');
  const [isProductionActive, setProductionActive] = useState('');

  const filtered = products.filter(product => ((product.production == isProductionActive || isProductionActive == '') && (product.category == isActive || isActive == '')))

  return (
    <BaseSection id="equipamentos">
        <CatalogGrid>
          <CTAButton
            iconSize={14}
            bgColor="#DD335A"
            title="Baixar catálogo em .PDF"
            href="#"
            icon={faFilePdf}
          >
            Baixar Catálogo
          </CTAButton>
        </CatalogGrid>
      <BaseTitle
        overlayText="EQUIPAMENTOS"
        subtitle="Equipamentos para cada tipo de produção:"
      >
        Confira nossos <span>Equipamentos</span>
      </BaseTitle>

      <ActionsBar>
        <div>
          <span><FontAwesomeIcon icon={faFilter} />  Filtrar por Demanda:</span>
          <Filter
            isActive={isProductionActive}
            setIsActive={setProductionActive}
            options={filters.production}
          />
        </div>

        <div>
          <span><FontAwesomeIcon icon={faFilter} /> Filtrar por Categorias:</span>
          <Filter
            isActive={isActive}
            setIsActive={setIsActive}
            options={filters.categories}
          />
        </div>
      </ActionsBar>

        <EquipmentsGrid>
          {filtered.length ? filtered.map(({ id, title, category, excerpt, production }) => (
            <Link key={id} to={`/produto/${id}`}>
              <EquipmentCard
                key={id}
                src={`/assets/images/equipments/${id}/thumbnail.jpg`}
                title={title}
                category={filters.categories.find(({ id }) => category == id).label}
                production={production}
              >
                {excerpt}
              </EquipmentCard>
            </Link>
          )).sort(() => Math.random() - 0.5) : <p style={{ margin: '90px 0px 30px' }}>Nenhum equipamento encontrado...</p>}
        </EquipmentsGrid>

    </BaseSection>
  );
};

export default Equipaments;
