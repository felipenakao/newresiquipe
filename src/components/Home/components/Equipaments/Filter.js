import styled from "styled-components";
import { tablet } from "../../../../devices";

const FilterGrid = styled.div`
  display: flex;
  margin: 15px 0px;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
`;

const FilterButton = styled.button`
  font-family: "Prompt";
  border: 1px solid #efefef;
  border-radius: 100px;
  padding: 10px;
  color: var(--textColor);
  background: #fff;
  margin: 10px;
  cursor: pointer;

  &:active,
  &:hover,
  &.active {
    background: var(--textColor);
    color: #fff;
  }

  @media screen and (min-width: ${tablet}) {
    margin: 0px 10px;
    padding: 10px 15px;
  }
`;

const Filter = ({ categories, isActive, setIsActive }) => {
  return (
    <FilterGrid>
      {categories.map((category) => (
        <FilterButton
          className={isActive === category.id ? "active" : ""}
          onClick={() => setIsActive(category.id)}
          key={category.id}
          value={category.id}
        >
          {category.label}
        </FilterButton>
      ))}
    </FilterGrid>
  );
};

export default Filter;
