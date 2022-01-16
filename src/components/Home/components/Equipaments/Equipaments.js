import styled from "styled-components";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { tablet, laptopL } from "../../../../devices";

import BaseSection from "../../../Global/BaseSection";
import BaseTitle from "../../../Global/BaseTitle";
import CTAButton from "../../../Global/Buttons/CTAButton";
import Filter from "./Filter";
import EquipmentCard from "./EquipmentCard";

const ActionsBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px;
`;

const EquipmentsGrid = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${laptopL};
  flex-wrap: wrap;

@media screen and (min-width: ${tablet}){
  flex-direction: row;
}

`;

const Equipaments = () => {
  const [isActive, setIsActive] = useState(0);

  const categories = [
    { id: 0, label: "Ver Todos" },
    { id: 1, label: "Aplicadores" },
    { id: 2, label: "Dosadores" },
    { id: 3, label: "Equipamentos para Cura" },
    { id: 4, label: "Desgazeificador" },
    { id: 5, label: "CNC/Resina" },
  ];

  const equipments = [
    {
      id: 0,
      title: "Estufa para cura de resina",
      category: 3,
      text: "Com controle de temperatura, 11 ou 12 bandejas de vidro temperado",
      image: "/assets/images/equipments/estufa-para-cura-de-resina.svg",
    },
    {
      id: 1,
      title: "Máquina dosadora CNC",
      category: 5,
      text: "Máquina dosadora CNC para resina PU",
      image: "/assets/images/equipments/maquina-dosadora-cnc.svg",
    },
    {
      id: 2,
      title: "Dosador com Tanques",
      category: 2,
      text: "Dosador / Misturador com tanque para Resina PU",
      image: "/assets/images/equipments/dosador-com-tanques.svg",
    },
    {
      id: 3,
      title: "Desgaseificador para Resina PU",
      category: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/equipments/desgaseificador-para-resina-pu.svg",
    },
    {
      id: 4,
      title: "Mesa térmica para resinagem",
      category: 3,
      text: "Mesa de tamanho 1200 x 600 mm",
      image: "/assets/images/equipments/mesa-termica-para-resinagem.svg",
    },
  ];

  return (
    <BaseSection>
      <BaseTitle
        overlayText="EQUIPAMENTOS"
        subtitle="Veja os detalhes de cada equipamento ou se preferir, baixe nosso catálogo:"
      >
        Confira nossos <span>Equipamentos</span>
      </BaseTitle>

      <ActionsBar>
        <CTAButton
          iconSize={14}
          bgColor="#DD335A"
          title="Baixar catálogo em .PDF"
          href="#"
          icon={faFilePdf}
        >
          Baixar Catálogo
        </CTAButton>

        <Filter
          isActive={isActive}
          setIsActive={setIsActive}
          categories={categories}
        />

        <EquipmentsGrid>
          {equipments.filter(equipment => ((isActive === 0) || (equipment.category === isActive))).map(({ id, title, category, image, text }) => (
            <EquipmentCard
              key={id}
              src={image}
              title={title}
              category={categories.find(({ id }) => category === id).label}
            >
              {text}
            </EquipmentCard>
          ))}
        </EquipmentsGrid>
      </ActionsBar>
    </BaseSection>
  );
};

export default Equipaments;
